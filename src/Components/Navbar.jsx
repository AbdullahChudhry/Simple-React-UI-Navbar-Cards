import React from "react";
import { FaTwitter, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  const navbar = {
    blog: "Blog",
    about: "About ",
    contact: "Contact",
    shop: " Shop",
  };
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <h1>Souto</h1>
          </div>
          <ul className="menu">
            {Object.entries(navbar).map(([key, value]) => (
              <li key={key}>
                <a href="/">{value}</a>
              </li>
            ))}
          </ul>
          <div className="icons">
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
