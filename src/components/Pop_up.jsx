import { useEffect } from "react";

export default function Pop_up({ setOpen, name, price, description, image }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [setOpen]);

  return (
    <div className="modal">
      <div className="modal-header">
        <h4>{name}</h4>
        <h4 className="close" onClick={() => setOpen(false)}>
          X
        </h4>
      </div>
      <img src={image} alt="" />
      <p>{description}</p>
    </div>
  );
}
