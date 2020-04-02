import React from "react"
import Layout from "../components/Layout"
import Papersection from "../components/Papersection"
import Herosection from "../components/Herosection"
import Newsletter from "../components/Newsletter"
import Recommended from "../components/Recommended"
import IndexBlog from "../components/IndexBlogs"

export default () => {
  return (
    <React.Fragment>
      <Layout>
        <Papersection />
        <Herosection />
        <Recommended />
        <IndexBlog />
        <Newsletter />
      </Layout>
    </React.Fragment>
  )
}
