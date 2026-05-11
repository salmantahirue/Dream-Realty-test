import { useState } from "react";
import "./ContactCard.css";

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.03 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

export default function ContactCard({ agent }) {
  const [showPhone, setShowPhone] = useState(false);
  const initial = agent.name.charAt(0);

  return (
    <div className="contact-card">
      <div className="contact-card__header">
        <p className="contact-card__header-label">Your Agent</p>
      </div>

      <div className="contact-card__body">
        {/* Agent info */}
        <div className="contact-card__agent">
          {agent.avatar ? (
            <img
              src={agent.avatar}
              alt={agent.name}
              className="contact-card__avatar"
            />
          ) : (
            <div className="contact-card__avatar-fallback">{initial}</div>
          )}
          <div className="contact-card__agent-info">
            <p className="contact-card__agent-name">{agent.name}</p>
            <p className="contact-card__agent-title">{agent.title}</p>
            <p className="contact-card__agent-company">Dream Neighborhood Realty Co.</p>
          </div>
        </div>

        {/* Rating */}
        <div style={{ display: "flex", gap: 3, marginBottom: 20 }}>
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} style={{ width: 14, height: 14, color: "#f59e0b" }} />
          ))}
          <span style={{ fontSize: 12, color: "var(--gray-500)", marginLeft: 5 }}>
            5.0 · 48 reviews
          </span>
        </div>

        {/* Actions */}
        <div className="contact-card__actions">
          <a
            href={`tel:${agent.phone}`}
            className="contact-card__btn contact-card__btn--primary"
            onClick={() => setShowPhone(true)}
          >
            <PhoneIcon />
            {showPhone ? agent.phone : "Call Agent"}
          </a>

          <div className="contact-card__divider">or</div>

          <a
            href={`mailto:${agent.email}`}
            className="contact-card__btn contact-card__btn--secondary"
          >
            <MailIcon />
            Send Email
          </a>

          <a
            href="#schedule"
            className="contact-card__btn contact-card__btn--outline"
          >
            <CalendarIcon />
            Schedule a Tour
          </a>
        </div>
      </div>

      <div className="contact-card__footer">
        <p>
          <strong>Free consultation</strong> — no obligation to list or buy.
          <br />
          Licensed in FL & IL · MLS Member
        </p>
      </div>
    </div>
  );
}
