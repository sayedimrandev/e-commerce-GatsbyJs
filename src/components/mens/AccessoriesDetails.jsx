import React, { useState, useEffect } from "react"
import ClipLoader from "react-spinners/ClipLoader"
import styles from "../../styles/mens/shirtdetail.module.css"

const Fallback = ({ loading }) => {
  return (
    <section style={{ textAlign: `center` }}>
      <ClipLoader size={100} color={"#123abc"} loading={loading} />
    </section>
  )
}

const AccessoriesDetails = ({ id }) => {
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `http://localhost:3000/mens/accessories/${id}`
      )
      const data = await response.json()
      console.log(data.product)
      setItem(data.product)
      setLoading(false)
    }
    getData()
  }, [])

  return (
    <section className={styles.main}>
      <h1 className={styles.heading}>Accessories Details</h1>
      {loading ? (
        <Fallback loading={loading} />
      ) : (
        <section className={styles.container} key={item._id}>
          <img src={item.Image} alt="productImage" />
          <h1 className={styles.title}>{item.name}</h1>
          <p className={styles.price}>{item.price}&#x20B9;</p>
          <p className={styles.description}>{item.description}</p>
        </section>
      )}
    </section>
  )
}

export default AccessoriesDetails
