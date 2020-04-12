import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styles from "../../styles/mens/accessories.module.css"
import ClipLoader from "react-spinners/ClipLoader"
import Pagination from "../Pagination"

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
  const [type, setType] = useState("")
  const [size, setSize] = useState("")
  const [colors, setColors] = useState("")
  const [isStyle, setIsStyle] = useState("")
  const [popular, setPopular] = useState([])
  const [isTypeClicked, setisTypeClicked] = useState(false)
  const [isSizeClicked, setIsSizeClicked] = useState(false)
  const [isColorsClicked, setIsColorsClicked] = useState(false)
  const [isStylesClicked, setIsStylesClicked] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(6)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://evening-scrubland-37768.herokuapp.com/mens/accessories/?type=${type}&size=${size}&colors=${colors}&styles=${isStyle}`
      )
      const data = await response.json()
      setItems(data.product)
      setLoading(false)
    }
    fetchData()
  }, [type, size, colors, isStyle])

  useEffect(() => {
    async function getPopularProducts() {
      const response = await fetch(
        "https://evening-scrubland-37768.herokuapp.com/mens/accessories/offers"
      )
      const data = await response.json()
      setPopular(data.product)
      setLoading(false)
    }
    getPopularProducts()
  }, [])

  const handleTypeChange = e => setType(e.target.value)
  const handleColorChange = e => setColors(e.target.value)
  const handleSizeChange = e => setSize(e.target.value)
  const handleStyleChange = e => setIsStyle(e.target.value)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = number => setCurrentPage(number)

  return (
    <section className={styles.main}>
      <h1 className={styles.header}>Head and Footwares Collections</h1>
      <section className={styles.mainContainer}>
        <section className={styles.filterContainer}>
          <h1 className={styles.filterHeading}> FILTERS</h1>
          <section className={styles.filters}>
            <span className={styles.toggle}>
              Types{" "}
              <button
                className={styles.arrow}
                type="button"
                onClick={() => setisTypeClicked(!isTypeClicked)}
              >
                &#x21b4;
              </button>
            </span>
            {isTypeClicked && (
              <section className={styles.typeFilter}>
                <label className={styles.label} htmlFor="all">
                  All{" "}
                  <input
                    type="checkbox"
                    value=""
                    onClick={handleTypeChange}
                    className={styles.checkbox}
                  />
                </label>
                <label className={styles.label} htmlFor="goggles">
                  Goggle{" "}
                  <input
                    type="checkbox"
                    value="goggle"
                    name="goggles"
                    onClick={handleTypeChange}
                    className={styles.checkbox}
                  />
                </label>
                <label className={styles.label} htmlFor="bracelets">
                  Bracelets{" "}
                  <input
                    type="checkbox"
                    value="bracelet"
                    name="bracelets"
                    onClick={handleTypeChange}
                    className={styles.checkbox}
                  />
                </label>
                <label className={styles.label} htmlFor="rings">
                  Rings{" "}
                  <input
                    type="checkbox"
                    value="ring"
                    name="rings"
                    onClick={handleTypeChange}
                    className={styles.checkbox}
                  />
                </label>
                <label className={styles.label} htmlFor="headphones">
                  Headphones{" "}
                  <input
                    type="checkbox"
                    value="headphone"
                    name="headphone"
                    onClick={handleTypeChange}
                    className={styles.checkbox}
                  />
                </label>
                <label className={styles.label} htmlFor="watch">
                  Watch{" "}
                  <input
                    type="checkbox"
                    value="watch"
                    name="watch"
                    onClick={handleTypeChange}
                    className={styles.checkbox}
                  />
                </label>
              </section>
            )}
          </section>
          <section className={styles.filters}>
            <span className={styles.toggle}>
              Size{" "}
              <button
                className={styles.arrow}
                type="button"
                onClick={() => setIsSizeClicked(!isSizeClicked)}
              >
                &#x21b4;
              </button>
            </span>
            {isSizeClicked && (
              <section className={styles.typeFilter}>
                <label className={styles.label} htmlFor="all">
                  All{" "}
                  <input
                    type="checkbox"
                    value=""
                    onClick={handleSizeChange}
                    className={styles.checkbox}
                  />
                </label>
                <label className={styles.label} htmlFor="medium">
                  Medium{" "}
                  <input
                    type="checkbox"
                    value="m"
                    name="m"
                    onClick={handleSizeChange}
                    className={styles.checkbox}
                  />
                </label>
                <label className={styles.label} htmlFor="large">
                  Large{" "}
                  <input
                    type="checkbox"
                    value="L"
                    name="L"
                    onClick={handleSizeChange}
                    className={styles.checkbox}
                  />
                </label>
              </section>
            )}
          </section>
          <section className={styles.filters}>
            <span className={styles.toggle}>
              Colors{" "}
              <button
                className={styles.arrow}
                type="button"
                onClick={() => setIsColorsClicked(!isColorsClicked)}
              >
                &#x21b4;
              </button>
            </span>
            {isColorsClicked && (
              <section className={styles.typeFilter}>
                <label className={styles.label} htmlFor="all">
                  All{" "}
                  <input
                    type="checkbox"
                    value=""
                    onClick={handleColorChange}
                    className={styles.checkbox}
                  />
                </label>
                <label className={styles.label} htmlFor="white">
                  White{" "}
                  <input
                    type="checkbox"
                    value="white"
                    name="white"
                    onClick={handleColorChange}
                    className={styles.checkbox}
                  />
                </label>
                <label className={styles.label} htmlFor="black">
                  Black{" "}
                  <input
                    type="checkbox"
                    value="black"
                    name="black"
                    onClick={handleColorChange}
                    className={styles.checkbox}
                  />
                </label>
                <label className={styles.label} htmlFor="yellow">
                  Yellow{" "}
                  <input
                    type="checkbox"
                    value="yellow"
                    name="yellow"
                    onClick={handleColorChange}
                    className={styles.checkbox}
                  />
                </label>
                <label className={styles.label} htmlFor="colorful">
                  Colorful{" "}
                  <input
                    type="checkbox"
                    value="colorful"
                    name="colorful"
                    onClick={handleColorChange}
                    className={styles.checkbox}
                  />
                </label>
              </section>
            )}
          </section>
          <section className={styles.filters}>
            <span className={styles.toggle}>
              Styles{" "}
              <button
                className={styles.arrow}
                type="button"
                onClick={() => setIsStylesClicked(!isStylesClicked)}
              >
                &#x21b4;
              </button>
            </span>
            {isStylesClicked && (
              <section className={styles.typeFilter}>
                <label className={styles.label} htmlFor="all">
                  All{" "}
                  <input
                    type="checkbox"
                    value=""
                    onClick={handleStyleChange}
                    className={styles.checkbox}
                  />
                </label>
                <label className={styles.label} htmlFor="stripped">
                  Stripped{" "}
                  <input
                    type="checkbox"
                    value="stripped"
                    name="stripped"
                    onClick={handleStyleChange}
                    className={styles.checkbox}
                  />
                </label>
                <label className={styles.label} htmlFor="plain">
                  Plain{" "}
                  <input
                    type="checkbox"
                    value="plain"
                    name="plain"
                    onClick={handleStyleChange}
                    className={styles.checkbox}
                  />
                </label>
                <label className={styles.label} htmlFor="prints">
                  Prints{" "}
                  <input
                    type="checkbox"
                    value="prints"
                    name="prints"
                    onClick={handleStyleChange}
                    className={styles.checkbox}
                  />
                </label>
              </section>
            )}
          </section>
        </section>
        <section className={styles.productContainer}>
          {loading ? (
            <Fallback loading={loading} />
          ) : (
            currentPosts.map(item => (
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
      <section className={styles.paginationContainer}>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={items.length}
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
