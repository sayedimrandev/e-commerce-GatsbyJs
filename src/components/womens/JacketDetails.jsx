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

const JacketDetails = ({ id }) => {
  const [jacket, setJacket] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://evening-scrubland-37768.herokuapp.com/womens/hoodies/${id}`
      )
      const data = await response.json()
      console.log(data.product)
      setJacket(data.product)
      setLoading(false)
    }
    getData()
  }, [])

  return (
    <section className={styles.main}>
      <h1 className={styles.heading}>Hoodie Details</h1>
      {loading ? (
        <Fallback loading={loading} />
      ) : (
        <section className={styles.container} key={jacket._id}>
          <img src={jacket.Image} alt="productImage" />
          <h1 className={styles.title}>{jacket.name}</h1>
          <p className={styles.price}>{jacket.price}&#x20B9;</p>
          <p className={styles.description}>{jacket.description}</p>
        </section>
      )}
    </section>
  )
}

export default JacketDetails
