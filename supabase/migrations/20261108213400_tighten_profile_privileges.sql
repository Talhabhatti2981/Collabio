REVOKE UPDATE ON TABLE public.profiles FROM authenticated;
GRANT UPDATE (
  display_name,
  handle,
  bio,
  avatar_url,
  company_name,
  country_code,
  website_url,
  social_links,
  profile_data
) ON TABLE public.profiles TO authenticated;

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
  INSERT INTO public.profiles (id, role, display_name)
  VALUES (
    NEW.id,
    CASE WHEN requested_role IN ('brand', 'creator') THEN requested_role ELSE 'brand' END,
    COALESCE(
      NULLIF(pg_catalog.btrim(NEW.raw_user_meta_data ->> 'display_name'), ''),
      NULLIF(pg_catalog.btrim(NEW.raw_user_meta_data ->> 'full_name'), '')
    )
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

REVOKE ALL ON FUNCTION public.handle_new_auth_user() FROM PUBLIC, anon, authenticated;
