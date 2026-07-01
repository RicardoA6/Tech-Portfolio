'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const subject = `Portfolio message from ${name}`
    const body = `${message}\n\n— ${name} (${email})`
    window.location.href = `mailto:ricardomontescs@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <form className="ff7-contact-form" onSubmit={handleSubmit}>
      <div className="ff7-form-field">
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="ff7-form-field">
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="ff7-form-field">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="ff7-send-btn">Send</button>
      <span className="ff7-send-note">Opens your email client to deliver the message</span>
    </form>
  )
}
