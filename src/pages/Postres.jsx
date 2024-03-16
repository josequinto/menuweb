import Plate from "../components/Plate";

export default function Postres() {
  const postres = [
    {
      name: "Churros con Chocolate",
      description:
        "Deliciosos churros crujientes acompañados de una salsa de chocolate caliente, perfectos para satisfacer tu antojo de dulce en cualquier momento del día.",
      price: "3.50",
      image: "https://tse2.mm.bing.net/th/id/OIG2.WNNBM32HaZDyX_qLDtAD?pid=ImgGn",
    },
    {
      name: "Helado de Tres Sabores",
      description:
        "Una combinación refrescante de helado de vainilla, fresa y chocolate, adornado con nueces crujientes y una generosa porción de salsa de caramelo, una opción clásica y reconfortante para cualquier ocasión.",
      price: "4.00",
      image: "https://tse1.mm.bing.net/th/id/OIG1.ghp3VDsXnSuFlet9uj5K?pid=ImgGn",
    },
    {
      name: "Pastel de Tres Leches",
      description:
        "Un postre tradicionalmente esponjoso y húmedo, empapado en una mezcla de tres tipos de leche y rematado con una capa de crema batida y fresas frescas, una indulgencia dulce que no te puedes perder.",
      price: "5.50",
      image: "https://tse4.mm.bing.net/th/id/OIG4.yPfWc8bQfAI3XmwOsVsV?pid=ImgGn",
    },
    {
      name: "Gelatina de Frutas",
      description:
        "Una gelatina refrescante, llena de trozos de frutas tropicales frescas, perfecta para saciar tu sed y tu deseo de algo dulce al mismo tiempo.",
      price: "2.50",
      image: "https://tse4.mm.bing.net/th/id/OIG3.yX0r1G8cIbUZ1VZ.gshT?pid=ImgGn",
    },
    {
      name: "Buñuelos de Viento",
      description:
        "Deliciosos buñuelos dulces y esponjosos, espolvoreados con azúcar en polvo y canela, una opción perfecta para aquellos que buscan un bocado dulce y reconfortante.",
      price: "3.00",
      image: "https://tse3.mm.bing.net/th/id/OIG3.05ZR3nQlcRc3PWgPi55_?pid=ImgGn",
    },
  ];

  return (
    <section className="food-section">
      <h1 className="polygon-title postres">Postres</h1>
      {postres.map((postre) => (
        <Plate
          key={postre.name}
          name={postre.name}
          price={postre.price}
          description={postre.description}
          image={postre.image}
        />
      ))}
    </section>
  );
}
