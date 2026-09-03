import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Bitte geben Sie Ihren Namen an.").max(100),
  email: z.string().trim().email("Bitte geben Sie eine gültige E-Mail-Adresse an.").max(255),
  phone: z.string().trim().min(5, "Bitte geben Sie eine Telefonnummer an.").max(40),
  datetime: z.string().trim().min(1, "Bitte wählen Sie Datum & Uhrzeit."),
  guests: z.coerce.number().int().min(1, "Mindestens 1 Person.").max(50, "Maximal 50 Personen."),
  message: z.string().trim().max(1000).optional(),
});

const fieldClass =
  "w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-gold";

export function ReservationForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      const next: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        const key = String(i.path[0]);
        if (!next[key]) next[key] = i.message;
      });
      setErrors(next);
      toast.error("Bitte prüfen Sie Ihre Angaben.");
      return;
    }

    setErrors({});
    form.reset();
    toast.success("Vielen Dank! Ihre Reservierungsanfrage ist eingegangen.", {
      description: "Wir melden uns zeitnah bei Ihnen zurück.",
    });
  };

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs tracking-widest uppercase">
            Name
          </label>
          <input id="name" name="name" className={fieldClass} placeholder="Ihr Name" />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs tracking-widest uppercase">
            E-Mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={fieldClass}
            placeholder="name@beispiel.de"
          />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-xs tracking-widest uppercase">
            Telefon
          </label>
          <input id="phone" name="phone" className={fieldClass} placeholder="05722 000000" />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="guests" className="mb-1.5 block text-xs tracking-widest uppercase">
            Anzahl der Personen
          </label>
          <input
            id="guests"
            name="guests"
            type="number"
            min={1}
            defaultValue={2}
            className={fieldClass}
          />
          {errors.guests && <p className="mt-1 text-xs text-destructive">{errors.guests}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="datetime" className="mb-1.5 block text-xs tracking-widest uppercase">
          Datum &amp; Uhrzeit
        </label>
        <input id="datetime" name="datetime" type="datetime-local" className={fieldClass} />
        {errors.datetime && <p className="mt-1 text-xs text-destructive">{errors.datetime}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs tracking-widest uppercase">
          Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={fieldClass}
          placeholder="Anlass, Tischwunsch oder Allergien"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-sm bg-primary px-6 py-3.5 text-sm tracking-[0.18em] uppercase text-primary-foreground transition-colors hover:bg-forest-deep"
      >
        Anfrage senden
      </button>
    </form>
  );
}
