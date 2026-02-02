import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

import { CartProvider } from "../components/header/CartContext";
import { WishlistProvider } from "../components/header/WishlistContext";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Restaurant Platana - AFRICAN AND VEGAN",
  description:
    "Restaurant africain a Montreal, foutou sauce graine, poisson braisé, Garba, Tchep, attieke",
  icons: {
    icon: [
      {
        url: "/assets/images/logo/platana-fav.ico",
        type: "image/x-icon",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* 🚀 Load CSS from public folder */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <WishlistProvider>
          <CartProvider>
            {children}
            <ToastContainer position="top-right" autoClose={3000} />
          </CartProvider>
        </WishlistProvider>
      </body>
    </html>
  );
}
