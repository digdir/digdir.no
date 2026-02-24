import { Link, Outlet } from "react-router-dom";
import NavDropdown from "./NavDropdown";
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
          <img src="/images/logo.png" alt="" width="36" height="36" />
          <span className="logo-text">
            <span className="logo-primary">digdir.no</span>
            <span className="logo-secondary">teamet</span>
          </span>
        </Link>
        <nav className="nav">
          <NavDropdown
            label="Nettsidehåndboka"
            items={designfundamentItems}
            icon={
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
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
        </nav>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} digdir.no-teamet
        </p>
      </footer>
    </div>
  );
}
