import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-night text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="font-display text-2xl">Puertas Colombia</div>
          <p className="mt-3 max-w-sm text-sm text-cream/70">
            Arte funcional con alma. Cada pieza es una réplica artesanal del patrimonio arquitectónico colombiano,
            tallada a mano por nuestros maestros artesanos.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-gold">Navegación</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-gold">Inicio</Link></li>
            <li><Link to="/productos" className="hover:text-gold">Productos</Link></li>
            <li><Link to="/quienes-somos" className="hover:text-gold">Quiénes somos</Link></li>
            <li><Link to="/contactanos" className="hover:text-gold">Contáctanos</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-gold">Contacto</div>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            <li>Bogotá, Colombia</li>
            <li>hola@puertascolombia.co</li>
            <li>+57 310 000 0000</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-cream/50 md:flex-row md:px-8">
          <span>© {new Date().getFullYear()} Puertas Colombia. Todos los derechos reservados.</span>
          <span className="font-serif italic">Donde cada puerta cuenta una historia.</span>
        </div>
      </div>
    </footer>
  );
}
