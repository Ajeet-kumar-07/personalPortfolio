'use client'

import AnimatedText from '../common/AnimatedText'
import Image from 'next/image'
import { Typography, Container, Box, Card, CardContent, Grid } from '@mui/material'
import GradientBackground from '../common/GradientBackground'

// Define photo data type
// Each photo must include:
// - id: Unique identifier
// - image: Image path (stored in public/gallery/ directory)
// - date: Photo date
// - location: Photo location
// - description: Photo description
type Photo = {
  id: number
  image: string
  date: string
  location: string
  description: string
}

// Example photo data
// To add more photos:
// 1. Place your photo files in public/gallery/ directory
// 2. Copy the template below and add new photo entries
// 3. Update the image path, date, location and description
// 4. Recommended to sort photos in reverse chronological order
const photos: Photo[] = [
  {
    id: 1,
    image: "/gallery/example.jpg",
    date: "",
    location: "",
    description: "comming soon..."
  }
]

export default function Gallery() {
  return (
    <Container id="gallery" maxWidth="xl" component="section">
     <Box sx={{ 
        minHeight: '100vh',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 4, md: 4 },
        px: { xs: 2, sm: 4, md: 8 },
        position: 'relative',
        overflow: 'hidden',
      }}>
        <GradientBackground 
          sectionId="gallery"
          gradientColors={{
            start: '#60A5FA',  // Light blue
            end: '#3B82F6'     // Deep blue
          }}
        /> 

        <AnimatedText>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center relative z-10">Blog</h1>
        </AnimatedText>
        
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ position: 'relative', zIndex: 1, maxWidth: 'xl' }}>
          {photos.map((photo, index) => (
            <Grid item xs={6} sm={4} md={4} key={photo.id} sx={{ 
              transform: index % 2 === 0 ? 'translateY(40px)' : 'translateY(0)'
            }}>
              <AnimatedText>
                <Card 
                  elevation={0}
                  sx={{
                    height: '100%',
                    background: theme => theme.palette.mode === 'dark' 
                      ? 'rgba(0, 0, 0, 0.2)' 
                      : 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: 4,
                    border: theme => `1px solid ${
                      theme.palette.mode === 'dark' 
                        ? 'rgba(255, 255, 255, 0.1)' 
                        : 'rgba(255, 255, 255, 0.2)'
                    }`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      background: theme => theme.palette.mode === 'dark'
                        ? 'rgba(0, 0, 0, 0.3)'
                        : 'rgba(255, 255, 255, 0.15)',
                      boxShadow: theme => theme.palette.mode === 'dark'
                        ? '0 20px 40px rgba(0, 0, 0, 0.3)'
                        : '0 20px 40px rgba(0, 0, 0, 0.1)',
                    }
                  }}
                >
                  <CardContent sx={{ 
                    p: { xs: 1.5, sm: 2, md: 3 }
                  }}>
                    <Box sx={{ mb: { xs: 1, sm: 1.5, md: 2 } }}>
                      <Image
                        src={photo.image}
                        alt={photo.description}
                        width={400}
                        height={300}
                        className="rounded-lg object-cover w-full"
                      />
                    </Box>
                    <Typography variant="body1" sx={{ 
                      fontWeight: 500,
                      mb: { xs: 0.5, sm: 0.75, md: 1 },
                      fontSize: { 
                        xs: '0.875rem',
                        sm: '1rem',
                        md: '1.125rem'
                      }
                    }}>
                      {photo.location}
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      opacity: 0.7,
                      fontSize: { 
                        xs: '0.75rem',
                        sm: '0.875rem',
                        md: '1rem'
                      }
                    }}>
                      {photo.date}
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      opacity: 0.7,
                      mt: { xs: 0.5, sm: 0.75, md: 1 },
                      fontSize: { 
                        xs: '0.75rem',
                        sm: '0.875rem',
                        md: '1rem'
                      }
                    }}>
                      {photo.description}
                    </Typography>
                  </CardContent>
                </Card>
              </AnimatedText>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
} 