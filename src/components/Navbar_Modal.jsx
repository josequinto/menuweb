import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar_Modal({ isOpen }) {
  const closeModal = () => isOpen(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div id="navbar-modal">
      <h1 onClick={closeModal}>X</h1>
      <div id="navbar-modal-links">
      <Link to="/" onClick={closeModal}>
          Inicio
        </Link>
        <Link to="/food" onClick={closeModal}>
          Principales
        </Link>
        <Link to="/postres" onClick={closeModal}>
          Postres
        </Link>
        <Link to="/bebidas" onClick={closeModal}>
          Bebidas
        </Link>
      </div>
    </div>
  );
}
