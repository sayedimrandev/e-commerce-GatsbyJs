import React from "react"
import BackgroundImage from "gatsby-background-image"
import { Link, useStaticQuery, graphql } from "gatsby"

const Herosection = () => {
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "images/mens/menback.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 950, maxHeight: 650) {
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

export default Herosection
