import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styles from "../../styles/mens/shirts.module.css"
import ClipLoader from "react-spinners/ClipLoader"
import Pagination from "../../components/Pagination"

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

const Shirts = () => {
  const [shirts, setShirts] = useState([])
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
    async function fetchData() {
      const response = await fetch(
        `https://evening-scrubland-37768.herokuapp.com/mens/shirts/?type=${type}&size=${size}&colors=${colors}&styles=${isStyle}`
      )
      const data = await response.json()
      setShirts(data.product)
      setLoading(false)
    }
    fetchData()
  }, [type, size, colors, isStyle])

  useEffect(() => {
    async function getPopularProducts() {
      const response = await fetch(
        "https://evening-scrubland-37768.herokuapp.com/mens/shirts/offers"
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

  //Getting Current Posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = shirts.slice(indexOfFirstPost, indexOfLastPost)

  //Changing Pages
  const paginate = number => setCurrentPage(number)

  return (
    <section style={{ backgroundColor: "rgb(174, 194, 174)" }}>
      <section className={styles.main}>
        <h1 className={styles.heading}>Shirts Collection</h1>
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
                  <label className={styles.label} htmlFor="shirts">
                    Shirts{" "}
                    <input
                      type="checkbox"
                      value="shirt"
                      name="shirts"
                      onClick={handleTypeChange}
                      className={styles.checkbox}
                    />
                  </label>
                  <label className={styles.label} htmlFor="TShirts">
                    T-Shirts{" "}
                    <input
                      type="checkbox"
                      value="tshirt"
                      name="tshirts"
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
                  <label className={styles.label} htmlFor="blue">
                    Blue{" "}
                    <input
                      type="checkbox"
                      value="blue"
                      name="blue"
                      onClick={handleColorChange}
                      className={styles.checkbox}
                    />
                  </label>
                  <label className={styles.label} htmlFor="red">
                    Red{" "}
                    <input
                      type="checkbox"
                      value="red"
                      name="red"
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
              currentPosts.map(shirt => (
                <section key={shirt._id}>
                  <Card
                    title={shirt.name}
                    link={`/products/mens/shirt/${shirt._id}`}
                    src={shirt.Image}
                    price={shirt.price}
                  />
                </section>
              ))
            )}
          </section>
        </section>
        <section className={styles.paginationContainer}>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={shirts.length}
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
                    link={`/products/mens/shirt/${item._id}`}
                  />
                  <Offers key={item._id} offers={item.offers} />
                </section>
              ))
            )}
          </section>
        </section>
      </section>
    </section>
  )
}

export default Shirts
