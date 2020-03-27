import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "../../styles/mens/offers.module.css"
import BackgroundImage from "gatsby-background-image"

const Card = ({ fluid, src, title }) => (
  <section className={styles.card}>
    <Img fluid={fluid} className={styles.image} />
    <section className={styles.info}>
      <p className={styles.title}>{title}</p>
      <Link to={`${src}`}>
        <button className={styles.button}>View More</button>
      </Link>
    </section>
  </section>
)

const Offers = () => {
  const data = useStaticQuery(graphql`
    query {
      shirts: file(relativePath: { eq: "images/mens/shirts/shirt7.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hoodies: file(relativePath: { eq: "images/mens/hoodies/hoodie4.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      headwares: file(
        relativePath: { eq: "images/mens/headwares/head4.jpeg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      footwares: file(
        relativePath: { eq: "images/mens/footwares/head8.jpeg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      accessories: file(
        relativePath: { eq: "images/mens/accessories/accessories2.jpeg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      background: file(
        relativePath: { eq: "images/mens/shirts/shirt11.jpeg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 480) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage
      Tag="section"
      fluid={data.background.childImageSharp.fluid}
      className={styles.main}
    >
      <h1 className={styles.heading}>Our Recommended Products</h1>
      <section className={styles.container}>
        <Card
          fluid={data.shirts.childImageSharp.fluid}
          src={`/products/mens/shirts-Tshirts`}
          title="Simple Plain Shirt"
        />
        <Card
          fluid={data.hoodies.childImageSharp.fluid}
          src={`/products/mens/hoodies-jackets`}
          title="Cool party wear Jacket"
        />
        <Card
          fluid={data.headwares.childImageSharp.fluid}
          src={"/products/mens/head-footwares"}
          title="Basic Casual  Cap"
        />
        <Card
          fluid={data.footwares.childImageSharp.fluid}
          src={"/products/mens/head-footwares"}
          title="Leather Shoes "
        />
        <Card
          fluid={data.accessories.childImageSharp.fluid}
          src={"/products/mens/accessories"}
          title="Bracelet and accessories"
        />
      </section>
    </BackgroundImage>
  )
}

export default Offers
