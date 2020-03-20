import React from "react"
import Layout from "../components/Layout"
import Papersection from "../components/Papersection"
import Herosection from "../components/Herosection"
import Newsletter from "../components/Newsletter"
import Recommended from "../components/Recommended"

export default () => {
  return (
    <React.Fragment>
      <Layout>
        <Papersection />
        <Herosection />
        <Recommended />
        <Newsletter />
      </Layout>
    </React.Fragment>
  )
}
