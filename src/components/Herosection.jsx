import React from "react"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import heroStyles from "../styles/hero.module.css"
import Arrow from "../static/next.png"

const Herosection = () => {
  const data = useStaticQuery(graphql`
    query {
      mens: file(relativePath: { eq: "images/man.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      womens: file(relativePath: { eq: "images/woman.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shop: file(relativePath: { eq: "images/mountain.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 450, maxHeight: 450) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage
      Tag="section"
      fluid={data.shop.childImageSharp.fluid}
      className={heroStyles.container}
    >
      <section className={heroStyles.mens}>
        <Img
          className={heroStyles.image1}
          fluid={data.mens.childImageSharp.fluid}
          alt="shopping"
        />
        <button className={heroStyles.button1}>
          Shop Men{" "}
          <img
            src={Arrow}
            style={{ width: `3rem`, height: `2rem`, paddingLeft: `25px` }}
            alt="arrow"
          />{" "}
        </button>
      </section>
      <section className={heroStyles.womens}>
        <Img
          className={heroStyles.image2}
          fluid={data.womens.childImageSharp.fluid}
          alt="shopping"
        />
        <button className={heroStyles.button2}>
          Shop Women
          <img
            src={Arrow}
            style={{ width: `3rem`, height: `2rem`, paddingLeft: `25px` }}
            alt="arrow"
          />{" "}
        </button>
      </section>
    </BackgroundImage>
  )
}

export default Herosection
