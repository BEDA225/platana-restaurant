"use client";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Sidebar = () => {
  const handleMenuClickClose = () => {
    const sidebar = document.querySelector(".side-bar.header-two");
    if (sidebar) {
      sidebar.classList.remove("show");
    }
  };

  const handleSearchClose = () => {
    const sidebar = document.querySelector(".search-input-area");
    if (sidebar) {
      sidebar.classList.remove("show");
    }
  };

  return (
    <div>
      <div id="side-bar" className="side-bar header-two">
        <button className="close-icon-menu" onClick={handleMenuClickClose}>
          <i className="far fa-times" />
        </button>

        <div className="mobile-menu-actions mt--30">
          <Link href="/shop" className="rts-btn btn-primary mobile-action-btn">
            <i className="fa-solid fa-bowl-hot" /> Commander
          </Link>
          <Link
            href="/reservation"
            className="rts-btn btn-primary border-only mobile-action-btn"
          >
            <i className="fa-solid fa-utensils" /> Réserver une table
          </Link>
        </div>

        <div className="mobile-menu-nav-area mt--20">
          <div className="mobile-menu-main">
            <MobileMenu />
          </div>
        </div>

        <div className="button-area-main-wrapper-menuy-sidebar mt--50">
          <div className="buton-area-bottom">
            <Link href="/login" className="rts-btn btn-primary">
              Se connecter
            </Link>
          </div>
        </div>
      </div>

      <div className="search-input-area">
        <div className="container">
          <div className="search-input-inner">
            <div className="input-div">
              <input
                id="searchInput1"
                className="search-input"
                type="text"
                placeholder="Rechercher un plat..."
              />
              <button>
                <i className="far fa-search" />
              </button>
            </div>
          </div>
        </div>
        <div
          id="close"
          className="search-close-icon"
          onClick={handleSearchClose}
        >
          <i className="far fa-times" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
