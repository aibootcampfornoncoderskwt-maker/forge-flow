import reachTruck from "@/assets/equipment-reach-truck.jpg";
import warehouse from "@/assets/hero-warehouse.jpg";
import rental from "@/assets/rental-fleet.jpg";
import conveyor from "@/assets/warehouse-systems.jpg";

export type ProductFilter =
  | "Forklifts"
  | "Electric Equipment"
  | "Stackers"
  | "Pallet Trucks"
  | "Reach Trucks"
  | "Order Picking"
  | "Access Equipment";

export type Product = {
  slug: string;
  title: string;
  category: string;
  filter: ProductFilter;
  short: string;
  overview: string;
  applications: string[];
  image: string;
  related: string[];
};

export const products: Product[] = [
  {
    slug: "diesel-forklifts",
    title: "Diesel Forklifts",
    category: "Internal Combustion",
    filter: "Forklifts",
    short: "Diesel counterbalance forklifts for outdoor yards, ports and heavy handling duty.",
    overview:
      "Diesel forklift trucks for operations that handle loads outdoors or across mixed surfaces. Suited to yards, open storage areas and industrial sites where continuous running and refuelling flexibility are practical requirements.",
    applications: ["Outdoor yards", "Container and port handling", "Construction material storage", "Heavy industrial sites"],
    image: warehouse,
    related: ["lpg-petrol-forklift-trucks", "internal-combustion-forklifts", "electric-counterbalance-trucks"],
  },
  {
    slug: "lpg-petrol-forklift-trucks",
    title: "LPG / Petrol Forklift Trucks",
    category: "Internal Combustion",
    filter: "Forklifts",
    short: "Gas and petrol powered forklift trucks for mixed indoor and outdoor duty cycles.",
    overview:
      "LPG and petrol forklift trucks give operations a flexible alternative where charging infrastructure is limited and equipment moves between indoor and covered outdoor areas.",
    applications: ["Mixed indoor / outdoor duty", "Multi-shift operations", "Distribution yards", "Manufacturing support"],
    image: warehouse,
    related: ["diesel-forklifts", "internal-combustion-forklifts", "electric-counterbalance-trucks"],
  },
  {
    slug: "internal-combustion-forklifts",
    title: "Internal Combustion Forklifts",
    category: "Internal Combustion",
    filter: "Forklifts",
    short: "IC forklift range covering general goods handling across industrial environments.",
    overview:
      "Internal combustion forklift trucks for general goods movement where run time and refuelling speed matter more than indoor emissions control.",
    applications: ["Industrial storage", "Loading and unloading", "Yard logistics", "Factory support"],
    image: warehouse,
    related: ["diesel-forklifts", "lpg-petrol-forklift-trucks", "electric-counterbalance-trucks"],
  },
  {
    slug: "electric-high-lift-order-pickers",
    title: "Electric High Lift Order Pickers",
    category: "Order Picking",
    filter: "Order Picking",
    short: "Operator-elevating trucks for case and item picking at height.",
    overview:
      "High lift order pickers raise the operator with the load platform so picking can be carried out directly at rack level. Suited to warehouses running case-level or item-level picking from multi-level racking.",
    applications: ["Case picking", "Multi-level racking", "Distribution centres", "Retail replenishment"],
    image: reachTruck,
    related: ["electric-reach-trucks", "electric-tri-lateral-stackers", "electric-stackers"],
  },
  {
    slug: "electric-tri-lateral-stackers",
    title: "Electric Tri-Lateral Stackers / VNA",
    category: "Very Narrow Aisle",
    filter: "Stackers",
    short: "Very narrow aisle trucks that handle loads without turning the chassis.",
    overview:
      "Tri-lateral stackers place and retrieve pallets to either side of the aisle without turning, allowing narrower aisles and higher storage density inside an existing building footprint.",
    applications: ["Very narrow aisle storage", "High density warehousing", "Cold storage", "High bay racking"],
    image: reachTruck,
    related: ["electric-reach-trucks", "electric-high-lift-order-pickers", "electric-stackers"],
  },
  {
    slug: "electric-platform-scissor-lifts",
    title: "Electric Platform Scissor Lifts",
    category: "Access Equipment",
    filter: "Access Equipment",
    short: "Electric access platforms for maintenance and installation work at height.",
    overview:
      "Electric scissor lifts provide a stable working platform for maintenance, installation and inspection tasks inside warehouses and industrial facilities.",
    applications: ["Facility maintenance", "Lighting and services work", "Racking inspection", "Installation projects"],
    image: conveyor,
    related: ["electric-high-lift-order-pickers", "electric-stackers", "electric-reach-trucks"],
  },
  {
    slug: "electric-counterbalance-trucks",
    title: "Electric Counterbalance Trucks",
    category: "Electric Forklifts",
    filter: "Electric Equipment",
    short: "Battery-powered counterbalance forklifts for indoor handling with no exhaust emissions.",
    overview:
      "Electric counterbalance forklift trucks handle standard pallet movement indoors with lower noise and no exhaust emissions, making them suitable for food, retail and enclosed warehouse environments.",
    applications: ["Indoor warehousing", "Food and cold chain", "Loading bays", "Production line feeding"],
    image: warehouse,
    related: ["electric-reach-trucks", "electric-stackers", "electric-pedestrian-pallet-trucks"],
  },
  {
    slug: "electric-reach-trucks",
    title: "Electric Reach Trucks",
    category: "Electric Forklifts",
    filter: "Reach Trucks",
    short: "Narrow aisle reach trucks for high level pallet storage and retrieval.",
    overview:
      "Reach trucks work in narrower aisles than counterbalance forklifts and place pallets into higher racking levels, making them a core part of dense warehouse storage operations.",
    applications: ["Narrow aisle racking", "High bay storage", "Distribution centres", "Cold storage"],
    image: reachTruck,
    related: ["electric-tri-lateral-stackers", "electric-high-lift-order-pickers", "electric-counterbalance-trucks"],
  },
  {
    slug: "electric-pedestrian-pallet-trucks",
    title: "Electric Pedestrian Pallet Trucks",
    category: "Pallet Handling",
    filter: "Pallet Trucks",
    short: "Powered pallet trucks for horizontal transport over repeated short distances.",
    overview:
      "Pedestrian-operated electric pallet trucks move pallets across floors, loading bays and trailers with far less operator effort than manual handling.",
    applications: ["Loading and unloading", "Order marshalling", "Retail back-of-house", "Cross docking"],
    image: rental,
    related: ["hand-pallet-jacks", "electric-stackers", "electric-counterbalance-trucks"],
  },
  {
    slug: "electric-stackers",
    title: "Electric Stackers",
    category: "Pallet Handling",
    filter: "Stackers",
    short: "Compact powered stackers for lifting and stacking pallets in tight areas.",
    overview:
      "Electric stackers combine pallet transport with lifting so loads can be stacked into low and medium level racking within compact storage areas.",
    applications: ["Small warehouses", "Retail storage", "Workshop areas", "Light manufacturing"],
    image: rental,
    related: ["electric-pedestrian-pallet-trucks", "electric-reach-trucks", "hand-pallet-jacks"],
  },
  {
    slug: "hand-pallet-jacks",
    title: "Hand Pallet Jacks",
    category: "Pallet Handling",
    filter: "Pallet Trucks",
    short: "Manual pallet trucks for everyday pallet movement across short distances.",
    overview:
      "Hand pallet jacks remain the practical baseline for moving pallets in stores, workshops and delivery areas where powered equipment is not required.",
    applications: ["Delivery handling", "Storerooms", "Workshops", "Retail operations"],
    image: rental,
    related: ["electric-pedestrian-pallet-trucks", "electric-stackers", "electric-counterbalance-trucks"],
  },
];

export const productFilters: ProductFilter[] = [
  "Forklifts",
  "Electric Equipment",
  "Stackers",
  "Pallet Trucks",
  "Reach Trucks",
  "Order Picking",
  "Access Equipment",
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
