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
      allRecommendedJson {
        edges {
          node {
            title
            slug
            id
            image {
              childImageSharp {
                fluid(maxWidth: 450, maxHeight: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section className={styles.main}>
      <h1 className={styles.heading}>Recommended Products</h1>
      <section className={styles.container}>
        {data.allRecommendedJson.edges.map(({ node }) => {
          return (
            <Cards
              key={node.id}
              title={node.title}
              fluid={node.image.childImageSharp.fluid}
              slug={node.slug}
            />
          )
        })}
      </section>
    </section>
  )
}

export default Recommended
