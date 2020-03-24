import React, { useState, useEffect } from "react"
import ClipLoader from "react-spinners/ClipLoader"
import { Link } from "gatsby"
import styles from "../../styles/mens/offers.module.css"

const Fallback = ({ loading }) => {
  return (
    <section>
      <ClipLoader size={150} color={"#123abc"} loading={loading} />
    </section>
  )
}

const Card = ({ src, title, price, link, offer }) => (
  <React.Fragment>
    <section className={styles.card}>
      <img className={styles.image} src={src} alt="productImage" />
      <section className={styles.info}>
        <span className={styles.title}>{title}</span>
        <span className={styles.price}>{price}</span>
        <Link to={link}>
          <button className={styles.button}>View Offer</button>
        </Link>
      </section>
    </section>
    <h1 className={styles.offer}>{offer} OFF</h1>
  </React.Fragment>
)

const Offers = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => { 
    async function getData() {
      const response = await fetch("http://localhost:3000/mens/shirts/offers")
      const data = await response.json()
      console.log(data.product)
      setProducts(data.product)
      setLoading(false)
    }
    getData()
  }, [])
  return (
    <section className={styles.main}>
      <h1 className={styles.heading}>Our Offers </h1>
      <section className={styles.container}>
        {loading ? (
          <Fallback loading={loading} />
        ) : (
          products.map(product => (
            <section key={product._id}>
              <Card
                title={product.name}
                src={product.Image}
                price={product.price}
                link={`/products/mens/shirt/${product._id}`}
                offer={product.offers}
              />
            </section>
          ))
        )}
      </section>
    </section>
  )
}

export default Offers
