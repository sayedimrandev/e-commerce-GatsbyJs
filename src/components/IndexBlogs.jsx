import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import styles from "../styles/indexblog.module.css"

const Cards = ({ fluid, link, title, description }) => {
  return (
    <section className={styles.card}>
      <Image className={styles.image} fluid={fluid} alt="somePic" />
      <section className={styles.info}>
        <h1 className={styles.title}> {title} </h1>
        <p className={styles.description}> {description} </p>
        <Link to={link}>
          <button className={styles.button} type="button">
            View More
          </button>
        </Link>
      </section>
    </section>
  )
}

const IndexBlogs = () => {
  const data = useStaticQuery(graphql`
    query {
      allAllblogsJson(limit: 2, sort: { fields: date, order: DESC }) {
        edges {
          node {
            title
            slug
            description
            id
            date
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 450, maxHeight: 250) {
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
      <h1 className={styles.heading}>Our Blogs</h1>
      <section className={styles.blogContainer}>
        {data.allAllblogsJson.edges.map(({ node }) => {
          return (
            <Cards
              fluid={node.thumbnail.childImageSharp.fluid}
              title={node.title}
              link={node.slug}
              description={node.description}
              key={node.id}
            />
          )
        })}
      </section>
    </section>
  )
}

export default IndexBlogs
