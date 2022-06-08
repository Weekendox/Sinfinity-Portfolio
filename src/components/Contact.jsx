import React from "react";
import styled from "styled-components";
import Title from "./Title";
import { contactAnimations } from "animation";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";

function Contact() {
  
  const [element, controls] = useScroll();
  return (
    <Section id="contact" ref={element}>
      <Title value="contact" />
      <motion.div
        className="contact"
        animate={controls}
        variants={contactAnimations}
        transition={{
          delay: 0.03,
          type: "tween",
          duration: 0.8,
        }}
      >
        <div className="contact__title">
          <p>Stay in touch with us</p>
          <h2>Contacto ipsam donec setem quia lipsum</h2>
        </div>
        <div className="contact__data">
          <div className="contact__data__description">
            <h4>Use from on the right to contact us or just to say hi!</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa,
              nulla?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quod
              molestias animi, ad quibusdam et accusantium nisi architecto at
              vitae
            </p>
            <div>
              <p>
                <strong>Address:</strong> Beni Mellal
              </p>
              <p>
                <strong>Email:</strong> brainheart.buiss@gmail.com
              </p>
              <p>
                <strong>Website:</strong> www.sinfinity.com
              </p>
            </div>
          </div>
          <div className="contact__data__form">
            <input type="text" placeholder="name" />
            <input type="email" placeholder="email" />
            <textarea placeholder="message"></textarea>
            <button>Send Message</button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  .contact {
    color: var(--primary-color);
    margin: 0 23rem;
    &__title {
      margin: 6rem 0;
      p {
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        color: var(--primary-color);
      }
      h2 {
        color: var(--secondary-color);
        font-size: 2rem;
      }
    }
    &__data {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 4rem;
      &__description {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        h4 {
          font-size: 1.5rem;
        }
        p {
          letter-spacing: 0.1rem;
          text-align: justify;
        }
        div {
          p {
            strong {
              text-transform: uppercase;
            }
          }
        }
      }
      &__form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        input,
        textarea {
          border: none;
          border-bottom: 0.1rem solid var(--secondary-color);
          width: 100%;
          color: var(--primary-color);
          letter-spacing: 0.05rem;
          font-family: "Poppins", sans-serif;
          font-weight: 700;
          padding-bottom: 0.7rem;
          transition: 0.3s ease-in-out;
          &:focus {
            outline: none;
            border-bottom: 0.1rem solid var(--primary-color);
            transition: 0.3s ease-in-out;
          }
          &::placeholder {
            color: var(--secondary-color);
            letter-spacing: 0.2rem;
            font-family: "Cubano", sans-serif;
            opacity: 0.6;
            font-weight: 100;
          }
        }
        textarea {
          width: 100% !important;
          height: 50%;
          resize: none;
        }
        button {
          width: 100%;
          background-color: transparent;
          border: 0.1rem solid var(--secondary-color);
          height: 3rem;
          color: var(--secondary-color);
          text-transform: uppercase;
          letter-spacing: 0.2rem;
          cursor: pointer;
          transition: 0.5s ease-in-out;
          font-family: "Cubano", sans-serif;
          &:hover {
            background-color: var(--secondary-color);
            color: var(--primary-color);
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .sideTitle {
      display: none;
    }
    .contact {
      margin: 1rem;
      padding: 3rem 1rem;
      &__title {
        margin: 0;
        text-align: center;
        p {
          font-size: 0.8rem;
        }
        h2 {
          font-size: 1.3rem;
        }
      }
      &__data {
        grid-template-columns: 1fr;
        margin: 0;
        p {
          text-align: left;
        }
        &__form {
          input {
          }
          button {
            height: 6rem;
          }
        }
      }
    }
  }
`;

export default Contact;
