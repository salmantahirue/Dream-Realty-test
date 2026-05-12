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
    slug: "lincoln-park-il",
    name: "Lincoln Park, IL",
    city: "Chicago",
    state: "IL",
    dropdownDesc: "Urban sophistication by the lakefront",
    heroImage:
      "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=1200&q=80",
    heroImageCaption: "Chicago's lakefront gem — Lincoln Park neighborhood",
    heroImageTag: "Aerial View",
    stats: {
      type: "Urban Lakefront",
      primaryAppeal: "Luxury Homes & Culture",
      medianHomeValue: "$1,200,000+",
      features: "Park access, top-rated schools",
      nearestCity: "Downtown Chicago (15 min)",
    },
    description:
      "Lincoln Park is one of Chicago's most desirable neighborhoods, offering the perfect blend of urban sophistication and natural beauty. Bordered by Lincoln Park — the city's largest park — and the stunning Lake Michigan shoreline, residents enjoy world-class museums, the Lincoln Park Zoo, acclaimed restaurants, and boutique shopping along Armitage and Halsted Streets. The neighborhood features beautiful greystones, vintage coach houses, and modern luxury developments. With excellent schools, a thriving dining scene, and direct lakefront access, Lincoln Park consistently ranks among the top neighborhoods in the entire Midwest.",
    agent: {
      name: "Emily Chen",
      phone: "(312) 555-0223",
      email: "emily.chen@dreamneighborhood.com",
      specialty:
        "Dream Neighborhood Realty Co. specialist for Lincoln Park and lakefront properties.",
    },
  },
];

export const getNeighborhoodBySlug = (slug) =>
  neighborhoods.find((n) => n.slug === slug);
