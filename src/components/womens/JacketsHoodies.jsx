import React, { useState, useEffect } from "react"
import styles from "../../styles/mens/shirts.module.css"
import ClipLoader from "react-spinners/ClipLoader"
import { Link } from "gatsby"

const Fallback = ({ loading }) => {
  return (
    <section>
      <ClipLoader size={150} color={"#123abc"} loading={loading} />
    </section>
  )
}

const Card = ({ src, title, link, price }) => {
  return (
    <section className={styles.card}>
      <img className={styles.image} src={src} alt="productImage" />
      <h1 className={styles.title}> {title} </h1>
      <span className={styles.price}> {price}&#x20B9; </span>
      <Link to={link}>
        <button className={styles.button}>More Details</button>
      </Link>
    </section>
  )
}

const JacketsHoodies = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:3000/womens/hoodies")
      const data = await response.json()
      console.log(data.product)
      setProducts(data.product)
      setLoading(false)
    }
    getData()
  }, [])

  return (
    <section className={styles.main}>
      <h1 className={styles.heading}>Women Hoodies and Jackets Collection</h1>
      <section className={styles.container}>
        {loading ? (
          <Fallback loading={loading} />
        ) : (
          products.map(products => (
            <section key={products._id}>
              <Card
                title={products.name}
                link={`/products/womens/hoodies-jackets/${products._id}`}
                src={products.Image}
                price={products.price}
              />
            </section>
          ))
        )}
      </section>
    </section>
  )
}

export default JacketsHoodies
