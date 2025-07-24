import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiRedux,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFigma,
} from "react-icons/si";

const SkillsSection = styled.section`
  padding: 4rem 0;
  color: white;
`;

const SkillsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SkillsHeader = styled.div`
  margin-bottom: 3rem;
  max-width: 800px;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: white;
`;

const ExpertiseLevel = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const ExpertiseItem = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 8px;
  flex: 1;
  cursor: pointer;

  h3 {
    color: white;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    color: #f0f0f0;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 1rem;
  }
`;

const SkillCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  height: 160px;
  width: 100%;

  svg {
    font-size: 2.5rem;
    color: #333;
    transition: all 0.3s ease;
  }

  h3 {
    font-size: 1rem;
    color: #333;
    margin: 0;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    height: 110px;
    padding: 1rem;
    gap: 0.5rem;

    svg {
      font-size: 1.75rem;
    }

    h3 {
      font-size: 0.85rem;
    }
  }
`;

const SkillCategory = styled.div`
  margin-top: 3rem;

  h2 {
    font-size: 1.5rem;
    color: white;
    margin-bottom: 1rem;
  }

  p {
    color: #f0f0f0;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    margin-top: 2rem;

    h2 {
      font-size: 1.25rem;
      margin-bottom: 0.75rem;
    }
  }
`;

const OtherSkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1rem;
  }
`;

const SkillGroup = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h3 {
    color: #333;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      font-size: 1.5rem;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    color: #333;
  }

  li {
    padding: 0.5rem 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:before {
      content: "•";
      color: #333;
      font-weight: bold;
      margin-right: 0.5rem;
    }
  }

  @media (max-width: 768px) {
    padding: 1.25rem;

    h3 {
      font-size: 0.95rem;
      margin-bottom: 0.75rem;

      svg {
        font-size: 1.2rem;
      }
    }

    li {
      font-size: 0.85rem;
      padding: 0.35rem 0;
    }
  }
`;

const frontendSkills = [
  { name: "React.js", icon: <FaReact /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  //   { name: "Material UI", icon: <FaMaterialui /> },
];

const Skills = () => {
  return (
    <SkillsSection>
      <SkillsContainer>
        <SkillsHeader>
          <Title>Technical Skills</Title>
          <ExpertiseLevel>
            <ExpertiseItem>
              <h3>Frontend Expert</h3>
              <p>
                Specialized in building modern, responsive web applications with
                React.js ecosystem
              </p>
            </ExpertiseItem>
            <ExpertiseItem>
              <h3>Backend Learning</h3>
              <p>
                Currently expanding knowledge in Spring Boot and REST API
                development
              </p>
            </ExpertiseItem>
            <ExpertiseItem>
              <h3>DevOps Journey</h3>
              <p>
                Learning deployment, CI/CD, and cloud services with AWS and
                Docker
              </p>
            </ExpertiseItem>
          </ExpertiseLevel>
        </SkillsHeader>

        <SkillCategory>
          <h2>Frontend Technologies</h2>
          <SkillsGrid>
            {frontendSkills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                  svg: { color: "#007bff", transform: "scale(1.1)" },
                }}
              >
                {skill.icon}
                <h3>{skill.name}</h3>
              </SkillCard>
            ))}
          </SkillsGrid>
        </SkillCategory>

        <SkillCategory>
          <h2>Other Technical Skills</h2>
          <OtherSkillsGrid>
            <SkillGroup>
              <h3>
                <FaGitAlt /> Development Tools
              </h3>
              <ul>
                <li>Git & Version Control</li>
                <li>VS Code</li>
                <li>Postman</li>
                <li>Jest & Testing Libraries</li>
                {/* <li>Webpack & NPM</li> */}
              </ul>
            </SkillGroup>
            <SkillGroup>
              <h3>
                <FaNodeJs /> Backend & APIs
              </h3>
              <ul>
                <li>Spring Boot</li>
                <li>REST APIs</li>
                {/* <li>Node.js</li> */}
                <li>SQL & MySQL</li>
                {/* <li>GraphQL</li> */}
              </ul>
            </SkillGroup>
            <SkillGroup>
              <h3>
                <FaDocker /> DevOps & Deployment
              </h3>
              <ul>
                <li>Docker</li>
                <li>AWS Services</li>
                <li>CI/CD</li>
                <li>Web Performance Optimization</li>
              </ul>
            </SkillGroup>
            <SkillGroup>
              <h3>
                <SiFigma /> Design & Tools
              </h3>
              <ul>
                <li>Figma</li>
                <li>Adobe XD</li>
                <li>Data Visualization</li>
                <li>UI/UX Best Practices</li>
              </ul>
            </SkillGroup>
          </OtherSkillsGrid>
        </SkillCategory>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;
