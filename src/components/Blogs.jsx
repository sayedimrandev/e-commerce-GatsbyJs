import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import styles from "../styles/blogs.module.css"

const Blogs = () => {
  const data = useStaticQuery(graphql`
    query {
      allBlogpostsJson {
        edges {
          node {
            description
            title
            date
            body
            slug
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 450, maxHeight: 250) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            backgroundImage {
              childImageSharp {
                fluid(maxWidth: 380, maxHeight: 320) {
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
      <h1 className={styles.heading}>Our Popular Blogs</h1>
      <ul className={styles.posts}>
        {data.allBlogpostsJson.edges.map(({ node }) => {
          return (
            <section className={styles.postContainer}>
              <BackgroundImage
                Tag="section"
                className={styles.background}
                key={node.id}
                fluid={node.backgroundImage.childImageSharp.fluid}
              ></BackgroundImage>
              <section className={styles.singlePost}>
                <Image
                  className={styles.image}
                  fluid={node.thumbnail.childImageSharp.fluid}
                />
                <h1 className={styles.title}> {node.title} </h1>
                <p className={styles.description}> {node.description} </p>
                <Link to={node.slug}>
                  <button className={styles.button} type="button">
                    {" "}
                    View More{" "}
                  </button>
                </Link>
              </section>
            </section>
          )
        })}
      </ul>
    </section>
  )
}

export default Blogs
