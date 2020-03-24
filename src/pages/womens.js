import React from "react"
import Categories from "../components/womens/Categories"
import Layout from "../components/Layout"
import Herosection from "../components/womens/Herosection"
import Papersection from "../components/Papersection"

const womens = () => {
  return (
    <React.Fragment>
      <Layout>
        <Papersection />
        <Herosection />
        <Categories />
      </Layout>
    </React.Fragment>
  )
}

export default womens
