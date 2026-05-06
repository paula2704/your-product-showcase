import { Link } from "@tanstack/react-router";
import { type Product, formatPrice } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/productos/$id"
      params={{ id: product.id }}
      className="group block"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute left-3 top-3 rounded-sm bg-background/90 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-foreground">
          {product.category}
        </div>
      </div>
      <div className="pt-4">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-lg leading-tight">{product.name}</h3>
          <span className="font-sans text-sm text-foreground">{formatPrice(product.price)}</span>
        </div>
        <p className="mt-1 text-xs uppercase tracking-[0.15em] text-gold-deep">{product.region}</p>
      </div>
    </Link>
  );
}
