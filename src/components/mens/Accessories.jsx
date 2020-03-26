import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styles from "../../styles/mens/shirts.module.css"
import ClipLoader from "react-spinners/ClipLoader"

const Fallback = ({ loading }) => {
  return (
    <section>
      <ClipLoader size={100} color={"#123abc"} loading={loading} />
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

const Accessories = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/mens/accessories")
      const data = await response.json()
      console.log(data.product)
      setItems(data.product)
      setLoading(false)
    }
    fetchData()
  }, [])

  return (
    <section className={styles.main}>
      <h1 className={styles.heading}>Accessories Collection</h1>
      <section className={styles.container}>
        {loading ? (
          <Fallback loading={loading} />
        ) : (
          items.map(item => (
            <section key={item._id}>
              <Card
                title={item.name}
                link={`/products/mens/accessories/${item._id}`}
                src={item.Image}
                price={item.price}
              />
            </section>
          ))
        )}
      </section>
    </section>
  )
}

export default Accessories
