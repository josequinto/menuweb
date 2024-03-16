import { useState } from "react";
import Pop_up from "./Pop_up";

export default function Plate({ name, price, description, image }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="plate">
      <div className="tittle" onClick={() => setOpen(!open)}>
        <h3>{name}</h3>
        <h3>${price}</h3>
      </div>
      <p className="description">{description}</p>
      {open && (
        <Pop_up
          name={name}
          price={price}
          description={description}
          image={image}
          setOpen={setOpen}
        />
      )}
    </div>
  );
}
