import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

const Herosection = () => {
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "images/womens/womenback2.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 380) {
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
