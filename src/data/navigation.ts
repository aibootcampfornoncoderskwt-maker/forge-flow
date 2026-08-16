export type MenuLink = { label: string; to: string; params?: Record<string, string> };
export type MenuGroup = { heading: string; links: MenuLink[] };

export const productMenu: MenuGroup[] = [
  {
    heading: "Material Handling Equipment",
    links: [
      { label: "Diesel Forklifts", to: "/products/$slug", params: { slug: "diesel-forklifts" } },
      { label: "LPG / Petrol Forklift Trucks", to: "/products/$slug", params: { slug: "lpg-petrol-forklift-trucks" } },
      { label: "Internal Combustion Forklifts", to: "/products/$slug", params: { slug: "internal-combustion-forklifts" } },
      { label: "Electric Counterbalance Trucks", to: "/products/$slug", params: { slug: "electric-counterbalance-trucks" } },
      { label: "Electric Reach Trucks", to: "/products/$slug", params: { slug: "electric-reach-trucks" } },
      { label: "Electric High Lift Order Pickers", to: "/products/$slug", params: { slug: "electric-high-lift-order-pickers" } },
    ],
  },
  {
    heading: "Stackers & Pallet Handling",
    links: [
      { label: "Electric Tri-Lateral Stackers / VNA", to: "/products/$slug", params: { slug: "electric-tri-lateral-stackers" } },
      { label: "Electric Stackers", to: "/products/$slug", params: { slug: "electric-stackers" } },
      { label: "Electric Pedestrian Pallet Trucks", to: "/products/$slug", params: { slug: "electric-pedestrian-pallet-trucks" } },
      { label: "Hand Pallet Jacks", to: "/products/$slug", params: { slug: "hand-pallet-jacks" } },
      { label: "Electric Platform Scissor Lifts", to: "/products/$slug", params: { slug: "electric-platform-scissor-lifts" } },
    ],
  },
  {
    heading: "Warehouse Equipment",
    links: [
      { label: "Conveyor Systems", to: "/services/$slug", params: { slug: "warehouse-conveyor-installation" } },
      { label: "Warehouse Support Equipment", to: "/solutions" },
      { label: "All Equipment", to: "/products" },
    ],
  },
];

export const serviceMenu: MenuGroup[] = [
  {
    heading: "Forklift Services",
    links: [
      { label: "Forklift Repair", to: "/services/$slug", params: { slug: "forklift-repair" } },
      { label: "Preventive Maintenance", to: "/services/$slug", params: { slug: "preventive-maintenance" } },
      { label: "Electric Forklift Service", to: "/services/$slug", params: { slug: "electric-forklift-service" } },
      { label: "Diesel Forklift Service", to: "/services/$slug", params: { slug: "diesel-forklift-service" } },
      { label: "LPG Forklift Service", to: "/services/$slug", params: { slug: "lpg-forklift-service" } },
    ],
  },
  {
    heading: "Industrial Services",
    links: [
      { label: "Industrial Dock & Door Service", to: "/services/$slug", params: { slug: "industrial-dock-and-door-service" } },
      { label: "Warehouse Conveyor Installation", to: "/services/$slug", params: { slug: "warehouse-conveyor-installation" } },
      { label: "CCTV Installation", to: "/services/$slug", params: { slug: "cctv-installation" } },
      { label: "Building Management Systems", to: "/services/$slug", params: { slug: "building-management-systems" } },
      { label: "PVC Cold Room Curtains", to: "/services/$slug", params: { slug: "pvc-cold-room-curtains" } },
    ],
  },
  {
    heading: "Warehouse Technology",
    links: [
      { label: "Warehouse Inventory Solutions", to: "/services/$slug", params: { slug: "warehouse-inventory-solutions" } },
      { label: "Warehouse Management (WMS)", to: "/services/$slug", params: { slug: "wms" } },
      { label: "Warehouse Control (WCS)", to: "/services/$slug", params: { slug: "wcs" } },
    ],
  },
];

export const partsMenu: MenuGroup[] = [
  {
    heading: "Spare Parts",
    links: [
      { label: "Forklift Spare Parts", to: "/spare-parts", hash: "forklift-spare-parts" } as MenuLink,
      { label: "Material Handling Parts", to: "/spare-parts" },
      { label: "Maintenance Parts", to: "/spare-parts" },
    ],
  },
  {
    heading: "Power & Charging",
    links: [
      { label: "Forklift Batteries", to: "/spare-parts" },
      { label: "Forklift Chargers", to: "/spare-parts" },
      { label: "Electrical Components", to: "/spare-parts" },
    ],
  },
  {
    heading: "Wear Parts",
    links: [
      { label: "Industrial Tyres", to: "/spare-parts" },
      { label: "Parts Enquiry", to: "/contact" },
    ],
  },
];
