import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styles from "../../styles/mens/accessories.module.css"
import ClipLoader from "react-spinners/ClipLoader"

const Fallback = ({ loading }) => {
  return (
    <section>
      <ClipLoader size={100} color={"#123abc"} loading={loading} />
    </section>
  )
}

const Card = ({ src, title, link, price, offers }) => {
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

const Offers = ({ offers }) => {
  return (
    <section className={styles.offerContainer}>
      <h1 className={styles.offers}>{offers} OFF</h1>
    </section>
  )
}

const Accessories = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState("")
  const [popular, setPopular] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:3000/mens/accessories/?category=${category}`
      )
      const data = await response.json()
      console.log(data.product)
      setItems(data.product)
      setLoading(false)
    }
    fetchData()
  }, [category])

  const handleChange = e => {
    setCategory(e.target.value)
  }

  useEffect(() => {
    async function getPopularProducts() {
      const response = await fetch(
        "http://localhost:3000/mens/accessories/offers"
      )
      const data = await response.json()
      console.log(data.product)
      setPopular(data.product)
      setLoading(false)
    }
    getPopularProducts()
  }, [])

  return (
    <section className={styles.main}>
      <h1 className={styles.header}>Head and Footwares Collections</h1>
      <section className={styles.mainContainer}>
        <section className={styles.filterContainer}>
          <h1 className={styles.filterHeading}>Filters</h1>
          <section className={styles.filters}>
            <label className={styles.label} htmlFor="plain">
              All{" "}
              <input
                type="checkbox"
                value=""
                onChange={handleChange}
                className={styles.checkbox}
              />
            </label>
            <label className={styles.label} htmlFor="plain">
              Goggles{" "}
              <input
                type="checkbox"
                value="goggle"
                onChange={handleChange}
                className={styles.checkbox}
              />
            </label>
            <label className={styles.label} htmlFor="colorPrints">
              Belts-Bags{" "}
              <input
                type="checkbox"
                onChange={handleChange}
                value="belts"
                className={styles.checkbox}
              />
            </label>
            <label className={styles.label} htmlFor="animalPrints">
              Rings-Bracelets{" "}
              <input
                type="checkbox"
                onChange={handleChange}
                value="rings"
                className={styles.checkbox}
              />
            </label>
            <label className={styles.label} htmlFor="animalPrints">
              Watch-Headphones{" "}
              <input
                type="checkbox"
                onChange={handleChange}
                value="watch"
                className={styles.checkbox}
              />
            </label>
          </section>
        </section>
        <section className={styles.productContainer}>
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
      <section className={styles.popularContainer}>
        <h1 className={styles.header}>Top Discounts</h1>
        <section className={styles.cardContainer}>
          {loading ? (
            <Fallback loading={loading} />
          ) : (
            popular.map(item => (
              <section key={item._id}>
                <Card
                  src={item.Image}
                  title={item.name}
                  price={item.price}
                  link={`/products/mens/accessories/${item._id}`}
                />
                <Offers key={item._id} offers={item.offers} />
              </section>
            ))
          )}
        </section>
      </section>
    </section>
  )
}

export default Accessories
