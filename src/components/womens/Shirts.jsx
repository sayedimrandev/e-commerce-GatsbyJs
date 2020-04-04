import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styles from "../../styles/womens/shirts.module.css"
import ClipLoader from "react-spinners/ClipLoader"

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

const Shirts = () => {
  const [shirts, setShirts] = useState([])
  const [loading, setLoading] = useState(true)
  const [type, setType] = useState("")
  const [size, setSize] = useState("")
  const [colors, setColors] = useState("")
  const [isStyle, setIsStyle] = useState("")
  const [isTypeClicked, setisTypeClicked] = useState(false)
  const [isSizeClicked, setIsSizeClicked] = useState(false)
  const [isColorsClicked, setIsColorsClicked] = useState(false)
  const [isStylesClicked, setIsStylesClicked] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:3000/womens/shirts/?type=${type}&size=${size}&colors=${colors}&styles=${isStyle}`
      )
      const data = await response.json()
      console.log(data.product)
      setShirts(data.product)
      setLoading(false)
    }
    fetchData()
  }, [type, size, colors, isStyle])

  const handleChange = e => {
    setType(e.target.value)
    setSize(e.target.value)
    setColors(e.target.value)
    setIsStyle(e.target.value)
  }

  return (
    <section className={styles.main}>
      <h1 className={styles.heading}>Women Shirts Collection</h1>
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
                    onClick={handleChange}
                    className={styles.checkbox}
                  />
                </label>
                <label className={styles.label} htmlFor="shirts">
                  Shirts{" "}
                  <input
                    type="checkbox"
                    value="shirts"
                    name="shirts"
                    onClick={handleChange}
                    className={styles.checkbox}
                  />
                </label>
                <label className={styles.label} htmlFor="TShirts">
                  T-Shirts{" "}
                  <input
                    type="checkbox"
                    value="tshirts"
                    name="tshirts"
                    onClick={handleChange}
                    className={styles.checkbox}
                  />
                </label>
                <label className={styles.label} htmlFor="tops">
                  Tops{" "}
                  <input
                    type="checkbox"
                    value="top"
                    name="top"
                    onClick={handleChange}
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
                    onClick={handleChange}
                    className={styles.checkbox}
                  />
                </label>
                <label className={styles.label} htmlFor="medium">
                  Medium{" "}
                  <input
                    type="checkbox"
                    value="m"
                    name="m"
                    onClick={handleChange}
                    className={styles.checkbox}
                  />
                </label>
                <label className={styles.label} htmlFor="large">
                  Large{" "}
                  <input
                    type="checkbox"
                    value="L"
                    name="L"
                    onClick={handleChange}
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
                    onClick={handleChange}
                    className={styles.checkbox}
                  />
                </label>
                <label className={styles.label} htmlFor="white">
                  White{" "}
                  <input
                    type="checkbox"
                    value="white"
                    name="white"
                    onClick={handleChange}
                    className={styles.checkbox}
                  />
                </label>
                <label className={styles.label} htmlFor="black">
                  Black{" "}
                  <input
                    type="checkbox"
                    value="black"
                    name="black"
                    onClick={handleChange}
                    className={styles.checkbox}
                  />
                </label>
                <label className={styles.label} htmlFor="yellow">
                  Yellow{" "}
                  <input
                    type="checkbox"
                    value="yellow"
                    name="yellow"
                    onClick={handleChange}
                    className={styles.checkbox}
                  />
                </label>
                <label className={styles.label} htmlFor="red">
                  Red{" "}
                  <input
                    type="checkbox"
                    value="red"
                    name="red"
                    onClick={handleChange}
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
                    onClick={handleChange}
                    className={styles.checkbox}
                  />
                </label>
                <label className={styles.label} htmlFor="stripped">
                  Stripped{" "}
                  <input
                    type="checkbox"
                    value="stripped"
                    name="stripped"
                    onClick={handleChange}
                    className={styles.checkbox}
                  />
                </label>
                <label className={styles.label} htmlFor="plain">
                  Plain{" "}
                  <input
                    type="checkbox"
                    value="plain"
                    name="plain"
                    onClick={handleChange}
                    className={styles.checkbox}
                  />
                </label>
                <label className={styles.label} htmlFor="prints">
                  Prints{" "}
                  <input
                    type="checkbox"
                    value="prints"
                    name="prints"
                    onClick={handleChange}
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
            shirts.map(shirt => (
              <section key={shirt._id}>
                <Card
                  title={shirt.name}
                  link={`/products/womens/shirts-Tshirts/${shirt._id}`}
                  src={shirt.Image}
                  price={shirt.price}
                />
              </section>
            ))
          )}
        </section>
      </section>
    </section>
  )
}

export default Shirts
