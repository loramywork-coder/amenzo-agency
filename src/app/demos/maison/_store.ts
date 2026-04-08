"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type CartItem = {
  slug: string;
  name: string;
  price: number;
  size: string;
  color: string;
  image: string;
  qty: number;
};

type CartState = {
  items: CartItem[];
  drawerOpen: boolean;
  wishlist: string[]; // product slugs
  add: (item: Omit<CartItem, "qty"> & { qty?: number }) => void;
  remove: (key: string) => void;
  updateQty: (key: string, qty: number) => void;
  clear: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleWishlist: (slug: string) => void;
};

const keyOf = (i: { slug: string; size: string; color: string }) => `${i.slug}__${i.size}__${i.color}`;

export const useMaisonStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      drawerOpen: false,
      wishlist: [],
      add: (item) => {
        const key = keyOf(item);
        const existing = get().items.find((i) => keyOf(i) === key);
        if (existing) {
          set({
            items: get().items.map((i) =>
              keyOf(i) === key ? { ...i, qty: i.qty + (item.qty ?? 1) } : i
            ),
            drawerOpen: true,
          });
        } else {
          set({
            items: [...get().items, { ...item, qty: item.qty ?? 1 }],
            drawerOpen: true,
          });
        }
      },
      remove: (key) =>
        set({ items: get().items.filter((i) => keyOf(i) !== key) }),
      updateQty: (key, qty) =>
        set({
          items: get()
            .items.map((i) => (keyOf(i) === key ? { ...i, qty } : i))
            .filter((i) => i.qty > 0),
        }),
      clear: () => set({ items: [] }),
      openDrawer: () => set({ drawerOpen: true }),
      closeDrawer: () => set({ drawerOpen: false }),
      toggleWishlist: (slug) => {
        const list = get().wishlist;
        set({
          wishlist: list.includes(slug) ? list.filter((s) => s !== slug) : [...list, slug],
        });
      },
    }),
    {
      name: "maison-cart",
      storage: createJSONStorage(() => (typeof window !== "undefined" ? sessionStorage : ({} as Storage))),
      partialize: (s) => ({ items: s.items, wishlist: s.wishlist }),
    }
  )
);

export const cartKey = keyOf;
