import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import Shirts from "../components/mens/Shirts"

const app = () => {
  return (
    <Layout>
      <Router>
        <Shirts path="/app/mens/shirts" />
      </Router>
    </Layout>
  )
}

export default app
