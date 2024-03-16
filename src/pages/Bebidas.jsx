import Plate from "../components/Plate";

export default function Bebidas() {
  const bebidas = [
    {
      name: "Agua Fresca de Jamaica",
      description:
        "Refrescante bebida hecha con flores de jamaica, endulzada con azúcar y un toque de limón, perfecta para calmar la sed en un día caluroso.",
      price: "2.00",
      image: "https://tse3.mm.bing.net/th/id/OIG2.WpU0lmtszUQGl51e7dia?pid=ImgGn",
    },
    {
      name: "Limonada Natural",
      description:
        "Limonada casera preparada con limones frescos exprimidos, azúcar y agua, una bebida cítrica y refrescante para disfrutar en cualquier momento.",
      price: "2.50",
      image: "https://tse4.mm.bing.net/th/id/OIG3.zIv952KXuV3sgpEU3v3U?pid=ImgGn",
    },
    {
      name: "Café Helado",
      description:
        "Café negro fuerte, enfriado y servido sobre hielo, endulzado al gusto, una opción energizante para combatir el calor del día.",
      price: "3.00",
      image: "https://tse1.mm.bing.net/th/id/OIG1.Yi9_Dj74eZTNHWiOp_H6?pid=ImgGn",
    },
    {
      name: "Té Helado de Durazno",
      description:
        "Té negro helado infusionado con jugo de durazno y endulzado con azúcar, una bebida refrescante con un toque frutal y dulce.",
      price: "2.50",
      image: "https://tse3.mm.bing.net/th/id/OIG1.25quyi9tZxgNOvhgsYfm?pid=ImgGn",
    },
    {
      name: "Refresco de Piña",
      description:
        "Refresco carbonatado con sabor a piña, una bebida dulce y burbujeante que complementa perfectamente cualquier comida callejera.",
      price: "1.75",
      image: "https://tse2.mm.bing.net/th/id/OIG1.irnWJvvNC0XTdRJy1S9f?pid=ImgGn",
    },
    {
      name: "Soda de Cola",
      description:
        "Refresco carbonatado con sabor a cola, una bebida clásica y refrescante que combina bien con cualquier platillo.",
      price: "1.50",
      image: "https://tse4.mm.bing.net/th/id/OIG2.Gzjj7_i5GnHdNRPM_Cxk?pid=ImgGn",
    },
    {
        name: "Soda de Naranja",
        description:
          "Refresco carbonatado con sabor a naranja, una bebida cítrica y burbujeante que aporta un toque refrescante a tu comida.",
        price: "1.50",
        image: "https://tse3.mm.bing.net/th/id/OIG2.8XsKYNy1uarJJiY4464.?pid=ImgGn",
      },
  ];

  return (
    <section className="food-section">
      <h1 className="polygon-title bebidas">Bebidas</h1>
      {bebidas.map((bebida) => (
        <Plate
          key={bebida.name}
          name={bebida.name}
          price={bebida.price}
          description={bebida.description}
          image={bebida.image}
        />
      ))}
    </section>
  );
}
