import React from "react"
import styles from "../styles/newsletter.module.css"

const Newsletter = () => {
  return (
    <section className={styles.container}>
      <section className={styles.content}>
        <span>Subscribe to our newsletter</span>
      </section>
      <section className={styles.content}>
        <span>Get the latest updates</span>
      </section>
      <section className={styles.subscribe}>
        <input
          className={styles.input}
          type="email"
          placeholder="Enter Email Here"
        />
        <button className={styles.button} type="submit">
          Subscribe
        </button>
      </section>
    </section>
  )
}

export default Newsletter
