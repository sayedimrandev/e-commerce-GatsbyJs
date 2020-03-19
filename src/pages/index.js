import React from "react"
import Layout from "../components/Layout"
import Papersection from "../components/Papersection"
import Herosection from "../components/Herosection"
import Newsletter from "../components/Newsletter"

export default () => {
  return (
    <React.Fragment>
      <Layout>
        <Papersection />
        <Herosection />
        <Newsletter />
      </Layout>
    </React.Fragment>
  )
}
