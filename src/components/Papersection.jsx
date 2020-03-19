import React from "react"
import Shipping from "../static/free-delivery.png"
import Offer from "../static/discount.png"
import Return from "../static/return.png"
import paperStyles from "../styles/paper.module.css"

const Papersection = () => {
  return (
    <section className={paperStyles.container}>
      <section className={paperStyles.shippingContainer}>
        <img className={paperStyles.logo} src={Shipping} alt="freeShipping" />
        <span className={paperStyles.text}>Free Shipping</span>
      </section>
      <section className={paperStyles.offerContainer}>
        <img className={paperStyles.logo} src={Offer} alt="discounts" />
        <span className={paperStyles.text}>15% Discount </span>
      </section>
      <section className={paperStyles.returnContainer}>
        <img className={paperStyles.logo} src={Return} alt="returnAvailable" />
        <span className={paperStyles.text}>Return Available</span>
      </section>
    </section>
  )
}

export default Papersection
