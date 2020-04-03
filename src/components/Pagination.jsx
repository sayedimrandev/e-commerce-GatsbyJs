import React from "react"
import styles from "../styles/pagination.module.css"

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <section className={styles.main}>
      {/* <nav className={styles.nav}> */}
      <ul className={styles.pagination}>
        {pageNumbers.map(number => (
          <li key={number} className={styles.pageItems}>
            <a
              href="#"
              onClick={() => paginate(number)}
              className={styles.pageLinks}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
      {/* </nav> */}
    </section>
  )
}

export default Pagination
