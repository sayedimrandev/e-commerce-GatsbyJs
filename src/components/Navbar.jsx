import React from "react"
import "../styles/navbar.css"
import Logo from "../static/shoppingLogo.jpg"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <section className="container">
      <nav>
        <Link style={{ margin: `0px`, padding: `0px` }} to="/">
          <div id="logo">
            <img className="logo" src={Logo} alt="shoppingLogo" />
          </div>
        </Link>
        <label
          htmlFor="drop"
          style={{ fontSize: `3rem`, textAlign: `right` }}
          className="toggle"
        >
          &#x21b4;
        </label>
        <input type="checkbox" id="drop" />
        <ul className="menu">
          <li>
            <label htmlFor="drop-1" className="toggle">
              Womens +
            </label>
            <Link to="/womens">Womens</Link>
            <input type="checkbox" id="drop-1" />
            <ul>
              <li>
                <a href="#">Tops</a>
              </li>
              <li>
                <a href="#">Head-Footwares</a>
              </li>
              <li>
                <a href="#">Jackets-Hoodies</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
            </ul>
          </li>
          <li>
            <label for="drop-2" className="toggle">
              Mens +
            </label>
            <Link to="/mens">Mens</Link>
            <input type="checkbox" id="drop-2" />
            <ul>
              <li>
                <a href="#">Jackets-Hoodies</a>
              </li>
              <li>
                <a href="#">Shirts-Tshirts</a>
              </li>
              <li>
                <a href="#">Head-Footwares</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Blogs</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Navbar
