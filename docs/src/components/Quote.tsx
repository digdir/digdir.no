import type { ReactNode } from "react";
import "../styles/quote.css";

interface QuoteProps {
  children: ReactNode;
  author?: string;
}

export default function Quote({ children, author }: QuoteProps) {
  return (
    <figure className="quote">
      <div className="quote-icon">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11.1 13.29 11.1 15.3c0 1.061-.397 2.079-1.103 2.83a3.6 3.6 0 0 1-2.664 1.17 3.6 3.6 0 0 1-2.75-1.979zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.986.178 3.495 1.778 3.495 3.789 0 1.061-.397 2.079-1.103 2.83a3.6 3.6 0 0 1-2.664 1.17 3.6 3.6 0 0 1-2.75-1.979z" />
        </svg>
      </div>
      <blockquote className="quote-text">{children}</blockquote>
      {author && <figcaption className="quote-author">— {author}</figcaption>}
    </figure>
  );
}
