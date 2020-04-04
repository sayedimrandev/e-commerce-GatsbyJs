import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import ClipLoader from "react-spinners/ClipLoader"
import styles from "../../styles/mens/hoodies.module.css"
import Pagination from "../Pagination"

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

const Offers = ({ offers }) => {
  return (
    <section className={styles.offerContainer}>
      <h1 className={styles.offers}> {offers} OFF </h1>
    </section>
  )
}

const HoodiesJackets = () => {
  const [hoodies, setHoodies] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState("")
  const [popular, setPopular] = useState([])
  const [postsPerPage] = useState(6)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `http://localhost:3000/mens/hoodies/?category=${category}`
      )
      const data = await response.json()
      setHoodies(data.product)
      setLoading(false)
    }
    getData()
  }, [category])

  const handleChange = e => {
    setCategory(e.target.value)
  }

  useEffect(() => {
    async function getPopularProducts() {
      const response = await fetch("http://localhost:3000/mens/hoodies/offers")
      const data = await response.json()
      setPopular(data.product)
      setLoading(false)
    }
    getPopularProducts()
  }, [])

  //Getting Current Posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = hoodies.slice(indexOfFirstPost, indexOfLastPost)

  //Changing Pages
  const paginate = number => setCurrentPage(number)

  return (
    <section className={styles.main}>
      <h1 className={styles.heading}>Hoodies and Jackets Collections</h1>
      <section className={styles.mainContainer}>
        <section className={styles.filterContainer}>
          <h1 className={styles.filterHeading}>Filters</h1>
          <section className={styles.filters}>
            <label className={styles.label} htmlFor="plain">
              All{" "}
              <input
                type="checkbox"
                value=""
                onClick={handleChange}
                className={styles.checkbox}
              />
            </label>
            <label className={styles.label} htmlFor="plain">
              Plain{" "}
              <input
                type="checkbox"
                value="plain"
                onClick={handleChange}
                className={styles.checkbox}
                name="plain"
              />
            </label>
            <label className={styles.label} htmlFor="strippedShirts">
              Stripped{" "}
              <input
                type="checkbox"
                onClick={handleChange}
                value="stripped"
                className={styles.checkbox}
                name="prints"
              />
            </label>
          </section>
        </section>
        <section className={styles.productContainer}>
          {loading ? (
            <Fallback loading={loading} />
          ) : (
            currentPosts.map(hoodie => (
              <section key={hoodie._id}>
                <Card
                  title={hoodie.name}
                  link={`/products/mens/hoodies/${hoodie._id}`}
                  src={hoodie.Image}
                  price={hoodie.price}
                />
              </section>
            ))
          )}
        </section>
      </section>
      <section className={styles.paginationContainer}>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={hoodies.length}
          paginate={paginate}
        />
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
                  link={`/products/mens/hoodies/${item._id}`}
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

export default HoodiesJackets
