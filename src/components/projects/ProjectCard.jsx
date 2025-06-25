import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { Card, CardContent, Box, Typography, Avatar, Stack, Button } from '@mui/material'
import { GitHub } from '@mui/icons-material'

const ProjectCard = ({ project }) => {
  const {
    id,
    title,
    description,
    image,
    categories = [],
    technologies = [],
    githubUrl,
    liveUrl
  } = project

  return (
    <Card
      component={motion.div}
      whileHover={{ y: -8, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
      sx={{
        height: '100%',
        minHeight: 320,
        bgcolor: '#e0e0e0',
        borderRadius: 3,
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        transition: 'all 0.3s ease',
      }}
    >
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, minHeight: 160 }}>
        <Box
          component="img"
          src={image || "https://via.placeholder.com/600x400?text=Project+Image"}
          alt={title}
          sx={{
            width: 200,
            height: 200,
            objectFit: 'cover',
            borderRadius: 2,
            boxShadow: 2,
            mx: 'auto',
            my: 2,
            display: 'block',
          }}
        />
      </Box>
      {id === 'anaquest' ? (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700, textAlign: 'center', color: '#111', cursor: 'pointer', '&:hover': { textDecoration: 'underline' }, mr: 1 }}>
              {title}
            </Typography>
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#111', display: 'flex', alignItems: 'center' }}
            aria-label="AnaQuest GitHub Repository"
          >
            <GitHub sx={{ fontSize: 28, ml: 0.5, '&:hover': { color: 'primary.main' }, transition: 'color 0.2s' }} />
          </a>
        </Box>
      ) : id === 'indago-job-tracking' ? (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700, textAlign: 'center', color: '#111', cursor: 'pointer', '&:hover': { textDecoration: 'underline' }, mr: 1 }}>
              {title}
            </Typography>
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#111', display: 'flex', alignItems: 'center' }}
            aria-label="Indago Job Tracking GitHub Repository"
          >
            <GitHub sx={{ fontSize: 28, ml: 0.5, '&:hover': { color: 'primary.main' }, transition: 'color 0.2s' }} />
          </a>
        </Box>
      ) : id === 'gemini-ai' ? (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700, textAlign: 'center', color: '#111', cursor: 'pointer', '&:hover': { textDecoration: 'underline' }, mr: 1 }}>
              {title}
            </Typography>
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#111', display: 'flex', alignItems: 'center' }}
            aria-label="Gemini AI GitHub Repository"
          >
            <GitHub sx={{ fontSize: 28, ml: 0.5, '&:hover': { color: 'primary.main' }, transition: 'color 0.2s' }} />
          </a>
        </Box>
      ) : id === 'readme-generator' ? (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700, textAlign: 'center', color: '#111', cursor: 'pointer', '&:hover': { textDecoration: 'underline' }, mr: 1 }}>
              {title}
            </Typography>
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#111', display: 'flex', alignItems: 'center' }}
            aria-label="README Generator GitHub Repository"
          >
            <GitHub sx={{ fontSize: 28, ml: 0.5, '&:hover': { color: 'primary.main' }, transition: 'color 0.2s' }} />
          </a>
        </Box>
      ) : (
        <Typography variant="h6" sx={{ fontWeight: 700, mt: 2, textAlign: 'center', color: '#111' }}>
          {title}
        </Typography>
      )}
    </Card>
  )
}

export default ProjectCard