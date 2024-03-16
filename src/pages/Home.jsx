import { Link } from "react-router-dom";

import { FaInstagram, FaFacebook } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";

export default function Home() {
  return (
    <div id="home-page">
      <h1 id="pseudologo">My Restaurant</h1>
      <div className="botonera">
        <Link to="/food">Menú</Link>
        <Link to="/">Quiz</Link>
      </div>
      <div id="redes-sociales">
        <ImWhatsapp />
        <FaFacebook />
        <FaInstagram />
      </div>
    </div>
  );
}
