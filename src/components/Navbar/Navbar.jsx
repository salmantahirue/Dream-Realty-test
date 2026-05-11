import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { properties } from "../../data/properties";
import {
  PropertyDropdown,
  NeighborhoodsDropdown,
} from "../PropertyDropdown/PropertyDropdown";
import "./Navbar.css";

const PhoneIcon = () => (
  <svg className="navbar__contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.03 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);

const MailIcon = () => (
  <svg className="navbar__contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const ChevronDown = ({ open }) => (
  <svg className={`navbar__chevron${open ? " navbar__chevron--open" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

const HouseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
  </svg>
);

function useOutsideClick(ref, callback) {
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) callback();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [ref, callback]);
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null); // 'buy' | 'neighborhoods' | null
  const [mobileOpen, setMobileOpen] = useState(false);

  const navRef = useRef(null);
  useOutsideClick(navRef, () => setOpenMenu(null));

  const toggle = (menu) =>
    setOpenMenu((prev) => (prev === menu ? null : menu));

  return (
    <header className="navbar" ref={navRef}>
      <div className="navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <div className="navbar__logo-icon">
            <HouseIcon />
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-title">Dream Neighborhood</span>
            <span className="navbar__logo-sub">Realty Co.</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="navbar__nav">
          <li className="navbar__nav-item">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                "navbar__nav-link" + (isActive ? " navbar__nav-link--active" : "")
              }
            >
              Home
            </NavLink>
          </li>

          {/* Buy dropdown */}
          <li className="navbar__nav-item">
            <button
              className={`navbar__nav-link${openMenu === "buy" ? " navbar__nav-link--active" : ""}`}
              onClick={() => toggle("buy")}
              aria-expanded={openMenu === "buy"}
            >
              Buy
              <ChevronDown open={openMenu === "buy"} />
            </button>
            {openMenu === "buy" && (
              <PropertyDropdown properties={properties} />
            )}
          </li>

          {/* Neighborhoods dropdown */}
          <li className="navbar__nav-item">
            <button
              className={`navbar__nav-link${openMenu === "neighborhoods" ? " navbar__nav-link--active" : ""}`}
              onClick={() => toggle("neighborhoods")}
              aria-expanded={openMenu === "neighborhoods"}
            >
              Neighborhoods
              <ChevronDown open={openMenu === "neighborhoods"} />
            </button>
            {openMenu === "neighborhoods" && <NeighborhoodsDropdown />}
          </li>
        </ul>

        {/* Contact area */}
        <div className="navbar__contact">
          <a href="tel:+18005550199" className="navbar__contact-item">
            <PhoneIcon />
            (800) 555-0199
          </a>
          <a href="mailto:hello@dreamneighborhood.com" className="navbar__contact-item">
            <MailIcon />
            hello@dreamneighborhood.com
          </a>
          <Link to="/buy" className="navbar__cta">
            Browse Listings
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setMobileOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile-menu${mobileOpen ? " navbar__mobile-menu--open" : ""}`}>
        <ul className="navbar__mobile-nav">
          <li>
            <Link to="/" className="navbar__mobile-link" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <p className="navbar__mobile-link" style={{ color: "var(--gray-400)", fontSize: 11, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", padding: "8px 14px 4px" }}>
              Buy
            </p>
            {properties.map((p) => (
              <Link
                key={p.id}
                to={`/buy/${p.slug}`}
                className="navbar__mobile-link"
                style={{ paddingLeft: 24, fontSize: 14 }}
                onClick={() => setMobileOpen(false)}
              >
                {p.title} — {p.city}
              </Link>
            ))}
          </li>
        </ul>

        <div className="navbar__mobile-contact">
          <a href="tel:+18005550199" className="navbar__contact-item">
            <PhoneIcon />
            (800) 555-0199
          </a>
          <a href="mailto:hello@dreamneighborhood.com" className="navbar__contact-item">
            <MailIcon />
            hello@dreamneighborhood.com
          </a>
        </div>
      </div>
    </header>
  );
}
