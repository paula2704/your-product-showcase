import { Link } from "@tanstack/react-router";
import { type Product, formatPrice } from "@/data/products";

const accents = [
  "from-caribe-blue/30 to-caribe-teal/20",
  "from-primary/30 to-caribe-pink/20",
  "from-caribe-yellow/40 to-caribe-orange/25",
  "from-secondary/30 to-caribe-teal/20",
  "from-caribe-orange/35 to-caribe-pink/25",
  "from-caribe-purple/30 to-caribe-blue/20",
];

function hashIndex(id: string) {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return h % accents.length;
}

const badgeColors = ["bg-primary text-primary-foreground", "bg-secondary text-secondary-foreground", "bg-caribe-blue text-cream", "bg-caribe-orange text-night", "bg-caribe-yellow text-night", "bg-caribe-purple text-cream"];

export function ProductCard({ product }: { product: Product }) {
  const accent = accents[hashIndex(product.id)];
  const badge = badgeColors[hashIndex(product.id + "b")];
  return (
    <Link
      to="/productos/$id"
      params={{ id: product.id }}
      className="group block"
    >
      <div className={`relative aspect-[4/5] overflow-hidden rounded-md bg-gradient-to-br ${accent} ring-1 ring-border transition group-hover:shadow-puerta`}>
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className={`absolute left-3 top-3 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider shadow ${badge}`}>
          {product.category}
        </div>
      </div>
      <div className="pt-4">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-lg leading-tight group-hover:text-primary transition">{product.name}</h3>
          <span className="font-sans text-sm text-foreground">{formatPrice(product.price)}</span>
        </div>
        <p className="mt-1 text-xs uppercase tracking-[0.15em] text-gold-deep">{product.region}</p>
      </div>
    </Link>
  );
}
