import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { KeyboardArrowDown } from "@mui/icons-material";
import image1 from "../assets/homeImgOne.avif";
import image2 from "../assets/homeImgTwo.avif";
import image3 from "../assets/homeImgThree.avif";
import Skills from "./Skills";
import Experience from "./Experience";
import { Link } from "react-router-dom";

const twinkle = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

const Star = styled.div`
  position: absolute;
  width: 3px;
  height: 3px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  animation: ${twinkle} ${(props) => props.duration}s infinite;
  animation-delay: ${(props) => props.delay}s;
  left: ${(props) => props.left}%;
  top: ${(props) => props.top}%;
`;

const StarBackground = () => {
  const stars = Array.from({ length: 60 }).map((_, i) => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: 3 + Math.random() * 3,
    delay: Math.random() * 3,
  }));

  return (
    <>
      {stars.map((star, i) => (
        <Star
          key={i}
          left={star.left}
          top={star.top}
          duration={star.duration}
          delay={star.delay}
        />
      ))}
    </>
  );
};

const HeroSection = styled.section`
  min-height: 100vh;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const Name = styled(motion.h2)`
  font-size: 1.8rem;
  font-weight: 600;
  color: #f0f0f0;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const IntroText = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 400;
  line-height: 1.4;
  color: white;
  max-width: 1000px;

  @media (max-width: 768px) {
    font-size: 2rem;
    line-height: 1.3;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
    line-height: 1.2;
  }

  span {
    color: #c084fc;
    font-weight: 700;
  }

  .highlight {
    color: white;
  }

  .emoji {
    font-size: 2rem;
    vertical-align: middle;
  }
`;

const SubNote = styled.p`
  margin-top: 2rem;
  font-size: 1rem;
  color: #aaa;
  max-width: 1000px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-top: 1.5rem;
  }
`;

const ImageGroup = styled.div`
  display: flex;
  gap: 1rem;
  // margin-top: 1rem;
  position: relative;
  height: 60px;
`;

const StyledImage = styled(motion.img)`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 12px;
  border: 3px solid white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  position: absolute;

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
  }

  &:nth-child(1) {
    left: 0;
    z-index: 1;
    transform: rotate(5deg); /* Tilt right */
  }
  &:nth-child(2) {
    left: 50px;
    z-index: 2;
    transform: rotate(-5deg); /* Tilt left */

    @media (max-width: 768px) {
      left: 35px;
    }
  }
  &:nth-child(3) {
    left: 100px;
    z-index: 3;
    transform: rotate(5deg); /* Tilt right */

    @media (max-width: 768px) {
      left: 70px;
    }
  }
`;

const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

const ScrollDownContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 2rem;
  cursor: pointer;
  align-self: flex-start;
  gap: 0.5rem;

  &:hover {
    .arrow-icon {
      color: white;
    }
    .scroll-text {
      color: white;
    }
  }
`;

const ScrollIcon = styled(KeyboardArrowDown)`
  color: #aaa;
  font-size: 1.5rem !important;
  animation: ${bounceAnimation} 2s infinite;
`;

const ScrollText = styled.p`
  color: #aaa;
  font-size: 0.9rem;
  transition: color 0.3s ease;
`;

const ViewProjectsButton = styled(motion.button)`
  margin: 2rem auto;
  padding: 0.6rem 1.2rem;
  font-size: 0.9rem;
  background-color: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  width: fit-content;

  &:hover {
    background-color: white;
    color: black;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
`;

const imageData = [
  {
    src: image1,
    rotate: 5,
    alt: "Mini 1",
  },
  {
    src: image2,
    rotate: -5,
    alt: "Mini 2",
  },
  {
    src: image3,
    rotate: 5,
    alt: "Mini 3",
  },
];

function Home() {
  const scrollToSkills = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <HeroSection>
      <StarBackground />
      <Name
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Harsh Vardhan Prasad<span>{"</>"}</span><span className="dot">.</span>
      </Name>

      <ImageGroup>
        {imageData.map(({ src, alt, rotate }, index) => (
          <StyledImage
            key={index}
            src={src}
            alt={alt}
            initial={{ rotate }}
            whileHover={{ scale: 1.15, y: -4, rotate }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        ))}
      </ImageGroup>

      <IntroText
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Hey there! I'm a <span className="highlight">Frontend Developer</span>{" "}
        {/* <EmojiImage
          src={creativity}
          alt="creativity"
          whileHover={{
            scale: 1.2,
            rotate: 10,
            transition: { type: "spring", stiffness: 300 },
          }}
        /> */}
        <br />
        crafting clean, responsive interfaces <br />
        with code, creativity{" "}
        {/* <EmojiImage
          src={creative}
          alt="creative"
          whileHover={{
            scale: 1.2,
            rotate: -10,
            transition: { type: "spring", stiffness: 300 },
          }}
        /> */}
        , and care{" "}
        {/* <EmojiImage
          src={monstera}
          alt="monstera"
          whileHover={{
            scale: 1.2,
            rotate: 10,
            transition: { type: "spring", stiffness: 300 },
          }}
        /> */}
      </IntroText>

      <SubNote>
        Currently building modern UIs with React.js, Redux & a passion for
        design.
      </SubNote>

      <ScrollDownContainer onClick={scrollToSkills}>
        <ScrollIcon className="arrow-icon" />
        <ScrollText className="scroll-text">Scroll down</ScrollText>
      </ScrollDownContainer>

      <Skills />
      <Experience />

      <ViewProjectsButton
        as={Link}
        to="/projects"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View My Projects
        <KeyboardArrowDown style={{ transform: "rotate(-90deg)" }} />
      </ViewProjectsButton>
    </HeroSection>
  );
}

export default Home;
