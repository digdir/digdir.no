import type { ReactNode } from "react";
import "../styles/user-feedback.css";

interface UserFeedbackProps {
  children: ReactNode;
}

export default function UserFeedback({ children }: UserFeedbackProps) {
  return (
    <div className="user-feedback">
      <div className="user-feedback-header">
        <svg
          className="user-feedback-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        <span>Tilbakemelding frå brukartest</span>
      </div>
      <div className="user-feedback-body">{children}</div>
    </div>
  );
}
