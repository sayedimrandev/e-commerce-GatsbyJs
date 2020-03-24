import React from "react"
import Img from "gatsby-image"
import { Link, graphql, useStaticQuery } from "gatsby"
import styles from "../../styles/mens/categories.module.css"

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

const Categories = () => {
  const data = useStaticQuery(graphql`
    query {
      tops: file(relativePath: { eq: "images/womens/tops.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shirts: file(relativePath: { eq: "images/womens/wshirts.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jackets: file(relativePath: { eq: "images/womens/wjackets.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      headwares: file(relativePath: { eq: "images/womens/wheadwares.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      footwares: file(relativePath: { eq: "images/womens/wfootwares.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      accessories: file(
        relativePath: { eq: "images/womens/waccessories.jpeg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <section className={styles.main}>
      <h1 className={styles.heading}>Womens Categories</h1>
      <section className={styles.container}>
        <Card
          fluid={data.tops.childImageSharp.fluid}
          src={`/products/womens/tops`}
          title="Tops"
        />
        <Card
          fluid={data.shirts.childImageSharp.fluid}
          src={`/products/womens/shirts-Tshirts`}
          title="Shirts and T-shirts"
        />
        <Card
          fluid={data.jackets.childImageSharp.fluid}
          src={"/products/womens/hoodies-jackets"}
          title="Jackets and Hoodies"
        />
        <Card
          fluid={data.headwares.childImageSharp.fluid}
          src={"/products/womens/headwares-scarves"}
          title="Headwares and Scarves"
        />
        <Card
          fluid={data.footwares.childImageSharp.fluid}
          src={"/products/womens/footwares-sandals"}
          title="Footwares"
        />
        <Card
          fluid={data.accessories.childImageSharp.fluid}
          src={"/products/womens/accessories"}
          title="All Accessories"
        />
      </section>
    </section>
  )
}

export default Categories
