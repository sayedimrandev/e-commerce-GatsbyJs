import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Arrow from "../components/Arrow"

const Layout = ({ children }) => {
  return (
    <section>
      <Navbar />
      {children}
      <Arrow />
      <Footer />
    </section>
  )
}

export default Layout
