"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface CartItem {
  id: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
  active: boolean; // true = cart, false = wishlist
}

interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  addToWishlist: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateItemQuantity: (id: number, quantity: number) => void;
  isCartLoaded: boolean;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartLoaded, setIsCartLoaded] = useState(false);

  // Load from localStorage on first mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        setCartItems(JSON.parse(storedCart));
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error);
        localStorage.removeItem("cart");
      }
    }
    setIsCartLoaded(true);
  }, []);

  // Save to localStorage whenever cart changes
  useEffect(() => {
    if (isCartLoaded) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems, isCartLoaded]);

  // Add item to cart (active: true)
  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existingCart = prev.find(
        (i) => i.id === item.id && i.active === true,
      );
      if (existingCart) {
        // Item déjà dans le cart → on monte la quantité
        return prev.map((i) =>
          i.id === item.id && i.active === true
            ? { ...i, quantity: i.quantity + item.quantity }
            : i,
        );
      }
      const existingWishlist = prev.find(
        (i) => i.id === item.id && i.active === false,
      );
      if (existingWishlist) {
        // Item dans la wishlist → on le déplace vers le cart
        return prev.map((i) =>
          i.id === item.id && i.active === false
            ? { ...i, active: true, quantity: item.quantity }
            : i,
        );
      }
      // Item nouveau → on l'ajoute
      return [...prev, { ...item, active: true }];
    });
  };

  // Add item to wishlist (active: false)
  const addToWishlist = (item: CartItem) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id && i.active === false);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id && i.active === false
            ? { ...i, quantity: i.quantity + item.quantity }
            : i,
        );
      } else {
        return [...prev, item];
      }
    });
  };

  // Remove item by ID
  const removeFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.id === id && item.active === true)),
    );
  };

  // Update quantity (cart or wishlist)
  const updateItemQuantity = (id: number, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item,
      ),
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        addToWishlist,
        removeFromCart,
        updateItemQuantity,
        isCartLoaded,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
