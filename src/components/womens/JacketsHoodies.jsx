import React, { useState, useEffect } from "react"
import styles from "../../styles/womens/jackets.module.css"
import ClipLoader from "react-spinners/ClipLoader"
import Pagination from "../Pagination"
import { Link } from "gatsby"

const Fallback = ({ loading }) => {
  return (
    <section>
      <ClipLoader size={100} color={"#123abc"} loading={loading} />
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

const JacketsHoodies = () => {
  const [products, setProducts] = useState([])
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
  const [postsPerPage] = useState(6)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `http://localhost:3000/womens/hoodies/?type=${type}&size=${size}&colors=${colors}&styles=${isStyle}`
      )
      const data = await response.json()
      console.log(data.product)
      setProducts(data.product)
      setLoading(false)
    }
    getData()
  }, [type, size, colors, isStyle])

  useEffect(() => {
    async function getOffers() {
      setLoading(true)
      const response = await fetch(
        `http://localhost:3000/womens/hoodies/offers`
      )
      const data = await response.json()
      setPopular(data.product)
      setLoading(false)
    }
    getOffers()
  }, [])

  const handleTypeChange = e => setType(e.target.value)
  const handleColorChange = e => setColors(e.target.value)
  const handleSizeChange = e => setSize(e.target.value)
  const handleStyleChange = e => setIsStyle(e.target.value)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = number => setCurrentPage(number)

  return (
    <section className={styles.main}>
      <h1 className={styles.heading}>Women Hoodies and Jackets Collection</h1>
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
                <label className={styles.label} htmlFor="jacket">
                  Jacket{" "}
                  <input
                    type="checkbox"
                    value="jacket"
                    name="jacket"
                    onClick={handleTypeChange}
                    className={styles.checkbox}
                  />
                </label>
                <label className={styles.label} htmlFor="hoodie">
                  Hoodies{" "}
                  <input
                    type="checkbox"
                    value="hoodie"
                    name="hoodie"
                    onClick={handleTypeChange}
                    className={styles.checkbox}
                  />
                </label>
                <label className={styles.label} htmlFor="sweater">
                  Sweaters{" "}
                  <input
                    type="checkbox"
                    value="sweater"
                    name="sweater"
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
                <label className={styles.label} htmlFor="green">
                  Green{" "}
                  <input
                    type="checkbox"
                    value="green"
                    name="green"
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
            currentPosts.map(products => (
              <section key={products._id}>
                <Card
                  title={products.name}
                  link={`/products/womens/hoodies-jackets/${products._id}`}
                  src={products.Image}
                  price={products.price}
                />
              </section>
            ))
          )}
        </section>
      </section>
      <section className={styles.paginationContainer}>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={products.length}
          paginate={paginate}
        />
      </section>
      <section className={styles.popularContainer}>
        <h1 className={styles.header}> Top Discouts</h1>
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
                  link={`/products/womens/hoodies-jackets/${item._id}`}
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

export default JacketsHoodies
