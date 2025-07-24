import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { KeyboardArrowDown } from "@mui/icons-material";

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: left;
  margin-bottom: 3rem;
  color: white;
`;

const ProjectContainer = styled.div`
  display: flex;
  gap: 3rem;
  margin-bottom: 4rem;
  align-items: center;
  min-height: 80vh;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    min-height: auto;
    margin-bottom: 2rem;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

const Carousel = styled.div`
  position: relative;
  width: 90vw;
  max-width: 700px;
  height: 55vw;
  max-height: 550px;
  perspective: 1000px;
  transform-style: preserve-3d;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 98vw;
    max-width: 98vw;
    height: 60vw;
    max-height: 400px;
    perspective: 800px;
  }

  @media (max-width: 480px) {
    width: 100vw;
    max-width: 100vw;
    height: 70vw;
    max-height: 300px;
    perspective: 600px;
  }
`;

const CardContainer = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotateY(calc(var(--offset) * 30deg))
    scaleY(calc(1 + var(--abs-offset) * -0.2))
    translateZ(calc(var(--abs-offset) * -15rem))
    translateX(calc(var(--direction) * -3rem));
  filter: blur(calc(var(--abs-offset) * 0.5rem));
  transition: all 0.3s ease-out;
  pointer-events: ${(props) => (props.active ? "auto" : "none")};
  opacity: ${(props) => (Math.abs(props.offset) >= 2 ? "0" : "1")};
  display: ${(props) => (Math.abs(props.offset) > 2 ? "none" : "block")};

  @media (max-width: 768px) {
    transform: rotateY(calc(var(--offset) * 25deg))
      scaleY(calc(1 + var(--abs-offset) * -0.15))
      translateZ(calc(var(--abs-offset) * -10rem))
      translateX(calc(var(--direction) * -2rem));
  }

  @media (max-width: 480px) {
    transform: rotateY(calc(var(--offset) * 20deg))
      scaleY(calc(1 + var(--abs-offset) * -0.1))
      translateZ(calc(var(--abs-offset) * -8rem))
      translateX(calc(var(--direction) * -1.5rem));
  }
`;

const ImageCard = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const NavButton = styled.button`
  color: #509c87;
  font-size: 2.5rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  z-index: 2;
  cursor: pointer;
  user-select: none;
  background: unset;
  border: unset;
  transform: translateY(-50%);

  &.left {
    left: -3rem;
  }

  &.right {
    right: -3rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;

    &.left {
      left: -1.5rem;
    }

    &.right {
      right: -1.5rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;

    &.left {
      left: -1rem;
    }

    &.right {
      right: -1rem;
    }
  }
`;

const ImageControls = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 3;
`;

const ImageDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active ? "#509c87" : "rgba(80, 156, 135, 0.5)"};
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const FlipCard = styled(motion.div)`
  flex: 1;
  perspective: 1000px;
  background: transparent;
  height: 550px;
  min-height: 300px;
  cursor: pointer;
  width: 500px;
  min-width: 300px;
  margin-left: 4rem;

  @media (max-width: 768px) {
    height: 600px;
    width: 100%;
    min-width: 100%;
    margin-left: 0;
  }

  @media (max-width: 480px) {
    height: 650px;
    width: 100%;
    min-width: 100%;
    margin-left: 0;
  }
`;

const FlipCardInner = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 300px;
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
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 300px;
  backface-visibility: hidden;
  background: rgba(255, 255, 255, 0.05);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
  overflow-x: hidden;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const CardFront = styled(CardSide)`
  transform: rotateY(0deg);
`;

const CardBack = styled(CardSide)`
  transform: rotateY(180deg);
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  color: white;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

const ProjectDescription = styled.p`
  color: #f0f0f0;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    line-height: 1.4;
    margin-bottom: 1rem;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    gap: 0.3rem;
  }
`;

const TechTag = styled.span`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.85rem;
  color: white;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
    padding: 0.2rem 0.5rem;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const Links = styled.a`
  color: #509c87;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const FlipIndicator = styled.div`
  font-size: 0.8rem;
  color: #888;
  text-align: right;
  margin-top: 1rem;
  font-style: italic;

  @media (max-width: 480px) {
    font-size: 0.7rem;
    margin-top: 0.8rem;
  }
`;

const DetailList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DetailItem = styled.li`
  color: #f0f0f0;
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.6;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    line-height: 1.4;
    margin-bottom: 0.7rem;
  }

  &::before {
    content: "•";
    color: #509c87;
    font-size: 1.2rem;
    line-height: 1;

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;

const ProjectLink = styled(motion.button)`
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

function Projects() {
  const [flippedCards, setFlippedCards] = useState({});
  const [activeImages, setActiveImages] = useState({});

  const toggleCard = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleImageChange = (projectIndex, imageIndex) => {
    setActiveImages((prev) => ({
      ...prev,
      [projectIndex]: imageIndex,
    }));
  };

  const handleNextImage = (projectIndex) => {
    const currentImage = activeImages[projectIndex] || 0;
    const nextImage = (currentImage + 1) % projects[projectIndex].images.length;
    handleImageChange(projectIndex, nextImage);
  };

  const handlePrevImage = (projectIndex) => {
    const currentImage = activeImages[projectIndex] || 0;
    const prevImage =
      (currentImage - 1 + projects[projectIndex].images.length) %
      projects[projectIndex].images.length;
    handleImageChange(projectIndex, prevImage);
  };

  const projects = [
    {
      title: "Expense Tracker (PWA)",
      description:
        "A full-stack progressive web application for tracking personal expenses and income. Built with Next.js, Tailwind CSS, and TypeScript. Features real-time updates, secure authentication, and a responsive, PWA-optimized design.",
      images: [
        process.env.PUBLIC_URL + "/expense1.png",
        process.env.PUBLIC_URL + "/expense2.png",
        process.env.PUBLIC_URL + "/expense3.png"
      ],
      tech: [
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Firebase",
        "PWA",
        "Responsive Design",
        "Local Storage",
        "Sidebar Navigation"
      ],
      demo: "https://budeeext.vercel.app/",
      code: "https://github.com/harsh7274v",
      details: [
        "Developed a full-stack progressive web application (PWA) for tracking personal expenses and income, featuring user authentication.",
        "Real-time data updates and responsive design for seamless experience across devices.",
        "Implemented secure user authentication and profile management using Firebase Authentication (email/password & Google sign-in), including password change and re-authentication flows.",
        "Integrated Firebase Firestore for real-time database and data sync.",
        "Integrated local storage for custom categories and optimized UX for both desktop and mobile devices with adaptive layouts and sidebar navigation.",
        "Added offline support and installability as a PWA, allowing users to access the app even without internet.",
        "Designed intuitive UI with Tailwind CSS, focusing on accessibility and performance.",
        "Implemented analytics dashboard for visualizing spending trends and income breakdowns.",
        "Enhanced security with route protection and data validation.",
        "Optimized for fast load times and smooth transitions using Next.js best practices."
      ],
    },
    {
      title: "AnaQuest - Smart EdTech Platform",
      description:
        "AnaQuest is a smart EdTech platform that empowers students to practice analytical questions for competitive exams and placements with real-time feedback and adaptive learning. It combines full-stack software development with Generative AI to deliver personalized quizzes, AI-generated explanations, and dynamic performance summaries.",
      images: [
        process.env.PUBLIC_URL + "/anaquest1.png",
        process.env.PUBLIC_URL + "/anaquest2.png"
      ],
      tech: [
        "Next.js (TypeScript)",
        "Tailwind CSS",
        "ShadCN UI",
        "Node.js",
        "Next.js API Routes",
        "MongoDB",
        "OpenAI GPT API",
        "React Query",
        "Zustand",
        "NextAuth",
        "Vercel",
        "MongoDB Atlas"
      ],
      demo: "https://anaquest-ixfp.vercel.app/",
      code: "https://github.com/harsh7274v",
      details: [
        "Dynamic Question Bank: Categorized by exam type, topic, and difficulty.",
        "Custom Quiz Builder: Create quizzes based on selected topics and difficulty levels.",
        "AI-Powered Question Generation: New analytical questions are auto-generated using LLMs.",
        "Instant AI-Generated Explanations: Get detailed solutions from the AI immediately after answering.",
        "Performance Dashboard: Track accuracy, time, and weak topics through visual analytics.",
        "Adaptive Quiz Recommendations: Next quiz is tailored based on weak areas using AI.",
        "Natural Language Summaries: AI-generated personalized feedback reports.",
        "Leaderboard: Compare your performance with peers.",
        "Secure Authentication: User login and session management using NextAuth.",
        "Full-stack architecture with Next.js (TypeScript) for frontend and backend, Node.js API routes, and MongoDB for data storage.",
        "Deployed on Vercel with MongoDB Atlas for scalable, cloud-based infrastructure.",
        "State management using React Query and Zustand for efficient data fetching and global state.",
        "Easily extendable to support additional LLM providers or custom AI models."
      ],
    },
    {
      title: "Gemini AI Web App",
      description:
        "Gemini AI is an innovative web application that brings an interactive chat experience with the help of Google Gemini Pro API. Built using Node.js, React.js, MongoDB, and Redux Toolkit, this app allows users to engage in text-based conversations with Gemini AI. The application features Google OAuth V2 for user authentication, enabling enhanced capabilities and personalization.",
      images: [
        process.env.PUBLIC_URL + "/gemini1.png",
        process.env.PUBLIC_URL + "/gemini2.png",
        process.env.PUBLIC_URL + "/gemini3.png"
      ],
      tech: [
        "Node.js",
        "React.js",
        "MongoDB",
        "Redux Toolkit",
        "Google Gemini Pro API",
        "Google OAuth V2",
        "Express.js",
        "REST API",
        "Modern UI"
      ],
      demo: "https://geminichatai.netlify.app/",
      code: "https://github.com/harsh7274v",
      details: [
        "Gemini AI Web App is a Google Gemini clone, providing users with a seamless chat interface powered by advanced AI capabilities.",
        "Users can enjoy conversations with Gemini AI, receiving text-based responses.",
        "Two user types supported:",
        "- Non-authenticated Users: Limited to 10 chat requests per hour, access to the last 5 chat history entries.",
        "- Authenticated Users: Unlimited chat responses, full chat history access upon login.",
        "Modern, clean, and user-friendly interface for a seamless chat experience.",
        "Google OAuth V2 integration for secure authentication and personalized experience.",
        "Efficient state management with Redux Toolkit for chat and user data.",
        "MongoDB for persistent chat history and user data storage.",
        "Scalable backend with Node.js and Express.js, supporting RESTful API endpoints.",
        "Responsive design for optimal experience on both desktop and mobile devices."
      ],
    },
  ];

  return (
    <ProjectsSection>
      <SectionTitle>My Projects</SectionTitle>
      {projects.map((project, index) => (
        <ProjectContainer key={project.title}>
          <Carousel>
            <NavButton
              className="left"
              onClick={() => handlePrevImage(index)}
              style={{
                display: (activeImages[index] || 0) > 0 ? "flex" : "none",
              }}
            >
              ←
            </NavButton>
            {project.images.map((image, imgIndex) => (
              <CardContainer
                key={imgIndex}
                active={imgIndex === (activeImages[index] || 0)}
                offset={(activeImages[index] || 0) - imgIndex}
                direction={Math.sign((activeImages[index] || 0) - imgIndex)}
                absOffset={Math.abs((activeImages[index] || 0) - imgIndex) / 3}
                style={{
                  "--offset": ((activeImages[index] || 0) - imgIndex) / 3,
                  "--direction": Math.sign(
                    (activeImages[index] || 0) - imgIndex
                  ),
                  "--abs-offset":
                    Math.abs((activeImages[index] || 0) - imgIndex) / 3,
                }}
              >
                <ImageCard>
                  <ProjectImage src={image} alt={project.title} loading="lazy" />
                </ImageCard>
              </CardContainer>
            ))}
            <NavButton
              className="right"
              onClick={() => handleNextImage(index)}
              style={{
                display:
                  (activeImages[index] || 0) < project.images.length - 1
                    ? "flex"
                    : "none",
              }}
            >
              →
            </NavButton>
            <ImageControls>
              {project.images.map((_, imgIndex) => (
                <ImageDot
                  key={imgIndex}
                  active={imgIndex === (activeImages[index] || 0)}
                  onClick={() => handleImageChange(index, imgIndex)}
                />
              ))}
            </ImageControls>
          </Carousel>
          <FlipCard
            onClick={() => toggleCard(index)}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FlipCardInner isFlipped={flippedCards[index]}>
              <CardFront>
                <div>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <TechStack>
                    {project.tech.map((tech) => (
                      <TechTag key={tech}>{tech}</TechTag>
                    ))}
                  </TechStack>
                </div>
                <div>
                  <ProjectLinks>
                    <Links
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </Links>
                    <Links
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code
                    </Links>
                  </ProjectLinks>
                  <FlipIndicator>Flip for more details ↗</FlipIndicator>
                </div>
              </CardFront>
              <CardBack>
                <div>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <DetailList>
                    {project.details.map((detail, i) => (
                      <DetailItem key={i}>{detail}</DetailItem>
                    ))}
                  </DetailList>
                </div>
              </CardBack>
            </FlipCardInner>
          </FlipCard>
        </ProjectContainer>
      ))}
      <ProjectLink
        as={Link}
        to="/blogs"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View My Blogs
        <KeyboardArrowDown style={{ transform: "rotate(-90deg)" }} />
      </ProjectLink>
    </ProjectsSection>
  );
}

export default Projects;
