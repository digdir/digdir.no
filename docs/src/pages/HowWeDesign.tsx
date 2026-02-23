import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/page.css";
import "../styles/process.css";

const steps = [
  {
    number: 1,
    title: "Idé / behov (inbox)",
    color: "#86efac",
    description:
      "I denne fasen fangar vi opp forslag, hypotesar eller problem som kan vere verdt å utforske. Hensikta er ikkje å ha løysinga klar, men å formulere eit behov eller ein tanke tydeleg nok til at teamet kan vurdere om det er noko som skal takast vidare.",
    formaal: [
      "Samle inn idear og behov frå heile organisasjonen.",
      "Ha ein felles forslagskø for teamet.",
      "Skape eit utgangspunkt for vidare prioritering og innsiktsinnhenting.",
    ],
    aktivitetar: [
      "Skriv kort og tydeleg inn i innboksen i GitHub.",
      "Inkluder korleis ein oppdaga eit event, og kvifor det er viktig.",
      "Skriv aktiv observasjon om det er verdt å utforske eller skipe.",
    ],
    kvenGjerKva: [
      "Ansvarleg: Alle i teamet og andre i Digdir. Det er ope for alle å melde inn idear eller behov.",
      "Bidragsytarar: Heile teamet går gjennom.",
    ],
    naarErViIMaal: [
      "Det er godt kategorisert med eit kort problem eller hypotese.",
      "Det fins nok informasjon til at teamet kan ta ei stilling til vidare utforsking.",
    ],
    tipsOgVerktoy: ["GitHub"],
    leveransar: ["Dokumentert kva, kvifor og antatt effekt."],
  },
  {
    number: 2,
    title: "Definere / vurdere",
    color: "#6ee7b7",
    description:
      "Oppgåver kan variere frå små justeringar til store satsingar. Vurderingsguiden gir teamet eit felles rammeverk for å bestemme kor grundig det skal jobbast, og om oppgåva skal handterast som eit enkelt task eller delast opp i ein epic med deloppgåver.",
    formaal: [
      "Avklare kor ambisiøst målet og testinga skal vere.",
      "Bestemme kapasiteten kan kor lang tid det skal delast opp i teamet.",
      "Sikre riktig kvalitetsnivå under store og mindre oppgåver.",
    ],
    aktivitetar: [
      "Marker oppgåva som ein epic med deloppgåver om den er stor nok.",
      "Bestemme omfanget av ei testing/oppgåve/evaluering.",
    ],
    resultat: [
      "Avgrensa tidsestimat i design/test.",
      "Bidragsytarar: Heile teamet går gjennom.",
    ],
    kvenGjerKva: ["Ansvarleg: Produkteigar i design/test vurderer."],
    naarErViIMaal: [
      "Har vi sikra risiko for insikt?",
      "Kva av påvirkning har oppgåva på brukarane?",
      "Kva stør påverkninga mot gjen team?",
      "Trenger vi å splitta oppgåva opp i fleire deloppgåver etter det har kome inn?",
    ],
    leveransar: [],
  },
  {
    number: 3,
    title: "Innsikt / research",
    color: "#5eead4",
    description:
      "I innsiktsfasen samlar vi data og snakkar med brukarar for å forstå behova deira. Målet er å byggje på dette before fremtidige anbefalingar og å avdekke kva problem me faktisk skal løyse.",
    formaal: [
      "Forstå ei kloke brukarane betre.",
      "Drøfte med brukarane for å fange opp problem eller ønske.",
      "Finne kva stør produktet til vidare i prioriteringa.",
    ],
    aktivitetar: [
      "Analyse av webdata.",
      "Brainstorming.",
      "Samtaleintervju og mot andre relevante nettsider (benchmarking).",
      "Workshops.",
    ],
    kvenGjerKva: [
      "Ansvarleg: Data og analyse.",
      "Bidragsytarar: Produkteigar stil for prioritering, design vurderer visuelt gjennomfør tester, og utvikling vurderer tekniske muligheter.",
    ],
    naarErViIMaal: [
      "Vi har ein dokumentert og gjenkjent oversikt over brukarinnsikter.",
      "Teamet er einige om kva fokus vi har i neste steg.",
    ],
    tipsOgVerktoy: [
      "Sitemeprove for webdata.",
      "Sitemeprove for webdata.",
      "Viss for innsamlingsgrupper og innholdsverif.",
    ],
    leveransar: ["Innhaldsforslag."],
  },
  {
    number: 4,
    title: "Konsept / skisse",
    color: "#93c5fd",
    description:
      "I konseptfasen utforskar vi korleis problemet kan løysast. Vi lagar enkle skisser og konseptforslag for å sjå på ulike moglegheiter før vi bestemmer oss for kva vi skal prototype eller teste vidare.",
    formaal: [
      "Utforske mogelege løysingar på behov me har identifisert.",
      "Skape eit felles forståing i teamet av korleis me kan angipe problemet.",
      "Ha nok alternativ og kreativitet for me gjér vidare.",
    ],
    aktivitetar: [
      "Lage lo-fi skisser digitalt.",
      "Lage eit fåtal forslag for å sile or idéar.",
      "Diskutere fordelane med ulike konsept.",
      "Velje ut kva ideer me testar vidare frå prototyping.",
    ],
    kvenGjerKva: [
      "Ansvarleg: Design viser skisseforslaget.",
      "Bidragsytarar: Heile teamet deltir i høvesfasen. Produkteigar knytjar til med produktplanlegging, utviklar vurderer moglegheiter.",
    ],
    naarErViIMaal: [
      "Vi har med eit konsept som er valt til prototyping.",
      "Teamet er einige at konsept som er verdt å teste vidare.",
    ],
    tipsOgVerktoy: ["Figma prototyping.", "Refit for vidareutvikling."],
    leveransar: [
      "Ein eller fleire konseptskisser for fil.",
      "Kort konseptdokumenterte (kva, kvar, kvifor).",
      "Dokumentert beskrivelse om kva konsept me testar vidare.",
    ],
  },
  {
    number: 5,
    title: "Prototype & test",
    color: "#a5b4fc",
    description:
      "I denne fasen gjér vi konseptet konkret gjennom ein prototype som kan testast med faktiske brukarar. Målet er å validere idear og innhente for vi legg tid og ressursar i utvikling. Vi testar kva som fungerer, og kva som må fikserast.",
    formaal: [
      "Validere at konseptet faktisk løyser brukarbehovet.",
      "Avdekke misforståingar, svakheiter og forbetringsmuligheiter.",
      "Redusere risikoen for å prototype funksj.",
    ],
    aktivitetar: [
      "Lage middels-/hi-fi prototype frå Figma, skisser og div behov.",
      "Gjennomføre smidibilitatstester (Intervention, observasjonsbasert).",
      "Samle funn og prioritere ei kort notat.",
    ],
    kvenGjerKva: ["Ansvarleg: Design leider arbeidet."],
    naarErViIMaal: [
      "Prototype er testa med faktiske brukarar.",
      "Vi har identifisert kva som at prototypen fungerer.",
      "Vi har beslutt nok ein hovenna side te of utviklingferdig design.",
    ],
    tipsOgVerktoy: [
      "Figma prototyping for raske klikbbare flows.",
      "Hotjar test kontroll oppsett (Kva du finne XP).",
      "Test tidleg og ofte. Små tester er betre enn ingen tester.",
    ],
    leveransar: [
      "Prototype-link (Figma).",
      "Testnotat med funn (kva, kvalitetar, alvorleghets omtrentleg).",
      "Beskriving om forbetringar som følgjer vidare i designarbeidet.",
    ],
  },
  {
    number: 6,
    title: "Design",
    color: "#c4b5fd",
    description:
      "I denne fasen lagar vi det faktiske designet som skal vidare til utvikling. Vi tar med oss læringane frå test- og prototypefasen og lagar eit ferdig design som Designsystemet. Vi dokumenterer funksjonalitet og brukarbehov slik at utvikling kan ta det vidare utan å måtte gjette seg fram til ting.",
    formaal: [
      "Gjere løysinga produksjonsrealistisk i visuell design.",
      "Sikre konsistens gjennom bruk av Designsystemet.",
      "Gje utviklerar tydlege rammer og beskrivelser.",
    ],
    aktivitetar: [
      "Gjere designet klar for utvikling med alle detaljar på plass.",
      "Reviwe med kompontent-bibl. frå Designsystemet.",
      "Sikre interaksjonar, blinking og redning innhølde.",
      "Modular tung snakk for vurdering på komponenttesting.",
      "Samarbeide med utvikling for å sikre gjenproduksfonalitet.",
      "Tenierer ei urinige for å lage gjenproduksjonalisering.",
    ],
    kvenGjerKva: [
      "Ansvarleg: Design bringer innover ferdig design.",
      "Bidragsytarar: Utvikling er ropt på design/produkter, produkteigar sikrer prioritering.",
    ],
    naarErViIMaal: [
      "Designet har komponenttestit ferits Designsystemet og der er mogleg.",
      "Designet er klart for implementering.",
      "Notat ving opp for å sikre gjennomproduksformslikeheitar.",
    ],
    leveransar: [
      "Satt opp design til implementering i Figma.",
      "Ferdig design i designet med einstemmtingsverifiseanse.",
    ],
  },
  {
    number: 7,
    title: "Implementering / utvikling",
    color: "#f0abfc",
    description:
      "I implementeringsfasen blir løysinga bygd i kode. Teamet sørgjer for at design, funksjonalitet og universell utforming blir ivareteke. Det er tett samarbeid mellom utvikling, design og produkteigar for å avklare spørsmål og sikre kvalitet.",
    formaal: [
      "Bygge og teste løysinga slik den er designa.",
      "Følge kvalitet, universell utforming og mentalmodell.",
      "Ferdigstille løysinga for utruling til produksjon.",
    ],
    aktivitetar: [
      "Loopande designrettleiing mellom skriva og designar.",
      "UU- og QA-sjekk (tilgjengelegheit, visjær inspsj).",
      "Dokumentere implementering der det er naudsynleg.",
    ],
    kvenGjerKva: [
      "Ansvarleg: Utvikling.",
      "Bidragsytarar: Design verfifiserer implementasjonen.",
    ],
    naarErViIMaal: [
      "Funksjonaliteter er ferdig utvikla og testa i testmiljø.",
      "UUI-krav WCAG er verifisert.",
      "Design har gitt grønt lys.",
    ],
    tipsOgVerktoy: ["Tenke for løpende avklaringer."],
    leveransar: [
      "Ferdig kode / testmiljø.",
      "Kodeinspisert godkjent av produkteigar/design.",
    ],
  },
  {
    number: 8,
    title: "Produksjon / utrulling",
    color: "#fda4af",
    description:
      "I denne fasen blir løysinga sett i drift. Brukarane får tilgang til funksjonaliteten, og vi sørgjer for at alle tekniske og kommunikaistve aspekt er på plass. Det er viktig å ha kontroll på kvaliteten og vere tydelege på kva som faktisk er lansert.",
    formaal: [
      "Gjere løysinga tilgjengeleg for brukarane.",
      "Sikre stabil drift og at utrullinga skjer trygt.",
      "Informere interne om endringar.",
    ],
    aktivitetar: [
      "Produksjon (deployment) til prod-miljø.",
      "Oppdatere dokumentasjon ved behov.",
    ],
    kvenGjerKva: ["Ansvarleg: Utvikling deployer."],
    naarErViIMaal: [
      "Endringa er synleg og tilgjengeleg i produksjon.",
      "Eventuelle kritiske feil er utslette «smoke check».",
      "Teamet er einige om at utrullinga er fullført.",
    ],
    tipsOgVerktoy: ["Tenke for løpande avklaringer."],
    leveransar: [
      "Endringane live i produksjon.",
      "Release notes for kort beskriving av kva som er endra.",
    ],
  },
  {
    number: 9,
    title: "Evaluering & læring",
    color: "#fdba74",
    description:
      "Etter at løysinga er lansert, må vi finne ut om ho faktisk fungerer slik vi hadde tenkt. Vi måler effekten opp mot hypotesane våre, samlar tilbakemeldingar og tek lærdom vidare. Dette gjer at vi kan kontinuerleg forbetre både løysinga og arbeidsprosessen.",
    formaal: [
      "Sjekke om løysinga oppfyller mål og hypotesar.",
      "Lære kva som fungerer, og kva som ber forbetrast.",
      "Sikre klarforbetring fordeling i produkt og prosess.",
    ],
    aktivitetar: [
      "Analysere bruk av løysinga (trafikk, klikk, fullføringsgrad).",
      "Sette opp brukertest plan om det er aktuelt.",
      "Sende tilbakesporingssjekk frå innhald eller nabo team oppgiftsve.",
      "Registrere ei kort retro- lærings kva gjekk bra og kva kan vi forbetre.",
      "Oppstrømmere tracking med forbetringsmagspunktane.",
    ],
    kvenGjerKva: [
      "Ansvarleg: Data/innsikt og analysyt.",
      "Bidragsytarar: Heile teamet i retro, produkt prioriterer neste steg.",
    ],
    naarErViIMaal: [
      "Vi er observert at overall resultate gir bra tone/svar.",
      "Beskriving til oppelert med neste forbetringsoppgåve.",
    ],
    tipsOgVerktoy: [
      "Sitemeprovefor data.",
      "Brukarintervju eller Hotjar for kvalitative tilbakemeldingar.",
      "Retrospektiv mal på Miro.",
      "Nytopplysungar legt inn i backlog.",
    ],
    leveransar: [
      "Evalueringsrapport / oppsummering.",
      "Ny oppgiftspostar i backlog.",
    ],
  },
];

export default function HowWeDesign() {
  const [openStep, setOpenStep] = useState<number | null>(null);

  return (
    <div className="page process-page">
      <p className="page-breadcrumb">
        <Link to="/designfundament">Nettsidehåndboka</Link> / Utviklingsprosess
      </p>
      <h1>Utviklingsprosess</h1>
      <p className="page-intro">
        Utviklingsprosessen vår er iterativ, forskingsdriven og djupt
        samarbeidsorientert. Her er dei ni stega vi følgjer frå idé til
        evaluering.
      </p>

      {/* Expanded detail cards */}
      <div className="process-timeline">
        {steps.map((step) => (
          <article
            key={step.number}
            className={`process-card ${openStep === step.number ? "process-card--open" : ""}`}
            style={
              {
                "--step-color": step.color,
                "--step-text-color": "#1e293b",
              } as React.CSSProperties
            }
          >
            <button
              className="process-card-header"
              onClick={() =>
                setOpenStep(openStep === step.number ? null : step.number)
              }
              aria-expanded={openStep === step.number}
            >
              <span className="process-card-number">{step.number}</span>
              <svg
                className={`process-card-chevron ${openStep === step.number ? "process-card-chevron--open" : ""}`}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 8l4 4 4-4" />
              </svg>
              <h2 className="process-card-title">{step.title}</h2>
            </button>

            {openStep === step.number && (
              <div className="process-card-body">
                <p className="process-card-desc">{step.description}</p>

                <div className="process-card-details">
                  {step.formaal && step.formaal.length > 0 && (
                    <div className="process-detail">
                      <h3>Formål</h3>
                      <ul>
                        {step.formaal.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {step.aktivitetar && step.aktivitetar.length > 0 && (
                    <div className="process-detail">
                      <h3>Aktivitetar</h3>
                      <ul>
                        {step.aktivitetar.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {step.kvenGjerKva && step.kvenGjerKva.length > 0 && (
                    <div className="process-detail">
                      <h3>Kven gjer kva</h3>
                      <ul>
                        {step.kvenGjerKva.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {step.naarErViIMaal && step.naarErViIMaal.length > 0 && (
                    <div className="process-detail">
                      <h3>Når er vi i mål?</h3>
                      <ul>
                        {step.naarErViIMaal.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {step.tipsOgVerktoy && step.tipsOgVerktoy.length > 0 && (
                    <div className="process-detail">
                      <h3>Tips & verktøy</h3>
                      <ul>
                        {step.tipsOgVerktoy.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {step.leveransar && step.leveransar.length > 0 && (
                    <div className="process-detail">
                      <h3>Leveransar</h3>
                      <ul>
                        {step.leveransar.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
