import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styles from "../../styles/mens/shirts.module.css"
import ClipLoader from "react-spinners/ClipLoader"

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

const Shirts = () => {
  const [shirts, setShirts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/mens/shirts")
      const data = await response.json()
      console.log(data.data)
      setShirts(data.data)
      setLoading(false)
    }
    fetchData()
  }, [])

  return (
    <section className={styles.main}>
      <h1 className={styles.heading}>Shirts Collection</h1>
      <section className={styles.container}>
        {loading ? (
          <Fallback loading={loading} />
        ) : (
          shirts.map(shirt => (
            <section key={shirt._id}>
              <Card
                title={shirt.name}
                link={shirt._id}
                src={shirt.Image}
                price={shirt.price}
              />
            </section>
          ))
        )}
      </section>
    </section>
  )
}

export default Shirts
