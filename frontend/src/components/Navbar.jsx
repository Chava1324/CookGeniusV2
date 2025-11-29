// src/components/Navbar.jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top shadow-sm">
      <div className="container py-2">
        {/* Logo */}
        <a className="navbar-brand fw-bold fs-4" href="#inicio">
          <span className="text-primary">Cook</span>
          <span className="text-success">Genius</span>
        </a>

        {/* Botón responsive */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <a className="nav-link" href="#inicio">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#como-funciona">
                Cómo funciona
              </a>
            </li>
            {isLoggedIn && (
              <li className="nav-item">
                <a className="nav-link" href="#panel">
                  Mi panel
                </a>
              </li>
            )}
          </ul>

          {/* Botón derecho */}
          <div className="d-flex">
            {isLoggedIn ? (
              <button
                className="btn btn-outline-danger"
                onClick={() => setIsLoggedIn(false)}
              >
                Cerrar sesión
              </button>
            ) : (
              <a href="#generador" className="btn btn-success">
                Probar ahora 🍽️
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
