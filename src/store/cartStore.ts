import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { MealCount, MealSlot, Preference } from '@/data/plans';

export interface CartItem {
  id: string;
  title: string;
  // null = price to be confirmed on WhatsApp
  price: number | null;
  image?: string;
  quantity: number;
  note?: string;
}

export interface PlanSelection {
  planId: string;
  planName: string;
  meals: MealCount;
  preference: Preference;
  slot: MealSlot;
  price: number | null;
}

interface CartState {
  items: CartItem[];
  plan: PlanSelection | null;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  setPlan: (plan: PlanSelection | null) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      plan: null,
      addItem: (item) =>
        set((state) => {
          const existing = state.items.find((i) => i.id === item.id);
          if (existing) {
            return {
              items: state.items.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i)),
            };
          }
          return { items: [...state.items, { ...item, quantity: 1 }] };
        }),
      removeItem: (id) => set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
      updateQuantity: (id, quantity) =>
        set((state) => ({
          items:
            quantity < 1
              ? state.items.filter((i) => i.id !== id)
              : state.items.map((i) => (i.id === id ? { ...i, quantity } : i)),
        })),
      setPlan: (plan) => set({ plan }),
      clearCart: () => set({ items: [], plan: null }),
    }),
    {
      name: 'toss-taste-cart',
      version: 2,
      // Older carts stored prices as strings — start fresh rather than mis-read them.
      migrate: () => ({ items: [], plan: null }),
    }
  )
);

export const cartCount = (s: Pick<CartState, 'items' | 'plan'>) =>
  s.items.reduce((a, b) => a + b.quantity, 0) + (s.plan ? 1 : 0);

export const itemsTotal = (items: CartItem[]) =>
  items.reduce((t, i) => t + (i.price ?? 0) * i.quantity, 0);
