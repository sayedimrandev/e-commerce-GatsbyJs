import React from "react"
import BackgroundImage from "gatsby-background-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "../styles/blogs.module.css"

const Card = ({ title, fluid, description, slug }) => {
  return (
    <section className={styles.card}>
      <Img fluid={fluid} className={styles.image} alt="somePic" />
      <h1 className={styles.title}> {title} </h1>
      <p className={styles.description}> {description} </p>
      <Link to={slug}>
        <button className={styles.button} type="button">
          View Details
        </button>
      </Link>
    </section>
  )
}

const BlogHero = () => {
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "images/blog2.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 850, maxHeight: 680) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      allBlogpostsJson(sort: { fields: date, order: DESC }, limit: 1) {
        edges {
          node {
            id
            title
            slug
            date
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 200) {
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
    <BackgroundImage
      Tag="section"
      fluid={data.background.childImageSharp.fluid}
      style={{ height: `28rem` }}
    >
      {data.allBlogpostsJson.edges.map(({ node }) => (
        <section className={styles.heroContainer}>
          <Card
            key={node.id}
            title={node.title}
            slug={node.slug}
            description={node.description}
            fluid={node.thumbnail.childImageSharp.fluid}
          />
        </section>
      ))}
    </BackgroundImage>
  )
}

export default BlogHero
