import React, { useState } from "react"
import styles from "../styles/contact.module.css"

const ContactUs = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [isSent, setIsSent] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    setName("")
    setEmail("")
    setSubject("")
    setMessage("")
    setIsSent(true)
    alert("We'll Contact You Shortly!")
  }

  return (
    <section className={styles.container}>
      <h1>Hello Form About Us Page</h1>
      <section className={styles.registerForm}>
        <form onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="username">
            Name
          </label>
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            required
            onChange={e => setName(e.target.value)}
          />
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            className={styles.input}
            type="email"
            name="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <label className={styles.label} htmlFor="subject">
            Subject
          </label>
          <input
            className={styles.input}
            type="subject"
            name="subject"
            required
            value={subject}
            onChange={e => setSubject(e.target.value)}
          />{" "}
          <label className={styles.label} htmlFor="message">
            Message
          </label>
          <textarea
            className={styles.input}
            style={{ height: `5rem` }}
            name="message"
            required
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          {isSent ? (
            <section>
              <button type="submit" className={styles.sentButton}>
                Sent
              </button>{" "}
            </section>
          ) : (
            <section>
              <button type="submit" className={styles.sendButton}>
                Send
              </button>{" "}
            </section>
          )}
        </form>
      </section>
    </section>
  )
}

export default ContactUs
