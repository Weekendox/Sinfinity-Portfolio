import React from "react";
import styled from "styled-components";
import milestone1 from "assets/milestone1.png";
import milestone2 from "assets/milestone2.png";
import milestone3 from "assets/milestone3.png";
import milestoneBackground from "assets/milestone-background.png";
import { milestonesAnimations } from "animation";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";

function Milestones() {
  const [element, controls] = useScroll();
  const milestone = [
    { image: milestone1, data: "Client Served", amount: "407" },
    { image: milestone2, data: "of raw data", amount: "10T" },
    { image: milestone3, data: "recommendation", amount: "235" },
  ];
  return (
    <Section ref={element}>
      <div className="background">
        <img src={milestoneBackground} alt="milestone background" />
      </div>
      <div className="milestones">
        {milestone.map(({ image, data, amount }) => {
          return (
            <motion.div
              className="milestone"
              variants={milestonesAnimations}
              animate={controls}
              transition={{
                delay: 0.03,
                type: "tween",
                duration: 0.8,
              }}
            >
              <p>{amount}</p>
              <span>{data}</span>
              <img src={image} alt="milestone" />
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  height: 100vh;
  background-color: var(--primary-color);
  padding-left: 0 10rem;
  position: relative;
  overflow: hidden;
  .background {
    position: absolute;
    left: 0;
    bottom: -30%;
    img {
      z-index: 2;
      height: 43rem;
    }
  }
  .milestones {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    color: white;
    align-items: center;
    height: 100%;
    .milestone {
      z-index: 3;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      p {
        font-size: 5rem;
        font-weight: bolder;
        font-family: "cubano", sans-serif;
        line-height: 3rem;
      }
      span {
        text-transform: uppercase;
        color: #ffffffc7;
        font-family: "cubano", sans-serif;
      }
      img {
        height: 6rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 5rem 2rem;
    min-height: 100vh;
    height: 100%;
    .background {
      display: none;
    }
    .milestones {
      grid-template-columns: 1fr;
      gap: 5rem;
    }
  }
`;

export default Milestones;
