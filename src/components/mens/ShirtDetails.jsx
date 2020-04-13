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

const ShirtDetails = ({ id }) => {
  const [shirt, setShirt] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://evening-scrubland-37768.herokuapp.com/mens/shirts/${id}`
      )
      const data = await response.json()
      console.log(data.product)
      setShirt(data.product)
      setLoading(false)
    }
    getData()
  }, [])

  return (
    <section className={styles.main}>
      <h1 className={styles.heading}>{shirt.name} Details</h1>
      {loading ? (
        <Fallback loading={loading} />
      ) : (
        <section className={styles.container} key={shirt._id}>
          <img src={shirt.Image} className={styles.Image} alt="productImage" />
          <h1 className={styles.title}>{shirt.name}</h1>
          {/* <p className={styles.price}>{shirt.price}&#x20B9;</p> */}
          <p className={styles.description}>{shirt.description}</p>
        </section>
      )}
    </section>
  )
}

export default ShirtDetails
