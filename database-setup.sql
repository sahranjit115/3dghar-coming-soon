-- Coming Soon Email Signups Table
-- Stores email addresses from users who want to be notified when the platform launches

-- Run this in your Supabase SQL Editor
-- Dashboard → SQL Editor → New Query → Paste this code → Click "Run"

CREATE TABLE IF NOT EXISTS public.coming_soon_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  name text,
  phone text,
  user_type text, -- 'buyer', 'agent', 'builder', 'photographer', 'other'
  source text, -- 'homepage', 'homepage_buyer', 'homepage_agent', 'social', 'referral', etc.
  notified boolean DEFAULT false, -- Set to true when launch email is sent
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_coming_soon_signups_email ON public.coming_soon_signups(email);
CREATE INDEX IF NOT EXISTS idx_coming_soon_signups_created ON public.coming_soon_signups(created_at);
CREATE INDEX IF NOT EXISTS idx_coming_soon_signups_notified ON public.coming_soon_signups(notified);

-- Enable RLS
ALTER TABLE public.coming_soon_signups ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (for signup form)
CREATE POLICY "Anyone can sign up" ON public.coming_soon_signups
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only admins can view all signups
CREATE POLICY "Admins can view all signups" ON public.coming_soon_signups
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- Update timestamp trigger
CREATE OR REPLACE FUNCTION update_coming_soon_signups_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_coming_soon_signups_timestamp
  BEFORE UPDATE ON public.coming_soon_signups
  FOR EACH ROW
  EXECUTE FUNCTION update_coming_soon_signups_updated_at();

