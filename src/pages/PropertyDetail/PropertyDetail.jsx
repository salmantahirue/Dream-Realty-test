import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { getPropertyBySlug, properties } from "../../data/properties";
import PropertyHero from "../../components/PropertyHero/PropertyHero";
import PropertyStats from "../../components/PropertyStats/PropertyStats";
import ContactCard from "../../components/ContactCard/ContactCard";
import PropertyDescription from "../../components/PropertyDescription/PropertyDescription";
import "./PropertyDetail.css";

export default function PropertyDetail() {
  const { slug } = useParams();
  const property = getPropertyBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!property) {
    return (
      <div className="prop-detail__not-found">
        <h2>Property Not Found</h2>
        <p>The listing you're looking for doesn't exist or may have been removed.</p>
        <Link to="/buy">← Back to All Listings</Link>
      </div>
    );
  }

  return (
    <div className="prop-detail">
      {/* Full-width hero with address bar */}
      <PropertyHero property={property} />

      {/* Two-column body */}
      <div className="prop-detail__body">
        <div className="prop-detail__left">
          <PropertyDescription property={property} />
        </div>
        <div className="prop-detail__right">
          <PropertyStats property={property} />
          <ContactCard agent={property.agent} />
        </div>
      </div>
    </div>
  );
}

/* ── All Listings Page (/buy) ─────────────────────────────── */
const fmt = (n) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);

const MapPinIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

export function ListingsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="listings-page">
      <div className="listings-page__header">
        <p className="listings-page__eyebrow">Active Listings</p>
        <h1 className="listings-page__title">Properties for Sale</h1>
      </div>
      <div className="listings-page__grid">
        {properties.map((prop) => (
          <Link
            key={prop.id}
            to={`/buy/${prop.slug}`}
            style={{
              display: "block",
              background: "var(--white)",
              border: "1px solid var(--gray-200)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              boxShadow: "var(--shadow-sm)",
              textDecoration: "none",
              color: "inherit",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "var(--shadow-lg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = "var(--shadow-sm)";
            }}
          >
            <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
              <img
                src={prop.heroImage}
                alt={prop.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                loading="lazy"
              />
              <span style={{
                position: "absolute", top: 14, left: 14,
                background: "rgba(255,255,255,0.92)", backdropFilter: "blur(4px)",
                fontSize: 11, fontWeight: 700, color: "var(--gray-700)",
                padding: "4px 10px", borderRadius: 4,
              }}>
                {prop.propertyType}
              </span>
              <span style={{
                position: "absolute", bottom: 14, right: 14,
                background: "var(--green-800)", color: "white",
                fontSize: 15, fontWeight: 700,
                padding: "6px 14px", borderRadius: 6,
              }}>
                {fmt(prop.price)}
              </span>
            </div>
            <div style={{ padding: 20 }}>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--gray-900)", marginBottom: 6 }}>
                {prop.title}
              </h3>
              <p style={{ fontSize: 13, color: "var(--gray-500)", display: "flex", alignItems: "center", gap: 5, marginBottom: 14 }}>
                <MapPinIcon />
                {prop.address}, {prop.city}, {prop.state}
              </p>
              <div style={{ display: "flex", gap: 16, paddingTop: 14, borderTop: "1px solid var(--gray-100)", fontSize: 13, color: "var(--gray-600)", fontWeight: 500 }}>
                <span>{prop.beds} Beds</span>
                <span>{prop.baths} Baths</span>
                <span>{prop.sqft.toLocaleString()} sqft</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
