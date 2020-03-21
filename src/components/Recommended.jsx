import React from "react"
import Img from "gatsby-image"
import { Link, graphql, useStaticQuery } from "gatsby"
import styles from "../styles/recommended.module.css"

const Cards = ({ fluid, slug, title }) => {
  return (
    <section className={styles.card}>
      <Img fluid={fluid} alt="products" className={styles.image} />
      <section className={styles.info}>
        <p className={styles.title}>{title}</p>
        <Link to={slug}>
          <button className={styles.button} type="button">
            View
          </button>
        </Link>
      </section>
    </section>
  )
}

const Recommended = () => {
  const data = useStaticQuery(graphql`
    query {
      shirt1: file(relativePath: { eq: "images/mens/shirts/shirt1.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 450, maxHeight: 450) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shirt2: file(relativePath: { eq: "images/mens/shirts/shirt2.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 450, maxHeight: 450) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shirt3: file(relativePath: { eq: "images/mens/shirts/shirt3.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 450, maxHeight: 450) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jacket1: file(relativePath: { eq: "images/mens/hoodies/jacket1.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 450, maxHeight: 450) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className={styles.main}>
      <h1 className={styles.heading}>Recommended Products</h1>
      <section className={styles.container}>
        <Cards
          fluid={data.shirt1.childImageSharp.fluid}
          slug={`#`}
          title={"Shirt1"}
        />
        <Cards
          fluid={data.shirt2.childImageSharp.fluid}
          slug={`#`}
          title={`Shirt2`}
        />

        <Cards
          fluid={data.shirt3.childImageSharp.fluid}
          slug={`#`}
          title={"Shirt 3"}
        />
        <Cards
          fluid={data.jacket1.childImageSharp.fluid}
          slug={`#`}
          title={`Jackets`}
        />
      </section>
    </section>
  )
}

export default Recommended
