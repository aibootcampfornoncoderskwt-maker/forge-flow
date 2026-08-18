import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { site, telHref } from "@/data/site";
import { productMenu, serviceMenu, partsMenu, type MenuGroup } from "@/data/navigation";
import { AnyLink, ActionAnchor } from "@/components/mgtc/ui";
import logo from "@/assets/mgtc-logo.webp";

type Nav =
  | { label: string; to: string }
  | { label: string; to: string; menu: MenuGroup[] };

const nav: Nav[] = [
  { label: "Products", to: "/products", menu: productMenu },
  { label: "Services", to: "/services", menu: serviceMenu },
  { label: "Spare Parts", to: "/spare-parts", menu: partsMenu },
  { label: "Solutions", to: "/solutions" },
  { label: "Rental", to: "/equipment-rental" },
  { label: "About", to: "/about" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setMobile(false);
    setOpen(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        scrolled || mobile
          ? "border-b border-border bg-background/95 backdrop-blur-xl"
          : "border-b border-navy-foreground/10 bg-navy/85 backdrop-blur-md",
      )}
      onMouseLeave={() => setOpen(null)}
    >
      <div className="container-xl flex h-[4.6rem] items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3" aria-label={`${site.short} home`}>
          <img src={logo} alt="MGTC logo" className="h-9 w-auto" width={120} height={36} />
          <span className="sr-only">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname.startsWith(item.to);
            const hasMenu = "menu" in item;
            return (
              <div key={item.label} className="relative" onMouseEnter={() => setOpen(hasMenu ? item.label : null)}>
                <Link
                  to={item.to}
                  className={cn(
                    "flex items-center gap-1.5 px-3.5 py-2 text-[0.9rem] font-medium tracking-tight transition-colors",
                    scrolled || mobile ? "text-navy hover:text-primary" : "text-navy-foreground/85 hover:text-navy-foreground",
                    active && (scrolled ? "text-primary" : "text-signal"),
                  )}
                >
                  {item.label}
                  {hasMenu ? (
                    <ChevronDown
                      className={cn("size-3.5 transition-transform duration-300", open === item.label && "rotate-180")}
                      aria-hidden
                    />
                  ) : null}
                </Link>
                {hasMenu && open === item.label ? (
                  <div className="absolute left-1/2 top-full w-[min(58rem,80vw)] -translate-x-1/2 pt-3">
                    <div className="grid grid-cols-3 gap-8 border border-border bg-card p-8 shadow-[0_30px_70px_-40px_oklch(0.256_0.045_251.8_/_0.6)]">
                      {(item as { menu: MenuGroup[] }).menu.map((group) => (
                        <div key={group.heading}>
                          <p className="eyebrow text-steel">{group.heading}</p>
                          <ul className="mt-4 space-y-2.5">
                            {group.links.map((link) => (
                              <li key={link.label + link.to}>
                                <AnyLink
                                  to={link.to}
                                  params={link.params}
                                  className="block text-[0.92rem] leading-snug text-navy transition-colors hover:text-primary"
                                >
                                  {link.label}
                                </AnyLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={telHref}
            className={cn(
              "meta flex items-center gap-2 transition-colors",
              scrolled || mobile ? "text-navy hover:text-primary" : "text-navy-foreground/80 hover:text-navy-foreground",
            )}
          >
            <Phone className="size-3.5" aria-hidden />
            {site.phoneDisplay}
          </a>
          <ActionAnchor href="/contact" variant={scrolled || mobile ? "primary" : "solidLight"} className="min-h-10 px-5 text-sm">
            Request a Quote
          </ActionAnchor>
        </div>

        <button
          type="button"
          onClick={() => setMobile((v) => !v)}
          aria-expanded={mobile}
          aria-label={mobile ? "Close menu" : "Open menu"}
          className={cn(
            "grid size-11 place-items-center lg:hidden",
            scrolled || mobile ? "text-navy" : "text-navy-foreground",
          )}
        >
          {mobile ? <Menu className="size-6 rotate-90" aria-hidden /> : <Menu className="size-6" aria-hidden />}
        </button>
      </div>

      {mobile ? (
        <div className="h-[calc(100dvh-4.6rem)] overflow-y-auto border-t border-border bg-background px-5 pb-16 lg:hidden">
          <nav aria-label="Mobile" className="divide-y divide-border">
            {nav.map((item) => (
              <div key={item.label} className="py-4">
                <Link to={item.to} className="h-sub block text-navy">
                  {item.label}
                </Link>
                {"menu" in item ? (
                  <ul className="mt-3 grid gap-2">
                    {(item as { menu: MenuGroup[] }).menu.flatMap((g) => g.links).slice(0, 6).map((link) => (
                      <li key={link.label + link.to}>
                        <AnyLink to={link.to} params={link.params} className="text-[0.95rem] text-steel">
                          {link.label}
                        </AnyLink>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </nav>
          <div className="mt-8 flex flex-col gap-3">
            <ActionAnchor href="/contact" variant="primary">
              Request a Quote
            </ActionAnchor>
            <ActionAnchor href={telHref} variant="outline">
              Call {site.phoneDisplay}
            </ActionAnchor>
          </div>
        </div>
      ) : null}

      <button type="button" className="sr-only" onClick={() => setMobile(false)} aria-hidden>
        <X className="size-4" />
      </button>
    </header>
  );
}
