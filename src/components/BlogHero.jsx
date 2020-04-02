import React from "react"
import BackgroundImage from "gatsby-background-image"
import { Link, useStaticQuery, graphql } from "gatsby"

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
    }
  `)
  return (
    <BackgroundImage
      Tag="section"
      fluid={data.background.childImageSharp.fluid}
      style={{ height: `25rem` }}
    ></BackgroundImage>
  )
}

export default BlogHero
