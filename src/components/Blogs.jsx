import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styles from "../styles/blogs.module.css"
// import Img from "gatsby-image"

const Cards = ({ fluid, link, title, description, html }) => {
  return (
    <section className={styles.card}>
      <section className="img">
        <img className={styles.image} src={fluid} alt="some text" />
        <section className="info">
          <h1 className={styles.title}> {title} </h1>
          <p className={styles.description}> {description} </p>
          <Link to={link}>
            <button className={styles.button} type="button">
              Read More...
            </button>
          </Link>
          {/* <section dangerouslySetInnerHTML={{ __html: html }}></section> */}
        </section>
      </section>
    </section>
  )
}

const Blogs = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        totalCount
        edges {
          node {
            id
            frontmatter {
              thumbnail
              title
              description
              path
            }
            html
          }
        }
      }
    }
  `)
  return (
    <React.Fragment>
      <section className={styles.main}>
        <h1 className={styles.heading}>Our Blogs</h1>
        <section className={styles.blogContainer}>
          <h4 className={styles.heading2}>
            {" "}
            Total Posts - {data.allMarkdownRemark.totalCount}{" "}
          </h4>
          <ul className={styles.posts}>
            {data.allMarkdownRemark.edges.map(({ node }) => {
              return (
                <section key={node.id} className={styles.singlePost}>
                  <Cards
                    fluid={node.frontmatter.thumbnail}
                    title={node.frontmatter.title}
                    description={node.frontmatter.description}
                    link={node.frontmatter.path}
                    // html={node.html}
                  />
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
