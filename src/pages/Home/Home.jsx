import { Link } from "react-router-dom";
import { properties } from "../../data/properties";
import "./Home.css";

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const BedIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 9V4a1 1 0 011-1h18a1 1 0 011 1v5M2 20v-5a2 2 0 012-2h16a2 2 0 012 2v5M2 20h20M2 9h20"/>
  </svg>
);

const BathIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12h16a1 1 0 011 1v3a4 4 0 01-4 4H7a4 4 0 01-4-4v-3a1 1 0 011-1z"/>
    <path d="M6 12V5a2 2 0 012-2h3v2.25"/>
  </svg>
);

const RulerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 3H3a2 2 0 00-2 2v14a2 2 0 002 2h18a2 2 0 002-2V5a2 2 0 00-2-2z"/>
    <line x1="3" y1="9" x2="8" y2="9"/>
    <line x1="3" y1="15" x2="6" y2="15"/>
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const KeyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="15" r="5"/>
    <path d="M15.5 8.5l-4.47 4.47M19 5l-3.5 3.5M22 2l-3 3"/>
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const fmt = (n) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);

const whyItems = [
  {
    icon: <ShieldIcon />,
    title: "Trusted Expertise",
    text: "Over 20 years helping buyers and sellers navigate the real estate market with confidence and clarity.",
  },
  {
    icon: <KeyIcon />,
    title: "Exclusive Listings",
    text: "Access to premium off-market properties and insider knowledge of the best neighborhoods across the country.",
  },
  {
    icon: <StarIcon />,
    title: "White-Glove Service",
    text: "A dedicated agent from first showing to closing day — always available, always invested in your success.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="home-hero">
        <div className="home-hero__inner">
          <div className="home-hero__tag">
            <span className="home-hero__tag-dot" />
            Premier Real Estate Brokerage
          </div>
          <h1 className="home-hero__title">
            Find Your <span>Dream</span><br />Neighborhood
          </h1>
          <p className="home-hero__subtitle">
            Discover exceptional properties in America's most sought-after communities.
            From oceanfront escapes to urban penthouses — your perfect home awaits.
          </p>
          <Link to="/buy" className="home-hero__cta">
            Explore Listings
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>

          <div className="home-hero__stats">
            {[
              { val: "500+", label: "Properties Sold" },
              { val: "$2.4B", label: "Total Sales Volume" },
              { val: "98%", label: "Client Satisfaction" },
            ].map(({ val, label }) => (
              <div key={label}>
                <span className="home-hero__stat-val">{val}</span>
                <span className="home-hero__stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="home-listings">
        <div className="home-listings__header">
          <div>
            <p className="home-listings__eyebrow">Featured Properties</p>
            <h2 className="home-listings__title">Available Listings</h2>
          </div>
          <Link to="/buy" className="home-listings__view-all">
            View all listings →
          </Link>
        </div>

        <div className="home-listings__grid">
          {properties.map((prop) => (
            <Link
              key={prop.id}
              to={`/buy/${prop.slug}`}
              className="prop-card"
            >
              <div className="prop-card__img-wrap">
                <img
                  src={prop.heroImage}
                  alt={prop.title}
                  className="prop-card__img"
                  loading="lazy"
                />
                <span className="prop-card__type-badge">{prop.propertyType}</span>
                <span className="prop-card__price-badge">{fmt(prop.price)}</span>
              </div>
              <div className="prop-card__body">
                <h3 className="prop-card__title">{prop.title}</h3>
                <p className="prop-card__address">
                  <MapPinIcon />
                  {prop.address}, {prop.city}, {prop.state}
                </p>
                <div className="prop-card__stats">
                  <span className="prop-card__stat">
                    <BedIcon />
                    {prop.beds} Beds
                  </span>
                  <span className="prop-card__stat">
                    <BathIcon />
                    {prop.baths} Baths
                  </span>
                  <span className="prop-card__stat">
                    <RulerIcon />
                    {prop.sqft.toLocaleString()} sqft
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="home-why">
        <div className="home-why__inner">
          <p className="home-why__eyebrow">Why Choose Us</p>
          <h2 className="home-why__title">The Dream Neighborhood Difference</h2>
          <div className="home-why__grid">
            {whyItems.map(({ icon, title, text }) => (
              <div key={title} className="home-why__card">
                <div className="home-why__icon">{icon}</div>
                <h3 className="home-why__card-title">{title}</h3>
                <p className="home-why__card-text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <div className="home-footer__inner">
          <p className="home-footer__logo">
            Dream <span>Neighborhood</span> Realty Co.
          </p>
          <p className="home-footer__copy">
            © {new Date().getFullYear()} Dream Neighborhood Realty Co. All rights reserved. · Licensed Real Estate Broker
          </p>
        </div>
      </footer>
    </>
  );
}
