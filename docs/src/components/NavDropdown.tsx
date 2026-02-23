import { useState, useRef, useEffect } from "react";
import type React from "react";
import { Link } from "react-router-dom";
import "../styles/nav-dropdown.css";

interface DropdownItem {
  label: string;
  to: string;
  highlight?: boolean;
}

interface NavDropdownProps {
  label: string;
  items: DropdownItem[];
  icon?: React.ReactNode;
}

export default function NavDropdown({ label, items, icon }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="nav-dropdown" ref={ref}>
      <button
        className="nav-link nav-dropdown-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {icon && <span className="nav-dropdown-icon">{icon}</span>}
        {label}
        <svg
          className={`nav-dropdown-chevron ${open ? "nav-dropdown-chevron--open" : ""}`}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 5l3 3 3-3" />
        </svg>
      </button>
      {open && (
        <div className="nav-dropdown-menu">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-dropdown-item ${item.highlight ? "nav-dropdown-item--highlight" : ""}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
