import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

const BlogTemplate = ({ data }) => {
  const result = data.markdownRemark

  return (
    <Layout>
      <section style={{ color: `black` }} className="container">
        <h1>Hello From Blog Template</h1>
        <section className="post">
          <h1> {result.frontmatter.title} </h1>
          <h2> {result.frontmatter.date} </h2>
          <p> {result.frontmatter.description} </p>
          <section
            className="body"
            dangerouslySetInnerHTML={{ __html: result.html }}
          ></section>
          <h4> {result.frontmatter.tags} </h4>
        </section>
      </section>
    </Layout>
  )
}

export default BlogTemplate

export const data = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
        tags
      }
      html
    }
  }
`
