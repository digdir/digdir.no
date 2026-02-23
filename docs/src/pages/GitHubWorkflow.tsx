import { useEffect, useState } from "react";
import "../styles/page.css";
import "../styles/github-workflow.css";

const tocItems = [
  { id: "flyten", label: "Flyten i boardet" },
  { id: "prioritering", label: "Prioritering av epics" },
  { id: "labels", label: "Labels vi brukar" },
];

const labels = [
  {
    name: "accessibility",
    description: "Forbetringar eller problem knytt til universell utforming.",
  },
  {
    name: "admin",
    description: "Oppgåver knytt til prosjektstyring eller administrasjon.",
  },
  {
    name: "analytics",
    description: "Arbeid som involverer data, målingar eller innsikt.",
  },
  { name: "bug", description: "Noko fungerer ikkje som det skal." },
  {
    name: "content",
    description: "Innhaldsoppdateringar eller skriveoppdrag.",
  },
  { name: "feature", description: "Ny funksjonalitet eller eit nytt behov." },
  {
    name: "investigate",
    description:
      "Idear eller issues som treng nærare utforsking eller faktainnhenting før vi kan handle.",
  },
  {
    name: "security",
    description:
      "Sårbarheiter, risikoar eller forbetringar knytt til tryggleik.",
  },
];

const stageOptions = [
  {
    number: 1,
    name: "Idé / behov",
    color: "#86efac",
    description:
      "Behovet eller idéen er meldt inn i innboksen. Ikkje vurdert eller prioritert enno.",
  },
  {
    number: 2,
    name: "Definere / vurdere",
    color: "#6ee7b7",
    description:
      "Oppgåva er under vurdering — vi kartlegg omfang, ansvar og om det skal handterast som task eller epic.",
  },
  {
    number: 3,
    name: "Innsikt / research",
    color: "#5eead4",
    description:
      "Vi samlar data og snakkar med brukarar for å forstå behovet betre før vi bestemmer retning.",
  },
  {
    number: 4,
    name: "Konsept / skisse",
    color: "#93c5fd",
    description:
      "Vi utforskar ulike løysingsforslag gjennom enkle skisser og konsept.",
  },
  {
    number: 5,
    name: "Prototype & test",
    color: "#a5b4fc",
    description:
      "Vi testar konseptet med faktiske brukarar for å validere idear og avdekke svakheiter.",
  },
  {
    number: 6,
    name: "Design",
    color: "#c4b5fd",
    description:
      "Det ferdige designet vert laga og gjort klart for utvikling, med alle detaljar og komponentar på plass.",
  },
  {
    number: 7,
    name: "Implementering / utvikling",
    color: "#f0abfc",
    description:
      "Løysinga vert bygd i kode. Tett samarbeid mellom utvikling og design for å sikre kvalitet.",
  },
  {
    number: 8,
    name: "Produksjon / utrulling",
    color: "#fda4af",
    description: "Løysinga er sett i drift og tilgjengeleg for brukarane.",
  },
  {
    number: 9,
    name: "Evaluering & læring",
    color: "#fdba74",
    description:
      "Vi måler effekten av løysinga og tek lærdom vidare til neste iterasjon.",
  },
];

const columns = [
  {
    name: "Innboks",
    color: "#93c5fd",
    description:
      "Hit kjem alle nye behov, idéar og forbetringsforslag. Kven som helst kan melde inn ting her, og det er her vi startar vurderingsprosessen vår. Om ei oppgåve blir vurdert som relevant og viktig, flyttar vi den vidare til backlog. Om ikkje, lukkar vi den med ei grunngjeving.",
    limit: null,
  },
  {
    name: "Backlog",
    color: "#a5b4fc",
    description:
      "Behov vi har vurdert som relevante, men som ikkje er prioriterte til arbeid enno havnar i backlog.",
    limit: null,
  },
  {
    name: "Epics",
    color: "#c4b5fd",
    description:
      "Større satsingsområde som samlar fleire oppgåver under éin paraply. Vi held maks 3 aktive epics om gongen for å sikre fokus.",
    limit: 4,
  },
  {
    name: "Todo",
    color: "#86efac",
    description:
      "Oppgåver frå aktive epics som er klare til å jobbast med. Vi held maks 10 oppgåver her for å unngå overfylling.",
    limit: 10,
  },
  {
    name: "In Progress",
    color: "#fde68a",
    description:
      "Oppgåver som nokon aktivt jobbar med. Vi held maks 5 samtidige oppgåver for å sikre kvalitet og gjennomføring.",
    limit: 5,
  },
  {
    name: "Ready for Review",
    color: "#fdba74",
    description:
      "Oppgåver som er ferdig utvikla og klare for test og gjennomgang av teamet.",
    limit: null,
  },
  {
    name: "Tested OK",
    color: "#34d399",
    description:
      "Oppgåver som er testa og godkjende. Klare for utrulling til produksjon.",
    limit: null,
  },
  {
    name: "Evalutate",
    color: "#a78bfa",
    description:
      "Oppgåver som er rulla ut i produksjon, og som vi evaluerer effekten av. Vi ser på om behovet er løyst, og om det har skapt positive endringar for brukarane våre.",
    limit: null,
  },
  {
    name: "Done",
    color: "#d1d5db",
    description: "Ferdigstilte oppgåver som er rulla ut i produksjon.",
    limit: null,
  },
];

export default function GitHubWorkflow() {
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
    <div className="page github-workflow-page page-with-toc">
      <div className="page-main-content">
        <h1>Slik jobbar vi i GitHub</h1>
        <p className="page-intro">
          Vi brukar eit{" "}
          <a
            href="https://github.com/orgs/digdir/projects/49"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Board
          </a>{" "}
          for å organisere og prioritere arbeidet vårt. Boardet gir oss oversikt
          over kva som skjer, kva som er prioritert og kva som ventar. Her
          forklarar vi korleis flyten fungerer og korleis du kan melde inn
          behov.
        </p>

        {/* CTA box */}
        <div className="github-cta-box">
          <div className="github-cta-icon">
            <svg
              viewBox="0 0 24 24"
              width="32"
              height="32"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </div>
          <div className="github-cta-content">
            <p className="github-cta-heading">
              Har du eit behov, ein idé eller funne ein feil?
            </p>
            <p className="github-cta-desc">
              Meld det inn som eit issue i innboksen vår — enten det gjeld nye
              behov, forbetringsforslag eller bugs.
            </p>
          </div>
          <a
            href="https://github.com/digdir/digdir.no/issues/new/choose"
            target="_blank"
            rel="noopener noreferrer"
            className="github-cta-button"
          >
            Meld inn behov →
          </a>
        </div>

        {/* Board visualization */}
        <section className="page-section">
          <h2 id="flyten">Flyten i boardet</h2>
          <p>
            Oppgåver flyttar seg frå venstre mot høgre gjennom boardet etter
            kvart som dei blir vurderte, jobba med, testa og ferdigstilte. Vi
            set grenser for kor mange oppgåver som kan vere i kvar kolonne
            samtidig, slik at vi ikkje tek på oss for mykje på ein gong.
          </p>

          <div className="board-flow">
            {columns.map((col) => (
              <div
                key={col.name}
                className="board-column"
                style={{ backgroundColor: col.color + "30" }}
              >
                <div className="board-column-header">
                  <span className="board-column-name">{col.name}</span>
                </div>
                <p className="board-column-desc">{col.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Prioritering av epics */}
        <section className="page-section">
          <h2 id="prioritering">Korleis vi vurderer og prioriterer epics</h2>
          <p>
            For å sikre at vi jobbar med det som gir mest verdi, vurderer vi
            alle epics etter fire kriterium. Kvart kriterium får ein score frå 1
            til 5. Rangeringa blir brukt som beslutningsstøtte — ikkje som ein
            absolutt fasit. Fagleg skjønn og eksterne føringar kan også påverke
            prioriteringa.
          </p>

          <div className="criteria-grid">
            <div className="criteria-card">
              <div className="criteria-icon">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <div className="criteria-body">
                <h3>Brukarverdi</h3>
                <p className="criteria-question">
                  Kor stor verdi skapar denne epicen for kjernebrukarane våre?
                </p>
                <p>
                  Vurder i kva grad epicen løyser eit viktig problem, forbetrar
                  brukaren sin arbeidskvardag eller gir merkbar effekt for mange
                  brukarar.
                </p>
              </div>
            </div>

            <div className="criteria-card">
              <div className="criteria-icon">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div className="criteria-body">
                <h3>Målbidrag</h3>
                <p className="criteria-question">
                  Kor tydeleg bidreg epicen til å nå OKR og strategiske mål?
                </p>
                <p>
                  Vurder om epicen har direkte kopling til eitt eller fleire
                  Objectives, og om ho bidreg til målbar framgang.
                </p>
              </div>
            </div>

            <div className="criteria-card">
              <div className="criteria-icon">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <div className="criteria-body">
                <h3>Konsekvens ved å la vere</h3>
                <p className="criteria-question">
                  Kva skjer dersom vi ikkje gjennomfører denne epicen no?
                </p>
                <p>
                  Vurder risiko, negativ påverknad på brukarar, teknisk gjeld,
                  omdøme eller eksterne forpliktingar dersom arbeidet blir
                  utsett.
                </p>
              </div>
            </div>

            <div className="criteria-card">
              <div className="criteria-icon">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="criteria-body">
                <h3>Innsats</h3>
                <p className="criteria-question">
                  Kor krevjande er epicen å gjennomføre?
                </p>
                <p>
                  Vurder omfang, kompleksitet, avhengigheiter og ressursbruk.
                  Høg score betyr høg gjennomføringsinnsats.
                </p>
              </div>
            </div>
          </div>

          <h3 className="subsection-heading">Skala 1–5</h3>
          <div className="scale-list">
            <div className="scale-item">
              <span className="scale-badge scale-5">5</span>
              <div>
                <strong>Kritisk satsing</strong>
                <p>
                  Ei avgjerande forbetring som gir stor og målbar effekt, har
                  sterk kopling til mål og høg konsekvens om ho ikkje blir
                  gjennomført.
                </p>
              </div>
            </div>
            <div className="scale-item">
              <span className="scale-badge scale-4">4</span>
              <div>
                <strong>Svært viktig</strong>
                <p>
                  Gir betydeleg forbetring og støttar måla tydeleg, men er ikkje
                  akutt kritisk.
                </p>
              </div>
            </div>
            <div className="scale-item">
              <span className="scale-badge scale-3">3</span>
              <div>
                <strong>Viktig</strong>
                <p>
                  Gir tydeleg, men moderat forbetring og kan planleggjast utan
                  store konsekvensar.
                </p>
              </div>
            </div>
            <div className="scale-item">
              <span className="scale-badge scale-2">2</span>
              <div>
                <strong>Mindre viktig</strong>
                <p>Har avgrensa effekt eller låg strategisk betydning no.</p>
              </div>
            </div>
            <div className="scale-item">
              <span className="scale-badge scale-1">1</span>
              <div>
                <strong>Låg prioritet</strong>
                <p>Har liten effekt og kan trygt utsetjast.</p>
              </div>
            </div>
          </div>

          <h3 className="subsection-heading">
            Beregning av prioriteringsscore
          </h3>
          <div className="formula-box">
            <code className="formula">
              (Brukarverdi + Målbidrag + Konsekvens) – Innsats
            </code>
            <p>
              Formelen balanserer effekt mot gjennomføringskostnad, utan at
              store og viktige satsingar automatisk blir straffa for høg
              innsats. Scoren blir brukt til å rangere epics relativt mot
              kvarandre.
            </p>
          </div>

          <div className="note-box">
            <strong>Viktige presiseringar</strong>
            <ul>
              <li>5 skal brukast sjeldan.</li>
              <li>3 skal vere normalt nivå.</li>
              <li>
                Scoren er eit diskusjonsverktøy, ikkje ein automatisk
                beslutning.
              </li>
              <li>
                Eksterne krav eller kritiske feil kan prioriterast utanfor
                modellen.
              </li>
            </ul>
          </div>
        </section>

        {/* Labels */}
        <section className="page-section">
          <h2 id="labels">Labels og felt vi brukar</h2>
          <p>
            Vi brukar labels for å kategorisere issues i boardet. Alle issues
            bør ha minst éin relevant label.
          </p>

          <div className="label-list">
            {labels.map((label) => (
              <div key={label.name} className="label-row">
                <span className="label-chip">{label.name}</span>
                <span className="label-row-desc">{label.description}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Stage custom field */}
        <section className="page-section">
          <h3 id="stage">Stage-feltet</h3>
          <p>
            <strong>Stage</strong> er eit custom field i GitHub Projects som
            fortel kvar i utviklingsprosessen eit issue eller ein epic befinn
            seg. Det speglar dei ni stega i{" "}
            <a href="/designfundament/utviklingsprosess">
              utviklingsprosessen vår
            </a>{" "}
            og gjer det mogleg å filtrere og sortere boardet etter prosessfase,
            uavhengig av kva kolonne oppgåva ligg i.
          </p>

          <div className="stage-list">
            {stageOptions.map((stage) => (
              <div
                key={stage.number}
                className="stage-item"
                style={{
                  backgroundColor: stage.color + "30",
                  borderLeftColor: stage.color,
                }}
              >
                <span
                  className="stage-number"
                  style={{ backgroundColor: stage.color, color: "#1e293b" }}
                >
                  {stage.number}
                </span>
                <div className="stage-info">
                  <p className="stage-name">{stage.name}</p>
                  <p className="stage-desc">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <aside className="toc-sidebar">
        <nav className="toc-nav">
          <h3 className="toc-title">Innhald på sida</h3>
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
