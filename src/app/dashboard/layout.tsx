import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import "../../../public-dashboard/assets/css/plugins.css";
import "../../../public-dashboard/assets/css/table.css";
import "../../../public-dashboard/assets/css/style.css";

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
  return <div className="dashboard-wrapper">{children}</div>;
}
