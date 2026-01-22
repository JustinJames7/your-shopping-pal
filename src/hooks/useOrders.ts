import { useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { getSessionId } from '@/lib/sessionId';

export interface DatabaseOrder {
  id: string;
  order_id: string;
  status: string;
  estimated_delivery: string | null;
  last_update: string | null;
  location: string | null;
  total_amount: number | null;
}

export const useOrders = () => {
  const getOrderByOrderId = useCallback(async (orderId: string): Promise<DatabaseOrder | null> => {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('order_id', orderId.toUpperCase())
        .maybeSingle();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching order:', error);
      return null;
    }
  }, []);

  const createOrder = useCallback(async (totalAmount: number): Promise<{ success: boolean; orderId?: string; error?: any }> => {
    try {
      // Generate a random order ID (ORD-XXXXX)
      const orderId = `ORD-${Math.floor(10000 + Math.random() * 90000)}`;
      const now = new Date();

      const { error } = await supabase
        .from('orders')
        .insert({
          order_id: orderId,
          status: 'processing',
          total_amount: totalAmount,
          estimated_delivery: '3-5 business days',
          last_update: now.toISOString(),
          location: 'Processing Center'
        });

      if (error) throw error;
      return { success: true, orderId };
    } catch (error) {
      console.error('Error creating order:', error);
      return { success: false, error };
    }
  }, []);

  return {
    getOrderByOrderId,
    createOrder,
  };
};
