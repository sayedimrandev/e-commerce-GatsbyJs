import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styles from "../styles/blogs.module.css"
import Img from "gatsby-image"

const Blogs = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              date(formatString: "MMMM Do, YYYY")
              path
              description
              title
              thumbnail
            }
            html
          }
        }
      }
    }
  `)
  return (
    <React.Fragment>
      <section className="main">
        <h1 className={styles.heading}>Our Blogs</h1>
        <section className={styles.blogContainer}>
          <h4> Total Posts - {data.allMarkdownRemark.totalCount} </h4>
          <ul className={styles.posts}>
            {data.allMarkdownRemark.edges.map(({ node }) => {
              return (
                <section key={node.id} className={styles.singlePost}>
                  <h1 className={styles.title}> {node.frontmatter.title} </h1>
                  <p className={styles.description}>
                    {node.frontmatter.description}
                  </p>
                </section>
              )
            })}
          </ul>
        </section>
      </section>
    </React.Fragment>
  )
}

export default Blogs
