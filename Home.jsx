import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

// Material UI Components
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Avatar,
  IconButton,
  Grid,
  Paper,
  Divider,
  Chip,
  Stack
} from '@mui/material'
import {
  GitHub,
  LinkedIn,
  Twitter,
  Instagram,
  Email,
  ArrowForward,
  Code,
  Brush,
  Psychology,
  TrendingUp,
  Web,
  Storage,
  Layers,
  DesignServices,
  Speed,
  CurrencyBitcoin,
  Description,
  LocationOn,
  Phone
} from '@mui/icons-material'

// Typing Animation Component
const TypingAnimation = ({ text, speed = 100, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!hasStarted) {
      const initialDelay = setTimeout(() => {
        setHasStarted(true)
        setCurrentIndex(0)
      }, delay)
      return () => clearTimeout(initialDelay)
    }
  }, [delay, hasStarted])

  useEffect(() => {
    if (hasStarted && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed, hasStarted])

  return (
    <Box
      sx={{
        minHeight: { xs: '3rem', md: '4.2rem', lg: '4.8rem' },
        display: 'flex',
        alignItems: 'center',
        width: 'fit-content',
        maxWidth: '100%',
        overflowX: 'visible',
        mx: 'auto',
      }}
    >
      <Typography 
        variant="h1" 
        component="h1" 
        sx={{ 
          fontWeight: 700, 
          mb: 2,
          fontSize: { xs: 'clamp(1.2rem, 6vw, 2.5rem)', sm: '2.5rem', md: '3.5rem', lg: '4rem' },
          lineHeight: 1.2,
          whiteSpace: 'nowrap',
          textAlign: 'center',
          mx: 'auto',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          color: '#111',
        }}
      >
        {displayText}
        <Box 
          component="span" 
          sx={{ 
            color: 'primary.main',
            animation: 'blink 1s infinite',
            '@keyframes blink': {
              '0%, 50%': { opacity: 1 },
              '51%, 100%': { opacity: 0 }
            }
          }}
        >
          |
        </Box>
      </Typography>
    </Box>
  )
}

// Components
import ProjectCard from './src/components/projects/ProjectCard'
import { projectsData } from './src/data/projectsData'
import { experienceData } from './src/data/experienceData'
import { certificationsData } from './src/data/educationData'

const Home = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [experienceRef, experienceInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const socialLinks = [
    { icon: <GitHub />, href: "https://github.com/harsh7274v", color: "#333" },
    { icon: <LinkedIn />, href: "https://linkedin.com/in/harsh0204/", color: "#0077B5" },
    { icon: <Twitter />, href: "https://twitter.com/harsh0204", color: "#1DA1F2" },
    { icon: <Instagram />, href: "https://instagram.com/rane.harsh_01", color: "#E4405F" }
  ]

  const expertiseAreas = [
    { icon: <Web />, title: "Frontend Development", description: "Modern, responsive UIs with React & MUI" },
    { icon: <Storage />, title: "Backend Development", description: "Robust APIs & scalable server logic" },
    { icon: <Layers />, title: "Fullstack Web Development", description: "End-to-end solutions for the web" },
    { icon: <DesignServices />, title: "UI/UX Design", description: "Intuitive, user-centered interfaces" },
    { icon: <Speed />, title: "Performance Optimization", description: "Fast, efficient, and reliable apps" },
    { icon: <CurrencyBitcoin />, title: "Blockchain", description: "Decentralized apps & smart contracts" }
  ]

  const location = useLocation();
  const navigate = useNavigate();

  const handleViewProjects = () => {
    if (location.pathname === '/') {
      const section = document.getElementById('projects-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: 'projects-section' } });
    }
  };

  const handleGetInTouch = () => {
    if (location.pathname === '/') {
      const section = document.getElementById('contact-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: 'contact-section' } });
    }
  };

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 100); // slight delay to ensure DOM is ready
      }
    }
  }, [location.state]);

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: { xs: 'background.default', dark: 'dark.900' } }}>
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '80vh',
              bgcolor: { xs: '#e0e0e0 !important', dark: 'dark.800' },
              borderRadius: 4,
              boxShadow: 0,
              px: { xs: 2, sm: 4 },
              py: { xs: 4, sm: 6, md: 8 },
              color: { xs: '#111', dark: 'white' },
            }}
          >
            {/* Profile Image - Centered */}
            <motion.div
              variants={itemVariants}
              style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem', width: '100%' }}
            >
              <Box sx={{ position: 'relative' }}>
                <Avatar
                  src="/landing.jpeg"
                  alt="Harsh Vardhan Prasad"
                  sx={{
                    width: { xs: 220, sm: 280, md: 350 },
                    height: { xs: 220, sm: 280, md: 350 },
                    border: '4px solid',
                    borderColor: 'primary.main',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: -20,
                    right: -20,
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                    opacity: 0.1,
                    zIndex: -1
                  }}
                />
              </Box>
            </motion.div>

            {/* Typing Animation - Always Centered Below Image */}
            <Box
              sx={{
                width: 'fit-content',
                maxWidth: '100%',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: { xs: '3rem', md: '4.2rem', lg: '4.8rem' },
                overflowX: 'visible',
              }}
            >
              <TypingAnimation 
                text="Hello, I'm Harsh Vardhan Prasad"
                speed={80}
                delay={500}
              />
            </Box>

            {/* Content Below Typing Animation */}
            <Box sx={{ width: '100%', mt: 3 }}>
              <motion.div
                variants={itemVariants}
                style={{ textAlign: 'center' }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3, duration: 0.5 }}
                >
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      mb: 3, 
                      color: '#111',
                      fontWeight: 300,
                      fontSize: { xs: '1.25rem', md: '1.5rem' }
                    }}
                  >
                    Full Stack Developer & Blockchain Enthusiast
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: 4, 
                      color: '#111',
                      fontSize: '1.1rem',
                      lineHeight: 1.6,
                      maxWidth: 600,
                      mx: 'auto'
                    }}
                  >
                    I build exceptional digital experiences with a focus on performance, 
                    accessibility, and cutting-edge technology.
                  </Typography>

                  {/* Social Links */}
                  <motion.div variants={itemVariants}>
                    <Stack direction="row" spacing={2} sx={{ mb: 4, justifyContent: 'center' }}>
                      {socialLinks.map((social, index) => (
                        <IconButton
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            bgcolor: social.color,
                            color: 'white',
                            '&:hover': {
                              bgcolor: social.color,
                              opacity: 0.8,
                              transform: 'translateY(-2px)'
                            },
                            transition: 'all 0.3s ease'
                          }}
                        >
                          {social.icon}
                        </IconButton>
                      ))}
                    </Stack>
                  </motion.div>

                  {/* CTA Buttons */}
                  <motion.div variants={itemVariants}>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'center' }}>
                      <Button
                        onClick={handleGetInTouch}
                        variant="contained"
                        size="large"
                        endIcon={<Email />}
                        sx={{
                          px: 4,
                          py: 1.5,
                          borderRadius: 2,
                          textTransform: 'none',
                          fontSize: '1rem',
                          fontWeight: 600
                        }}
                      >
                        Get In Touch
                      </Button>
                      <Button
                        onClick={handleViewProjects}
                        variant="outlined"
                        size="large"
                        endIcon={<ArrowForward />}
                        sx={{
                          px: 4,
                          py: 1.5,
                          borderRadius: 2,
                          textTransform: 'none',
                          fontSize: '1rem',
                          fontWeight: 600
                        }}
                      >
                        View Projects
                      </Button>
                      <Button
                        component="a"
                        href="https://drive.google.com/file/d/1NAYC7AvnnKwiPjCgbSGpVF__vfBzJf9a/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        size="large"
                        endIcon={<Description />}
                        sx={{
                          px: 4,
                          py: 1.5,
                          borderRadius: 2,
                          textTransform: 'none',
                          fontSize: '1rem',
                          fontWeight: 600
                        }}
                      >
                        Resume
                      </Button>
                    </Stack>
                  </motion.div>
                </motion.div>
              </motion.div>
            </Box>
          </Box>
        </Container>
      </motion.section>

      {/* Skills Title Section */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Card sx={{ bgcolor: { xs: '#e0e0e0', dark: 'dark.800' }, px: 5, py: 2, borderRadius: 3, boxShadow: 'none', minWidth: 320, width: '100%', maxWidth: 600, mx: 'auto', color: { xs: '#111', dark: 'white' } }}>
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#111', textAlign: 'center', letterSpacing: 1 }}>
            Skills
          </Typography>
        </Card>
      </Box>

      {/* Expertise Areas Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Grid container spacing={4} justifyContent="center">
            {expertiseAreas.map((area, index) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: 220,
                      minHeight: 220,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      p: 3,
                      borderRadius: 3,
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                      bgcolor: { xs: '#e0e0e0', dark: 'dark.700' },
                      color: { xs: '#111', dark: 'white' },
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
                      }
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          mb: 2
                        }}
                      >
                        <Avatar
                          sx={{
                            bgcolor: 'primary.main',
                            width: 60,
                            height: 60,
                            mb: 2
                          }}
                        >
                          {area.icon}
                        </Avatar>
                      </Box>
                      <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 600 }}>
                        {area.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {area.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </motion.section>

      {/* Projects Section */}
      <Box id="projects-section" sx={{ mt: 8, mb: 8 }}>
        <Container maxWidth="lg">
          <Card sx={{ bgcolor: { xs: '#e0e0e0', dark: 'dark.800' }, px: 5, py: 2, borderRadius: 3, boxShadow: 'none', minWidth: 320, width: '100%', maxWidth: 600, mx: 'auto', mb: 4, color: { xs: '#111', dark: 'white' } }}>
            <Typography variant="h5" sx={{ fontWeight: 700, color: '#111', textAlign: 'center', letterSpacing: 1 }}>
              Projects
            </Typography>
          </Card>
          <Box sx={{ position: 'relative', width: '100%' }}>
            <IconButton
              aria-label="slide left"
              onClick={() => {
                document.getElementById('project-slider').scrollBy({ left: -350, behavior: 'smooth' })
              }}
              sx={{
                position: 'absolute',
                left: 0,
                top: '50%',
                zIndex: 2,
                transform: 'translateY(-50%)',
                bgcolor: 'primary.main',
                color: 'white',
                boxShadow: 2,
                '&:hover': { bgcolor: 'primary.dark' },
                display: { xs: 'none', md: 'flex' }
              }}
            >
              <ArrowForward sx={{ transform: 'rotate(180deg)' }} />
            </IconButton>
            <Box
              id="project-slider"
              sx={{
                display: 'flex',
                overflowX: 'auto',
                scrollBehavior: 'smooth',
                gap: 4,
                py: 2,
                px: 1,
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': { display: 'none' },
                mx: { xs: 0, md: 6 }
              }}
            >
              {projectsData.slice(0, 4).map((project, idx) => (
                <Box key={project.id} sx={{ minWidth: 320, maxWidth: 340, flex: '0 0 25%', bgcolor: { xs: '#e0e0e0', dark: 'dark.700' }, color: { xs: '#111', dark: 'white' } }}>
                  <ProjectCard project={{ ...project, image: project.image && project.image !== '' ? project.image : '/landing.jpeg' }} />
                </Box>
              ))}
            </Box>
            <IconButton
              aria-label="slide right"
              onClick={() => {
                document.getElementById('project-slider').scrollBy({ left: 350, behavior: 'smooth' })
              }}
              sx={{
                position: 'absolute',
                right: 0,
                top: '50%',
                zIndex: 2,
                transform: 'translateY(-50%)',
                bgcolor: 'primary.main',
                color: 'white',
                boxShadow: 2,
                '&:hover': { bgcolor: 'primary.dark' },
                display: { xs: 'none', md: 'flex' }
              }}
            >
              <ArrowForward />
            </IconButton>
          </Box>
        </Container>
      </Box>

      {/* Experience Section */}
      <motion.section
        id="experience-section"
        ref={experienceRef}
        initial={{ opacity: 0, y: 50 }}
        animate={experienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        style={{ marginTop: 64, marginBottom: 64 }}
      >
        <Container maxWidth="lg">
          <Card sx={{ bgcolor: { xs: '#e0e0e0', dark: 'dark.800' }, px: 5, py: 2, borderRadius: 3, boxShadow: 'none', minWidth: 320, width: '100%', maxWidth: 600, mx: 'auto', mb: 4, color: { xs: '#111', dark: 'white' } }}>
            <Typography variant="h5" sx={{ fontWeight: 700, color: '#111', textAlign: 'center', letterSpacing: 1 }}>
              Experience
            </Typography>
          </Card>
          <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
            {experienceData.map((item, idx) => {
              let image = item.image;
              if (image === '/outlier.png' || image === '/gssoc.png') {
                // ok
              } else {
                image = '/landing.jpeg';
              }
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={experienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                  style={{ width: '100%' }}
                >
                  <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: idx % 2 === 0 ? 'row' : 'row-reverse' }, alignItems: 'center', mb: 6, p: 3, boxShadow: 3, borderRadius: 3, bgcolor: { xs: '#f5f5f5', dark: 'dark.700' }, color: { xs: '#111', dark: 'white' } }}>
                    <Box sx={{ flex: 1, minWidth: 220, maxWidth: 320, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
                      <Box component="img" src={image} alt={item.company + ' experience'} sx={{ width: '100%', maxWidth: 220, height: 180, objectFit: 'cover', borderRadius: 2, boxShadow: 2 }} />
                    </Box>
                    <Box sx={{ flex: 2, p: 2 }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#111', mb: 1 }}>{item.role}</Typography>
                      <Typography variant="subtitle1" sx={{ color: 'primary.main', mb: 1 }}>{item.company}</Typography>
                      <Typography variant="body2" sx={{ color: '#555', mb: 1 }}>{item.period}</Typography>
                      <Typography variant="body1" sx={{ color: '#333', mb: 2 }}>{item.description}</Typography>
                      {item.achievements && (
                        <Box sx={{ mb: 2 }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>Key Achievements:</Typography>
                          <ul style={{ margin: 0, paddingLeft: 20 }}>
                            {item.achievements.map((ach, i) => (
                              <li key={i} style={{ color: '#444', marginBottom: 4 }}>{ach}</li>
                            ))}
                          </ul>
                        </Box>
                      )}
                      {item.technologies && (
                        <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 1 }}>
                          {item.technologies.map((tech, i) => (
                            <Chip key={i} label={tech} size="small" sx={{ mb: 1, bgcolor: '#e0e0e0', color: '#111' }} />
                          ))}
                        </Stack>
                      )}
                    </Box>
                  </Card>
                </motion.div>
              );
            })}
          </Box>
        </Container>
      </motion.section>

      {/* Certification Section */}
      <motion.section
        id="certificates-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        style={{ marginTop: 64, marginBottom: 64 }}
      >
        <Container maxWidth="lg">
          <Card sx={{ bgcolor: { xs: '#e0e0e0', dark: 'dark.800' }, px: 5, py: 2, borderRadius: 3, boxShadow: 'none', minWidth: 320, width: '100%', maxWidth: 600, mx: 'auto', mb: 4, color: { xs: '#111', dark: 'white' } }}>
            <Typography variant="h5" sx={{ fontWeight: 700, color: '#111', textAlign: 'center', letterSpacing: 1 }}>
              Certifications
            </Typography>
          </Card>
          <Box sx={{ maxWidth: 1000, mx: 'auto', display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
            {certificationsData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                style={{ width: '100%' }}
              >
                <Card sx={{ p: 3, mb: 2, boxShadow: 3, borderRadius: 3, bgcolor: { xs: '#f5f5f5', dark: 'dark.700' }, color: { xs: '#111', dark: 'white' }, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#111' }}>{item.name}</Typography>
                      <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 600 }}>{item.date}</Typography>
                    </Box>
                    <Typography variant="subtitle1" sx={{ color: '#1976D2', mb: 1 }}>{item.issuer}</Typography>
                    <Typography variant="body2" sx={{ color: '#333', mb: 2 }}>{item.description}</Typography>
                    {item.skills && (
                      <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 1, mb: 2 }}>
                        {item.skills.map((skill, i) => (
                          <Chip key={i} label={skill} size="small" sx={{ mb: 1, bgcolor: '#e0e0e0', color: '#111' }} />
                        ))}
                      </Stack>
                    )}
                  </Box>
                  {item.credentialUrl && (
                    <Button
                      href={item.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outlined"
                      size="small"
                      sx={{ mt: 2, alignSelf: 'flex-start', fontWeight: 600 }}
                    >
                      View Credential
                    </Button>
                  )}
                </Card>
              </motion.div>
            ))}
          </Box>
        </Container>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        style={{ marginTop: 64, marginBottom: 64 }}
      >
        <Container maxWidth="sm">
          <Card sx={{ bgcolor: { xs: '#e0e0e0', dark: 'dark.800' }, px: 5, py: 2, borderRadius: 3, boxShadow: 'none', minWidth: 320, width: '100%', mx: 'auto', mb: 4, color: { xs: '#111', dark: 'white' } }}>
            <Typography variant="h5" sx={{ fontWeight: 700, color: '#111', textAlign: 'center', letterSpacing: 1 }}>
              Contact Information
            </Typography>
          </Card>
          <Card sx={{ p: 4, boxShadow: 3, borderRadius: 3, bgcolor: { xs: '#f5f5f5', dark: 'dark.700' }, color: { xs: '#111', dark: 'white' }, mb: 2 }}>
            <Stack spacing={3}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Email sx={{ color: 'primary.main' }} />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Email</Typography>
                  <Typography variant="body2">
                    <a href="mailto:harshvardhan7274+work@gmail.com" style={{ color: '#1976D2', textDecoration: 'none' }}>
                      harshvardhan7274+work@gmail.com
                    </a>
                  </Typography>
                </Box>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <LocationOn sx={{ color: 'primary.main' }} />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Location</Typography>
                  <Typography variant="body2" color="text.secondary">phagwara, punjab, India</Typography>
                </Box>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <Phone sx={{ color: 'primary.main' }} />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Phone</Typography>
                  <Typography variant="body2" color="text.secondary">(+91) 8092824136</Typography>
                </Box>
              </Stack>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>Follow Me</Typography>
                <Stack direction="row" spacing={2}>
                  <IconButton href="https://github.com/harsh7274v" target="_blank" rel="noopener noreferrer" sx={{ bgcolor: '#333', color: 'white', '&:hover': { bgcolor: '#333', opacity: 0.8 } }}>
                    <GitHub />
                  </IconButton>
                  <IconButton href="https://linkedin.com/in/harsh0204/" target="_blank" rel="noopener noreferrer" sx={{ bgcolor: '#0077B5', color: 'white', '&:hover': { bgcolor: '#0077B5', opacity: 0.8 } }}>
                    <LinkedIn />
                  </IconButton>
                  <IconButton href="https://twitter.com/harsh0204" target="_blank" rel="noopener noreferrer" sx={{ bgcolor: '#1DA1F2', color: 'white', '&:hover': { bgcolor: '#1DA1F2', opacity: 0.8 } }}>
                    <Twitter />
                  </IconButton>
                  <IconButton href="https://instagram.com/rane.harsh_01" target="_blank" rel="noopener noreferrer" sx={{ bgcolor: '#E4405F', color: 'white', '&:hover': { bgcolor: '#E4405F', opacity: 0.8 } }}>
                    <Instagram />
                  </IconButton>
                </Stack>
              </Box>
            </Stack>
          </Card>
        </Container>
      </motion.section>
    </Box>
  )
}

export default Home