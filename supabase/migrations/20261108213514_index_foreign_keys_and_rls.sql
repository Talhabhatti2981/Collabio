CREATE INDEX audit_events_actor_id_idx ON public.audit_events (actor_id);
CREATE INDEX deal_access_added_by_idx ON public.deal_access (added_by);
CREATE INDEX deal_invitations_invited_by_idx ON public.deal_invitations (invited_by);
CREATE INDEX deliverables_submitted_by_idx ON public.deliverables (submitted_by);
CREATE INDEX ledger_events_milestone_id_idx ON public.ledger_events (milestone_id);
CREATE INDEX module_settings_module_key_idx ON public.module_settings (module_key);
CREATE INDEX revision_requests_deliverable_id_idx ON public.revision_requests (deliverable_id);
CREATE INDEX revision_requests_requested_by_idx ON public.revision_requests (requested_by);

DROP POLICY IF EXISTS deal_invitations_read_participant ON public.deal_invitations;
CREATE POLICY deal_invitations_read_participant ON public.deal_invitations
  FOR SELECT TO authenticated
  USING (
    invited_by = (SELECT auth.uid())
    OR lower(invited_email) = lower(COALESCE(((SELECT auth.jwt()) ->> 'email'), ''))
  );
