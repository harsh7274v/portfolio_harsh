import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";

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
  const stars = Array.from({ length: 150 }).map((_, i) => ({
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

const AboutSection = styled.section`
  padding: 4rem 2rem;
  min-height: 100vh;
  background: #0a0a0a;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Card = styled(motion.div)`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  color: #333;
  position: relative;
  z-index: ${(props) => props.index};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  height: auto;
  width: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    margin-bottom: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.4;
  }
`;

function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Adjust scroll animation values for mobile
  const isMobile = window.innerWidth <= 768;
  const card1Y = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0, isMobile ? -50 : -100]
  );
  const card2Y = useTransform(
    scrollYProgress,
    [0.2, 0.5],
    [0, isMobile ? -50 : -100]
  );

  return (
    <AboutSection ref={sectionRef}>
      <StarBackground />
      <Card
        style={{ y: card1Y }}
        index={3}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title>Hello, I'm Harsh Vardhan Prasad</Title>
        <Subtitle>Full Stack Developer & Blockchain Enthusiast</Subtitle>
        <Description>
          I build exceptional digital experiences with a focus on performance, accessibility, and cutting-edge technology.
        </Description>
      </Card>

      <Card
        style={{ y: card2Y }}
        index={2}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Subtitle>Beyond Coding</Subtitle>
        <Description>
          Outside of work, I enjoy challenging myself with chess and solving
          LeetCode problems to sharpen my problem-solving skills. I'm always
          eager to meet new people and learn from their experiences. In my free
          time, I express my creativity through painting, finding it to be a
          perfect balance to my technical work.
        </Description>
      </Card>
    </AboutSection>
  );
}

export default About;
