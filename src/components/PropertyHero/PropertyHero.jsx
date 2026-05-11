import { Link } from "react-router-dom";
import "./PropertyHero.css";

const MapPinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const fmt = (n) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);

export default function PropertyHero({ property }) {
  const { title, address, city, state, zipCode, price, beds, baths, sqft, heroImage, propertyType, neighborhood } = property;

  return (
    <section className="prop-hero">
      <div className="prop-hero__address-bar">
        {/* Breadcrumb */}
        <nav className="prop-hero__breadcrumb">
          <Link to="/">Home</Link>
          <span className="prop-hero__breadcrumb-sep">›</span>
          <Link to="/buy">Buy</Link>
          <span className="prop-hero__breadcrumb-sep">›</span>
          <span>{city}, {state}</span>
          <span className="prop-hero__breadcrumb-sep">›</span>
          <span>{title}</span>
        </nav>

        {/* Title row */}
        <div className="prop-hero__title-row">
          <h1 className="prop-hero__title">{title}</h1>
          <span className="prop-hero__badge">
            <span className="prop-hero__badge-dot" />
            Active Listing
          </span>
        </div>

        {/* Address search box */}
        <div className="prop-hero__search-box">
          <MapPinIcon className="prop-hero__search-icon" />
          <div>
            <span className="prop-hero__search-address">{address}</span>
            <span className="prop-hero__search-location">
              {city}, {state} {zipCode}
            </span>
          </div>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(`${address}, ${city}, ${state} ${zipCode}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="prop-hero__search-map-link"
          >
            <MapPinIcon style={{ width: 13, height: 13 }} />
            View on Map
          </a>
        </div>
      </div>

      {/* Hero image */}
      <div className="prop-hero__image-wrap">
        <img
          src={heroImage}
          alt={title}
          className="prop-hero__image"
        />
        <div className="prop-hero__image-overlay" />
        <div className="prop-hero__image-tag">
          <div className="prop-hero__image-stat">
            <span className="prop-hero__image-stat-val">{fmt(price)}</span>
            <span className="prop-hero__image-stat-label">List Price</span>
          </div>
          <div className="prop-hero__image-stat">
            <span className="prop-hero__image-stat-val">{beds}</span>
            <span className="prop-hero__image-stat-label">Beds</span>
          </div>
          <div className="prop-hero__image-stat">
            <span className="prop-hero__image-stat-val">{baths}</span>
            <span className="prop-hero__image-stat-label">Baths</span>
          </div>
          <div className="prop-hero__image-stat">
            <span className="prop-hero__image-stat-val">{sqft.toLocaleString()}</span>
            <span className="prop-hero__image-stat-label">Sq Ft</span>
          </div>
        </div>
      </div>
    </section>
  );
}
