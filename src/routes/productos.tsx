import { createFileRoute, Outlet, useLocation } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

const categories = ["Todas", "XXL", "XL", "L", "M", "S", "Aldabas", "Porta llaves"] as const;

export const Route = createFileRoute("/productos")({
  head: () => ({
    meta: [
      { title: "Productos · Puertas Colombia" },
      { name: "description", content: "Colección completa de puertas artesanales, aldabas y porta llaves colombianos." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const location = useLocation();
  const [filter, setFilter] = useState<(typeof categories)[number]>("Todas");
  const list = useMemo(
    () => (filter === "Todas" ? products : products.filter((p) => p.category === filter)),
    [filter],
  );

  if (location.pathname !== "/productos") {
    return <Outlet />;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <header className="mb-10 max-w-2xl">
        <div className="mb-3 text-xs uppercase tracking-[0.25em] text-gold-deep">Catálogo</div>
        <h1 className="font-display text-5xl text-balance md:text-6xl">Nuestra colección</h1>
        <p className="mt-4 text-muted-foreground">
          Cada puerta es una réplica artesanal de una pieza patrimonial colombiana. Tallada a mano en cedro y
          firmada por el artesano que la creó.
        </p>
      </header>

      <div className="mb-10 flex flex-wrap gap-2 border-b border-border pb-4">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full px-4 py-1.5 text-xs uppercase tracking-wider transition ${
              filter === c
                ? "bg-primary text-primary-foreground"
                : "border border-border text-foreground/70 hover:bg-muted"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {list.length === 0 ? (
        <p className="py-16 text-center text-muted-foreground">No hay piezas en esta categoría.</p>
      ) : (
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </div>
  );
}
