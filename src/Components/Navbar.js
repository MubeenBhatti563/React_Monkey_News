import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/business", label: "Business" },
  { to: "/entertainment", label: "Entertainment" },
  { to: "/health", label: "Health" },
  { to: "/science", label: "Science" },
  { to: "/sports", label: "Sports" },
  { to: "/technology", label: "Technology" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="brand" onClick={() => setIsOpen(false)}>
          <span className="brand-mark" aria-hidden="true" />
          News<span className="brand-accent">Monkey</span>
        </NavLink>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`nav-links${isOpen ? " is-open" : ""}`}
          aria-label="Categories"
        >
          {LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `nav-link${isActive ? " is-active" : ""}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
