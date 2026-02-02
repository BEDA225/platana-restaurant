"use client";
import React from "react";
import Link from "next/link";

function NavItem() {
  return (
    <div>
      <nav>
        <ul className="parent-nav">
          <li className="parent">
            <Link href="/">Accueil</Link>
          </li>
          <li className="parent">
            <Link href="/about">À propos</Link>
          </li>
          <li className="parent">
            <Link href="/shop">Menu</Link>
          </li>
          <li className="parent btn-border-only account">
            <Link href="/reservation">Réserver une table</Link>
          </li>
          <li className="parent">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavItem;
