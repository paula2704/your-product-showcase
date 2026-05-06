import { createFileRoute, Link } from "@tanstack/react-router";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import heroCollection from "@/assets/hero-collection.jpg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Puertas Colombia · Arte en puertas artesanales" },
      {
        name: "description",
        content:
          "Réplicas artesanales de las puertas patrimoniales de Colombia. Talladas a mano en cedro, cada pieza es única.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = products.slice(0, 6);
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60 bg-confetti">
        <div className="absolute inset-x-0 top-0 stripe-fiesta" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-gradient-puertas px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary-foreground shadow-puerta">
              Arte · Color · Patrimonio
            </div>
            <h1 className="font-display text-5xl leading-[1.05] text-balance md:text-7xl">
              Guardamos la <em className="font-serif italic text-gradient-puertas">historia</em> de Colombia en madera.
            </h1>
            <p className="mt-6 max-w-md text-base text-muted-foreground">
              Diseñamos y elaboramos puertas artesanales colombianas que integran tradición, patrimonio y
              diseño contemporáneo. Cada pieza es única, firmada por su artesano.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/productos"
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm uppercase tracking-wider text-primary-foreground transition hover:opacity-90"
              >
                Ver colección <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/quienes-somos"
                className="inline-flex items-center gap-2 rounded-sm border border-foreground/20 px-6 py-3 text-sm uppercase tracking-wider transition hover:bg-foreground hover:text-background"
              >
                Nuestra historia
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <Stat n="22" label="Años de oficio" />
              <Stat n="100%" label="Hecho a mano" />
              <Stat n="50+" label="Regiones" />
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
              <img src={heroCollection} alt="Colección de puertas colombianas" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-sm border border-border bg-background p-5 shadow-xl md:block">
              <div className="font-serif italic text-lg leading-tight">
                "Donde cada puerta<br />cuenta una historia."
              </div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-gold-deep">Puertas Colombia</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="mb-3 text-xs uppercase tracking-[0.25em] text-gold-deep">Colección destacada</div>
            <h2 className="font-display text-4xl md:text-5xl">Piezas únicas</h2>
          </div>
          <Link to="/productos" className="text-sm uppercase tracking-wider text-primary hover:underline">
            Ver todas →
          </Link>
        </div>
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* STORY */}
      <section className="bg-night text-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2 md:px-8">
          <div>
            <div className="mb-3 text-xs uppercase tracking-[0.25em] text-gold">Nuestra herencia</div>
            <h2 className="font-display text-4xl md:text-5xl">
              Hace 22 años abrimos las puertas a la <em className="font-serif italic text-gold">colección colombiana</em>.
            </h2>
          </div>
          <div className="space-y-4 text-cream/80">
            <p>
              Estas puertas llevan consigo la herencia de elementos renacentistas, barrocos y la influencia
              de los estilos español, árabe y francés que dieron forma a nuestra arquitectura colonial.
            </p>
            <p>
              Buscamos material histórico de la época de la colonización entre 1880 y 1930, y lo
              reinterpretamos con maderas, hierros y bronces de la región.
            </p>
            <Link
              to="/quienes-somos"
              className="inline-flex items-center gap-2 pt-3 text-sm uppercase tracking-wider text-gold hover:text-cream"
            >
              Conoce nuestra historia <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-primary">{n}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}
