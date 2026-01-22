-- Force Fix Orders RLS Policy
-- Run this script in the Supabase SQL Editor to reset permissions for order creation

-- 1. Drop ALL existing policies to avoid conflicts
DROP POLICY IF EXISTS "Public can create orders" ON public.orders;
DROP POLICY IF EXISTS "Orders are publicly readable" ON public.orders;
DROP POLICY IF EXISTS "Give me access" ON public.orders;
DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON public.orders;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.orders;

-- 2. Ensure RLS is enabled (just to be safe)
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- 3. Create a single, permissive policy for the demo
-- This allows anyone (anon or authenticated) to ALL operations (SELECT, INSERT, UPDATE, DELETE)
CREATE POLICY "Allow Public Full Access"
ON public.orders
FOR ALL
USING (true)
WITH CHECK (true);

-- 4. Verify it was created
-- SELECT * FROM pg_policies WHERE tablename = 'orders';
