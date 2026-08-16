import service from "@/assets/service-maintenance.jpg";
import conveyor from "@/assets/warehouse-systems.jpg";
import parts from "@/assets/spare-parts.jpg";

export type Service = {
  slug: string;
  title: string;
  group: "Forklift Services" | "Industrial Services" | "Warehouse Technology";
  short: string;
  intro: string;
  covers: string[];
  applies: string[];
  image: string;
  related: string[];
};

export const services: Service[] = [
  {
    slug: "forklift-repair",
    title: "Forklift Repair",
    group: "Forklift Services",
    short: "Diagnosis and repair support for forklift faults and equipment breakdowns.",
    intro:
      "When a truck stops working, the cost sits in the operation around it. MGTC provides repair support for forklift faults, covering electric, diesel and LPG equipment.",
    covers: ["Fault diagnosis and troubleshooting", "Mechanical and hydraulic repair", "Electrical system repair", "Replacement of worn components"],
    applies: ["Electric forklifts", "Diesel forklifts", "LPG forklifts", "Warehouse handling equipment"],
    image: service,
    related: ["preventive-maintenance", "electric-forklift-service", "diesel-forklift-service"],
  },
  {
    slug: "preventive-maintenance",
    title: "Preventive Maintenance",
    group: "Forklift Services",
    short: "Scheduled servicing intended to reduce unexpected operational interruptions.",
    intro:
      "Planned servicing keeps equipment in a known condition instead of reacting to failures. MGTC supports scheduled maintenance programmes built around how often your equipment runs.",
    covers: ["Scheduled service visits", "Inspection and adjustment", "Consumable and filter replacement", "Service record keeping"],
    applies: ["Single trucks", "Mixed equipment fleets", "Multi-shift operations", "Cold storage equipment"],
    image: service,
    related: ["forklift-repair", "electric-forklift-service", "lpg-forklift-service"],
  },
  {
    slug: "electric-forklift-service",
    title: "Electric Forklift Service",
    group: "Forklift Services",
    short: "Servicing for battery-powered forklifts, stackers and pallet trucks.",
    intro:
      "Electric handling equipment has its own service profile: traction batteries, charging equipment, controllers and drive systems. MGTC provides servicing across electric material handling equipment.",
    covers: ["Traction battery checks", "Charger inspection", "Drive and control system service", "Hydraulic and brake checks"],
    applies: ["Electric counterbalance trucks", "Reach trucks", "Electric stackers", "Pedestrian pallet trucks"],
    image: service,
    related: ["preventive-maintenance", "forklift-repair", "diesel-forklift-service"],
  },
  {
    slug: "diesel-forklift-service",
    title: "Diesel Forklift Service",
    group: "Forklift Services",
    short: "Engine, hydraulic and transmission servicing for diesel forklift trucks.",
    intro:
      "Diesel trucks working outdoors accumulate wear quickly. MGTC provides servicing across engine, hydraulic and transmission systems for diesel forklift equipment.",
    covers: ["Engine servicing", "Hydraulic system checks", "Transmission and drive line", "Filters, fluids and consumables"],
    applies: ["Yard operations", "Port and open storage", "Construction sites", "Heavy industrial handling"],
    image: service,
    related: ["lpg-forklift-service", "preventive-maintenance", "forklift-repair"],
  },
  {
    slug: "lpg-forklift-service",
    title: "LPG Forklift Service",
    group: "Forklift Services",
    short: "Servicing for LPG and petrol powered forklift trucks.",
    intro:
      "MGTC services LPG and petrol forklift trucks, covering fuel system components, engine servicing and general equipment condition.",
    covers: ["Fuel system inspection", "Engine servicing", "Hydraulic and mast checks", "General condition assessment"],
    applies: ["Mixed duty operations", "Warehouse and yard equipment", "Manufacturing support fleets", "Distribution operations"],
    image: service,
    related: ["diesel-forklift-service", "preventive-maintenance", "forklift-repair"],
  },
  {
    slug: "industrial-dock-and-door-service",
    title: "Industrial Dock & Door Service",
    group: "Industrial Services",
    short: "Service support for industrial doors, loading dock equipment and access points.",
    intro:
      "Loading bays are a throughput bottleneck when doors or dock equipment fail. MGTC provides servicing support for industrial dock and door installations.",
    covers: ["Industrial door servicing", "Dock equipment support", "Adjustment and fault correction", "Component replacement"],
    applies: ["Loading bays", "Distribution centres", "Cold rooms", "Industrial facilities"],
    image: conveyor,
    related: ["pvc-cold-room-curtains", "warehouse-conveyor-installation", "cctv-installation"],
  },
  {
    slug: "warehouse-conveyor-installation",
    title: "Warehouse Conveyor Installation",
    group: "Industrial Services",
    short: "Supply and installation of warehouse conveyor systems.",
    intro:
      "Conveyor systems move goods through receiving, sorting and dispatch without repeated manual handling. MGTC supports supply and installation of warehouse conveyor systems.",
    covers: ["Conveyor supply", "Installation", "Layout coordination", "Ongoing support"],
    applies: ["Distribution centres", "Production lines", "Sorting operations", "Dispatch areas"],
    image: conveyor,
    related: ["warehouse-inventory-solutions", "wms", "industrial-dock-and-door-service"],
  },
  {
    slug: "cctv-installation",
    title: "CCTV Installation",
    group: "Industrial Services",
    short: "Surveillance and security system solutions for industrial and commercial facilities.",
    intro:
      "MGTC provides CCTV and security system solutions for warehouses, industrial facilities and commercial buildings.",
    covers: ["System design coordination", "Camera and recorder installation", "Cabling and configuration", "Support"],
    applies: ["Warehouses", "Industrial facilities", "Commercial buildings", "Yards and perimeters"],
    image: conveyor,
    related: ["building-management-systems", "industrial-dock-and-door-service", "warehouse-inventory-solutions"],
  },
  {
    slug: "building-management-systems",
    title: "Building Management Systems",
    group: "Industrial Services",
    short: "Monitoring and management solutions for building services and facility systems.",
    intro:
      "Building management systems bring facility services into one monitoring and control environment. MGTC provides BMS solutions for commercial and industrial buildings.",
    covers: ["System integration", "Monitoring and control", "Facility system coordination", "Support"],
    applies: ["Commercial buildings", "Industrial facilities", "Warehouses", "Mixed-use sites"],
    image: conveyor,
    related: ["cctv-installation", "warehouse-inventory-solutions", "wcs"],
  },
  {
    slug: "pvc-cold-room-curtains",
    title: "PVC Cold Room Curtains",
    group: "Industrial Services",
    short: "PVC strip curtains for cold rooms and industrial openings.",
    intro:
      "PVC strip curtains reduce temperature loss and airborne contamination at frequently used openings while keeping access clear for equipment and personnel.",
    covers: ["PVC strip curtain supply", "Installation", "Cold room openings", "Industrial doorways"],
    applies: ["Cold storage", "Food handling facilities", "Loading bays", "Production areas"],
    image: parts,
    related: ["industrial-dock-and-door-service", "warehouse-conveyor-installation", "cctv-installation"],
  },
  {
    slug: "warehouse-inventory-solutions",
    title: "Warehouse Inventory Solutions",
    group: "Warehouse Technology",
    short: "Inventory control solutions for warehouse and storage operations.",
    intro:
      "Inventory accuracy depends on the systems recording movement. MGTC provides warehouse inventory-control solutions supporting stock visibility and control.",
    covers: ["Inventory control solutions", "Stock visibility", "Warehouse process support", "System coordination"],
    applies: ["Warehouses", "Distribution operations", "Manufacturing stores", "Retail supply"],
    image: conveyor,
    related: ["wms", "wcs", "warehouse-conveyor-installation"],
  },
  {
    slug: "wms",
    title: "Warehouse Management Systems (WMS)",
    group: "Warehouse Technology",
    short: "Warehouse management system solutions supporting storage and movement control.",
    intro:
      "A warehouse management system organises where stock sits and how it moves. MGTC provides WMS solutions as part of its warehouse technology offering.",
    covers: ["Warehouse management solutions", "Storage and movement control", "Operational reporting", "Implementation coordination"],
    applies: ["Distribution centres", "Third-party logistics", "Manufacturing warehouses", "Retail distribution"],
    image: conveyor,
    related: ["wcs", "warehouse-inventory-solutions", "warehouse-conveyor-installation"],
  },
  {
    slug: "wcs",
    title: "Warehouse Control Systems (WCS)",
    group: "Warehouse Technology",
    short: "Warehouse control solutions coordinating equipment and material flow.",
    intro:
      "Warehouse control systems coordinate the equipment layer of a warehouse — conveyors and handling systems — so material flow stays aligned with operational priorities.",
    covers: ["Equipment coordination", "Material flow control", "Integration with warehouse systems", "Support"],
    applies: ["Automated material flow", "Conveyor operations", "Sorting and dispatch", "High throughput sites"],
    image: conveyor,
    related: ["wms", "warehouse-inventory-solutions", "warehouse-conveyor-installation"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
