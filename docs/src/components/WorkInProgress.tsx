import "../styles/work-in-progress.css";

export default function WorkInProgress() {
  return (
    <div className="wip-banner" role="status">
      <div className="wip-icon">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 9v4" />
          <path d="M12 17h.01" />
          <path d="M15.312 2H8.688a1 1 0 0 0-.707.293L2.293 7.981a1 1 0 0 0-.293.707v6.624a1 1 0 0 0 .293.707l5.688 5.688a1 1 0 0 0 .707.293h6.624a1 1 0 0 0 .707-.293l5.688-5.688a1 1 0 0 0 .293-.707V8.688a1 1 0 0 0-.293-.707L16.02 2.293A1 1 0 0 0 15.312 2z" />
        </svg>
      </div>
      <div className="wip-content">
        <strong className="wip-title">Dette innlegget er under arbeid</strong>
        <p className="wip-description">
          Innhaldet på denne sida er ikkje ferdigstilt enno. Vi jobbar med å
          fullføre det og kan gjere endringar undervegs.
        </p>
      </div>
    </div>
  );
}
