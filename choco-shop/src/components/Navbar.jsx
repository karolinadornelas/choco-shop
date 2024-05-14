import React from "react";
import shopLogo from "/src/assets/logo-heart.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a className="navbar-link" href="#"></a>
        <img src={shopLogo} alt="" />
        <div className="navbar-links">
          <a className="navbar-link" href="#">
            Home
          </a>
          <a className="navbar-link" href="#">
            Servicos
          </a>
          <a className="navbar-link" href="#">
            Contato
          </a>
          <a className="navbar-link" href="#">
            Encomenda
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
