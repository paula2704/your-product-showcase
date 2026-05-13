import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { getProduct, formatPrice, products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Check, ChevronLeft, Minus, Plus } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/productos/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} · Puertas Colombia` },
          { name: "description", content: loaderData.product.shortDescription },
          { property: "og:title", content: `${loaderData.product.name} · Puertas Colombia` },
          { property: "og:description", content: loaderData.product.shortDescription },
          { property: "og:image", content: loaderData.product.images[0] },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-md px-4 py-24 text-center">
      <h1 className="font-display text-4xl">Pieza no encontrada</h1>
      <Link to="/productos" className="mt-6 inline-block text-sm uppercase tracking-wider text-primary hover:underline">
        ← Volver al catálogo
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-md px-4 py-24 text-center">
      <h1 className="font-display text-3xl">Algo salió mal</h1>
      <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [zoom, setZoom] = useState<{ x: number; y: number } | null>(null);
  const { add } = useCart();

  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setZoom({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
  };

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <Link to="/productos" className="inline-flex items-center gap-1 text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground">
          <ChevronLeft className="h-3.5 w-3.5" /> Catálogo
        </Link>

        <div className="mt-8 grid gap-10 md:grid-cols-2">
          {/* Gallery — Amazon style */}
          <div className="flex gap-3 sm:gap-4">
            {product.images.length > 1 && (
              <div className="flex w-14 sm:w-20 flex-col gap-2 shrink-0">
                {product.images.map((img: string, i: number) => (
                  <button
                    key={i}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`aspect-square overflow-hidden rounded-md border-2 transition ${
                      active === i ? "border-primary shadow-md" : "border-border opacity-80 hover:border-gold hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt={`${product.name} vista ${i + 1}`} className="h-full w-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            )}

            <div
              className="relative flex-1 aspect-[4/5] overflow-hidden rounded-md bg-muted cursor-zoom-in border border-border"
              onMouseMove={handleMove}
              onMouseLeave={() => setZoom(null)}
            >
              <img
                src={product.images[active]}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-200"
                style={zoom ? { transformOrigin: `${zoom.x}% ${zoom.y}%`, transform: "scale(2.2)" } : undefined}
              />
              <div className="absolute left-3 top-3 rounded-full bg-secondary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-secondary-foreground shadow">
                {product.category}
              </div>
              {product.images.length > 1 && (
                <div className="absolute bottom-3 right-3 rounded-full bg-background/90 px-3 py-1 text-xs text-foreground">
                  {active + 1} / {product.images.length}
                </div>
              )}
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-gold-deep">{product.category} · {product.ref}</div>
            <h1 className="mt-3 font-display text-5xl text-balance md:text-6xl">{product.name}</h1>
            <p className="mt-2 font-serif text-lg italic text-muted-foreground">{product.region}</p>

            <div className="mt-6 font-display text-3xl text-primary">{formatPrice(product.price)}</div>

            <p className="mt-6 text-base leading-relaxed text-foreground/85">{product.description}</p>

            <dl className="mt-8 grid grid-cols-2 gap-4 border-y border-border py-6 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Tamaño</dt>
                <dd className="mt-1">{product.size}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Material</dt>
                <dd className="mt-1">Cedro tallado a mano</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Acabado</dt>
                <dd className="mt-1">Envejecido artesanal</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Origen</dt>
                <dd className="mt-1">Colombia</dd>
              </div>
            </dl>

            <div className="mt-8 flex items-center gap-4">
              <div className="inline-flex items-center rounded-sm border border-border">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="grid h-11 w-11 place-items-center hover:bg-muted">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center text-sm">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} className="grid h-11 w-11 place-items-center hover:bg-muted">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                onClick={() => {
                  add(product.id, qty);
                  setAdded(true);
                  setTimeout(() => setAdded(false), 1800);
                }}
                className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-sm bg-primary px-6 text-sm uppercase tracking-wider text-primary-foreground transition hover:opacity-90"
              >
                {added ? (<><Check className="h-4 w-4" /> Añadido</>) : "Añadir al carrito"}
              </button>
            </div>

            <Link to="/carrito" className="mt-3 block text-center text-xs uppercase tracking-wider text-muted-foreground hover:text-primary">
              Ver carrito →
            </Link>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <h2 className="mb-8 font-display text-3xl">Piezas relacionadas</h2>
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </>
  );
}
