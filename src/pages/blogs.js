import React from "react"
import Layout from "../components/Layout"
import Blogs from "../components/Blogs"
import BlogHero from "../components/BlogHero"

const blogs = () => {
  return (
    <section>
      <Layout>
        <BlogHero />
        <Blogs />
      </Layout>
    </section>
  )
}

export default blogs
