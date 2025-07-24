import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
const RESUME_LINK = "https://drive.google.com/file/d/1ccCE2Ndly_MDfyfaxOAR0VckPKCeof7g/view?usp=sharing";

const ContactSection = styled.section`
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  background: #0a0a0a;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: left;
  margin-bottom: 3rem;
  color: #fff;
`;

const ContactForm = styled.form`
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  font-size: 1rem;
  background: #fff;
  color: #333;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #000;
    background: #fff;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  background: #fff;
  color: #333;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #000;
    background: #fff;
  }
`;

const SubmitButton = styled(motion.button)`
  background: #000;
  color: #fff;
  padding: 1rem 2rem;
  border: 2px solid #000;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  font-weight: 600;
  transition: all 0.3s ease;
  margin-top: 0.5rem;

  &:hover {
    background: transparent;
    color: #000;
  }
`;

const SuccessMessage = styled(motion.div)`
  background-color: #fff;
  color: #111;
  padding: 1rem;
  border-radius: 6px;
  margin-top: 1rem;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.12);
`;

const InfoNote = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  margin-top: 2rem;
  text-align: left;
  background: rgba(255, 255, 255, 0.05);
  padding: 0.75rem 1rem;
  border-radius: 6px;
`;

const DownloadResumeButton = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.9rem 2rem;
  background: transparent;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: #fff;
    color: #0a0a0a;
    border-color: #fff;
  }
`;

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <ContactSection>
      <SectionTitle>Get in Touch</SectionTitle>
      <ContactForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <SubmitButton
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Send Message
        </SubmitButton>
        {isSubmitted && (
          <SuccessMessage
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Thank you for your message! I'll get back to you soon.
          </SuccessMessage>
        )}
      </ContactForm>
      <InfoNote>
        Currently, the Get in Touch form is not working. You can message me on
        LinkedIn or email me using the address in my resume.
      </InfoNote>
      <DownloadResumeButton href={RESUME_LINK} target="_blank" rel="noopener noreferrer">
        Download Resume
      </DownloadResumeButton>
    </ContactSection>
  );
}

export default Contact;
