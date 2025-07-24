import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ExperienceSection = styled.section`
  padding: 4rem 0;
  color: white;
  position: relative;

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 3rem;
  color: white;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;

  &::after {
    content: "";
    position: absolute;
    width: 2px;
    background: rgba(255, 255, 255, 0.2);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;
  }

  @media (max-width: 768px) {
    &::after {
      left: 12px;
    }
  }
`;

const TimelineItem = styled.div`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  left: ${(props) => (props.position === "left" ? "0" : "50%")};

  @media (max-width: 768px) {
    width: calc(100% - 25px);
    padding: 8px 0;
    padding-left: 25px;
    left: 25px;
    margin-bottom: 0.75rem;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  right: -8px;
  background: white;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);

  ${(props) =>
    props.position === "right" &&
    `
    left: -8px;
  `}

  @media (max-width: 768px) {
    left: -19px;
    width: 10px;
    height: 10px;
  }
`;

const FlipCard = styled(motion.div)`
  perspective: 1000px;
  background: transparent;
  width: 100%;
  min-height: 300px;
  height: auto;
  cursor: pointer;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    min-height: auto;
    margin-bottom: 0;
  }
`;

const FlipCardInner = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: left;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  ${(props) =>
    props.isFlipped &&
    `
    transform: rotateY(180deg);
  `}
`;

const CardSide = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  backface-visibility: hidden;
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  will-change: transform;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const CardFront = styled(CardSide)`
  transform: rotateY(0deg);
`;

const CardBack = styled(CardSide)`
  position: absolute;
  top: 0;
  left: 0;
  transform: rotateY(180deg);
  height: 100%;
  overflow-y: auto;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const CompanyName = styled.h3`
  font-size: 1.4rem;
  color: white;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const RoleInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
`;

const Role = styled.span`
  font-size: 0.95rem;
  font-weight: 600;
  color: white;
  position: relative;
  padding-right: 12px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding-right: 0;
  }
`;

const Duration = styled.span`
  font-size: 0.65rem;
  color: #888;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const Overview = styled.p`
  font-size: 0.85rem;
  color: #f0f0f0;
  line-height: 1.6;
  margin: 1rem 0;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    line-height: 1.5;
    margin: 0.75rem 0;
  }
`;

const Description = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 1rem;

  li {
    margin-bottom: 0.5rem;
    font-size: 0.82rem;
    color: #f0f0f0;
    line-height: 1.5;
    opacity: 0.9;

    &:before {
      content: "•";
      color: #888;
      font-weight: bold;
      margin-right: 0.5rem;
    }

    @media (max-width: 768px) {
      font-size: 0.75rem;
      margin-bottom: 0.75rem;
      padding-left: 0.5rem;
    }
  }
`;

const FlipIndicator = styled.div`
  font-size: 0.65rem;
  color: #888;
  text-align: right;
  margin-top: 1rem;
  font-style: italic;

  @media (max-width: 768px) {
    margin-top: 0.75rem;
  }
`;

const experienceData = [
 
   
  // Outlier.ai Experience
  {
    company: "Outlier.ai",
    role: "Coding Expert - AI Training",
    duration: "Nov 2024 - Jan 2025",
    description: [
      "Working remotely as a coding expert to train AI models and improve their programming capabilities.",
    ],
    details: [
      "Contributing to AI model training through code review and optimization",
      "Helping improve AI's understanding of programming concepts and best practices",
      "Working on diverse programming problems to enhance AI's capabilities",
      "Collaborating with AI training team to ensure high-quality code generation",
      "Python",
      "JavaScript",
      "AI/ML",
      "Code Review",
      "Problem Solving",
    ],
  },
  // GirlScript Summer of Code (GSSOC) Experience
  {
    company: "GirlScript Summer of Code (GSSOC)",
    role: "Open Source Contributor",
    duration: "2025",
    description: [
      "Contributed to open source projects as part of the GirlScript Summer of Code program.",
    ],
    details: [
      "Contributed to multiple open source projects during the program",
      "Improved code quality and documentation",
      "Collaborated with other contributors and maintainers",
      "Enhanced project features and fixed bugs",
      "Open Source",
      "Git",
      "GitHub",
      "Collaboration",
      "Code Review",
    ],
  },
  // Fiverr Experience
  {
    company: "Fiverr",
    role: "Freelance Developer",
    duration: "2025 - Present",
    description: [
      "Working as a freelance developer, providing coding services to various clients.",
    ],
    details: [
      "Completed multiple successful projects for diverse clients",
      "Maintained high client satisfaction ratings",
      "Delivered projects on time and within budget",
      "Adapted to various client requirements and technologies",
      "Web Development",
      "Client Management",
      "Project Management",
      "Problem Solving",
    ],
  },
];

const Experience = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleCard = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <ExperienceSection>
      <Container>
        <Title>Experience</Title>
        <Timeline>
          {experienceData.map((exp, index) => (
            <TimelineItem
              key={index}
              position={index % 2 === 0 ? "left" : "right"}
            >
              <TimelineDot position={index % 2 === 0 ? "left" : "right"} />
              <FlipCard
                onClick={() => toggleCard(index)}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FlipCardInner isFlipped={flippedCards[index]}>
                  <CardFront>
                    <CompanyName>{exp.company}</CompanyName>
                    <RoleInfoContainer>
                      <Role>{exp.role}</Role>
                      <Duration>{exp.duration}</Duration>
                    </RoleInfoContainer>
                    <Overview>{exp.description[0]}</Overview>
                    <FlipIndicator>Flip for more ↗</FlipIndicator>
                  </CardFront>
                  <CardBack>
                    <CompanyName>{exp.company}</CompanyName>
                    <Role>Key Achievements & Responsibilities</Role>
                    <Description>
                      {exp.details.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </Description>
                  </CardBack>
                </FlipCardInner>
              </FlipCard>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;
