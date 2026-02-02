"use client";

import React from "react";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <nav className="nav-main mainmenu-nav mt--30">
      <ul className="mainmenu metismenu" id="mobile-menu-active">
        <li>
          <Link className="main" href="/">
            Accueil
          </Link>
        </li>

        <li>
          <Link className="main" href="/shop">
            Menu
          </Link>
        </li>

        <li>
          <Link className="main" href="/about">
            À propos
          </Link>
        </li>

        <li>
          <Link className="main" href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;
