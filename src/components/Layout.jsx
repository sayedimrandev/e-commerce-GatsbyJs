import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Layout = ({ children }) => {
  return (
    <section>
      <Navbar />

      {children}
      <Footer />
    </section>
  )
}

export default Layout
