import BannerOne from "@/components/banner/BannerOne";
import HeaderOne from "@/components/header/HeaderOne";
import WeeklyBestSelling from "@/components/product/WeeklyBestSelling";
import FooterOne from "@/components/footer/FooterOne";
import { CartProvider } from "@/components/header/CartContext";
import { WishlistProvider } from "@/components/header/WishlistContext";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <WishlistProvider>
      <CartProvider>
        <div className="demo-one">
          <ToastContainer position="top-right" autoClose={3000} />
          <HeaderOne />
          <BannerOne />
          <WeeklyBestSelling />
          <FooterOne />
        </div>
      </CartProvider>
    </WishlistProvider>
  );
}
