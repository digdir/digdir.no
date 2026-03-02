import { useEffect, useState } from "react";
import { assetUrl } from "../lib/assetUrl";
import "../styles/page.css";
import "../styles/about.css";

const tocItems = [
  { id: "motet-teamet", label: "Møt teamet" },
  { id: "moteseriar", label: "Møteseriar" },
  { id: "om-nettsidene", label: "Om nettsidene" },
];

const team = [
  {
    name: "Wanda Smalsundmo",
    title: "Produkteigar",
    image: "/images/authors/wanda.jpg",
    ingress:
      "Overordna ansvar for produktvisjon, strategi og prioriteringar for nettsidene. Sikrar at teamet jobbar med dei rette tinga for å skape verdi for brukarane og organisasjonen.",
  },

  {
    name: "Marte Torsdatter Leland",
    title: "Nettredaktør",
    image: "/images/authors/marte.jpg",
    ingress:
      "Overordna ansvar for innhald og innhaldsstruktur på nettsidene, inkludert etterleving av lovkrav. Leier kjerneteamet av fagredaktørar.",
  },
  {
    name: "Øyvind Thune",
    title: "Design lead",
    image: "/images/authors/oyvind.png",
    ingress:
      "Overordna ansvar for den visuelle retninga og brukaropplevinga på nettsida. Leier designprosessen og koordinerer med Designsystemet.",
  },
  {
    name: "Sture Kenneth Dingsøyr",
    title: "Tech lead",
    image: "/images/authors/sture.jpg",
    ingress:
      "Ansvar for teknisk retning og arkitektur på digdir.no. Utviklar frontend og backend, og støttar prosessar og prioriteringar i teamet.",
  },
  {
    name: "Vilde Ylvisåker Førre",
    title: "Grafisk designar",
    image: "/images/authors/vilde.png",
    ingress:
      "Ansvar for korrekt bruk av merkevare, visuell profil og typografi. Sikrar brukarvennleg design og god visuell kommunikasjon på nettsida.",
  },
  {
    name: "Jens Mo",
    title: "Utviklar",
    image: "/images/authors/jens.png",
    ingress:
      "Ansvar for utvikling og vedlikehald av nettsida, særleg frontend. Bidrar med implementering av ny funksjonalitet, UU og design.",
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
            Vi er eit tverrfagleg team med kompetanse innan design, innhald og
            utvikling. Vi jobbar tett saman for å skape gode og brukarvennlege
            nettsider for våre brukarar.
          </p>

          <div className="team-section">
            {team.map((person) => (
              <div className="team-card" key={person.name}>
                <img
                  className="team-avatar"
                  src={assetUrl(person.image)}
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

          <details className="meeting-accordion">
            <summary className="meeting-summary">
              <div className="meeting-summary-content">
                <h3>Standup</h3>
                <span className="meeting-frequency">Kvar måndag og onsdag</span>
                <p>
                  Kort og konsist statusmøte der vi går gjennom inbox, epics,
                  roadmap og oppgåveflyt i GitHub-prosjektet.
                </p>
              </div>
            </summary>
            <div className="meeting-details">
              <p>
                Formen på møta er kort og konsis. For å få til det, har vi nokre
                rammer som vi har blitt einige om i teamet:
              </p>
              <ul>
                <li>Vi gir beskjed dersom vi ikkje kan komme</li>
                <li>Vi møter til tida og vi held oss til planlagt tid</li>
                <li>Vi er til stades i møtet og multitaskar ikkje</li>
                <li>
                  Vi held oss til agendaen og set opp dedikerte møte dersom det
                  er noko vi treng å diskutere
                </li>
                <li>
                  Alle i teamet eig oppgåvene og resultata våre saman, og alle
                  bidreg aktivt i møta våre
                </li>
              </ul>

              <p>
                Ansvarleg for å gjennomføre standup i prioritert rekkjefølgje:
              </p>
              <ol>
                <li>Øyvind (design lead)</li>
                <li>Sture (tech lead)</li>
              </ol>

              <h4>Agenda</h4>

              <h5>Inbox</h5>
              <ol>
                <li>
                  Gå gjennom saker som ligg i inbox i Github. Vurdere:
                  <ul>
                    <li>Kva som skal flyttast til backlog → «Backlog»</li>
                    <li>
                      Kva som ev. ikkje skal prioriterast → «Done» og legg inn
                      kommentar.
                    </li>
                  </ul>
                </li>
              </ol>

              <h5>Epics og roadmap</h5>
              <ol>
                <li>
                  Gå gjennom epics og sjå at all nødvendig info ligg inne. Er
                  det nye epics eller endra prioriteringar?
                </li>
                <li>Sjekk roadmap og skyv på tidsestimat ved behov.</li>
              </ol>

              <h5>Oppgåveflyt</h5>
              <ol>
                <li>
                  Gå gjennom{" "}
                  <span className="board-tag board-tag--backlog">Backlog</span>
                  <ul>
                    <li>
                      Sjå om det ligg issues som treng: Ansvarleg(e), Tags,
                      Size, Beskrivelse / spesifikasjon
                    </li>
                    <li>
                      Flytt oppgåver som skal prioriterast i denne perioden til{" "}
                      <span className="board-tag board-tag--todo">Todo</span>.
                      Vurder om oppgåva krev ein ny Epic eller skal høyre til
                      ein eksisterande Epic.
                    </li>
                  </ul>
                </li>
                <li>
                  Gå gjennom{" "}
                  <span className="board-tag board-tag--tested">Testa OK</span>
                  <ul>
                    <li>
                      Ok å flytte til{" "}
                      <span className="board-tag board-tag--done">Done</span>?
                    </li>
                    <li>Ved behov: notere når issue skal rullast ut</li>
                    <li>Lukke saker som er avslutta/rulla ut</li>
                  </ul>
                </li>
                <li>
                  Gå gjennom{" "}
                  <span className="board-tag board-tag--review">
                    Ready for review
                  </span>
                  <ul>
                    <li>
                      Sjå at oppgåva er assigna til den/dei som skal teste
                    </li>
                    <li>
                      Status – er det hindringar eller utfordringar som treng
                      avklaring:
                      <ul>
                        <li>
                          Ved behov for meir arbeid: Flytte tilbake til{" "}
                          <span className="board-tag board-tag--progress">
                            In progress
                          </span>
                        </li>
                        <li>
                          Om oppgåva er ferdig: Flytte til{" "}
                          <span className="board-tag board-tag--tested">
                            Tested OK
                          </span>
                        </li>
                        <li>Om det skal testast meir: La ligge</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  Gå gjennom{" "}
                  <span className="board-tag board-tag--progress">
                    In progress
                  </span>
                  <ul>
                    <li>
                      Gå gjennom kvar oppgåve og høyre om korleis ting går, og
                      om det er hindringar eller avklaringar som trengst.
                    </li>
                    <li>
                      Om oppgåva er klar, flytt denne til{" "}
                      <span className="board-tag board-tag--review">
                        Ready for review
                      </span>{" "}
                      og endre ansvarleg person (assignee).
                    </li>
                    <li>
                      Fange opp om det er personar i teamet som ikkje har
                      oppgåver i{" "}
                      <span className="board-tag board-tag--progress">
                        In progress
                      </span>
                      .
                    </li>
                  </ul>
                </li>
                <li>
                  Gå gjennom{" "}
                  <span className="board-tag board-tag--todo">Todo</span>
                  <ul>
                    <li>
                      Sjå kva oppgåver som kan/bør takast vidare, og kven som
                      har kapasitet.
                    </li>
                    <li>
                      Assigne til riktig person og flytte issue til{" "}
                      <span className="board-tag board-tag--progress">
                        In progress
                      </span>
                      .
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </details>

          <details className="meeting-accordion">
            <summary className="meeting-summary">
              <div className="meeting-summary-content">
                <h3>Retrospektiv</h3>
                <span className="meeting-frequency">1 gong i månaden</span>
                <p>
                  Vi reflekterer saman over siste periode – kva fungerte bra,
                  kva kan gjerast betre, og kva tiltak tek vi med oss vidare.
                </p>
              </div>
            </summary>
            <div className="meeting-details">
              <p>Retro handlar om å:</p>
              <ul>
                <li>
                  Identifisere kva som har fungert bra og bør vidareførast
                </li>
                <li>Peike på utfordringar og ting som kan gjerast betre</li>
                <li>
                  Bli einige om konkrete tiltak som kan styrke samarbeidet,
                  prosessane eller arbeidsflyt framover
                </li>
              </ul>

              <p>
                Vi har eigne møte til planning og oppgåvegjennomføring. I retro
                held vi fokus på agendaen for nettopp desse møta. Også her har
                vi nokre rammer som vi har blitt einige om i teamet:
              </p>
              <ul>
                <li>Vi gir beskjed dersom vi ikkje kan komme</li>
                <li>Vi møter til tida og vi held oss til planlagt tid</li>
                <li>Vi er til stades i møtet og multitaskar ikkje</li>
                <li>
                  Vi held oss til agendaen og set opp dedikerte møte dersom det
                  er noko vi treng å diskutere
                </li>
                <li>
                  Alle i teamet eig oppgåvene og resultata våre saman, og alle
                  bidreg aktivt i møta våre
                </li>
              </ul>

              <p>
                Ansvarleg for å gjennomføre retro i prioritert rekkjefølgje:
              </p>
              <ol>
                <li>Øyvind (design lead)</li>
                <li>Sture (tech lead)</li>
              </ol>

              <h4>Agenda</h4>
              <ol>
                <li>
                  Den som leier retro, deler lenke til mirobrettet. Sjekk at
                  alle er inne. Lenke til{" "}
                  <a
                    href="https://miro.com/app/board/uXjVI_bN3p0=/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Miro
                  </a>
                  .
                </li>
                <li>
                  Gå gjennom aksjonspunkt frå sist retro. Er det noko herifrå
                  som teamet framleis skal jobbe med?
                </li>
                <li>
                  Kort intro: Minn på korleis vi gjer det, at alle fyller inn på
                  lappane der dei har noko. Set på timer i Miro – køyr!
                </li>
                <li>10–15 minutt kvar for oss, fyll inn på lappar.</li>
                <li>
                  Møteleiar går gjennom alle lappane per kategori. Alle får seie
                  noko om sine lappar. Pass på at det er tid til å snakke om
                  alle.
                </li>
                <li>
                  Møteleiar lagar aksjonspunkt på grunnlag av det som har kome
                  inn. Lista lagrast i retrofeltet i Miro, og sendast i chat til
                  deltakarane etter møtet. (Vurder om dette bør gjerast i
                  etterkant av møtet.)
                </li>
              </ol>
            </div>
          </details>

          <details className="meeting-accordion">
            <summary className="meeting-summary">
              <div className="meeting-summary-content">
                <h3>Backlog grooming</h3>
                <span className="meeting-frequency">2 gonger i månaden</span>
                <p>
                  Vi går gjennom backloggen, vurderer nye behov, prioriterer og
                  sikrar at oppgåvene er klare til å jobbast med.
                </p>
              </div>
            </summary>
            <div className="meeting-details">
              <p>Meir informasjon om backlog grooming kjem snart.</p>
            </div>
          </details>
        </section>

        <section className="page-section">
          <h2 id="om-nettsidene">Om nettsidene</h2>
          <p>
            Vi forvaltar fleire nettsider i Digdir-familien. Målet vårt er at
            alle sidene skal vere brukarvennlege, tilgjengelege og gi verdi for
            brukarane.
          </p>

          <div className="site-section">
            <h3>digdir.no</h3>
            <p>
              Hovudsida til Digitaliseringsdirektoratet. Her finn du informasjon
              om direktoratet, tenester og ressursar for digital transformasjon
              i offentleg sektor.
            </p>
          </div>

          <div className="site-section">
            <h3>uutilsynet.no</h3>
            <p>
              Nettsida til Tilsynet for universell utforming av ikt. Her finn du
              rettleiing, regelverk og ressursar om universell utforming.
            </p>
          </div>

          <div className="site-section">
            <h3>samarbeid.digdir.no</h3>
            <p>
              Samarbeidsportalen for offentleg sektor. Ein stad for deling av
              kunnskap, verktøy og erfaringar på tvers av offentlege verksemder.
            </p>
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
