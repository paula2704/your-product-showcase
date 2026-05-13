import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export const Route = createFileRoute("/contactanos")({
  head: () => ({
    meta: [
      { title: "Contáctanos · Puertas Colombia" },
      { name: "description", content: "Escríbenos para cotizaciones, pedidos personalizados y colaboraciones." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <header className="max-w-2xl">
        <div className="mb-3 text-xs uppercase tracking-[0.25em] text-gold-deep">Contáctanos</div>
        <h1 className="font-display text-5xl text-balance md:text-6xl">Hablemos de tu próxima pieza</h1>
        <p className="mt-4 text-muted-foreground">
          Estamos aquí para responder tus preguntas, recibir encargos personalizados o conversar sobre el
          patrimonio arquitectónico colombiano.
        </p>
      </header>

      <div className="mt-14 grid gap-12 lg:grid-cols-5">
        <div className="space-y-6 lg:col-span-2">
          <Info icon={<MapPin className="h-4 w-4" />} title="Visítanos" lines={["Bogotá, Colombia", "Cita previa por mensaje"]} />
          <Info icon={<Mail className="h-4 w-4" />} title="Escríbenos" lines={["hola@puertascolombia.co"]} />
          <Info icon={<Phone className="h-4 w-4" />} title="Llámanos" lines={["+57 310 000 0000", "Lun – Sáb · 9am – 6pm"]} />

          <div className="rounded-sm border border-border bg-card p-6">
            <div className="font-serif italic text-lg leading-snug text-foreground">
              "Esta puerta estuvo cien años guardando historias en una casona del Quindío. Hoy la recreamos en
              cedro para que sea parte de la tuya."
            </div>
            <div className="mt-3 text-[10px] uppercase tracking-[0.2em] text-gold-deep">— Puertas Colombia</div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 4000);
            (e.target as HTMLFormElement).reset();
          }}
          className="space-y-5 rounded-sm border border-border bg-card p-8 lg:col-span-3"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Nombre" name="name" required />
            <Field label="Correo" name="email" type="email" required />
          </div>
          <Field label="Asunto" name="subject" />
          <div>
            <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">Mensaje</label>
            <textarea
              name="message"
              rows={6}
              required
              className="w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm uppercase tracking-wider text-primary-foreground transition hover:opacity-90"
          >
            <Send className="h-4 w-4" /> Enviar mensaje
          </button>
          {sent && (
            <p className="text-sm text-primary">Gracias por escribir. Te responderemos pronto.</p>
          )}
        </form>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
      />
    </div>
  );
}

function Info({ icon, title, lines }: { icon: React.ReactNode; title: string; lines: string[] }) {
  return (
    <div>
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold-deep">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-primary/10 text-primary">{icon}</span>
        {title}
      </div>
      <div className="mt-2 space-y-0.5 pl-9 text-sm">
        {lines.map((l) => <div key={l}>{l}</div>)}
      </div>
    </div>
  );
}
