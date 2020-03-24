import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import MenShirts from "../components/mens/Shirts"
import ShirtDetails from "../components/mens/ShirtDetails"
import MenHoodiesJackets from "../components/mens/HoodiesJackets"
import HeadFootwares from "../components/mens/HeadFootwares"
import Accessories from "../components/mens/Accessories"
import Tops from "../components/womens/Tops"
import WomenShirts from "../components/womens/Shirts"
import WomenHoodiesJackets from "../components/womens/JacketsHoodies"
import HeadScarves from "../components/womens/HeadScarves"
import FootwaresSandals from "../components/womens/Footwares"
import WomenAccessories from "../components/womens/Accessories"
import MenSingleHoodie from "../components/mens/SingleHoodie"
import WomenShirtDetails from "../components/womens/ShirtDetails"

const app = () => {
  return (
    <Layout>
      <Router>
        <MenShirts path="/products/mens/shirts-Tshirts" />
        <ShirtDetails path="/products/mens/shirt/:id" />
        <MenHoodiesJackets path="/products/mens/hoodies-jackets" />
        <MenSingleHoodie path="/products/mens/hoodies-jackets/:id" />
        <HeadFootwares path="/products/mens/head-footwares" />
        <Accessories path="/products/mens/accessories" />
        <Tops path="/products/womens/tops" />
        <WomenShirts path="/products/womens/shirts-Tshirts" />
        <WomenShirtDetails path="/products/womens/shirts-Tshirts/:id" />
        <WomenHoodiesJackets path="/products/womens/hoodies-jackets" />
        <HeadScarves path="/products/womens/headwares-scarves" />
        <FootwaresSandals path="/products/womens/footwares-sandals" />
        <WomenAccessories path="/products/womens/accessories" />
      </Router>
    </Layout>
  )
}

export default app
