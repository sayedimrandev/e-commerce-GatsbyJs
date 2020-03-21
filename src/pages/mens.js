import React from "react"
import Categories from "../components/mens/Categories"
import Layout from "../components/Layout"
import Herosection from "../components/mens/Herosection"

const mens = () => {
  return (
    <React.Fragment>
      <Layout>
        <Herosection />
        <Categories />
      </Layout>
    </React.Fragment>
  )
}

export default mens
