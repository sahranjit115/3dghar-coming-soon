-- Add missing column to existing table
-- Run this in Supabase SQL Editor

-- Add user_type column if it doesn't exist
ALTER TABLE public.coming_soon_signups 
ADD COLUMN IF NOT EXISTS user_type text;

-- Add source column if it doesn't exist
ALTER TABLE public.coming_soon_signups 
ADD COLUMN IF NOT EXISTS source text;

-- Add notified column if it doesn't exist
ALTER TABLE public.coming_soon_signups 
ADD COLUMN IF NOT EXISTS notified boolean DEFAULT false;

-- Verify columns were added
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'coming_soon_signups'
ORDER BY ordinal_position;

