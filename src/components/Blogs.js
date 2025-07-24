import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ReactHooksPDF from "../assets/Pdfs/React hooks.pdf";
import DSAJSPDF from "../assets/Pdfs/DSA javascript basic.pdf";
import ReactHooksImage from "../assets/Blogs/ReactHooks.png";
import DSAImage from "../assets/Blogs/DSAJavascript.png";
import { Download } from "@mui/icons-material";

const BlogsSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: left;
  margin-bottom: 3rem;
  color: white;
`;

const PdfCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
`;

const PdfCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 100%;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.1);
  }
`;

const PdfContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PdfPreview = styled.div`
  width: 100%;
  height: 250px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 1rem;
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
  background: white;
  border-radius: 4px;

  &:hover {
    transform: scale(1.05);
  }
`;

const PdfTitle = styled.h3`
  color: white;
  font-size: 1.2rem;
  margin: 0;
`;

const PdfDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  margin: 0;
  white-space: pre-line;
  line-height: 1.5;
`;

const DownloadButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: transparent;
  border: 2px solid white;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  margin-top: auto;
  width: 100%;
  align-self: flex-end;

  &:hover {
    background: white;
    color: black;
  }
`;

const pdfs = [
  {
    title: "React Hooks Guide",
    file: ReactHooksPDF,
    image: ReactHooksImage,
    description:
      "Mastering React Hooks: A Deep Dive into Modern State Management & Performance Optimization! In this comprehensive guide, I break down essential hooks like:\n\n✔️ useState & useEffect – Handling state and side effects efficiently\n✔️ useContext – Simplifying global state management\n✔️ useRef – Managing persistent values and DOM references\n✔️ useReducer – An alternative to useState for complex logic\n✔️ useMemo & useCallback – Optimizing performance and preventing unnecessary re-renders\n✔️ Custom Hooks – Encapsulating reusable logic\n✔️ Pagination & Infinite Scroll – Implementing smooth user experiences",
  },
  {
    title: "DSA with JavaScript",
    file: DSAJSPDF,
    image: DSAImage,
    description:
      "Data Structures and Algorithms basics in JavaScript\n\nThis comprehensive guide covers essential topics like:\n\n✔️ Math coding questions\n✔️ Arrays & Strings\n✔️ Searching & Sorting algorithms\n✔️ Objects, Stack, and Queue",
  },
];

function Blogs() {
  const handleDownload = (pdfFile) => {
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = pdfFile.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <BlogsSection>
      <SectionTitle>My Blogs</SectionTitle>
      <PdfCardsContainer>
        {pdfs.map((pdf, index) => (
          <PdfCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <PdfContent>
              <PdfTitle>{pdf.title}</PdfTitle>
              <PdfPreview>
                <PreviewImage src={pdf.image} alt={pdf.title} />
              </PdfPreview>
              <PdfDescription>{pdf.description}</PdfDescription>
            </PdfContent>
            <DownloadButton
              onClick={() => handleDownload(pdf.file)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download />
              Download PDF
            </DownloadButton>
          </PdfCard>
        ))}
      </PdfCardsContainer>
    </BlogsSection>
  );
}

export default Blogs;
