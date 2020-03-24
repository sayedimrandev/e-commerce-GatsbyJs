import React from "react"
import Icon from "../static/chevron.png"
import styles from "../styles/arrow.module.css"

const Arrow = () => {
  return (
    <section className={styles.container}>
      <button
        className={styles.button}
        type="button"
        onClick={() => {
          window.scrollTo(500, 0)
        }}
      >
        <img className={styles.icon} src={Icon} alt="arrowIcon" />
      </button>
    </section>
  )
}

export default Arrow
