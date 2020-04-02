import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import styles from "../styles/blog.module.css"

export const query = graphql`
  query($slug: String!) {
    blogpostsJson(slug: { eq: $slug }) {
      description
      title
      date
      id
      body
      thumbnail {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const BlogTemplate = ({ data }) => {
  return (
    <Layout>
      <section className={styles.main}>
        <section className={styles.imgContainer}>
          <Image
            className={styles.image}
            fluid={data.blogpostsJson.thumbnail.childImageSharp.fluid}
          />
        </section>
        <h2 className={styles.title}> {data.blogpostsJson.title} </h2>
        <p className={styles.description}> {data.blogpostsJson.description} </p>
        <section
          className={styles.body}
          dangerouslySetInnerHTML={{ __html: data.blogpostsJson.body }}
        ></section>
      </section>
    </Layout>
  )
}

export default BlogTemplate
