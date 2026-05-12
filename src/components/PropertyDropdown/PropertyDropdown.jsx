import { Link } from "react-router-dom";
import { neighborhoods } from "../../data/neighborhoods";
import "./PropertyDropdown.css";

export function PropertyDropdown({ properties }) {
  const fmt = (n) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(n);

  return (
    <div className="dropdown">
      <p className="dropdown__header">Featured Properties</p>

      {properties.map((prop) => (
        <Link
          key={prop.id}
          to={`/buy/${prop.slug}`}
          className="dropdown__item"
        >
          <img
            src={prop.thumbnail}
            alt={prop.title}
            className="dropdown__thumb"
            loading="lazy"
          />
          <div className="dropdown__info">
            <p className="dropdown__title">{prop.title}</p>
            <p className="dropdown__location">
              {prop.address}, {prop.city}, {prop.state}
            </p>
            <p className="dropdown__price">{fmt(prop.price)}</p>
          </div>
        </Link>
      ))}

      <div className="dropdown__footer">
        <Link to="/buy" className="dropdown__view-all">
          View all listings →
        </Link>
      </div>
    </div>
  );
}

export function NeighborhoodsDropdown() {
  return (
    <div className="dropdown dropdown--neighborhoods">
      <p className="dropdown__header">Explore Neighborhoods</p>

      {neighborhoods.map((n) => (
        <Link
          key={n.id}
          to={`/neighborhoods/${n.slug}`}
          className="dropdown__item"
        >
          <div className="dropdown__info">
            <p className="dropdown__neighborhood-name">{n.name}</p>
            <p className="dropdown__neighborhood-desc">
              {n.city}, {n.state} · {n.dropdownDesc}
            </p>
          </div>
        </Link>
      ))}

      <div className="dropdown__footer">
        <Link to="/neighborhoods" className="dropdown__view-all">
          View all neighborhoods →
        </Link>
      </div>
    </div>
  );
}
