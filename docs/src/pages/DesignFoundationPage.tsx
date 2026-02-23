import { useParams, Link } from "react-router-dom";
import "../styles/page.css";

const pageTitles: Record<string, string> = {
  introduksjon: "Introduksjon",
  maalgruppe: "Målgruppe",
  posisjonsanalyse: "Posisjonsanalyse",
  merkevare: "Merkevare",
  designprinsipp: "Designprinsipp",
  tilgjengelegheit: "Tilgjengelegheit",
  designmonster: "Designmønster",
  brukartesting: "Brukartesting",
  "maaling-og-evaluering": "Måling og evaluering",
  "kobling-mot-designsystemet": "Kobling mot Designsystemet",
  "arbeidsflyt-i-figma": "Arbeidsflyt i Figma",
};

export default function DesignFoundationPage() {
  const { slug } = useParams<{ slug: string }>();
  const title = slug ? pageTitles[slug] : undefined;

  if (!title) {
    return (
      <div className="page">
        <h1>Sida finst ikkje</h1>
        <p>
          <Link to="/designfundament">← Tilbake til Nettsidehåndboka</Link>
        </p>
      </div>
    );
  }

  return (
    <div className="page">
      <p className="page-breadcrumb">
        <Link to="/designfundament">Nettsidehåndboka</Link> / {title}
      </p>
      <h1>{title}</h1>
      <p className="page-intro">
        Denne sida er under utvikling. Innhaldet kjem snart.
      </p>
    </div>
  );
}
