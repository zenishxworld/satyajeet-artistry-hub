-- Fix RLS policies for contacts table to allow anon inserts
-- Drop existing policies
DROP POLICY IF EXISTS "Anyone can submit contact forms" ON public.contacts;
DROP POLICY IF EXISTS "Only service role can read contacts" ON public.contacts;

-- Allow anyone (including anon) to insert contact submissions
CREATE POLICY "Allow contact form submissions" 
ON public.contacts 
FOR INSERT 
WITH CHECK (true);

-- Allow service role to read all contacts (for admin interface)
CREATE POLICY "Service role can read contacts" 
ON public.contacts 
FOR SELECT 
TO service_role
USING (true);
