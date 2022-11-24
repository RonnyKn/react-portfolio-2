import "./Contact.css"
import React, { useRef } from "react"
import { MdOutlineEmail } from "react-icons/md"
import { TbBrandMessenger } from "react-icons/tb"
import { SiWhatsapp } from "react-icons/si"
import { IoSend } from "react-icons/io5"
import emailjs from "@emailjs/browser"

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    window.alert(
      "Thankyou, your message has been sent successfully. \nHave a great day ❤."
    )

    emailjs
      .sendForm(
        "service_2y24t5g",
        "template_2gpy8ly",
        form.current,
        "8sH3i4bVXXbpdpkfh"
      )
      .then(
        (result) => {
          e.target.reset()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <div className="email">
              <MdOutlineEmail className="contact-option-icon" />
              <h4>E-mail</h4>
              <h5 className="text-light">ronnykurniawn@gmail.com</h5>
              <a
                href="mailto:ronnykurniawn@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Send a Message
              </a>
            </div>
          </article>
          <article className="contact-option">
            <div className="messenger">
              <TbBrandMessenger className="contact-option-icon" />
              <h4>Messenger</h4>
              <h5 className="text-light">ronnykn</h5>
              <a href="https://m.me/ronnykn" target="_blank" rel="noreferrer">
                Send a Message
              </a>
            </div>
          </article>
          <article className="contact-option">
            <div className="whatsapp">
              <SiWhatsapp className="contact-option-icon" />
              <h4>WhatsApp</h4>
              <h5 className="text-light">+6285642108006</h5>
              <a
                href="https://api.whatsapp.com/send?phone=6285642108006"
                target="_blank"
                rel="noreferrer"
              >
                Send a Message
              </a>
            </div>
          </article>
        </div>
        <form action="" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name.."
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email.."
            required
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="7"
            placeholder="Your Message.."
            required
          ></textarea>
          <button type="submit" className="btn btn-primary btn-send">
            Send Message <IoSend />
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
