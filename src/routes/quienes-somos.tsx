import { createFileRoute } from "@tanstack/react-router";
import heroCollection from "@/assets/hero-collection.jpg";

export const Route = createFileRoute("/quienes-somos")({
  head: () => ({
    meta: [
      { title: "Quiénes somos · Puertas Colombia" },
      {
        name: "description",
        content:
          "22 años creando réplicas artesanales del patrimonio arquitectónico colombiano. Conoce nuestra historia, misión y valores.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 py-20 text-center md:px-8">
        <div className="mb-3 text-xs uppercase tracking-[0.25em] text-gold-deep">Quiénes somos</div>
        <h1 className="font-display text-5xl leading-tight text-balance md:text-7xl">
          Arte funcional <em className="font-serif italic text-primary">con alma</em>.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Diseñamos y elaboramos puertas artesanales colombianas que integran tradición, historia y diseño
          contemporáneo, rescatando técnicas ancestrales y materiales de alta calidad.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="aspect-[16/8] overflow-hidden rounded-sm">
          <img src={heroCollection} alt="Colección de puertas" className="h-full w-full object-cover" />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 md:grid-cols-2 md:px-8">
        <div>
          <div className="mb-3 text-xs uppercase tracking-[0.25em] text-gold-deep">Historia</div>
          <h2 className="font-display text-4xl">22 años abriendo puertas</h2>
        </div>
        <div className="space-y-4 text-base leading-relaxed text-foreground/85">
          <p>
            Hace 22 años nacimos con la idea de abrir las puertas a una colección arquitectónica colombiana,
            dándole importancia a todas esas puertas que se crearon para conectar, facilitar distanciamientos
            o dar acceso a los espacios donde habita nuestra historia.
          </p>
          <p>
            Estas puertas llevan consigo la herencia de elementos renacentistas y barrocos, influenciados por
            estilos españoles, árabes y franceses. A lo largo de la historia, las puertas han sido símbolo de
            protección, cuidado y estilo de vida.
          </p>
          <p>
            Buscamos material histórico de la época de la colonización, entre 1880 y 1930, y lo reinterpretamos
            con roble, maderas locales, tejas, bronces y hierros de la región.
          </p>
        </div>
      </section>

      <section className="bg-night text-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            <Pillar
              kicker="Misión"
              title="Tradición que conecta"
              body="Crear piezas únicas que cumplan una función estructural y transmitan identidad cultural, seguridad y belleza, conectando espacios y personas a través del arte hecho a mano."
            />
            <Pillar
              kicker="Visión"
              title="Patrimonio sin fronteras"
              body="Ser referentes nacionales e internacionales en puertas artesanales colombianas, preservando el patrimonio arquitectónico y cultural del país."
            />
            <Pillar
              kicker="Propuesta de valor"
              title="Arte irrepetible"
              body="Cada pieza combina técnica artesanal, historia arquitectónica y diseño contemporáneo. Se convierte en herencia cultural y patrimonio familiar."
            />
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-3 border-t border-cream/15 pt-10">
            {["Tradición", "Patrimonio", "Artesanía", "Sostenibilidad", "Excelencia", "Autenticidad", "Innovación"].map((v) => (
              <span key={v} className="font-serif text-lg italic text-gold">
                · {v}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Pillar({ kicker, title, body }: { kicker: string; title: string; body: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.25em] text-gold">{kicker}</div>
      <h3 className="mt-3 font-display text-2xl">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-cream/75">{body}</p>
    </div>
  );
}
