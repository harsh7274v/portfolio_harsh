import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Material UI
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline, Box, CircularProgress } from '@mui/material'

// Layout components
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// Page components
import Home from '../Home'


import NotFound from './pages/NotFound'

// Utility components
import ScrollToTop from './components/utils/ScrollToTop'
import Cursor from './components/utils/Cursor'
import Chatbot from './components/Chatbot'

// Create Material UI theme
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2196F3',
      light: '#64B5F6',
      dark: '#1976D2',
    },
    secondary: {
      main: '#FF4081',
      light: '#FF79B0',
      dark: '#C60055',
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 500,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        },
      },
    },
  },
})

function App() {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.default',
            zIndex: 9999,
          }}
        >
          <CircularProgress size={60} />
        </Box>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Cursor />
      <ScrollToTop />
      <Navbar />
      
      <Box component="main" sx={{ minHeight: '100vh', pt: 8 }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
           
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Box>
      
      <Footer />
      <Chatbot />
    </ThemeProvider>
  )
}

export default App