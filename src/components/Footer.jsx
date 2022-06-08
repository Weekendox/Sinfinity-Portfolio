import React from "react";
import styled from "styled-components";
import { BsGithub, BsFacebook, BsTwitter, BsDiscord } from "react-icons/bs";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";
import { footerAnimations } from "animation";

function Footer() {
  const [element, controls] = useScroll();
  return (
    <Foot
      ref={element}
      animate={controls}
      variants={footerAnimations}
      transition={{
        delay: 0.02,
        type: "tween",
        duration: 0.8,
      }}
    >
      <span>&copy; Template created with love by Akram Allam</span>
      <div className="footer__social__icons">
        <BsGithub />
        <BsTwitter />
        <BsFacebook />
        <BsDiscord />
      </div>
    </Foot>
  );
}

const Foot = styled(motion.footer)`
  background-color: var(--primary-color);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  .footer__social__icons {
    display: flex;
    gap: 2rem;
    svg {
      font-size: 1.4rem;
      cursor: pointer;
      transition: 0.3s ease-in-out;
      &:hover {
        color: var(--secondary-color);
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 2rem;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;

export default Footer;
