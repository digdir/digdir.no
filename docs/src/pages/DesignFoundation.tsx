import { Link } from "react-router-dom";
import "../styles/page.css";
import "../styles/design-foundation.css";

const sections = [
  { number: 1, title: "Introduksjon", slug: "introduksjon" },
  { number: 2, title: "Målgruppe", slug: "maalgruppe" },
  { number: 3, title: "Posisjonsanalyse", slug: "posisjonsanalyse" },
  { number: 4, title: "Merkevare", slug: "merkevare" },
  { number: 5, title: "Designprinsipp", slug: "designprinsipp" },
  { number: 6, title: "Tilgjengelegheit", slug: "tilgjengelegheit" },
  { number: 7, title: "Designmønster", slug: "designmonster" },
  {
    number: 8,
    title: "Utviklingsprosess",
    slug: "utviklingsprosess",
    highlight: true,
  },
  { number: 9, title: "Brukartesting", slug: "brukartesting" },
  { number: 10, title: "Måling og evaluering", slug: "maaling-og-evaluering" },
  {
    number: 11,
    title: "Kobling mot Designsystemet",
    slug: "kobling-mot-designsystemet",
  },
  { number: 12, title: "Arbeidsflyt i Figma", slug: "arbeidsflyt-i-figma" },
];

export default function DesignFoundation() {
  return (
    <div className="page">
      <h1>Nettsidehåndboka</h1>
      <p className="page-intro">
        Nettsidehåndboka samlar prinsippa, prosessane og retningslinjene vi
        byggjer arbeidet vårt på. Ho gir eit felles grunnlag for alle som jobbar
        med nettsidene våre — uavhengig av fagfelt.
      </p>

      <div className="df-grid">
        {sections.map((section) => (
          <Link
            key={section.slug}
            to={`/designfundament/${section.slug}`}
            className={`df-card ${section.highlight ? "df-card--highlight" : ""}`}
          >
            <span className="df-card-number">{section.number}</span>
            <span className="df-card-title">{section.title}</span>
            <svg
              className="df-card-arrow"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 4l4 4-4 4" />
            </svg>
          </Link>
        ))}
      </div>
    </div>
  );
}
