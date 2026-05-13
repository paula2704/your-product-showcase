# Puertas Colombia

Portal web tipo e-commerce para la empresa **Puertas Colombia**, una marca dedicada a la creación y comercialización de piezas artesanales inspiradas en puertas, fachadas, portones, aldabas y elementos arquitectónicos tradicionales de Colombia.

El proyecto fue desarrollado como entrega final para la materia **Negocios en Internet**, con el objetivo de presentar un portal empresarial funcional, visualmente atractivo y orientado a la venta de productos artesanales en línea.

---

## Descripción del proyecto

**Puertas Colombia** es un portal comercial que permite explorar una colección de productos artesanales organizados por categorías, regiones, tallas, precios y disponibilidad.

El sitio está inspirado en la experiencia de compra de plataformas como Amazon, integrando catálogo, detalle de producto, carrito, pago simulado, reseñas, blog, contacto, redes sociales y navegación empresarial.

---

## Funcionalidades principales

- Página de inicio atractiva y comercial.
- Catálogo de productos tipo e-commerce.
- Filtros por categoría, región, precio, disponibilidad y destacados.
- Tarjetas de producto con imagen, precio, referencia, SKU, tamaño, disponibilidad y etiquetas.
- Página de detalle de producto estilo Amazon.
- Galería de imágenes por producto.
- Selector de tallas o variantes disponibles.
- Ficha técnica del producto.
- Sección “Acerca de este artículo”.
- Productos relacionados y recomendados.
- Opiniones de clientes.
- Carrito de compras.
- Checkout con pago simulado.
- Métodos de pago visuales:
  - PSE
  - Tarjeta
  - Nequi
  - Daviplata
  - Transferencia
- Blog con comentarios de visitantes.
- Página de preguntas frecuentes.
- Página “Quiénes somos”.
- Botones funcionales a redes sociales.
- Contacto con WhatsApp, correo, teléfonos y ubicación.
- Footer con navegación, redes y datos reales de contacto.

---

## Tecnologías utilizadas

- React
- TypeScript
- Vite
- TanStack Router
- Tailwind CSS
- Lucide React
- LocalStorage para comentarios del blog
- Git y GitHub para control de versiones

---

## Estructura principal

```text
src/
  assets/
    products/
  components/
    ProductCard.tsx
    SiteFooter.tsx
    SiteHeader.tsx
  context/
    CartContext.tsx
  data/
    products.ts
  routes/
    index.tsx
    productos.tsx
    productos.$id.tsx
    carrito.tsx
    checkout.tsx
    blog.tsx
    contactanos.tsx
    quienes-somos.tsx
    preguntas-frecuentes.tsx
