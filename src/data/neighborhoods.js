export const neighborhoods = [
  {
    id: 1,
    slug: "south-hutchinson-island-fl",
    name: "South Hutchinson Island, FL",
    city: "Fort Pierce",
    state: "FL",
    dropdownDesc: "Pristine beaches & waterfront living",
    heroImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    heroImageCaption: "Barrier island paradise along Florida's Treasure Coast",
    heroImageTag: "Aerial View",
    stats: {
      type: "Barrier Island",
      primaryAppeal: "Beaches & Boating",
      medianHomeValue: "$850,000+",
      access: "Indian River Lagoon + Atlantic",
      nearestCity: "Vero Beach / Fort Pierce",
    },
    description:
      "South Hutchinson Island is a beautiful barrier island on Florida's Treasure Coast, celebrated for its pristine white-sand beaches, protected dunes, and rich marine ecosystem. This exclusive community offers residents direct access to the Atlantic Ocean and the Indian River Lagoon, making it a paradise for water sports enthusiasts, fishermen, and nature lovers. With low-density development, luxury waterfront homes, and a serene atmosphere, it provides the perfect balance of privacy and convenience, located just minutes from Vero Beach's cultural attractions and Fort Pierce's amenities.",
    agent: {
      name: "Sarah Johnson",
      phone: "(772) 555-0142",
      email: "sarah.johnson@dreamneighborhood.com",
      specialty:
        "Dream Neighborhood Realty Co. specialist for Treasure Coast barrier islands.",
    },
  },
  {
    id: 2,
    slug: "south-beach-fl",
    name: "South Beach, FL",
    city: "Miami Beach",
    state: "FL",
    dropdownDesc: "Art Deco luxury & vibrant nightlife",
    heroImage:
      "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?w=1200&q=80",
    heroImageCaption: "Iconic Art Deco architecture along Ocean Drive",
    heroImageTag: "Aerial View",
    stats: {
      type: "Urban Beachfront",
      primaryAppeal: "Luxury Condos & Nightlife",
      medianHomeValue: "$1,800,000+",
      access: "Atlantic Ocean + Biscayne Bay",
      nearestCity: "Downtown Miami (10 min)",
    },
    description:
      "South Beach is Miami's most iconic neighborhood, renowned worldwide for its Art Deco architecture, vibrant nightlife, and stunning white-sand beaches. The area offers an unmatched lifestyle with luxury boutique hotels, Michelin-starred restaurants, high-end shopping on Lincoln Road, and the world-famous Ocean Drive strip. Residents enjoy a perfect blend of culture, cuisine, and coastal living with a Walk Score of 97. From sunrise yoga on the beach to late-night dining at celebrity chef restaurants, South Beach delivers an extraordinary quality of life year-round.",
    agent: {
      name: "Miguel Fernandez",
      phone: "(305) 555-0187",
      email: "miguel.fernandez@dreamneighborhood.com",
      specialty:
        "Dream Neighborhood Realty Co. specialist for Miami Beach luxury properties.",
    },
  },
  {
    id: 3,
    slug: "melbourne-fl",
    name: "6165 Isla St, Melbourne, FL",
    city: "Melbourne",
    state: "FL",
    dropdownDesc: "Space Coast waterfront living",
    heroImage:
      "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=1200&q=80",
    heroImageCaption: "Waterfront living on Florida's Space Coast",
    heroImageTag: "Aerial View",
    stats: {
      type: "Waterfront City",
      primaryAppeal: "Luxury Homes & Beaches",
      medianHomeValue: "$950,000+",
      access: "Indian River Lagoon + Atlantic",
      nearestCity: "Orlando (60 min)",
    },
    description:
      "Melbourne is one of Florida's most vibrant Space Coast cities, offering the perfect blend of waterfront living, cultural attractions, and outdoor adventure. Residents enjoy easy access to the Indian River Lagoon, pristine Atlantic beaches, and a thriving downtown arts and dining scene. The city is home to top-rated schools, major employers including aerospace and technology firms, and a strong sense of community. With year-round sunshine, world-class fishing, and proximity to Kennedy Space Center, Melbourne delivers an extraordinary quality of life on Florida's beautiful Treasure Coast.",
    agent: {
      name: "Emily Chen",
      phone: "(321) 555-0223",
      email: "emily.chen@dreamneighborhood.com",
      specialty:
        "Dream Neighborhood Realty Co. specialist for Melbourne and Space Coast waterfront properties.",
    },
  },
];

export const getNeighborhoodBySlug = (slug) =>
  neighborhoods.find((n) => n.slug === slug);
