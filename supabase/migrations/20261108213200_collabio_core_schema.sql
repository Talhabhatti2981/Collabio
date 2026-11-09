DO $$
BEGIN
  IF pg_catalog.to_regprocedure('public.rls_auto_enable()') IS NOT NULL THEN
    EXECUTE 'REVOKE ALL ON FUNCTION public.rls_auto_enable() FROM PUBLIC, anon, authenticated';
  END IF;
END;
$$;

DROP TABLE IF EXISTS public.tasks;
DROP TABLE IF EXISTS public.profiles;
DROP TABLE IF EXISTS public.members;
DROP TABLE IF EXISTS public.workspace_settings;
DROP TABLE IF EXISTS public.module_settings;

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = pg_catalog
AS $$
BEGIN
  NEW.updated_at := pg_catalog.now();
  RETURN NEW;
END;
$$;

REVOKE ALL ON FUNCTION public.set_updated_at() FROM PUBLIC, anon, authenticated;

CREATE TABLE public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users (id) ON DELETE RESTRICT,
  role text NOT NULL DEFAULT 'brand' CHECK (role IN ('brand', 'creator')),
  display_name text,
  handle text UNIQUE,
  bio text,
  avatar_url text,
  company_name text,
  country_code text CHECK (country_code IS NULL OR country_code ~ '^[A-Z]{2}$'),
  website_url text,
  social_links jsonb NOT NULL DEFAULT '{}'::jsonb CHECK (jsonb_typeof(social_links) = 'object'),
  profile_data jsonb NOT NULL DEFAULT '{}'::jsonb CHECK (jsonb_typeof(profile_data) = 'object'),
  created_at timestamptz NOT NULL DEFAULT pg_catalog.now(),
  updated_at timestamptz NOT NULL DEFAULT pg_catalog.now()
);

CREATE TABLE public.user_settings (
  user_id uuid PRIMARY KEY REFERENCES public.profiles (id) ON DELETE CASCADE,
  preferences jsonb NOT NULL DEFAULT '{}'::jsonb CHECK (jsonb_typeof(preferences) = 'object'),
  notifications jsonb NOT NULL DEFAULT '{}'::jsonb CHECK (jsonb_typeof(notifications) = 'object'),
  created_at timestamptz NOT NULL DEFAULT pg_catalog.now(),
  updated_at timestamptz NOT NULL DEFAULT pg_catalog.now()
);

CREATE TABLE public.module_registry (
  module_key text PRIMARY KEY CHECK (module_key ~ '^[a-z][a-z0-9_]*$'),
  name text NOT NULL,
  description text NOT NULL DEFAULT '',
  version text NOT NULL DEFAULT '1.0.0',
  enabled boolean NOT NULL DEFAULT true,
  config_schema jsonb NOT NULL DEFAULT '{}'::jsonb CHECK (jsonb_typeof(config_schema) = 'object'),
  created_at timestamptz NOT NULL DEFAULT pg_catalog.now(),
  updated_at timestamptz NOT NULL DEFAULT pg_catalog.now()
);

CREATE TABLE public.module_settings (
  user_id uuid NOT NULL REFERENCES public.profiles (id) ON DELETE CASCADE,
  module_key text NOT NULL REFERENCES public.module_registry (module_key) ON DELETE CASCADE,
  enabled boolean NOT NULL DEFAULT true,
  settings jsonb NOT NULL DEFAULT '{}'::jsonb CHECK (jsonb_typeof(settings) = 'object'),
  created_at timestamptz NOT NULL DEFAULT pg_catalog.now(),
  updated_at timestamptz NOT NULL DEFAULT pg_catalog.now(),
  PRIMARY KEY (user_id, module_key)
);

CREATE TABLE public.deals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  brand_owner_id uuid NOT NULL REFERENCES public.profiles (id) ON DELETE RESTRICT,
  creator_id uuid REFERENCES public.profiles (id) ON DELETE SET NULL,
  title text NOT NULL,
  description text NOT NULL DEFAULT '',
  status text NOT NULL DEFAULT 'draft'
    CHECK (status IN ('draft', 'invited', 'negotiating', 'awaiting_funding', 'funded', 'active', 'in_review', 'completed', 'cancelled', 'disputed')),
  budget_amount numeric(14, 2) NOT NULL DEFAULT 0 CHECK (budget_amount >= 0),
  currency text NOT NULL DEFAULT 'USD' CHECK (currency ~ '^[A-Z]{3}$'),
  starts_on date,
  due_on date,
  terms jsonb NOT NULL DEFAULT '{}'::jsonb CHECK (jsonb_typeof(terms) = 'object'),
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb CHECK (jsonb_typeof(metadata) = 'object'),
  created_at timestamptz NOT NULL DEFAULT pg_catalog.now(),
  updated_at timestamptz NOT NULL DEFAULT pg_catalog.now(),
  archived_at timestamptz,
  CHECK (due_on IS NULL OR starts_on IS NULL OR due_on >= starts_on)
);

CREATE TABLE public.deal_access (
  deal_id uuid NOT NULL REFERENCES public.deals (id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES public.profiles (id) ON DELETE RESTRICT,
  access_role text NOT NULL CHECK (access_role IN ('brand', 'creator', 'collaborator', 'accountant')),
  added_by uuid REFERENCES public.profiles (id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT pg_catalog.now(),
  PRIMARY KEY (deal_id, user_id)
);

CREATE TABLE public.deal_invitations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  deal_id uuid NOT NULL REFERENCES public.deals (id) ON DELETE CASCADE,
  invited_by uuid NOT NULL REFERENCES public.profiles (id) ON DELETE RESTRICT,
  invited_email text NOT NULL CHECK (invited_email = lower(btrim(invited_email))),
  invited_role text NOT NULL DEFAULT 'creator' CHECK (invited_role IN ('creator', 'collaborator', 'accountant')),
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'declined', 'expired', 'revoked')),
  expires_at timestamptz,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb CHECK (jsonb_typeof(metadata) = 'object'),
  created_at timestamptz NOT NULL DEFAULT pg_catalog.now(),
  updated_at timestamptz NOT NULL DEFAULT pg_catalog.now()
);

CREATE TABLE public.milestones (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  deal_id uuid NOT NULL REFERENCES public.deals (id) ON DELETE CASCADE,
  title text NOT NULL,
  description text NOT NULL DEFAULT '',
  sequence_number integer NOT NULL CHECK (sequence_number > 0),
  amount numeric(14, 2) NOT NULL DEFAULT 0 CHECK (amount >= 0),
  due_at timestamptz,
  status text NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'in_progress', 'submitted', 'revision_requested', 'approved', 'paid', 'cancelled')),
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb CHECK (jsonb_typeof(metadata) = 'object'),
  created_at timestamptz NOT NULL DEFAULT pg_catalog.now(),
  updated_at timestamptz NOT NULL DEFAULT pg_catalog.now(),
  UNIQUE (deal_id, sequence_number)
);

CREATE TABLE public.deliverables (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  milestone_id uuid NOT NULL REFERENCES public.milestones (id) ON DELETE CASCADE,
  submitted_by uuid NOT NULL REFERENCES public.profiles (id) ON DELETE RESTRICT,
  version integer NOT NULL DEFAULT 1 CHECK (version > 0),
  title text NOT NULL,
  description text NOT NULL DEFAULT '',
  storage_path text,
  external_url text,
  status text NOT NULL DEFAULT 'submitted'
    CHECK (status IN ('submitted', 'approved', 'revision_requested', 'superseded')),
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb CHECK (jsonb_typeof(metadata) = 'object'),
  created_at timestamptz NOT NULL DEFAULT pg_catalog.now(),
  UNIQUE (milestone_id, version),
  CHECK (storage_path IS NOT NULL OR external_url IS NOT NULL)
);

CREATE TABLE public.revision_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  milestone_id uuid NOT NULL REFERENCES public.milestones (id) ON DELETE CASCADE,
  deliverable_id uuid REFERENCES public.deliverables (id) ON DELETE SET NULL,
  requested_by uuid NOT NULL REFERENCES public.profiles (id) ON DELETE RESTRICT,
  description text NOT NULL,
  status text NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'addressed', 'closed')),
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb CHECK (jsonb_typeof(metadata) = 'object'),
  created_at timestamptz NOT NULL DEFAULT pg_catalog.now(),
  updated_at timestamptz NOT NULL DEFAULT pg_catalog.now()
);

CREATE TABLE public.ledger_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  deal_id uuid NOT NULL REFERENCES public.deals (id) ON DELETE RESTRICT,
  milestone_id uuid REFERENCES public.milestones (id) ON DELETE SET NULL,
  event_type text NOT NULL CHECK (event_type IN ('funding', 'escrow_locked', 'payout', 'refund', 'fee', 'adjustment')),
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'succeeded', 'failed', 'cancelled')),
  amount numeric(14, 2) NOT NULL CHECK (amount > 0),
  currency text NOT NULL CHECK (currency ~ '^[A-Z]{3}$'),
  external_reference text UNIQUE,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb CHECK (jsonb_typeof(metadata) = 'object'),
  created_at timestamptz NOT NULL DEFAULT pg_catalog.now()
);

CREATE TABLE public.audit_events (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  deal_id uuid REFERENCES public.deals (id) ON DELETE SET NULL,
  actor_id uuid REFERENCES public.profiles (id) ON DELETE SET NULL,
  event_type text NOT NULL,
  entity_type text NOT NULL,
  entity_id uuid,
  details jsonb NOT NULL DEFAULT '{}'::jsonb CHECK (jsonb_typeof(details) = 'object'),
  created_at timestamptz NOT NULL DEFAULT pg_catalog.now()
);

CREATE OR REPLACE FUNCTION public.handle_new_auth_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = pg_catalog, public
AS $$
DECLARE
  requested_role text;
BEGIN
  requested_role := NEW.raw_user_meta_data ->> 'role';
  INSERT INTO public.profiles (id, role, display_name, profile_data)
  VALUES (
    NEW.id,
    CASE WHEN requested_role IN ('brand', 'creator') THEN requested_role ELSE 'brand' END,
    COALESCE(
      NULLIF(pg_catalog.btrim(NEW.raw_user_meta_data ->> 'display_name'), ''),
      NULLIF(pg_catalog.btrim(NEW.raw_user_meta_data ->> 'full_name'), '')
    ),
    COALESCE(NEW.raw_user_meta_data, '{}'::jsonb)
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

REVOKE ALL ON FUNCTION public.handle_new_auth_user() FROM PUBLIC, anon, authenticated;
DROP TRIGGER IF EXISTS on_auth_user_created_collabio ON auth.users;
CREATE TRIGGER on_auth_user_created_collabio
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_auth_user();

CREATE OR REPLACE FUNCTION public.sync_deal_access()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = pg_catalog, public
AS $$
BEGIN
  INSERT INTO public.deal_access (deal_id, user_id, access_role, added_by)
  VALUES (NEW.id, NEW.brand_owner_id, 'brand', NEW.brand_owner_id)
  ON CONFLICT (deal_id, user_id) DO UPDATE SET access_role = 'brand';

  IF NEW.creator_id IS NOT NULL THEN
    INSERT INTO public.deal_access (deal_id, user_id, access_role, added_by)
    VALUES (NEW.id, NEW.creator_id, 'creator', NEW.brand_owner_id)
    ON CONFLICT (deal_id, user_id) DO UPDATE SET access_role = 'creator';
  END IF;

  IF TG_OP = 'UPDATE' AND OLD.creator_id IS NOT NULL AND OLD.creator_id IS DISTINCT FROM NEW.creator_id THEN
    DELETE FROM public.deal_access
    WHERE deal_id = NEW.id AND user_id = OLD.creator_id AND access_role = 'creator';
  END IF;

  RETURN NEW;
END;
$$;

REVOKE ALL ON FUNCTION public.sync_deal_access() FROM PUBLIC, anon, authenticated;
CREATE TRIGGER sync_deal_access_after_write
  AFTER INSERT OR UPDATE OF brand_owner_id, creator_id ON public.deals
  FOR EACH ROW EXECUTE FUNCTION public.sync_deal_access();

CREATE TRIGGER profiles_set_updated_at BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER user_settings_set_updated_at BEFORE UPDATE ON public.user_settings
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER module_registry_set_updated_at BEFORE UPDATE ON public.module_registry
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER module_settings_set_updated_at BEFORE UPDATE ON public.module_settings
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER deals_set_updated_at BEFORE UPDATE ON public.deals
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER deal_invitations_set_updated_at BEFORE UPDATE ON public.deal_invitations
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER milestones_set_updated_at BEFORE UPDATE ON public.milestones
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER revision_requests_set_updated_at BEFORE UPDATE ON public.revision_requests
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE INDEX deals_brand_owner_id_idx ON public.deals (brand_owner_id);
CREATE INDEX deals_creator_id_idx ON public.deals (creator_id);
CREATE INDEX deals_status_idx ON public.deals (status);
CREATE INDEX deal_access_user_id_idx ON public.deal_access (user_id);
CREATE INDEX deal_invitations_deal_id_idx ON public.deal_invitations (deal_id);
CREATE INDEX milestones_deal_id_status_idx ON public.milestones (deal_id, status);
CREATE INDEX deliverables_milestone_id_created_at_idx ON public.deliverables (milestone_id, created_at DESC);
CREATE INDEX revision_requests_milestone_id_status_idx ON public.revision_requests (milestone_id, status);
CREATE INDEX ledger_events_deal_id_created_at_idx ON public.ledger_events (deal_id, created_at DESC);
CREATE INDEX audit_events_deal_id_created_at_idx ON public.audit_events (deal_id, created_at DESC);
CREATE UNIQUE INDEX deal_invitations_pending_email_idx
  ON public.deal_invitations (deal_id, invited_email)
  WHERE status = 'pending';

INSERT INTO public.module_registry (module_key, name, description)
VALUES
  ('deals', 'Deals', 'Brand and creator collaboration agreements.'),
  ('milestones', 'Milestones', 'Scoped work, deadlines, and approvals.'),
  ('deliverables', 'Deliverables', 'Creator submissions and version history.'),
  ('revisions', 'Revisions', 'Revision requests and resubmissions.'),
  ('escrow', 'Escrow and ledger', 'Funding and payout event records.'),
  ('invitations', 'Invitations', 'Deal participant invitations.'),
  ('tax_exports', 'Tax exports', 'Tax document and export metadata.'),
  ('analytics', 'Analytics', 'Collaboration performance and reporting settings.')
ON CONFLICT (module_key) DO NOTHING;

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.module_registry ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.module_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.deals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.deal_access ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.deal_invitations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.milestones ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.deliverables ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.revision_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ledger_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY profiles_read_authenticated ON public.profiles
  FOR SELECT TO authenticated USING (true);
CREATE POLICY profiles_insert_self ON public.profiles
  FOR INSERT TO authenticated WITH CHECK (id = (SELECT auth.uid()));
CREATE POLICY profiles_update_self ON public.profiles
  FOR UPDATE TO authenticated USING (id = (SELECT auth.uid()))
  WITH CHECK (id = (SELECT auth.uid()));
REVOKE UPDATE (role) ON public.profiles FROM authenticated;

CREATE POLICY user_settings_read_self ON public.user_settings
  FOR SELECT TO authenticated USING (user_id = (SELECT auth.uid()));
CREATE POLICY user_settings_insert_self ON public.user_settings
  FOR INSERT TO authenticated WITH CHECK (user_id = (SELECT auth.uid()));
CREATE POLICY user_settings_update_self ON public.user_settings
  FOR UPDATE TO authenticated USING (user_id = (SELECT auth.uid()))
  WITH CHECK (user_id = (SELECT auth.uid()));

CREATE POLICY module_registry_read_authenticated ON public.module_registry
  FOR SELECT TO authenticated USING (true);
CREATE POLICY module_settings_read_self ON public.module_settings
  FOR SELECT TO authenticated USING (user_id = (SELECT auth.uid()));
CREATE POLICY module_settings_insert_self ON public.module_settings
  FOR INSERT TO authenticated WITH CHECK (user_id = (SELECT auth.uid()));
CREATE POLICY module_settings_update_self ON public.module_settings
  FOR UPDATE TO authenticated USING (user_id = (SELECT auth.uid()))
  WITH CHECK (user_id = (SELECT auth.uid()));

CREATE POLICY deals_read_accessible ON public.deals
  FOR SELECT TO authenticated
  USING (EXISTS (
    SELECT 1 FROM public.deal_access da
    WHERE da.deal_id = deals.id AND da.user_id = (SELECT auth.uid())
  ));
CREATE POLICY deals_insert_as_brand ON public.deals
  FOR INSERT TO authenticated WITH CHECK (brand_owner_id = (SELECT auth.uid()));
CREATE POLICY deals_update_as_brand ON public.deals
  FOR UPDATE TO authenticated USING (brand_owner_id = (SELECT auth.uid()))
  WITH CHECK (brand_owner_id = (SELECT auth.uid()));

CREATE POLICY deal_access_read_self ON public.deal_access
  FOR SELECT TO authenticated USING (user_id = (SELECT auth.uid()));

CREATE POLICY deal_invitations_read_participant ON public.deal_invitations
  FOR SELECT TO authenticated
  USING (
    invited_by = (SELECT auth.uid())
    OR lower(invited_email) = lower(COALESCE((SELECT auth.jwt() ->> 'email'), ''))
  );
CREATE POLICY deal_invitations_insert_as_brand ON public.deal_invitations
  FOR INSERT TO authenticated
  WITH CHECK (
    invited_by = (SELECT auth.uid())
    AND EXISTS (
      SELECT 1 FROM public.deal_access da
      WHERE da.deal_id = deal_invitations.deal_id
        AND da.user_id = (SELECT auth.uid())
        AND da.access_role = 'brand'
    )
  );
CREATE POLICY deal_invitations_update_as_inviter ON public.deal_invitations
  FOR UPDATE TO authenticated
  USING (invited_by = (SELECT auth.uid()))
  WITH CHECK (invited_by = (SELECT auth.uid()));

CREATE POLICY milestones_read_accessible ON public.milestones
  FOR SELECT TO authenticated
  USING (EXISTS (
    SELECT 1 FROM public.deal_access da
    WHERE da.deal_id = milestones.deal_id AND da.user_id = (SELECT auth.uid())
  ));
CREATE POLICY milestones_insert_as_brand ON public.milestones
  FOR INSERT TO authenticated
  WITH CHECK (EXISTS (
    SELECT 1 FROM public.deal_access da
    WHERE da.deal_id = milestones.deal_id
      AND da.user_id = (SELECT auth.uid())
      AND da.access_role = 'brand'
  ));
CREATE POLICY milestones_update_as_brand ON public.milestones
  FOR UPDATE TO authenticated
  USING (EXISTS (
    SELECT 1 FROM public.deal_access da
    WHERE da.deal_id = milestones.deal_id
      AND da.user_id = (SELECT auth.uid())
      AND da.access_role = 'brand'
  ))
  WITH CHECK (EXISTS (
    SELECT 1 FROM public.deal_access da
    WHERE da.deal_id = milestones.deal_id
      AND da.user_id = (SELECT auth.uid())
      AND da.access_role = 'brand'
  ));

CREATE POLICY deliverables_read_accessible ON public.deliverables
  FOR SELECT TO authenticated
  USING (EXISTS (
    SELECT 1 FROM public.milestones m
    JOIN public.deal_access da ON da.deal_id = m.deal_id
    WHERE m.id = deliverables.milestone_id AND da.user_id = (SELECT auth.uid())
  ));
CREATE POLICY deliverables_insert_as_creator ON public.deliverables
  FOR INSERT TO authenticated
  WITH CHECK (
    submitted_by = (SELECT auth.uid())
    AND EXISTS (
      SELECT 1 FROM public.milestones m
      JOIN public.deal_access da ON da.deal_id = m.deal_id
      WHERE m.id = deliverables.milestone_id
        AND da.user_id = (SELECT auth.uid())
        AND da.access_role = 'creator'
    )
  );

CREATE POLICY revision_requests_read_accessible ON public.revision_requests
  FOR SELECT TO authenticated
  USING (EXISTS (
    SELECT 1 FROM public.milestones m
    JOIN public.deal_access da ON da.deal_id = m.deal_id
    WHERE m.id = revision_requests.milestone_id AND da.user_id = (SELECT auth.uid())
  ));
CREATE POLICY revision_requests_insert_as_brand ON public.revision_requests
  FOR INSERT TO authenticated
  WITH CHECK (
    requested_by = (SELECT auth.uid())
    AND EXISTS (
      SELECT 1 FROM public.milestones m
      JOIN public.deal_access da ON da.deal_id = m.deal_id
      WHERE m.id = revision_requests.milestone_id
        AND da.user_id = (SELECT auth.uid())
        AND da.access_role = 'brand'
    )
  );

CREATE POLICY ledger_events_read_accessible ON public.ledger_events
  FOR SELECT TO authenticated
  USING (EXISTS (
    SELECT 1 FROM public.deal_access da
    WHERE da.deal_id = ledger_events.deal_id AND da.user_id = (SELECT auth.uid())
  ));

CREATE POLICY audit_events_read_accessible ON public.audit_events
  FOR SELECT TO authenticated
  USING (
    deal_id IS NOT NULL
    AND EXISTS (
      SELECT 1 FROM public.deal_access da
      WHERE da.deal_id = audit_events.deal_id AND da.user_id = (SELECT auth.uid())
    )
  );
