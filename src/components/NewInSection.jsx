import React, { useState, useRef } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Card,
  CardContent,
  Grid,
  Button
} from '@mui/material';
import {
  KeyboardArrowLeft,
  KeyboardArrowRight
} from '@mui/icons-material';

const categories = [
  {
    title: "NEW ARTWORKS",
    items: [
      "Under ¥25,000",
      "¥25,000-¥50,000", 
      "¥50,000-¥250,000",
      "¥1000,000",
      "Over ¥1,000,000"
    ]
  },
  {
    title: "NEW COLLECTIONS",
    items: [
      "Forms in acceleration",
      "Modern mythology", 
      "Contemporary minimalism",
      "Futurist landscapes",
      "Rest in motion"
    ]
  },
  {
    title: "NEW ARTISTS",
    items: [
      "José Antonio Garrucho",
      "Julien Hayot",
      "NUPUR JHA", 
      "Enzo FORGIONE",
      "T Turban"
    ]
  },
  {
    title: "FEATURED ARTISTS", 
    items: [
      "Julia Bright",
      "Julijana Ravbar",
      "Babia Limane",
      "Maja Weller",
      "Renate Hoefer"
    ]
  },
  {
    title: "HIGHLIGHTS",
    items: [
      "Anders Post",
      "Explore All Collections",
      "Juan Pinilla Pinilla Gonzalez",
      "SUSANA MAZZARINO JIMENEZ",
      "Anthony Agbovi"
    ]
  }
];

const additionalArtists = [
  "Fiorian Tillack", "Mila Bozic", "Ann Capitano", "Fabricio Pianto", 
  "ph nos", "Bogdan Kostenetsky", "Explore all artists"
];

function NewInSection() {
  const [hovered, setHovered] = useState(false);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <Box 
      sx={{ 
        mb: 6,
        position: 'relative'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Typography 
        variant="h6" 
        component="h2" 
        gutterBottom 
        sx={{ 
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}
      >
        New In
        <Box 
          sx={{ 
            width: '6px', 
            height: '6px', 
            backgroundColor: 'black', 
            borderRadius: '50%' 
          }} 
        />
      </Typography>

      {/* Scrollable Content */}
      <Box sx={{ position: 'relative' }}>
        <IconButton
          sx={{
            position: 'absolute',
            left: -20,
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'white',
            boxShadow: 2,
            zIndex: 2,
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.3s',
            '&:hover': {
              backgroundColor: 'grey.100'
            }
          }}
          onClick={() => scroll('left')}
        >
          <KeyboardArrowLeft />
        </IconButton>

        <Box
          ref={scrollRef}
          sx={{
            display: 'flex',
            gap: 3,
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            py: 2,
            px: 1,
            '&::-webkit-scrollbar': {
              display: 'none'
            },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none'
          }}
        >
          {categories.map((category, index) => (
            <Card 
              key={index} 
              sx={{ 
                minWidth: 280,
                flexShrink: 0,
                boxShadow: 2,
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)'
                }
              }}
            >
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  {category.title}
                </Typography>
                {category.items.map((item, itemIndex) => (
                  <Typography 
                    key={itemIndex} 
                    variant="body2" 
                    sx={{ 
                      py: 0.5,
                      cursor: 'pointer',
                      '&:hover': {
                        color: 'primary.main',
                        fontWeight: 'bold'
                      }
                    }}
                  >
                    {item}
                  </Typography>
                ))}
                {index === categories.length - 1 && (
                  <>
                    {additionalArtists.map((artist, artistIndex) => (
                      <Typography 
                        key={artistIndex} 
                        variant="body2" 
                        sx={{ 
                          py: 0.5,
                          cursor: 'pointer',
                          '&:hover': {
                            color: 'primary.main',
                            fontWeight: 'bold'
                          }
                        }}
                      >
                        {artist}
                      </Typography>
                    ))}
                  </>
                )}
                <Button 
                  variant="text" 
                  size="small" 
                  sx={{ 
                    mt: 2, 
                    fontWeight: 'bold',
                    textTransform: 'none'
                  }}
                >
                  Explore all {category.title.toLowerCase()}
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>

        <IconButton
          sx={{
            position: 'absolute',
            right: -20,
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'white',
            boxShadow: 2,
            zIndex: 2,
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.3s',
            '&:hover': {
              backgroundColor: 'grey.100'
            }
          }}
          onClick={() => scroll('right')}
        >
          <KeyboardArrowRight />
        </IconButton>
      </Box>
    </Box>
  );
}

export default NewInSection;