import "./PropertyDescription.css";

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const InfoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="8" x2="12" y2="12"/>
    <line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
);

const MapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/>
    <line x1="8" y1="2" x2="8" y2="18"/>
    <line x1="16" y1="6" x2="16" y2="22"/>
  </svg>
);

const HomeFeatureIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
    <polyline points="9,22 9,12 15,12 15,22"/>
  </svg>
);

const features = [
  "Open-concept floor plan",
  "Gourmet kitchen",
  "Smart home technology",
  "In-unit laundry",
  "Central air conditioning",
  "Private outdoor space",
  "Dedicated parking",
  "High-speed internet ready",
  "Energy efficient windows",
  "Premium finishes throughout",
];

export default function PropertyDescription({ property }) {
  const { description, neighborhoodDescription, address, city, state, zipCode } = property;

  const mapQuery = encodeURIComponent(`${address}, ${city}, ${state} ${zipCode}`);
  const googleMapsUrl = `https://maps.google.com/?q=${mapQuery}`;

  return (
    <div className="prop-desc">
      {/* About the property */}
      <div className="prop-desc__card">
        <h2 className="prop-desc__section-title">
          <span className="prop-desc__section-title-icon">
            <HomeFeatureIcon />
          </span>
          About This Property
        </h2>
        <div className="prop-desc__text">
          <p>{description}</p>
        </div>
      </div>

      {/* Key features */}
      <div className="prop-desc__card">
        <h2 className="prop-desc__section-title">
          <span className="prop-desc__section-title-icon">
            <CheckIcon />
          </span>
          Property Features
        </h2>
        <div className="prop-desc__features">
          {features.map((feat) => (
            <div key={feat} className="prop-desc__feature-item">
              <span className="prop-desc__feature-check">
                <CheckIcon />
              </span>
              {feat}
            </div>
          ))}
        </div>
      </div>

      {/* Neighborhood */}
      <div className="prop-desc__card prop-desc__neighborhood">
        <h2 className="prop-desc__section-title">
          <span className="prop-desc__section-title-icon">
            <InfoIcon />
          </span>
          About the Neighborhood
        </h2>
        <div className="prop-desc__text">
          <p>{neighborhoodDescription}</p>
        </div>

        {/* Map placeholder */}
        <div className="prop-desc__map-placeholder">
          <MapIcon />
          <p>Interactive map</p>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="prop-desc__map-link"
          >
            <MapIcon style={{ width: 14, height: 14 }} />
            Open in Google Maps →
          </a>
        </div>
      </div>
    </div>
  );
}
