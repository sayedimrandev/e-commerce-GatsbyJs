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
          style={{
            fontSize: `3rem`,
            textAlign: `right`,
            padding: "10px 0",
            margin: "0",
          }}
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
                <Link to="/products/womens/shirts-Tshirts">Shirts-Tshirts</Link>
              </li>
              <li>
                <Link to="/products/womens/headwares-scarves">
                  Head-Footwares
                </Link>
              </li>
              <li>
                <Link to="/products/womens/hoodies-jackets">
                  Jackets-Hoodies
                </Link>
              </li>
              <li>
                <Link to="/products/womens/accessories">Accessories</Link>
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
                <Link to="/products/mens/hoodies-jackets">Jackets-Hoodies</Link>
              </li>
              <li>
                <Link to="/products/mens/shirts-Tshirts">Shirts-Tshirts</Link>
              </li>
              <li>
                <Link to="/products/mens/head-footwares">Head-Footwares</Link>
              </li>
              <li>
                <Link to="/products/mens/accessories">Accessories</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Navbar
