import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import { useState } from "react";

export const Route = createFileRoute("/carrito")({
  head: () => ({
    meta: [
      { title: "Carrito · Puertas Colombia" },
      { name: "description", content: "Tu selección de piezas artesanales." },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { detailed, setQty, remove, subtotal, clear, count } = useCart();
  const [checkedOut, setCheckedOut] = useState(false);

  if (count === 0) {
    return (
      <div className="mx-auto max-w-md px-4 py-24 text-center">
        <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-muted">
          <ShoppingBag className="h-7 w-7 text-muted-foreground" />
        </div>
        <h1 className="font-display text-4xl">Tu carrito está vacío</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Explora nuestra colección y encuentra la pieza que abrirá nuevas historias.
        </p>
        <Link
          to="/productos"
          className="mt-8 inline-block rounded-sm bg-primary px-6 py-3 text-sm uppercase tracking-wider text-primary-foreground transition hover:opacity-90"
        >
          Ver colección
        </Link>
      </div>
    );
  }

  if (checkedOut) {
    return (
      <div className="mx-auto max-w-md px-4 py-24 text-center">
        <h1 className="font-display text-4xl">¡Gracias!</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Recibimos tu pedido. Un artesano se pondrá en contacto contigo para confirmar los detalles.
        </p>
        <Link
          to="/productos"
          className="mt-8 inline-block rounded-sm bg-primary px-6 py-3 text-sm uppercase tracking-wider text-primary-foreground"
        >
          Seguir explorando
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <header className="mb-10">
        <div className="mb-3 text-xs uppercase tracking-[0.25em] text-gold-deep">Carrito</div>
        <h1 className="font-display text-5xl">Tu selección</h1>
      </header>

      <div className="grid gap-12 lg:grid-cols-3">
        <ul className="divide-y divide-border lg:col-span-2">
          {detailed.map((it) => (
            <li key={it.productId} className="flex gap-4 py-6">
              <Link to="/productos/$id" params={{ id: it.productId }} className="block w-24 shrink-0 sm:w-32">
                <div className="aspect-[4/5] overflow-hidden rounded-sm bg-muted">
                  <img src={it.product.images[0]} alt={it.product.name} className="h-full w-full object-cover" />
                </div>
              </Link>
              <div className="flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <Link to="/productos/$id" params={{ id: it.productId }} className="font-display text-xl hover:text-primary">
                      {it.product.name}
                    </Link>
                    <div className="mt-0.5 text-xs uppercase tracking-[0.15em] text-gold-deep">{it.product.region}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{it.product.size} · {it.product.ref}</div>
                  </div>
                  <button
                    onClick={() => remove(it.productId)}
                    className="text-muted-foreground hover:text-destructive"
                    aria-label="Eliminar"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-auto flex items-center justify-between pt-4">
                  <div className="inline-flex items-center rounded-sm border border-border">
                    <button onClick={() => setQty(it.productId, it.quantity - 1)} className="grid h-9 w-9 place-items-center hover:bg-muted">
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="w-8 text-center text-sm">{it.quantity}</span>
                    <button onClick={() => setQty(it.productId, it.quantity + 1)} className="grid h-9 w-9 place-items-center hover:bg-muted">
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <div className="font-display text-lg">{formatPrice(it.product.price * it.quantity)}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <aside className="h-fit rounded-sm border border-border bg-card p-6 lg:sticky lg:top-24">
          <h2 className="font-display text-2xl">Resumen</h2>
          <dl className="mt-5 space-y-3 border-y border-border py-5 text-sm">
            <div className="flex justify-between"><dt className="text-muted-foreground">Subtotal</dt><dd>{formatPrice(subtotal)}</dd></div>
            <div className="flex justify-between"><dt className="text-muted-foreground">Envío</dt><dd>Calculado al pagar</dd></div>
          </dl>
          <div className="mt-5 flex items-baseline justify-between">
            <span className="text-xs uppercase tracking-[0.2em]">Total</span>
            <span className="font-display text-2xl text-primary">{formatPrice(subtotal)}</span>
          </div>
          <button
            onClick={() => { setCheckedOut(true); clear(); }}
            className="mt-6 w-full rounded-sm bg-primary px-6 py-3 text-sm uppercase tracking-wider text-primary-foreground transition hover:opacity-90"
          >
            Finalizar pedido
          </button>
          <button
            onClick={clear}
            className="mt-3 w-full text-xs uppercase tracking-wider text-muted-foreground hover:text-destructive"
          >
            Vaciar carrito
          </button>
        </aside>
      </div>
    </div>
  );
}
