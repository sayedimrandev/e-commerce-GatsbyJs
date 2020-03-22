import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import Shirts from "../components/mens/Shirts"
import ShirtDetails from "../components/mens/ShirtDetails"

const app = () => {
  return (
    <Layout>
      <Router>
        <Shirts path="/app/mens/shirts" />
        <ShirtDetails path="/app/mens/shirt/:id" />
      </Router>
    </Layout>
  )
}

export default app
