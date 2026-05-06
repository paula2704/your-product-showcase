import mompox1 from "@/assets/products/mompox-1.jpg";
import mompox2 from "@/assets/products/mompox-2.jpg";
import mompox3 from "@/assets/products/mompox-3.jpg";
import bogota1 from "@/assets/products/bogota-1.jpg";
import bogota2 from "@/assets/products/bogota-2.jpg";
import candelaria1 from "@/assets/products/candelaria-1.jpg";
import candelaria2 from "@/assets/products/candelaria-2.jpg";
import giron1 from "@/assets/products/giron-1.jpg";
import santamarta1 from "@/assets/products/santamarta-1.jpg";
import costaCaribe1 from "@/assets/products/costa-caribe-1.jpg";
import barranquilla1 from "@/assets/products/barranquilla-1.jpg";
import cartagena1 from "@/assets/products/cartagena-1.jpg";
import santafe1 from "@/assets/products/santafe-1.jpg";
import filandia1 from "@/assets/products/filandia-1.jpg";
import usaquen1 from "@/assets/products/usaquen-1.jpg";
import granada1 from "@/assets/products/granada-1.jpg";
import aldabaLeon from "@/assets/products/aldaba-leon.jpg";
import aldabaRana from "@/assets/products/aldaba-rana.jpg";
import portallaves1 from "@/assets/products/portallaves-1.jpg";

export type Product = {
  id: string;
  name: string;
  region: string;
  ref: string;
  size: string;
  category: "XXL" | "XL" | "L" | "M" | "S" | "Aldabas" | "Porta llaves";
  price: number;
  images: string[];
  shortDescription: string;
  description: string;
};

export const products: Product[] = [
  {
    id: "mompox-102",
    name: "Mompox",
    region: "Mompox · Bolívar",
    ref: "Ref. 102",
    size: "20 cm × 46 cm",
    category: "XXL",
    price: 890000,
    images: [mompox1, mompox2, mompox3],
    shortDescription: "Portón colonial mompoxino con herrería ornamental tallada a mano.",
    description:
      "Réplica artesanal del portón mompoxino del siglo XVIII. Tallada en madera de cedro con acabado envejecido y herrajes en bronce trabajados artesanalmente. Cada pieza es única, firmada por el artesano que la creó con técnicas ancestrales heredadas de generaciones de talladores colombianos.",
  },
  {
    id: "bogota-101",
    name: "Bogotá",
    region: "Bogotá · Cundinamarca",
    ref: "Ref. 101",
    size: "23 cm × 29 cm",
    category: "XL",
    price: 520000,
    images: [bogota1, bogota2],
    shortDescription: "Puerta cundiboyacense en azul cielo con detalles tallados en blanco.",
    description:
      "Inspirada en las casonas del centro histórico bogotano, esta puerta refleja la elegancia capitalina con su paleta azul y blanco característica. Detalles ornamentales en bronce y tallados sobre madera de cedro envejecida.",
  },
  {
    id: "candelaria-011",
    name: "Candelaria",
    region: "La Candelaria · Bogotá",
    ref: "Ref. 011",
    size: "23 cm × 29 cm",
    category: "XL",
    price: 520000,
    images: [candelaria1, candelaria2],
    shortDescription: "Doble puerta azul con herrajes coloniales del barrio histórico.",
    description:
      "Réplica de las puertas dobles del barrio La Candelaria, corazón colonial de Bogotá. Pieza tallada a mano con bisagras y cerradura en bronce envejecido sobre cedro macizo.",
  },
  {
    id: "giron-100",
    name: "Girón",
    region: "Girón · Santander",
    ref: "Ref. 100",
    size: "23 cm × 29 cm",
    category: "XL",
    price: 540000,
    images: [giron1],
    shortDescription: "Puerta santandereana de colores vibrantes y ventana enrejada.",
    description:
      "El espíritu de Girón en madera. Acabados en rojo, amarillo y azul que evocan el pueblo patrimonio de Santander. Incluye pequeña ventana enrejada y ornamentos florales tallados.",
  },
  {
    id: "santamarta-050",
    name: "Santa Marta",
    region: "Santa Marta · Magdalena",
    ref: "Ref. 050",
    size: "23 cm × 29 cm",
    category: "XL",
    price: 520000,
    images: [santamarta1],
    shortDescription: "Puerta samaria con motivos florales en naranja y blanco.",
    description:
      "Réplica de las puertas del centro histórico de Santa Marta. Acabado en naranja cálido y blanco, con detalles florales y volutas talladas a mano.",
  },
  {
    id: "costa-caribe-021",
    name: "Costa Caribe",
    region: "Caribe Colombiano",
    ref: "Ref. 021",
    size: "20 cm × 36 cm",
    category: "L",
    price: 380000,
    images: [costaCaribe1],
    shortDescription: "Puerta caribeña en rojo y azul con espíritu costero.",
    description:
      "El Caribe colombiano hecho puerta. Madera tratada con acabado envejecido y colores vibrantes que recuerdan las casonas de Cartagena, Mompox y Santa Marta.",
  },
  {
    id: "granada-055",
    name: "Granada",
    region: "Granada · Antioquia",
    ref: "Ref. 055",
    size: "20 cm × 32 cm",
    category: "L",
    price: 360000,
    images: [granada1],
    shortDescription: "Puerta antioqueña arqueada con metalistería ornamental.",
    description:
      "Réplica de los portones del oriente antioqueño con su característico arco superior, paleta azul y naranja, y herrajes finamente trabajados.",
  },
  {
    id: "barranquilla-012",
    name: "Barranquilla",
    region: "Barranquilla · Atlántico",
    ref: "Ref. 012",
    size: "19 cm × 33 cm",
    category: "L",
    price: 380000,
    images: [barranquilla1],
    shortDescription: "Puerta arroyera con tope arqueado y carnaval de colores.",
    description:
      "Inspirada en la arquitectura republicana de la Arenosa. Combina rojos, azules, verdes y amarillos para celebrar el espíritu del Carnaval.",
  },
  {
    id: "cartagena-015",
    name: "Cartagena",
    region: "Cartagena · Bolívar",
    ref: "Ref. 015",
    size: "19 cm × 33 cm",
    category: "L",
    price: 420000,
    images: [cartagena1],
    shortDescription: "Doble puerta heroica en naranja y azul colonial.",
    description:
      "Réplica de las puertas del centro amurallado de Cartagena. Talla detallada sobre cedro con acabados en naranja terracota y azul colonial.",
  },
  {
    id: "santafe-027",
    name: "Santa Fe de Antioquia",
    region: "Santa Fe · Antioquia",
    ref: "Ref. 027",
    size: "19 cm × 33 cm",
    category: "L",
    price: 380000,
    images: [santafe1],
    shortDescription: "Doble puerta paisa con celosía blanca calada.",
    description:
      "Tradicional puerta de la ciudad madre antioqueña. Verde y azul con celosía blanca calada que filtra la luz tropical.",
  },
  {
    id: "filandia-032",
    name: "Filandia",
    region: "Filandia · Quindío",
    ref: "Ref. 032",
    size: "20 cm × 34 cm",
    category: "L",
    price: 360000,
    images: [filandia1],
    shortDescription: "Puerta cafetera roja y blanca de balcón filandeño.",
    description:
      "El paisaje cultural cafetero en una pieza. Inspirada en las casas de Filandia, Quindío. Roja y blanca con tallados delicados de la región cafetera.",
  },
  {
    id: "usaquen-05",
    name: "Usaquén",
    region: "Usaquén · Bogotá",
    ref: "Ref. 05",
    size: "20 cm × 34 cm",
    category: "L",
    price: 360000,
    images: [usaquen1],
    shortDescription: "Puerta de pueblo bogotano con paneles tricolor.",
    description:
      "Pieza inspirada en las puertas del antiguo municipio de Usaquén. Paneles en turquesa, rojo y amarillo con pequeña ventana enrejada.",
  },
  {
    id: "aldaba-leon",
    name: "Aldaba León",
    region: "Colección Herrajes",
    ref: "Aldaba L01",
    size: "12 cm × 8 cm",
    category: "Aldabas",
    price: 180000,
    images: [aldabaLeon],
    shortDescription: "Aldaba colonial con cabeza de león en bronce envejecido.",
    description:
      "Aldaba en bronce fundido y envejecido a mano, símbolo colonial de fortaleza y protección. Pieza ideal para puertas, decoración o como objeto de colección.",
  },
  {
    id: "aldaba-rana",
    name: "Aldaba Rana",
    region: "Colección Herrajes",
    ref: "Aldaba R01",
    size: "10 cm × 8 cm",
    category: "Aldabas",
    price: 160000,
    images: [aldabaRana],
    shortDescription: "Aldaba ornamental en forma de rana, símbolo de prosperidad.",
    description:
      "Inspirada en aldabas precolombinas. La rana representa abundancia y buena fortuna. Bronce envejecido trabajado artesanalmente.",
  },
  {
    id: "portallaves-xl",
    name: "Porta llaves Colonial XL",
    region: "Colección Funcional",
    ref: "PLL-XL",
    size: "30 cm × 22 cm",
    category: "Porta llaves",
    price: 280000,
    images: [portallaves1],
    shortDescription: "Porta llaves de pared con puertas que se abren.",
    description:
      "Pieza funcional y decorativa: una réplica de puerta colonial colombiana que se abre para revelar ganchos para llaves. Madera tallada y pintada a mano.",
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(n);
