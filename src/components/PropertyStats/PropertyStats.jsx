import "./PropertyStats.css";

const BedIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 9V4a1 1 0 011-1h18a1 1 0 011 1v5"/>
    <path d="M2 20v-5a2 2 0 012-2h16a2 2 0 012 2v5"/>
    <path d="M2 20h20M2 9h20"/>
    <rect x="7" y="9" width="4" height="5" rx=".5"/>
    <rect x="13" y="9" width="4" height="5" rx=".5"/>
  </svg>
);

const BathIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12h16a1 1 0 011 1v3a4 4 0 01-4 4H7a4 4 0 01-4-4v-3a1 1 0 011-1z"/>
    <path d="M6 12V5a2 2 0 012-2h3v2.25"/>
    <line x1="4" y1="20" x2="4" y2="22"/>
    <line x1="20" y1="20" x2="20" y2="22"/>
  </svg>
);

const RulerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 3H3a2 2 0 00-2 2v14a2 2 0 002 2h18a2 2 0 002-2V5a2 2 0 00-2-2z"/>
    <line x1="3" y1="9" x2="8" y2="9"/>
    <line x1="3" y1="15" x2="6" y2="15"/>
    <line x1="3" y1="12" x2="10" y2="12"/>
    <line x1="15" y1="3" x2="15" y2="8"/>
    <line x1="12" y1="3" x2="12" y2="10"/>
    <line x1="9" y1="3" x2="9" y2="6"/>
    <line x1="18" y1="3" x2="18" y2="6"/>
    <line x1="21" y1="9" x2="16" y2="9"/>
  </svg>
);

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
    <polyline points="9,22 9,12 15,12 15,22"/>
  </svg>
);

const fmt = (n) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);

export default function PropertyStats({ property }) {
  const { price, beds, baths, sqft, propertyType, lotSize, yearBuilt, location } = property;
  const pricePerSqft = Math.round(price / sqft);

  return (
    <aside className="prop-stats">
      {/* Price header */}
      <div className="prop-stats__price-header">
        <p className="prop-stats__price-label">List Price</p>
        <p className="prop-stats__price">{fmt(price)}</p>
        <p className="prop-stats__price-sub">{fmt(pricePerSqft)} / sq ft</p>
        <span className="prop-stats__price-tag">For Sale</span>
      </div>

      {/* Key stats grid */}
      <div className="prop-stats__grid">
        <div className="prop-stats__cell">
          <div className="prop-stats__cell-icon"><BedIcon /></div>
          <div className="prop-stats__cell-info">
            <span className="prop-stats__cell-val">{beds}</span>
            <span className="prop-stats__cell-label">Bedrooms</span>
          </div>
        </div>
        <div className="prop-stats__cell">
          <div className="prop-stats__cell-icon"><BathIcon /></div>
          <div className="prop-stats__cell-info">
            <span className="prop-stats__cell-val">{baths}</span>
            <span className="prop-stats__cell-label">Bathrooms</span>
          </div>
        </div>
        <div className="prop-stats__cell">
          <div className="prop-stats__cell-icon"><RulerIcon /></div>
          <div className="prop-stats__cell-info">
            <span className="prop-stats__cell-val">{sqft.toLocaleString()}</span>
            <span className="prop-stats__cell-label">Square Feet</span>
          </div>
        </div>
        <div className="prop-stats__cell">
          <div className="prop-stats__cell-icon"><HomeIcon /></div>
          <div className="prop-stats__cell-info">
            <span className="prop-stats__cell-val" title={propertyType}>{propertyType}</span>
            <span className="prop-stats__cell-label">Property Type</span>
          </div>
        </div>
      </div>

      {/* Additional details */}
      <div className="prop-stats__details">
        <p className="prop-stats__details-title">Property Details</p>
        {[
          { key: "Lot Size", val: lotSize },
          { key: "Year Built", val: yearBuilt },
          { key: "Price/Sq Ft", val: fmt(pricePerSqft) },
          { key: "Location", val: location },
        ].map(({ key, val }) => (
          <div key={key} className="prop-stats__detail-row">
            <span className="prop-stats__detail-key">{key}</span>
            <span className="prop-stats__detail-val">{val}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}
