import "./Contact.css";
import React, { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { TbBrandMessenger } from "react-icons/tb";
import { SiWhatsapp } from "react-icons/si";
import { IoSend } from "react-icons/io5";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_2y24t5g";
const TEMPLATE_ID = "template_2gpy8ly";
const PUBLIC_KEY = "8sH3i4bVXXbpdpkfh";

const CONTACT_ITEMS = [
  {
    id: "email",
    icon: <MdOutlineEmail className="contact-option-icon" />,
    title: "E-mail",
    subtitle: "ronnykurniawn@gmail.com",
    link: "mailto:ronnykurniawn@gmail.com",
    delay: 800
  },
  {
    id: "messenger",
    icon: <TbBrandMessenger className="contact-option-icon" />,
    title: "Messenger",
    subtitle: "ronnykn",
    link: "https://m.me/ronnykn",
    delay: 1000
  },
  {
    id: "whatsapp",
    icon: <SiWhatsapp className="contact-option-icon" />,
    title: "WhatsApp",
    subtitle: "+6285642108006",
    link: "https://api.whatsapp.com/send?phone=6285642108006",
    delay: 1200
  }
];

const Contact = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_KEY
      );

      window.alert(
        "Thank you, your message has been sent successfully.\nHave a great day ❤."
      );

      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      window.alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact">
      <h5 data-aos="fade-in">Get In Touch</h5>

      <h2 data-aos="fade-in" data-aos-delay="500">
        Contact Me{" "}
        <strong className="animate__animated animate__flash animate__infinite">
          |
        </strong>
      </h2>

      <div className="container contact-container">
        <div className="contact-options">
          {CONTACT_ITEMS.map((item) => (
            <article
              key={item.id}
              className="contact-option"
              data-aos="fade-right"
              data-aos-delay={item.delay}
            >
              <div className={item.id}>
                {item.icon}
                <h4>{item.title}</h4>
                <h5 className="text-light">{item.subtitle}</h5>

                <a href={item.link} target="_blank" rel="noreferrer">
                  Send a Message
                </a>
              </div>
            </article>
          ))}
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            id="user_name"
            name="user_name"
            placeholder="Your Full Name.."
            required
            data-aos="fade-left"
            data-aos-delay="1400"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email.."
            required
            data-aos="fade-left"
            data-aos-delay="1600"
          />

          <textarea
            name="message"
            id="message"
            cols="30"
            rows="7"
            placeholder="Your Message.."
            required
            data-aos="fade-left"
            data-aos-delay="1700"
          ></textarea>

          <button
            type="submit"
            className="btn btn-primary btn-send"
            data-aos="fade-up"
            data-aos-delay="1800"
          >
            Send Message <IoSend />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
