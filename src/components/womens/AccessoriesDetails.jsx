import React, { useState, useEffect } from "react"
import ClipLoader from "react-spinners/ClipLoader"
import styles from "../../styles/womens/headwareDetails.module.css"

const Fallback = ({ loading }) => {
  return (
    <section style={{ textAlign: `center` }}>
      <ClipLoader size={100} color={"#123abc"} loading={loading} />
    </section>
  )
}

const AccessoriesDetails = ({ id }) => {
  const [accessories, setAccessories] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://evening-scrubland-37768.herokuapp.com/womens/accessories/${id}`
      )
      const data = await response.json()
      console.log(data.product)
      setAccessories(data.product)
      setLoading(false)
    }
    getData()
  }, [])
  return (
    <section className={styles.main}>
      <h1 className={styles.heading}>{accessories.name} Details</h1>
      {loading ? (
        <Fallback loading={loading} />
      ) : (
        <section className={styles.container} key={accessories._id}>
          <img src={accessories.Image} alt="productImage" />
          <h1 className={styles.title}>{accessories.name}</h1>
          <p className={styles.price}>{accessories.price}&#x20B9;</p>
          <p className={styles.description}>{accessories.description}</p>
        </section>
      )}
    </section>
  )
}

export default AccessoriesDetails
