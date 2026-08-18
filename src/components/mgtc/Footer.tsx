import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Globe } from "lucide-react";
import { site, telHref, mailHref, whatsappHref } from "@/data/site";
import { productMenu, serviceMenu } from "@/data/navigation";
import { AnyLink } from "@/components/mgtc/ui";
import logo from "@/assets/mgtc-logo.webp";

const company = [
  { label: "About MGTC", to: "/about" },
  { label: "Solutions", to: "/solutions" },
  { label: "Equipment Rental", to: "/equipment-rental" },
  { label: "Spare Parts", to: "/spare-parts" },
  { label: "Contact", to: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-navy-foreground/10 bg-navy text-navy-foreground">
      <div className="container-xl py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr_1fr_1fr]">
          <div>
            <img src={logo} alt="MGTC logo" className="h-10 w-auto" width={132} height={40} />
            <p className="mt-6 max-w-xs text-[0.98rem] leading-relaxed text-navy-foreground/70">
              {site.name} supplies, services and supports material handling, warehouse and industrial systems across
              Kuwait.
            </p>
            <ul className="mt-7 space-y-3 text-[0.95rem] text-navy-foreground/75">
              <li>
                <a className="flex items-center gap-3 transition-colors hover:text-signal" href={telHref}>
                  <Phone className="size-4 shrink-0 text-signal" aria-hidden /> {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 transition-colors hover:text-signal" href={mailHref}>
                  <Mail className="size-4 shrink-0 text-signal" aria-hidden /> {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="size-4 shrink-0 text-signal" aria-hidden /> {site.location}
              </li>
              <li className="flex items-center gap-3">
                <Globe className="size-4 shrink-0 text-signal" aria-hidden /> {site.website}
              </li>
            </ul>
          </div>

          <FooterCol
            heading="Equipment"
            links={productMenu[0]!.links.concat(productMenu[1]!.links.slice(0, 2))}
          />
          <FooterCol heading="Services" links={serviceMenu[0]!.links.concat(serviceMenu[1]!.links.slice(0, 2))} />

          <div>
            <p className="eyebrow text-navy-foreground/55">Company</p>
            <ul className="mt-5 space-y-2.5">
              {company.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-[0.95rem] text-navy-foreground/75 transition-colors hover:text-signal">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.95rem] text-navy-foreground/75 transition-colors hover:text-signal"
                >
                  WhatsApp Enquiry
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-navy-foreground/12 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="meta text-navy-foreground/50">
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="meta text-navy-foreground/50">{site.positioning} — Kuwait</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; to: string; params?: Record<string, string> }[];
}) {
  return (
    <div>
      <p className="eyebrow text-navy-foreground/55">{heading}</p>
      <ul className="mt-5 space-y-2.5">
        {links.map((l) => (
          <li key={l.label + l.to}>
            <AnyLink
              to={l.to}
              params={l.params}
              className="text-[0.95rem] leading-snug text-navy-foreground/75 transition-colors hover:text-signal"
            >
              {l.label}
            </AnyLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
