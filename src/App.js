import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
    padding-top: 20px; /* Space for fixed navbar */
  }
`;

const MainContent = styled.main`
  flex: 1;
  width: 100%;

  @media (min-width: 601px) {
    margin-left: 10px; /* Space for sidebar (64px width + 40px padding) */
  }
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </MainContent>
      </AppContainer>
    </Router>
  );
}

export default App;
