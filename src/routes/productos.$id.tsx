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
  const { add } = useCart();

  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3);

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <Link to="/productos" className="inline-flex items-center gap-1 text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground">
          <ChevronLeft className="h-3.5 w-3.5" /> Catálogo
        </Link>

        <div className="mt-8 grid gap-12 md:grid-cols-2">
          {/* Gallery */}
          <div>
            <div className="aspect-[4/5] overflow-hidden rounded-sm bg-muted">
              <img src={product.images[active]} alt={product.name} className="h-full w-full object-cover" />
            </div>
            {product.images.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`aspect-square overflow-hidden rounded-sm border-2 transition ${
                      active === i ? "border-primary" : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt={`${product.name} ${i + 1}`} className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
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
