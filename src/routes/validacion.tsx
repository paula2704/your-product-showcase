import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/validacion")({
  head: () => ({
    meta: [
      { title: "Validación del Portal - Puertas Colombia" },
      {
        name: "description",
        content: "Estadísticas y validación del portal de Puertas Colombia.",
      },
    ],
  }),
  component: Validacion,
});

function Validacion() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-8 text-center font-display text-4xl text-night">
        Validación del Portal
      </h1>

      {/* Resumen del test */}
      <section className="mb-12">
        <h2 className="mb-4 font-display text-2xl text-night">Resumen del Test</h2>
        <p className="text-lg text-gray-700">
          10 usuarios probaron el portal durante la fase de validación. Se evaluaron aspectos de usabilidad, navegación y experiencia de compra.
        </p>
      </section>

      {/* Métricas principales */}
      <section className="mb-12">
        <h2 className="mb-4 font-display text-2xl text-night">Métricas Principales</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-cream/60 p-6 text-center">
            <div className="text-3xl font-bold text-primary">90%</div>
            <div className="text-sm text-gray-600">Navegación satisfactoria</div>
          </div>
          <div className="rounded-lg bg-cream/60 p-6 text-center">
            <div className="text-3xl font-bold text-primary">85%</div>
            <div className="text-sm text-gray-600">Acceso al catálogo</div>
          </div>
          <div className="rounded-lg bg-cream/60 p-6 text-center">
            <div className="text-3xl font-bold text-primary">80%</div>
            <div className="text-sm text-gray-600">Intención de compra</div>
          </div>
        </div>
      </section>

      {/* Tabla de resultados */}
      <section className="mb-12">
        <h2 className="mb-4 font-display text-2xl text-night">Tabla de Resultados</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Pregunta</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Resultado</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Conclusión</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">¿La navegación es intuitiva?</td>
                <td className="border border-gray-300 px-4 py-2">90% Sí</td>
                <td className="border border-gray-300 px-4 py-2">Excelente usabilidad</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">¿El catálogo es atractivo?</td>
                <td className="border border-gray-300 px-4 py-2">85% Sí</td>
                <td className="border border-gray-300 px-4 py-2">Buena presentación de productos</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">¿Comprarías aquí?</td>
                <td className="border border-gray-300 px-4 py-2">80% Sí</td>
                <td className="border border-gray-300 px-4 py-2">Alto potencial de conversión</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Comentarios/reviews */}
      <section className="mb-12">
        <h2 className="mb-4 font-display text-2xl text-night">Comentarios de Usuarios</h2>
        <div className="space-y-4">
          <blockquote className="rounded-lg bg-cream/60 p-4 italic text-gray-700">
            "Me encantó la variedad de diseños. Las puertas se ven exactamente como las fotos."
          </blockquote>
          <blockquote className="rounded-lg bg-cream/60 p-4 italic text-gray-700">
            "La página carga rápido y es fácil de navegar. Definitivamente compraría aquí."
          </blockquote>
          <blockquote className="rounded-lg bg-cream/60 p-4 italic text-gray-700">
            "Los productos artesanales son únicos. Me gusta el enfoque en la cultura colombiana."
          </blockquote>
        </div>
      </section>

      {/* Conclusión de viabilidad */}
      <section>
        <h2 className="mb-4 font-display text-2xl text-night">Conclusión de Viabilidad</h2>
        <p className="text-lg text-gray-700">
          El portal demuestra ser viable como plataforma de e-commerce para productos artesanales. Con métricas positivas en usabilidad y intención de compra, se recomienda proceder con el desarrollo completo y la implementación de funcionalidades adicionales como carrito de compras y pagos en línea.
        </p>
      </section>
    </div>
  );
}