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
            <Link className={footerStyles.links} to="#">
              Shop Mens
            </Link>
            <Link className={footerStyles.links} to="#">
              Shop Womens
            </Link>
            <Link className={footerStyles.links} to="#">
              Shop Accessories
            </Link>
          </section>
          <section className={footerStyles.infoLinks}>
            <h1 className={footerStyles.title}>Info</h1>
            <Link className={footerStyles.links} to="#">
              Contact-Us
            </Link>
            <Link className={footerStyles.links} to="#">
              Blogs
            </Link>
            <Link className={footerStyles.links} to="#">
              About Us
            </Link>
          </section>
          <section className={footerStyles.collectionLinks}>
            <h1 className={footerStyles.title}>Collections</h1>
            <Link className={footerStyles.links} to="#">
              Mens Shirts
            </Link>
            <Link className={footerStyles.links} to="#">
              Womens Tops
            </Link>
            <Link className={footerStyles.links} to="#">
              Jackets
            </Link>
            <Link className={footerStyles.links} to="#">
              Head-Footwares
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
