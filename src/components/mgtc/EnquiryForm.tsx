import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { ActionButton } from "@/components/mgtc/ui";
import { site, whatsappHref } from "@/data/site";

const interests = [
  "Forklifts & Equipment",
  "Service & Maintenance",
  "Spare Parts",
  "Warehouse Systems",
  "Equipment Rental",
  "Other",
];

type Errors = Partial<Record<"name" | "company" | "phone" | "email" | "message", string>>;

const field =
  "mt-2 w-full border border-input bg-card px-4 py-3 text-[0.98rem] text-navy outline-none transition-colors placeholder:text-light-steel focus:border-primary";

export function EnquiryForm({ subject }: { subject?: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const next: Errors = {};
    if (get("name").length < 2) next.name = "Please enter your name.";
    if (get("company").length < 2) next.company = "Please enter your company.";
    if (!/^[+\d][\d\s-]{6,}$/.test(get("phone"))) next.phone = "Please enter a valid phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(get("email"))) next.email = "Please enter a valid email address.";
    if (get("message").length < 10) next.message = "Please add a little more detail.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const body = [
      `Name: ${get("name")}`,
      `Company: ${get("company")}`,
      `Phone: ${get("phone")}`,
      `Email: ${get("email")}`,
      `Interest: ${get("interest")}`,
      "",
      get("message"),
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject ? `Website enquiry — ${subject}` : "Website enquiry",
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="border border-border bg-card p-6 md:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" error={errors.name} autoComplete="name" />
        <Field label="Company" name="company" error={errors.company} autoComplete="organization" />
        <Field label="Phone" name="phone" error={errors.phone} type="tel" autoComplete="tel" />
        <Field label="Email" name="email" error={errors.email} type="email" autoComplete="email" />
        <div className="sm:col-span-2">
          <label className="meta text-steel" htmlFor="interest">
            Enquiry type
          </label>
          <select id="interest" name="interest" defaultValue={subject ?? interests[0]} className={field}>
            {(subject ? [subject, ...interests] : interests).map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="meta text-steel" htmlFor="message">
            Requirement details
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Equipment type, quantity, location, timeline…"
            className={field}
            aria-invalid={!!errors.message}
          />
          {errors.message ? <p className="mt-2 text-sm text-destructive">{errors.message}</p> : null}
        </div>
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <ActionButton type="submit">Send Enquiry</ActionButton>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.95rem] font-medium text-primary underline-offset-4 hover:underline"
        >
          Or message us on WhatsApp
        </a>
      </div>

      {sent ? (
        <p className="mt-5 flex items-center gap-2 text-[0.95rem] text-primary">
          <Check className="size-4" aria-hidden /> Your email client has opened with the enquiry ready to send.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  error,
  type = "text",
  autoComplete,
}: {
  label: string;
  name: string;
  error?: string | undefined;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label className="meta text-steel" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        className={field}
      />
      {error ? <p className="mt-2 text-sm text-destructive">{error}</p> : null}
    </div>
  );
}
