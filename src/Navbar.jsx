import React, { useState } from "react";

import { MdMenuBook } from "react-icons/md";
import Navbar_Modal from "./components/Navbar_Modal";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div id="navbar">
      <h1>Restaurant</h1>
      <MdMenuBook onClick={()=>setNavOpen(true)} />
      {navOpen && <Navbar_Modal isOpen={setNavOpen} />}
    </div>
  );
}
