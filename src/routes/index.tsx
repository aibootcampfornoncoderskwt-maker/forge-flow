import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Wrench, PackageSearch, Boxes, Truck, ShieldCheck, Clock } from "lucide-react";
import { Reveal } from "@/components/mgtc/Reveal";
import { ActionLink, ActionAnchor, SectionHeader, AnyLink } from "@/components/mgtc/ui";
import { products } from "@/data/products";
import { services } from "@/data/services";
import { site, telHref } from "@/data/site";
import { EnquiryForm } from "@/components/mgtc/EnquiryForm";
import hero from "@/assets/hero-warehouse.jpg";
import serviceImg from "@/assets/service-maintenance.jpg";
import partsImg from "@/assets/spare-parts.jpg";
import systemsImg from "@/assets/warehouse-systems.jpg";
import rentalImg from "@/assets/rental-fleet.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MGTC Kuwait — Forklifts, Warehouse Systems & Industrial Services" },
      {
        name: "description",
        content:
          "MGTC supplies forklifts and warehouse equipment, spare parts, maintenance and industrial systems for operations across Kuwait. Request a quote today.",
      },
      { property: "og:title", content: "MGTC Kuwait — Forklifts, Warehouse Systems & Industrial Services" },
      {
        property: "og:description",
        content: "Material handling equipment, servicing, spare parts and warehouse technology in Kuwait.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const capabilities = [
  {
    icon: Truck,
    title: "Material Handling Equipment",
    copy: "Forklifts, reach trucks, stackers and pallet handling equipment matched to your duty cycle.",
    to: "/products",
  },
  {
    icon: Wrench,
    title: "Service & Maintenance",
    copy: "Repair, preventive maintenance and technical support across electric, diesel and LPG equipment.",
    to: "/services",
  },
  {
    icon: PackageSearch,
    title: "Spare Parts & Batteries",
    copy: "Parts, batteries, chargers and tyres to keep equipment available instead of waiting.",
    to: "/spare-parts",
  },
  {
    icon: Boxes,
    title: "Warehouse & Industrial Systems",
    copy: "Conveyors, dock and door service, CCTV, BMS and warehouse management technology.",
    to: "/solutions",
  },
];

const stats = [
  { value: "24", label: "Equipment categories supplied" },
  { value: "13", label: "Service lines delivered" },
  { value: "1", label: "Accountable partner in Kuwait" },
];

const process = [
  { step: "01", title: "Understand the operation", copy: "Loads, aisles, shifts, surfaces and constraints — before equipment is discussed." },
  { step: "02", title: "Specify the right solution", copy: "Equipment, systems and service scope matched to the actual duty cycle." },
  { step: "03", title: "Supply and install", copy: "Delivery, installation and commissioning coordinated around your operating hours." },
  { step: "04", title: "Support over the life cycle", copy: "Maintenance programmes, parts availability and technical support after handover." },
];

const industries = [
  "Warehousing & Distribution",
  "Cold Storage & Food",
  "Manufacturing",
  "Construction & Contracting",
  "Ports & Logistics",
  "Retail Supply Chains",
  "Oil, Gas & Industrial",
  "Facilities Management",
];

function Home() {
  const featured = products.slice(0, 6);
  const featuredServices = services.filter((s) => s.group === "Forklift Services").slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[92vh] items-end overflow-hidden bg-navy pt-32 pb-16 md:pb-24">
        <img
          src={hero}
          alt="Warehouse interior with material handling equipment"
          className="absolute inset-0 -z-10 size-full object-cover opacity-35"
          fetchPriority="high"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy via-navy/85 to-navy/45" aria-hidden />
        <div className="container-xl">
          <Reveal>
            <p className="eyebrow text-signal">{site.location} · Since operation in Kuwait</p>
            <h1 className="h-display mt-7 max-w-[19ch] text-balance text-navy-foreground">
              Material handling that keeps operations moving.
            </h1>
            <p className="mt-7 max-w-[46rem] text-lg text-navy-foreground/75">
              {site.name} supplies, installs and maintains forklifts, warehouse systems and industrial equipment for
              operations across Kuwait — with the parts and service support to keep them running.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ActionLink to="/contact" variant="solidLight">
                Request a Quote
              </ActionLink>
              <ActionLink to="/products" variant="ghostLight">
                Browse Equipment
              </ActionLink>
              <ActionAnchor href={telHref} variant="ghostLight" className="hidden sm:inline-flex">
                Call {site.phoneDisplay}
              </ActionAnchor>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-8 border-t border-navy-foreground/15 pt-10 sm:grid-cols-3">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <p className="font-display text-5xl font-extrabold tracking-tight text-navy-foreground">{s.value}</p>
                <p className="mt-2 text-[0.95rem] text-navy-foreground/60">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-y">
        <div className="container-xl">
          <SectionHeader
            index="01"
            eyebrow="Capabilities"
            title="One partner across equipment, service, parts and systems."
            copy="Operations rarely fail because of one thing. MGTC covers the equipment, the servicing behind it and the warehouse systems around it."
          />
          <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 80} className="bg-background">
                <Link to={c.to} className="group flex h-full flex-col p-8 transition-colors hover:bg-surface">
                  <c.icon className="size-7 text-primary" aria-hidden />
                  <h3 className="h-sub mt-8 text-navy">{c.title}</h3>
                  <p className="mt-4 flex-1 text-[0.98rem] text-steel">{c.copy}</p>
                  <span className="meta mt-8 inline-flex items-center gap-2 text-primary">
                    Explore
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment showcase */}
      <section className="section-y bg-surface">
        <div className="container-xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader index="02" eyebrow="Equipment" title="Handling equipment for every duty cycle." />
            <ActionLink to="/products" variant="outline">
              All equipment
            </ActionLink>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 90}>
                <AnyLink
                  to="/products/$slug"
                  params={{ slug: p.slug }}
                  className="group block h-full border border-border bg-card transition-colors hover:border-primary"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <p className="meta text-steel">{p.category}</p>
                    <h3 className="h-sub mt-3 text-navy">{p.title}</h3>
                    <p className="mt-3 text-[0.96rem] text-steel">{p.short}</p>
                  </div>
                </AnyLink>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service spotlight */}
      <section className="section-y">
        <div className="container-xl grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <img src={serviceImg} alt="Technician servicing a forklift" loading="lazy" className="w-full object-cover" />
          </Reveal>
          <Reveal delay={100}>
            <SectionHeader
              index="03"
              eyebrow="Service"
              title="Downtime is the real cost. We plan against it."
              copy="Repairs, scheduled maintenance and technical support delivered by a team that understands industrial operations in Kuwait."
            />
            <ul className="mt-9 divide-y divide-border border-y border-border">
              {featuredServices.map((s) => (
                <li key={s.slug}>
                  <AnyLink
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="group flex items-center justify-between gap-6 py-5 transition-colors hover:text-primary"
                  >
                    <span>
                      <span className="block text-[1.05rem] font-semibold text-navy group-hover:text-primary">{s.title}</span>
                      <span className="mt-1 block text-[0.94rem] text-steel">{s.short}</span>
                    </span>
                    <ArrowUpRight className="size-5 shrink-0 text-steel transition-colors group-hover:text-primary" aria-hidden />
                  </AnyLink>
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <ActionLink to="/services">All services</ActionLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Parts + systems + rental */}
      <section className="section-y bg-navy text-navy-foreground">
        <div className="container-xl">
          <SectionHeader
            index="04"
            eyebrow="Support"
            tone="light"
            title="Parts, warehouse systems and rental fleet."
            copy="Beyond the truck itself: the consumables, technology and short-term capacity that keep operations flexible."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              { img: partsImg, title: "Spare Parts & Batteries", copy: "Parts, batteries, chargers, tyres and electrical components.", to: "/spare-parts" },
              { img: systemsImg, title: "Warehouse Systems", copy: "Conveyors, WMS, WCS, inventory solutions, CCTV and BMS.", to: "/solutions" },
              { img: rentalImg, title: "Equipment Rental", copy: "Short and long term equipment hire for peaks and projects.", to: "/equipment-rental" },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 90}>
                <Link to={c.to} className="group block border border-navy-foreground/15 transition-colors hover:border-signal">
                  <div className="aspect-[3/2] overflow-hidden">
                    <img
                      src={c.img}
                      alt={c.title}
                      loading="lazy"
                      className="size-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <h3 className="h-sub text-navy-foreground">{c.title}</h3>
                    <p className="mt-3 text-[0.96rem] text-navy-foreground/70">{c.copy}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-y">
        <div className="container-xl grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader index="05" eyebrow="Industries" title="Built for how Kuwait actually operates." copy="From cold storage to construction yards, equipment has to match the environment it works in." />
          <div className="grid gap-px self-start bg-border sm:grid-cols-2">
            {industries.map((ind, i) => (
              <Reveal key={ind} delay={(i % 4) * 60} className="bg-background">
                <p className="px-6 py-6 text-[1.02rem] font-medium text-navy">{ind}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why MGTC */}
      <section className="section-y bg-surface">
        <div className="container-xl">
          <SectionHeader index="06" eyebrow="Why MGTC" title="Specified properly. Supported afterwards." align="center" />
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "Right specification", copy: "Equipment chosen against real load, aisle and shift data — not a catalogue default." },
              { icon: Clock, title: "Availability focus", copy: "Maintenance planning and parts support designed to keep equipment working." },
              { icon: Boxes, title: "Single point of contact", copy: "Equipment, service, parts and warehouse systems handled by one accountable partner." },
            ].map((w, i) => (
              <Reveal key={w.title} delay={i * 90} className="text-center">
                <w.icon className="mx-auto size-8 text-primary" aria-hidden />
                <h3 className="h-sub mt-6 text-navy">{w.title}</h3>
                <p className="mx-auto mt-4 max-w-sm text-[0.98rem] text-steel">{w.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-y">
        <div className="container-xl">
          <SectionHeader index="07" eyebrow="How we work" title="A straightforward path from enquiry to support." />
          <ol className="mt-14 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal as="li" key={p.step} delay={i * 80} className="bg-background p-8">
                <span className="eyebrow text-signal">{p.step}</span>
                <h3 className="h-sub mt-6 text-navy">{p.title}</h3>
                <p className="mt-4 text-[0.96rem] text-steel">{p.copy}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Contact */}
      <section className="section-y bg-surface" id="enquiry">
        <div className="container-xl grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeader index="08" eyebrow="Contact" title="Tell us what you need to move." copy="Send the requirement and we will come back with a specification and quotation." />
            <dl className="mt-10 space-y-6">
              <div>
                <dt className="meta text-steel">Phone / WhatsApp</dt>
                <dd className="mt-1 text-lg font-semibold text-navy">{site.phoneDisplay}</dd>
              </div>
              <div>
                <dt className="meta text-steel">Email</dt>
                <dd className="mt-1 text-lg font-semibold text-navy">{site.email}</dd>
              </div>
              <div>
                <dt className="meta text-steel">Location</dt>
                <dd className="mt-1 text-lg font-semibold text-navy">{site.location}</dd>
              </div>
            </dl>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
