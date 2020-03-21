import React from "react"
import Categories from "../components/womens/Categories"
import Layout from "../components/Layout"
import Herosection from "../components/womens/Herosection"

const womens = () => {
  return (
    <React.Fragment>
      <Layout>
        <Herosection />
        <Categories />
      </Layout>
    </React.Fragment>
  )
}

export default womens
