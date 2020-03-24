import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import ClipLoader from "react-spinners/ClipLoader"
import styles from "../../styles/mens/shirts.module.css"

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

const HoodiesJackets = () => {
  const [hoodies, setHoodies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:3000/mens/hoodies")
      const data = await response.json()
      console.log(data.product)
      setHoodies(data.product)
      setLoading(false)
    }
    getData()
  }, [])

  return (
    <section className={styles.main}>
      <h1 className={styles.heading}>Hoodies and Jackets Collections</h1>
      <section className={styles.container}>
        {loading ? (
          <Fallback loading={loading} />
        ) : (
          hoodies.map(hoodie => (
            <section key={hoodie._id}>
              <Card
                title={hoodie.name}
                link={`/products/mens/hoodies-jackets/${hoodie._id}`}
                src={hoodie.Image}
                price={hoodie.price}
              />
            </section>
          ))
        )}
      </section>
    </section>
  )
}

export default HoodiesJackets
