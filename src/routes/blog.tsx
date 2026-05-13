import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Hammer,
  MapPinned,
  MessageCircle,
  Send,
  Star,
} from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog · Puertas Colombia" },
      {
        name: "description",
        content:
          "Historias sobre puertas colombianas, proceso artesanal, decoración, patrimonio cultural y experiencias de clientes.",
      },
    ],
  }),
  component: BlogPage,
});

type Comment = {
  id: string;
  name: string;
  city: string;
  rating: number;
  message: string;
  date: string;
};

const posts = [
  {
    title: "El valor de una puerta colonial en la decoración del hogar",
    category: "Decoración",
    icon: <BookOpen className="h-5 w-5" />,
    excerpt:
      "Una puerta artesanal no solo decora un espacio: también cuenta una historia sobre región, color, memoria y tradición.",
  },
  {
    title: "Cómo elaboramos nuestras piezas a mano",
    category: "Proceso artesanal",
    icon: <Hammer className="h-5 w-5" />,
    excerpt:
      "Cada pieza pasa por selección de materiales, tallado, pintura, envejecido y revisión de detalles antes de llegar al cliente.",
  },
  {
    title: "Puertas que inspiran: Bogotá, Cartagena, Mompox y el Eje Cafetero",
    category: "Patrimonio",
    icon: <MapPinned className="h-5 w-5" />,
    excerpt:
      "Las regiones colombianas inspiran colores, formas y detalles que hacen que cada diseño tenga identidad propia.",
  },
];

const defaultComments: Comment[] = [
  {
    id: "1",
    name: "Cliente en Bogotá",
    city: "Bogotá",
    rating: 5,
    message:
      "Compré una pieza para la entrada de mi apartamento y se ve preciosa. Me gustó mucho que tuviera una historia detrás.",
    date: "2026-05-01",
  },
  {
    id: "2",
    name: "Visitante en Usaquén",
    city: "Usaquén",
    rating: 5,
    message:
      "Los colores y detalles llaman mucho la atención. Es un producto muy colombiano y diferente para regalar.",
    date: "2026-05-03",
  },
  {
    id: "3",
    name: "Compradora de regalo",
    city: "Chía",
    rating: 4,
    message:
      "Me pareció una excelente opción para regalar algo artesanal, bonito y con identidad cultural.",
    date: "2026-05-06",
  },
];

function BlogPage() {
  const [comments, setComments] = useState<Comment[]>(defaultComments);
  const [rating, setRating] = useState(5);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("puertas-colombia-blog-comments");

    if (saved) {
      try {
        setComments(JSON.parse(saved));
      } catch {
        setComments(defaultComments);
      }
    }
  }, []);

  const saveComments = (nextComments: Comment[]) => {
    setComments(nextComments);
    localStorage.setItem(
      "puertas-colombia-blog-comments",
      JSON.stringify(nextComments),
    );
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const city = String(form.get("city") || "").trim();
    const message = String(form.get("message") || "").trim();

    if (!name || !message) return;

    const comment: Comment = {
      id: crypto.randomUUID(),
      name,
      city: city || "Colombia",
      rating,
      message,
      date: new Date().toISOString().slice(0, 10),
    };

    saveComments([comment, ...comments]);
    event.currentTarget.reset();
    setRating(5);
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <div className="bg-background">
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <header className="max-w-3xl">
          <div className="mb-3 text-xs uppercase tracking-[0.25em] text-gold-deep">
            Blog
          </div>
          <h1 className="font-display text-5xl text-balance md:text-6xl">
            Historias detrás de cada puerta
          </h1>
          <p className="mt-4 text-muted-foreground">
            Un espacio para compartir el proceso artesanal, la inspiración cultural y las
            experiencias de quienes han conocido o comprado piezas de Puertas Colombia.
          </p>
        </header>

        <section className="mt-14 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-sm border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                {post.icon}
              </div>
              <div className="mb-3 text-xs uppercase tracking-[0.2em] text-gold-deep">
                {post.category}
              </div>
              <h2 className="font-display text-2xl">{post.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-16 rounded-sm bg-cream/50 p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-center">
            <div>
              <div className="mb-3 text-xs uppercase tracking-[0.25em] text-gold-deep">
                Proceso artesanal
              </div>
              <h2 className="font-display text-4xl">
                Hecho a mano, con tiempo y detalle.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Nuestro trabajo parte de la observación de puertas tradicionales colombianas.
                Luego transformamos esa inspiración en piezas decorativas talladas, pintadas y
                acabadas de forma artesanal.
              </p>
            </div>

            <Link
              to="/productos"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm uppercase tracking-wider text-primary-foreground transition hover:opacity-90"
            >
              Ver colección
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 lg:grid-cols-[0.9fr_1.1fr] md:px-8">
          <div>
            <div className="mb-3 text-xs uppercase tracking-[0.25em] text-gold-deep">
              Experiencias
            </div>
            <h2 className="font-display text-4xl md:text-5xl">
              Comparte tu experiencia
            </h2>
            <p className="mt-4 text-muted-foreground">
              Cuéntanos qué te pareció la colección, el proceso artesanal, el diseño del
              portal o tu experiencia con las piezas de Puertas Colombia.
            </p>

            <div className="mt-8 rounded-sm border border-border bg-background p-5">
              <div className="flex items-start gap-3">
                <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-display text-2xl">Comentarios visibles</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Los comentarios se muestran en esta página y quedan guardados en este
                    navegador como demostración del portal.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-sm border border-border bg-background p-6 shadow-sm"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Nombre" name="name" required />
              <Field label="Ciudad" name="city" />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                Calificación
              </label>

              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setRating(value)}
                    className={`inline-flex items-center gap-1 rounded-full border px-4 py-2 text-sm transition ${
                      rating === value
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-card hover:bg-muted"
                    }`}
                  >
                    {value}
                    <Star
                      className={`h-4 w-4 ${
                        rating === value ? "fill-current" : ""
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">
                Comentario
              </label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Escribe tu experiencia con Puertas Colombia..."
                className="w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm uppercase tracking-wider text-primary-foreground transition hover:opacity-90"
            >
              <Send className="h-4 w-4" />
              Publicar comentario
            </button>

            {sent && (
              <p className="mt-3 text-sm text-primary">
                Gracias por compartir tu experiencia.
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="mb-3 text-xs uppercase tracking-[0.25em] text-gold-deep">
              Comentarios de visitantes
            </div>
            <h2 className="font-display text-4xl">Experiencias compartidas</h2>
          </div>

          <div className="text-sm text-muted-foreground">
            {comments.length} comentario{comments.length === 1 ? "" : "s"}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {comments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
      />
    </div>
  );
}

function CommentCard({ comment }: { comment: Comment }) {
  return (
    <article className="rounded-sm border border-border bg-card p-6">
      <div className="mb-3 flex items-center gap-1 text-gold-deep">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`h-4 w-4 ${
              index < comment.rating ? "fill-current" : "opacity-30"
            }`}
          />
        ))}
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground">
        "{comment.message}"
      </p>

      <div className="mt-5 border-t border-border pt-4">
        <div className="font-medium">{comment.name}</div>
        <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {comment.city} · {comment.date}
        </div>
      </div>
    </article>
  );
}
