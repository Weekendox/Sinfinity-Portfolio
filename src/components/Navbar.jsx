import React, { useState } from "react";
import styled from "styled-components";
import logo from "assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useScroll } from "components/useScroll";
import { navAnimation } from "animation";
import { motion } from "framer-motion";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [element, controls] = useScroll();
  return (
    <Nav
      ref={element}
      variants={navAnimation}
      transition={{ delay: 0.1 }}
      animate={controls}
      state={isNavOpen ? 1 : 0}
    >
      <div className="brand__container">
        <a className="brand" href="#">
          <img src={logo} alt="logo" />
        </a>
        <div className="toggle">
          {isNavOpen ? (
            <MdClose
              onClick={() => setIsNavOpen(false)}
              size={25}
              color="white"
            />
          ) : (
            <GiHamburgerMenu
              onClick={(e) => {
                e.stopPropagation();
                setIsNavOpen(true);
              }}
              size={23}
              color="white"
            />
          )}
        </div>
      </div>
      <div className={`links ${isNavOpen ? "show" : ""}`}>
        <ul>
          <li className="active">
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </Nav>
  );
}

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  margin: 0 12rem;
  padding-top: 2rem;
  .brand__container {
    margin: 0 2rem;
    img:hover {
      box-shadow: 1px 1px var(--secondary-color), 2px 2px var(--secondary-color),
        3px 3px var(--secondary-color);
      -webkit-transform: translateX(-3px);
      transform: translateX(-3px);
      transition: all 0.3s ease-in-out;
    }
    .toggle {
      display: none;
    }
  }
  .links {
    ul {
      .active {
        a {
          border-bottom: 0.2rem solid var(--secondary-color);
          color: var(--secondary-color);
        }
      }
      list-style-type: none;
      display: flex;
      gap: 3rem;
      li {
        a {
          color: #fff;
          text-decoration: none;
          font-weight: 100;
          font-family: "Cubano", sans-serif;
          font-size: 1.1rem;
          &:hover {
            border-bottom: 0.2rem solid var(--secondary-color);
            color: transparent;
            -webkit-text-stroke: 1px var(--secondary-color);
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0;
    position: relative;
    .brand__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .brand {
      }
      .toggle {
        padding-right: 1rem;
        display: block;
        z-index: 1;
        
      }
    }
    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }
    .links {
      position: absolute;
      overflow-x: hidden;
      top: 0;
      right: 0;
      width: ${({ state }) => (state ? "60%" : "0%")};
      height: 100vh;
      background-color: var(--primary-color);
      opacity: 0;
      visibility: hidden;
      transition: 0.4s ease-in-out;
      ul {
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;
        .active {
        a {
          border-bottom: 0.2rem solid var(--primary-color);
          color: #fff;
        }
      }
    }
  }
`;

export default Navbar;
