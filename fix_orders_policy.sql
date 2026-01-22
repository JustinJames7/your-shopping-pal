-- Drop the policy if it exists to avoid errors when re-running
DROP POLICY IF EXISTS "Public can create orders" ON public.orders;

-- Allow public inserts to orders table for checkout flow
CREATE POLICY "Public can create orders" 
ON public.orders FOR INSERT 
WITH CHECK (true);
