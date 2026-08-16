import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "group inline-flex min-h-12 items-center justify-center gap-2.5 px-6 text-[0.94rem] font-semibold tracking-tight transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.98]";

const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-precision hover:scale-[1.02]",
  navy: "bg-navy text-navy-foreground hover:bg-graphite hover:scale-[1.02]",
  outline: "border border-navy/25 text-navy hover:border-primary hover:text-primary",
  ghostLight: "border border-navy-foreground/25 text-navy-foreground hover:border-navy-foreground/70",
  solidLight: "bg-background text-navy hover:bg-light-steel",
} as const;

export type ActionVariant = keyof typeof variants;

export function ActionLink({
  variant = "primary",
  className,
  children,
  arrow = true,
  ...props
}: ComponentProps<typeof Link> & { variant?: ActionVariant; arrow?: boolean }) {
  return (
    <Link className={cn(base, variants[variant], className)} {...props}>
      {children}
      {arrow ? (
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
      ) : null}
    </Link>
  );
}

export function ActionAnchor({
  variant = "primary",
  className,
  children,
  ...props
}: ComponentProps<"a"> & { variant?: ActionVariant }) {
  return (
    <a className={cn(base, variants[variant], className)} {...props}>
      {children}
    </a>
  );
}

export function ActionButton({
  variant = "primary",
  className,
  children,
  ...props
}: ComponentProps<"button"> & { variant?: ActionVariant }) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}

export function SectionHeader({
  index,
  eyebrow,
  title,
  copy,
  tone = "dark",
  className,
  align = "left",
}: {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  copy?: string;
  tone?: "dark" | "light";
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn(align === "center" && "mx-auto max-w-3xl text-center", className)}>
      <div
        className={cn(
          "eyebrow flex items-center gap-3",
          align === "center" && "justify-center",
          tone === "light" ? "text-navy-foreground/60" : "text-steel",
        )}
      >
        {index ? <span className="text-signal">{index}</span> : null}
        <span className={cn("h-px w-8", tone === "light" ? "bg-navy-foreground/30" : "bg-border")} />
        <span>{eyebrow}</span>
      </div>
      <h2
        className={cn(
          "h-section mt-5 max-w-4xl text-balance",
          align === "center" && "mx-auto",
          tone === "light" ? "text-navy-foreground" : "text-navy",
        )}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className={cn(
            "mt-5 max-w-[46rem] text-lg",
            align === "center" && "mx-auto",
            tone === "light" ? "text-navy-foreground/70" : "text-steel",
          )}
        >
          {copy}
        </p>
      ) : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  copy,
  children,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-navy-foreground/10 bg-navy pt-32 pb-16 md:pt-44 md:pb-24">
      <div className="container-xl">
        <p className="eyebrow text-signal">{eyebrow}</p>
        <h1 className="h-display mt-6 max-w-5xl text-balance text-navy-foreground">{title}</h1>
        <p className="mt-6 max-w-[44rem] text-lg text-navy-foreground/70">{copy}</p>
        {children ? <div className="mt-9 flex flex-wrap gap-3">{children}</div> : null}
      </div>
    </header>
  );
}

export function Breadcrumbs({ trail }: { trail: { label: string; to?: string; params?: Record<string, string> }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="meta text-steel">
      <ol className="flex flex-wrap items-center gap-2">
        {trail.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {item.to ? (
              <Link to={item.to} params={item.params as never} className="transition-colors hover:text-primary">
                {item.label}
              </Link>
            ) : (
              <span className="text-navy">{item.label}</span>
            )}
            {i < trail.length - 1 ? <span aria-hidden className="text-light-steel">/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
