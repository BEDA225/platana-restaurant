"use client";
import React, { useState, useEffect, useRef } from "react";
import HeaderNav from "./HeaderNav";
import CategoryMenu from "./CategoryMenu";
import Cart from "./Cart";
import WishList from "./WishList";
import Sidebar from "./Sidebar";
import BackToTop from "@/components/common/BackToTop";
import { useRouter } from "next/navigation";
import Link from "next/link";

function HeaderOne() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<
    { id: number; title: string; slug: string }[]
  >([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // 🔥 Auto Slug Function
  const makeSlug = (text: string) =>
    text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");

  // Example data (id + title + slug)
  const allSuggestions = [
    { id: 1, title: "Plateau de grillade" },
    { id: 2, title: "Garba familiale" },
    { id: 3, title: "Alloco oeuf" },
    { id: 4, title: "Nems / Spring rolls" },
    { id: 5, title: "Brochettes boeuf" },
    { id: 6, title: "Tilapia braisé" },
    { id: 7, title: "Choukouya d'agneau" },
    { id: 8, title: "Poulet entier" },
    { id: 9, title: "Yassa poulet" },
    { id: 10, title: "Sauce graine foutou" },
    { id: 11, title: "Gombo placali ou riz" },
    { id: 12, title: "Degue en pot" },
  ].map((item) => ({
    ...item,
    slug: makeSlug(item.title), // auto generate 🔥
  }));

  const suggestionRef = useRef<HTMLUListElement>(null);
  // Suggestion filter
  useEffect(() => {
    if (searchTerm.trim().length > 0) {
      const filtered = allSuggestions.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setSuggestions(filtered.slice(0, 6));
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchTerm]);

  // Suggestion click open item page
  const handleSuggestionClick = (slug: string) => {
    setTimeout(() => setShowSuggestions(false), 120);
    router.push(`/shop/${slug}`);
  };

  // Submit search form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchTerm.trim())}`);
      setShowSuggestions(false);
    } else {
      router.push("/shop");
    }
  };

  // Hide suggestion when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node) &&
        suggestionRef.current &&
        !suggestionRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Countdown UI
  useEffect(() => {
    const countDownElements =
      document.querySelectorAll<HTMLElement>(".countDown");
    const endDates: Date[] = [];

    const calcTime = (ms: number) => {
      const seconds = Math.floor(ms / 1000);
      const days = Math.floor(seconds / 86400);
      const hours = Math.floor((seconds % 86400) / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;
      return [days, hours, minutes, secs].map((v) =>
        v.toString().padStart(2, "0"),
      );
    };

    const renderDisplay = (arr: string[]) =>
      arr
        .map(
          (item) =>
            `<div class='container'><div class='a'><div>${item}</div></div></div>`,
        )
        .join("");

    countDownElements.forEach((el) => {
      const match = el.innerText.match(
        /([0-9]{2})\/([0-9]{2})\/([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2})/,
      );
      if (!match) return;

      const end = new Date(
        +match[3],
        +match[1] - 1,
        +match[2],
        +match[4],
        +match[5],
        +match[6],
      );

      endDates.push(end);

      if (end > new Date()) {
        const next = calcTime(end.getTime() - Date.now());
        el.innerHTML = renderDisplay(next);
      } else {
        el.innerHTML = `<p class="end">Sorry, expired!</p>`;
      }
    });

    const interval = setInterval(() => {
      countDownElements.forEach((el, i) => {
        const end = endDates[i];
        if (!end) return;
        const diff = end.getTime() - Date.now();
        if (diff <= 0) {
          el.innerHTML = `<p class="end">Sorry, expired!</p>`;
        } else {
          el.innerHTML = calcTime(diff)
            .map(
              (item) =>
                `<div class='container'><div class='a'><div>${item}</div></div></div>`,
            )
            .join("");
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="rts-header-one-area-one">
        {/* top bar */}
        <div className="header-top-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="bwtween-area-header-top">
                  <div className="discount-area">
                    <p className="disc">
                      Bienvenue au Restaurant Platana ! Réservez votre table dès
                      maintenant.
                    </p>
                  </div>
                  <div className="contact-number-area">
                    <p>
                      Besoin d'aide ? Appelez-nous :{" "}
                      <a href="tel:+14383805223">+1 438 380 5223</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* mid bar */}
        <div className="header-mid-one-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="header-mid-wrapper-between">
                  <div className="nav-sm-left">
                    <ul className="nav-h_top">
                      <li>
                        <Link href="/about">À propos de nous</Link>
                      </li>
                      <li>
                        <Link href="/account">Mon compte</Link>
                      </li>
                    </ul>
                    <p className="para">
                      Nous sommes ouverts tous les jours de 11h00 à 23h00
                    </p>
                  </div>
                  <div className="nav-sm-left">
                    <ul className="nav-h_top language">
                      <li className="category-hover-header language-hover">
                        <a href="#">Français</a>
                        <ul className="category-sub-menu">
                          <li>
                            <a href="#">
                              <span>English</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/trackorder">Suivre la commande</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* logo + search */}
        <div className="search-header-area-main">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="logo-search-category-wrapper">
                  <Link href="/" className="logo-area">
                    <img
                      src="/assets/images/logo/platana-logo.svg"
                      alt="logo-main"
                      className="logo"
                    />
                  </Link>
                  <div className="marquee-container">
                    <div className="marquee-track">
                      <span className="marquee-item offer">
                        <i className="fa-solid fa-bowl-hot" /> Offre du jour :
                        Plateau de grillade à $59.99
                      </span>
                      <span className="marquee-item delivery">
                        <i className="fa-solid fa-truck-fast" /> Livraison
                        gratuite au-dessus de $50
                      </span>
                      <span className="marquee-item reservation">
                        <i className="fa-solid fa-utensils" /> Réservez votre
                        table pour ce soir !
                      </span>
                      <span className="marquee-separator">✦</span>
                      <span className="marquee-item offer">
                        <i className="fa-solid fa-bowl-hot" /> Offre du jour :
                        Plateau de grillade à $59.99
                      </span>
                      <span className="marquee-item delivery">
                        <i className="fa-solid fa-truck-fast" /> Livraison
                        gratuite au-dessus de $50
                      </span>
                      <span className="marquee-item reservation">
                        <i className="fa-solid fa-utensils" /> Réservez votre
                        table pour ce soir !
                      </span>
                      <span className="marquee-separator">✦</span>
                    </div>
                  </div>

                  <div className="actions-area">
                    <div className="menu-btn" id="menu-btn">
                      <svg
                        width={20}
                        height={16}
                        viewBox="0 0 20 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect y={14} width={20} height={2} fill="#1F1F25" />
                        <rect y={7} width={20} height={2} fill="#1F1F25" />
                        <rect width={20} height={2} fill="#1F1F25" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <HeaderNav />
      </div>

      <Sidebar />
      <BackToTop />
    </>
  );
}

export default HeaderOne;
