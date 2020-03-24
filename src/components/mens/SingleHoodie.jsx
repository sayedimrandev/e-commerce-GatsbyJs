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

const SingleHoodie = ({ id }) => {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getData() {
      const response = await fetch(`http://localhost:3000/mens/hoodies/${id}`)
      const data = await response.json()
      setProduct(data.product)
      setLoading(false)
    }
    getData()
  }, [])

  return (
    <section className={styles.main}>
      <h1 className={styles.heading}>Hodies and Jackets Details</h1>
      {loading ? (
        <Fallback loading={loading} />
      ) : (
        <section className={styles.container} key={product._id}>
          <img src={product.Image} alt="productImage" />
          <h1 className={styles.title}>{product.name}</h1>
          <p className={styles.price}>{product.price}&#x20B9;</p>
          <p className={styles.description}>{product.description}</p>
        </section>
      )}
    </section>
  )
}

export default SingleHoodie
