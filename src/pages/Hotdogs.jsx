import Plate from "../components/Plate";

export default function Hotdogs() {
  const hotdogs = [
    {
      name: "Clásico de la Calle",
      description:
        "Salchicha de carne, servida en un pan de bocadillo con kétchup, mostaza, cebolla picada y pepinillos.",
      price: "3.50",
      image: "https://tse4.mm.bing.net/th/id/OIG1.h9yCnY32vtRbAxztci0O?pid=ImgGn",
    },
    {
      name: "Tex-Mex Street",
      description:
        "Salchicha de carne condimentada, servida en un pan de bocadillo con chili con carne, queso cheddar rallado, jalapeños y crema agria.",
      price: "4.50",
      image: "https://tse1.mm.bing.net/th/id/OIG2.Eb3_qgkkUoFPq8_9r858?pid=ImgGn",
    },
    {
      name: "Tropical Callejero",
      description:
        "Salchicha de pollo, servida en un pan de bocadillo con trozos de piña fresca, salsa de barbacoa, mayonesa y cilantro.",
      price: "4.00",
      image: "https://tse3.mm.bing.net/th/id/OIG2.xUJnolrmcCI6keH5rzy9?pid=ImgGn",
    },
    {
      name: "Veggie Street",
      description:
        "Salchicha vegana a base de vegetales, servida en un pan de bocadillo integral con guacamole, tomate, lechuga y cebolla morada.",
      price: "5.00",
      image: "https://tse1.mm.bing.net/th/id/OIG3.850z2hQi2iL64OcMwH1m?pid=ImgGn",
    },
    {
      name: "Chicago Callejero",
      description:
        "Salchicha de carne, servida en un pan de bocadillo poppyseed con mostaza, pepinillos, tomate, cebolla, pimiento verde y sal de apio.",
      price: "4.50",
      image: "https://tse1.mm.bing.net/th/id/OIG2.Nn5sD7XJ3568mYZzawXx?pid=ImgGn",
    },
    {
      name: "Deluxe Callejero",
      description:
        "Salchicha de carne premium, servida en un pan de bocadillo brioche con bacon crujiente, cebolla caramelizada, queso suizo y salsa BBQ.",
      price: "6.00",
      image: "https://tse4.mm.bing.net/th/id/OIG4.4LWMTWRsnaVNdib.nfbL?pid=ImgGn",
    },
  ];

  return (
    <section className="food-section">
      <h1 className="polygon-title hotdogs">HotDog</h1>
      {hotdogs.map((dog) => (
        <Plate
          key={dog.name}
          name={dog.name}
          price={dog.price}
          description={dog.description}
          image={dog.image}
        />
      ))}
    </section>
  );
}
