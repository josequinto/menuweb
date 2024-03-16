import Plate from "../components/Plate";

export default function Burgers() {
  const burgers = [
    {
      name: "Clásico de la Calle",
      description:
        "Carne a la parrilla con lechuga, tomate y salsa secreta, todo envuelto en un pan artesanal.",
      price: "5.99",
      image:
        "https://tse4.mm.bing.net/th/id/OIG3.fAk_aMFA8plr_muh6QKp?pid=ImgGn",
    },
    {
      name: "Street Chicken",
      description:
        "Pollo a la parrilla con queso derretido, cebolla caramelizada y salsa especial, servido en un pan tostado.",
      price: "6.49",
      image:
        "https://tse3.mm.bing.net/th/id/OIG1.mkCJlYDqaeFGIdrtZUAw?pid=ImgGn",
    },
    {
      name: "Veggie Delight",
      description:
        "Hamburguesa vegetariana con champiñones salteados, pimientos asados y guacamole fresco, servida en un pan integral.",
      price: "6.99",
      image:
        "https://tse3.mm.bing.net/th/id/OIG4.zj14YgK44mwgN.6cXsBx?pid=ImgGn",
    },
    {
      name: "Callejero Picante",
      description:
        "Carne picada sazonada con especias, jalapeños en escabeche, cebolla morada y salsa picante, todo envuelto en un pan de maíz.",
      price: "7.49",
      image:
        "https://tse4.mm.bing.net/th/id/OIG1._CK7jnXWqUjxFABkiW6B?pid=ImgGn",
    },
    {
      name: "Street BBQ",
      description:
        "Carne asada lentamente en salsa barbacoa casera, cubierta con cebolla crujiente y servida en un pan de sésamo tostado.",
      price: "7.99",
      image:
        "https://tse2.mm.bing.net/th/id/OIG3.X90L3sJm57YdzsrHfy1A?pid=ImgGn",
    },
    {
      name: "Mariscos en la Calle",
      description:
        "Camarones a la parrilla con aguacate fresco, tomate y aderezo de cilantro-lima, todo envuelto en una tortilla de harina.",
      price: "8.49",
      image:
        "https://tse3.mm.bing.net/th/id/OIG2.vb.wr9lvLKQvF8VeChEV?pid=ImgGn",
    },
  ];
  return (
    <section className="food-section">
      <h1 className="polygon-title burgers">Hamburguesas</h1>
      {burgers.map((burger) => (
        <Plate
          key={burger.name}
          name={burger.name}
          price={burger.price}
          description={burger.description}
          image={burger.image}
        />
      ))}
    </section>
  );
}
