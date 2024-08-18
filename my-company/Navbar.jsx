import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#333",
        padding: "10px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ul style={{ listStyle: "none", display: "flex", margin: 0, padding: 0 }}>
        <li style={{ marginRight: "20px" }}>
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li style={{ marginRight: "20px" }}>
          <Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>
            About
          </Link>
        </li>
        <li style={{ marginRight: "20px" }}>
          <Link
            to="/services"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Services
          </Link>
        </li>
        <li style={{ marginRight: "20px" }}>
          <Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
