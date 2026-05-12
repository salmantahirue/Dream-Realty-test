export const properties = [
  {
    id: 1,
    slug: "3500-n-a1a-fort-pierce-fl",
    title: "Oceanfront Beach Home",
    address: "3500 N A1A",
    city: "Fort Pierce",
    state: "FL",
    zipCode: "34949",
    price: 875000,
    beds: 4,
    baths: 3,
    sqft: 2850,
    propertyType: "Single Family Home",
    lotSize: "0.35 acres",
    yearBuilt: 2018,
    location: "Fort Pierce, FL 34949",
    neighborhood: "South Hutchinson Island, FL",
    description:
      "Welcome to this stunning oceanfront paradise located on the beautiful A1A corridor in Fort Pierce, Florida. This meticulously maintained 4-bedroom, 3-bathroom home offers breathtaking Atlantic Ocean views from multiple living areas. The open-concept kitchen features granite countertops, stainless steel appliances, and a large island perfect for entertaining. Step outside to your private pool deck and enjoy direct beach access just steps away. The master suite boasts panoramic ocean views, a spa-like bathroom, and a private balcony. Additional features include hurricane-impact windows, a 3-car garage, and a fully landscaped yard with tropical palms.",
    neighborhoodDescription:
      "South Hutchinson Island is a sought-after barrier island community known for its pristine beaches, lush nature preserves, and upscale waterfront living. Residents enjoy easy access to Fort Pierce Inlet State Park, world-class fishing, boating, and the vibrant dining scene of historic downtown Fort Pierce. Top-rated schools, low HOA fees, and a tight-knit community make this one of Florida's best-kept secrets for waterfront living.",
    agent: {
      name: "Sarah Johnson",
      phone: "(772) 555-0142",
      email: "sarah.johnson@dreamneighborhood.com",
      title: "Senior Real Estate Agent",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    heroImage:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&q=80",
  },
  {
    id: 2,
    slug: "120-ocean-dr-miami-beach-fl",
    title: "Art Deco Ocean Drive Residence",
    address: "120 Ocean Dr",
    city: "Miami Beach",
    state: "FL",
    zipCode: "33139",
    price: 2150000,
    beds: 3,
    baths: 2.5,
    sqft: 1950,
    propertyType: "Luxury Condo",
    lotSize: "N/A",
    yearBuilt: 2020,
    location: "Miami Beach, FL 33139",
    neighborhood: "South Beach",
    description:
      "Experience the pinnacle of Miami Beach luxury living in this stunning Art Deco-inspired residence on iconic Ocean Drive. This fully renovated 3-bedroom condo offers floor-to-ceiling windows with unobstructed ocean views, a gourmet kitchen with Italian cabinetry, and designer finishes throughout. The open living area seamlessly flows to a wrap-around balcony overlooking the azure Atlantic. Building amenities include a rooftop pool, state-of-the-art fitness center, 24-hour concierge, and two secure parking spaces. Steps from world-class dining, nightlife, and the famous South Beach boardwalk.",
    neighborhoodDescription:
      "South Beach is Miami's most iconic neighborhood, known worldwide for its Art Deco architecture, vibrant nightlife, and beautiful sandy beaches. The area offers an unmatched lifestyle with luxury hotels, world-renowned restaurants, high-end boutiques, and the famous Ocean Drive strip just outside your door. With a Walk Score of 97, everything you need is within easy reach.",
    agent: {
      name: "Miguel Fernandez",
      phone: "(305) 555-0187",
      email: "miguel.fernandez@dreamneighborhood.com",
      title: "Luxury Property Specialist",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    heroImage:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80",
  },
  {
    id: 3,
    slug: "6165-isla-st-melbourne-fl",
    title: "Lakefront Luxury Penthouse",
    address: "6165 Isla St",
    city: "Melbourne",
    state: "FL",
    zipCode: "32935",
    price: 3200000,
    beds: 5,
    baths: 4,
    sqft: 4200,
    propertyType: "Penthouse",
    lotSize: "N/A",
    yearBuilt: 2015,
    location: "Melbourne, FL 32935",
    neighborhood: "Melbourne, FL",
    description:
      "Perched atop one of Melbourne's most prestigious waterfront addresses, this extraordinary penthouse offers an unparalleled living experience with panoramic views of the Indian River Lagoon and the Florida coastline. Spanning 4,200 square feet, the residence features 5 bedrooms, 4 bathrooms, and a private rooftop terrace. The chef's kitchen is equipped with top-of-the-line Sub-Zero and Wolf appliances, custom cabinetry, and a climate-controlled wine cellar. The master suite includes a fireplace, dual walk-in closets, and a marble spa bathroom. Additional highlights include a private elevator, smart home technology throughout, and four dedicated parking spaces.",
    neighborhoodDescription:
      "Melbourne is one of Florida's most vibrant Space Coast cities, offering the perfect blend of waterfront living, cultural attractions, and outdoor adventure. Residents enjoy easy access to the Indian River Lagoon, pristine Atlantic beaches, the Melbourne Orlando International Airport, and a thriving downtown arts and dining scene.",
    agent: {
      name: "Emily Chen",
      phone: "(321) 555-0223",
      email: "emily.chen@dreamneighborhood.com",
      title: "Luxury Real Estate Advisor",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80",
  },
];

export const getPropertyBySlug = (slug) =>
  properties.find((p) => p.slug === slug);
