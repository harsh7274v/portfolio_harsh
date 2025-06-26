import { Box, Container, Typography, Card, CardContent, Grid, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Description } from '@mui/icons-material';

const blogPosts = [
  {
    title: 'BetterAuth vs NextAuth: Choose the Right Auth Library for Your SaaS',
    date: '2025-05-30',
    author: 'Ankur Tyagi',
    excerpt: 'A comparison of BetterAuth and NextAuth to help you choose the best authentication library for your app',
  },
  {
    title: 'AI Code Reviewers vs Human Code Reviewers',
    date: '2025-05-12',
    author: 'Ankur Tyagi',
    excerpt: 'A comparison of AI code reviewers and human reviewers to help you choose the best tool for your team',
  },
  {
    title: 'Cursor vs Windsurf: Choose the Right AI Code Editor for Your Team',
    date: '2025-04-11',
    author: 'Ankur Tyagi',
    excerpt: 'A comparison of Cursor and Windsurf to help you choose the best AI code editor for your team',
  },
  {
    title: 'Cody vs. Cursor: Choosing the Right AI Code Assistant for Your Development Workflow',
    date: '2025-03-17',
    author: 'Ankur Tyagi',
    excerpt: 'A comparison of Cody and Cursor to help you choose the right AI code assistant',
  },
  {
    title: 'Enhancing Web Experiences with the View Transitions API',
    date: '2025-02-24',
    author: 'Jitendra Nirnejak',
    excerpt: 'Learn how the View Transitions API enhances web experiences.',
  },
  {
    title: 'CodeRabbit vs Others: Which is the Right AI Code Review Tool',
    date: '2024-12-26',
    author: 'Ankur Tyagi',
    excerpt: 'Everything about AI code review tools',
  },
  {
    title: 'Twilio vs Stream: A Guide to Building Smarter Support Bots',
    date: '2024-12-11',
    author: 'Hrutik Kumthekar',
    excerpt: 'A comparison of Twilio and Stream for building automated customer support solutions',
  },
  {
    title: 'Supabase vs Clerk: Choose the Right Auth for Your SaaS',
    date: '2024-10-28',
    author: 'Ankur Tyagi',
    excerpt: 'A comparison of Clerk and Supabase to help you choose the best auth for your SaaS',
  },
  {
    title: 'MongoDB vs PostgreSQL: A Technical Comparison',
    date: '2024-09-26',
    author: 'Ankur Tyagi',
    excerpt: 'A technical comparison of MongoDB vs. PostgreSQL to help you choose the best database solution for your SaaS',
  },
  {
    title: 'State of Databases for Serverless in 2024',
    date: '2024-09-03',
    author: 'Ankur Tyagi',
    excerpt: 'My thoughts on the state of Databases for Serverless',
  },
  {
    title: 'Neon Postgres vs Supabase: Choose the Right Database for Your SaaS',
    date: '2024-08-08',
    author: 'Ankur Tyagi',
    excerpt: 'A comparison of Neon and Supabase to help you choose the best database for your SaaS',
  },
];

const Blog = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: { xs: 'background.default', dark: 'dark.900' } }}>
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: { xs: '24vh', sm: '32vh', md: '40vh' },
              bgcolor: { xs: '#e0e0e0 !important', dark: 'dark.800' },
              borderRadius: 4,
              boxShadow: 0,
              px: { xs: 1, sm: 4 },
              py: { xs: 2, sm: 4, md: 8 },
              color: { xs: '#111', dark: 'white' },
            }}
          >
            <Description sx={{ fontSize: { xs: 36, sm: 48, md: 60 }, color: 'primary.main', mb: 2 }} />
            <Typography variant="h2" sx={{ fontWeight: 700, mb: 2, textAlign: 'center', color: '#111', fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}>
              Blog
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 400, mb: 2, textAlign: 'center', color: '#111', fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' } }}>
              Insights, tutorials, and stories from my journey in tech.
            </Typography>
          </Box>
        </Container>
      </motion.section>

      {/* Blog Posts Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
        <Grid container spacing={{ xs: 2, sm: 4 }} justifyContent="center">
          {blogPosts.map((post, idx) => (
            <Grid item xs={12} sm={10} md={6} key={idx} sx={{ display: 'flex' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                style={{ width: '100%', display: 'flex', flex: 1 }}
              >
                <Card sx={{ borderRadius: 3, boxShadow: 3, bgcolor: { xs: '#f5f5f5', dark: 'dark.700' }, color: { xs: '#111', dark: 'white' }, minHeight: 220, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', px: { xs: 1, sm: 2 }, py: { xs: 1, sm: 2 }, flex: 1 }}>
                  <CardContent sx={{ p: { xs: 1, sm: 2 }, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' } }}>
                      {post.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'primary.main', mb: 0.5, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                      {new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#555', mb: 1, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                      by {post.author}
                    </Typography>
                    {Array.isArray(post.tags) && (
                      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                        {post.tags.map((tag, i) => (
                          <Chip key={i} label={tag} size="small" sx={{ bgcolor: '#e0e0e0', color: '#111', fontSize: { xs: '0.7rem', sm: '0.85rem' } }} />
                        ))}
                      </Stack>
                    )}
                    <Typography variant="body1" sx={{ color: '#333', fontSize: { xs: '0.98rem', sm: '1.1rem' } }}>
                      {post.excerpt}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Blog; 