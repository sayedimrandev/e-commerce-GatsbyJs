import React from "react"
import Facebook from "../static/facebook.png"
import Instagram from "../static/instagram-sketched.png"
import Twitter from "../static/twitter.png"
import Youtube from "../static/youtube.png"
import footerStyles from "../styles/footer.module.css"
import { Link } from "gatsby"

const SocialLinks = () => (
  <section className={footerStyles.mainIcon}>
    <a href="#">
      <img className={footerStyles.icons} src={Facebook} alt="FacebookLogo" />
    </a>
    <a href="#">
      <img className={footerStyles.icons} src={Instagram} alt="InstagramLogo" />
    </a>
    <a href="#">
      <img className={footerStyles.icons} src={Twitter} alt="TwitterLogo" />
    </a>
    <a href="#">
      <img className={footerStyles.icons} src={Youtube} alt="YoutubeLogo" />
    </a>
  </section>
)

const Footer = () => {
  return (
    <section className="footer-container">
      <footer>
        <section className={footerStyles.iconContainer}>
          <SocialLinks />
        </section>
        <section className={footerStyles.infoContainer}>
          <section className={footerStyles.quickLinks}>
            <h1 className={footerStyles.title}>Quick Links</h1>
            <Link className={footerStyles.links} to="/mens">
              Shop Mens
            </Link>
            <Link className={footerStyles.links} to="/womens">
              Shop Womens
            </Link>
          </section>
          <section className={footerStyles.infoLinks}>
            <h1 className={footerStyles.title}>Info</h1>
            <Link className={footerStyles.links} to="/contact">
              Contact-Us
            </Link>
            <Link className={footerStyles.links} to="/blogs">
              Blogs
            </Link>
          </section>
          <section className={footerStyles.collectionLinks}>
            <h1 className={footerStyles.title}>Collections</h1>
            <Link
              className={footerStyles.links}
              to="/products/mens/shirts-Tshirts"
            >
              Mens Shirts
            </Link>
            <Link
              className={footerStyles.links}
              to="/products/womens/accessories"
            >
              Womens Accessories
            </Link>
            <Link
              className={footerStyles.links}
              to="/products/mens/accessories"
            >
              Mens Accessories
            </Link>
          </section>
        </section>
        <section className={footerStyles.copyrightContainer}>
          <span style={{ padding: `0px`, margin: `0px` }}>
            Copyright &copy; 2020 | Terms & conditions | Privacy Policy | About
            Us
          </span>
        </section>
      </footer>
    </section>
  )
}

export default Footer
