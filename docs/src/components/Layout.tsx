import { Link, Outlet } from "react-router-dom";
import NavDropdown from "./NavDropdown";
import { assetUrl } from "../lib/assetUrl";
import "../styles/layout.css";

const designfundamentItems = [
  { label: "Oversikt", to: "/designfundament" },
  { label: "1. Introduksjon", to: "/designfundament/introduksjon" },
  { label: "2. Målgruppe", to: "/designfundament/maalgruppe" },
  { label: "3. Posisjonsanalyse", to: "/designfundament/posisjonsanalyse" },
  { label: "4. Merkevare", to: "/designfundament/merkevare" },
  { label: "5. Designprinsipp", to: "/designfundament/designprinsipp" },
  { label: "6. Tilgjengelegheit", to: "/designfundament/tilgjengelegheit" },
  { label: "7. Designmønster", to: "/designfundament/designmonster" },
  {
    label: "8. Utviklingsprosess",
    to: "/designfundament/utviklingsprosess",
    highlight: true,
  },
  { label: "9. Brukartesting", to: "/designfundament/brukartesting" },
  {
    label: "10. Måling og evaluering",
    to: "/designfundament/maaling-og-evaluering",
  },
  {
    label: "11. Kobling mot Designsystemet",
    to: "/designfundament/kobling-mot-designsystemet",
  },
  {
    label: "12. Arbeidsflyt i Figma",
    to: "/designfundament/arbeidsflyt-i-figma",
  },
];

export default function Layout() {
  return (
    <div className="layout">
      <header className="header">
        <Link to="/" className="logo">
          <img
            src={assetUrl("/images/logo.png")}
            alt=""
            width="36"
            height="36"
          />
          <span className="logo-text">
            <span className="logo-primary">digdir.no</span>
            <span className="logo-secondary">teamet</span>
          </span>
        </Link>
        <nav className="nav">
          <Link to="/blogg" className="nav-link">
            Bloggen
          </Link>
          <NavDropdown
            label="Nettsidehåndboka"
            items={designfundamentItems}
            icon={
              <svg
                viewBox="0 0 24 24"
                width="17"
                height="17"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            }
          />
          <Link to="/arbeidsflyt" className="nav-link">
            Arbeidsflyt i GitHub
          </Link>
          <Link to="/about" className="nav-link">
            Om oss
          </Link>
          <a
            href="https://github.com/digdir/digdir.no"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link nav-github"
            aria-label="GitHub-prosjektet vårt"
            title="Sjå prosjektet på GitHub"
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
        </nav>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <p className="footer-disclaimer">
          Dette er ei uoffisiell side laga av digdir.no-teamet for &aring;
          synleggjere korleis me jobbar.
        </p>
        <p>&copy; {new Date().getFullYear()} digdir.no-teamet</p>
      </footer>
    </div>
  );
}
