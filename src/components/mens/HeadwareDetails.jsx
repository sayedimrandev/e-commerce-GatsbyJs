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

const HeadwareDetails = ({ id }) => {
  const [headware, setHeadware] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getData() {
      const response = await fetch(`http://localhost:3000/mens/headwares/${id}`)
      const data = await response.json()
      console.log(data.product)
      setHeadware(data.product)
      setLoading(false)
    }
    getData()
  }, [])
  return (
    <section className={styles.main}>
      <h1 className={styles.heading}>Headware and Footware Details</h1>
      {loading ? (
        <Fallback loading={loading} />
      ) : (
        <section className={styles.container} key={headware._id}>
          <img src={headware.Image} alt="productImage" />
          <h1 className={styles.title}>{headware.name}</h1>
          <p className={styles.price}>{headware.price}&#x20B9;</p>
          <p className={styles.description}>{headware.description}</p>
        </section>
      )}
    </section>
  )
}

export default HeadwareDetails
