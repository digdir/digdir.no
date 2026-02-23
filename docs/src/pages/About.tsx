import { useEffect, useState } from "react";
import "../styles/page.css";
import "../styles/about.css";

const tocItems = [
  { id: "motet-teamet", label: "Møt teamet" },
  { id: "moteseriar", label: "Møteseriar" },
  { id: "om-nettsidene", label: "Om nettsidene" },
];

const meetings = [
  {
    name: "Standup",
    frequency: "Kvar måndag og onsdag",
    description:
      "Kort statusmøte der vi går gjennom kva vi jobbar med, eventuelle blokkerar og kva som er neste steg.",
  },
  {
    name: "Retro",
    frequency: "1 gong i månaden",
    description:
      "Vi ser tilbake på førre periode og diskuterer kva som fungerte bra, kva vi kan forbetre og kva vi tek med oss vidare.",
  },
  {
    name: "Backlog grooming",
    frequency: "2 gonger i månaden",
    description:
      "Vi går gjennom backloggen, vurderer nye behov, prioriterer og sikrar at oppgåvene er klare til å jobbast med.",
  },
];

const team = [
  {
    name: "Øyvind Thune",
    title: "Design Lead",
    image: "/images/authors/user1.png",
    ingress: "Meir informasjon vil komme her.",
  },
  {
    name: "Vilde Ylvisåker",
    title: "Grafisk Designer",
    image: "/images/authors/user2.png",
    ingress: "Meir informasjon vil komme her.",
  },
  {
    name: "Namn kjem",
    title: "Rolle kjem",
    image: "/images/authors/user1.png",
    ingress: "Meir informasjon vil komme her.",
  },
  {
    name: "Namn kjem",
    title: "Rolle kjem",
    image: "/images/authors/user1.png",
    ingress: "Meir informasjon vil komme her.",
  },
  {
    name: "Namn kjem",
    title: "Rolle kjem",
    image: "/images/authors/user1.png",
    ingress: "Meir informasjon vil komme her.",
  },
  {
    name: "Namn kjem",
    title: "Rolle kjem",
    image: "/images/authors/user1.png",
    ingress: "Meir informasjon vil komme her.",
  },
  {
    name: "Namn kjem",
    title: "Rolle kjem",
    image: "/images/authors/user1.png",
    ingress: "Meir informasjon vil komme her.",
  },
];

export default function About() {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 },
    );

    tocItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page about-page page-with-toc">
      <div className="page-main-content">
        <h1>Om oss</h1>
        <p className="page-intro">
          Vi jobbar i digdir.no-teamet og har ansvar for design og innhald på
          nettsidene våre. Her kan du bli betre kjent med teamet og lese meir om
          nettsidene vi forvaltar.
        </p>

        <section className="page-section">
          <h2 id="motet-teamet">Møt teamet</h2>
          <p>
            Teamet vårt består av designarar som jobbar med å skape gode og
            inkluderande digitale opplevingar for alle som besøker nettsidene
            våre.
          </p>

          <div className="team-section">
            {team.map((person) => (
              <div className="team-card" key={person.name}>
                <img
                  className="team-avatar"
                  src={person.image}
                  alt={person.name}
                  width="48"
                  height="48"
                />
                <div className="team-info">
                  <h3 className="team-name">{person.name}</h3>
                  <span className="team-title">{person.title}</span>
                  <p className="team-ingress">{person.ingress}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="page-section">
          <h2 id="moteseriar">Møteseriar</h2>
          <p>
            Vi har faste møteseriar for å halde teamet synkronisert og sikre
            jamn framdrift.
          </p>

          <div className="meetings-grid">
            {meetings.map((meeting) => (
              <div key={meeting.name} className="meeting-card">
                <h3>{meeting.name}</h3>
                <span className="meeting-frequency">{meeting.frequency}</span>
                <p>{meeting.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="page-section">
          <h2 id="om-nettsidene">Om nettsidene</h2>
          <p>
            Vi forvaltar fleire nettsider i Digdir-familien. Målet vårt er at
            alle sidene skal vere brukarvennlege, tilgjengelege og gi verdi for
            brukarane.
          </p>

          <div className="sites-grid">
            <div className="site-card">
              <h3>digdir.no</h3>
              <p>
                Hovudsida til Digitaliseringsdirektoratet. Her finn du
                informasjon om direktoratet, tenester og ressursar for digital
                transformasjon i offentleg sektor.
              </p>
            </div>
            <div className="site-card">
              <h3>uutilsynet.no</h3>
              <p>
                Nettsida til Tilsynet for universell utforming av ikt. Her finn
                du rettleiing, regelverk og ressursar om universell utforming.
              </p>
            </div>
            <div className="site-card">
              <h3>samarbeid.digdir.no</h3>
              <p>
                Samarbeidsportalen for offentleg sektor. Ein stad for deling av
                kunnskap, verktøy og erfaringar på tvers av offentlege
                verksemder.
              </p>
            </div>
          </div>
        </section>
      </div>

      <aside className="toc-sidebar">
        <nav className="toc-nav">
          <h3 className="toc-title">Innhald</h3>
          <ul className="toc-list">
            {tocItems.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`toc-link${activeId === id ? " toc-link--active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById(id)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
