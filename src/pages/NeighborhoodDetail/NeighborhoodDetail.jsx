import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { getNeighborhoodBySlug, neighborhoods } from "../../data/neighborhoods";
import "./NeighborhoodDetail.css";

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

export default function NeighborhoodDetail() {
  const { slug } = useParams();
  const nbhd = getNeighborhoodBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!nbhd) {
    return (
      <div className="nbhd__not-found">
        <h2>Neighborhood Not Found</h2>
        <p>The neighborhood you're looking for doesn't exist or may have been removed.</p>
        <Link to="/neighborhoods">← Back to All Neighborhoods</Link>
      </div>
    );
  }

  const statRows = Object.entries(nbhd.stats).map(([key, val]) => ({
    key: key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (s) => s.toUpperCase()),
    val,
  }));

  return (
    <div className="nbhd">
      {/* Header */}
      <div className="nbhd__header">
        <nav className="nbhd__breadcrumb">
          <Link to="/">Home</Link>
          <span className="nbhd__breadcrumb-sep">›</span>
          <Link to="/neighborhoods">Neighborhoods</Link>
          <span className="nbhd__breadcrumb-sep">›</span>
          <span>{nbhd.name}</span>
        </nav>
        <h1 className="nbhd__title">{nbhd.name}</h1>
      </div>

      {/* Body */}
      <div className="nbhd__body">
        {/* Left column */}
        <div className="nbhd__left">
          {/* Hero image */}
          <div className="nbhd__img-wrap">
            <img
              src={nbhd.heroImage}
              alt={nbhd.name}
              className="nbhd__img"
            />
            <span className="nbhd__img-badge">{nbhd.heroImageTag}</span>
            <span className="nbhd__img-caption">{nbhd.heroImageCaption}</span>
          </div>

          {/* Description */}
          <h2 className="nbhd__section-title">Neighborhood Description</h2>
          <p className="nbhd__desc-text">{nbhd.description}</p>
        </div>

        {/* Right column */}
        <div className="nbhd__right">
          {/* Key stats card */}
          <div className="nbhd__stats-card">
            <p className="nbhd__stats-card-title">Key Neighborhood Stats</p>
            {statRows.map(({ key, val }) => (
              <div key={key} className="nbhd__stat-row">
                <span className="nbhd__stat-key">{key}:</span>
                <span className="nbhd__stat-val">{val}</span>
              </div>
            ))}
          </div>

          {/* Contact card */}
          <div className="nbhd__contact-card">
            <p className="nbhd__contact-card-title">
              Contact {nbhd.agent.name}
            </p>
            <p className="nbhd__contact-card-desc">{nbhd.agent.specialty}</p>
            <div className="nbhd__contact-actions">
              <a
                href={`tel:${nbhd.agent.phone}`}
                className="nbhd__contact-btn nbhd__contact-btn--call"
              >
                <PhoneIcon />
                Call {nbhd.agent.phone}
              </a>
              <a
                href={`mailto:${nbhd.agent.email}`}
                className="nbhd__contact-btn nbhd__contact-btn--message"
              >
                <MailIcon />
                Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── All Neighborhoods List (/neighborhoods) ──────────────── */
export function NeighborhoodsListPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="nbhd-list">
      <p className="nbhd-list__eyebrow">Explore</p>
      <h1 className="nbhd-list__title">Our Neighborhoods</h1>
      <div className="nbhd-list__grid">
        {neighborhoods.map((n) => (
          <Link key={n.id} to={`/neighborhoods/${n.slug}`} className="nbhd-card">
            <img
              src={n.heroImage}
              alt={n.name}
              className="nbhd-card__img"
              loading="lazy"
            />
            <div className="nbhd-card__body">
              <p className="nbhd-card__name">{n.name}</p>
              <p className="nbhd-card__desc">{n.dropdownDesc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
