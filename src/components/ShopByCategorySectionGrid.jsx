import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button
} from '@mui/material';

const ShopByCategorySectionSimple = () => {
  const categories = [
    { name: 'Painting', href: '/en/painting', gaLabel: 'painting' },
    { name: 'Photography', href: '/en/photography', gaLabel: 'photography' },
    { name: 'Print', href: '/en/print', gaLabel: 'print' },
    { name: 'Sculpture', href: '/en/sculpture', gaLabel: 'sculpture' }
  ];

  const handleCategoryClick = (category) => {
    if (window.gtag) {
      window.gtag('event', 'browse_category', {
        event_category: 'HomepageClicks',
        event_label: category.gaLabel
      });
    }
  };

  return (
    <Box sx={{ py: 8, backgroundColor: '#ffffff' }}>
      <Container maxWidth="lg">
        {/* Header - Centered */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          {/* Icon */}
          <Box sx={{ mb: 3 }}>
            <svg
              width={40}
              height={40}
              viewBox="0 0 40 40"
              fill="#1976d2"
            >
              <path d="M20 8C13.4 8 8 13.4 8 20s5.4 12 12 12 12-5.4 12-12S26.6 8 20 8zm0 22c-5.5 0-10-4.5-10-10S14.5 10 20 10s10 4.5 10 10-4.5 10-10 10z"/>
              <path d="M25 15l-5 5-5-5-1.4 1.4 5 5-5 5 1.4 1.4 5-5 5 5 1.4-1.4-5-5 5-5z"/>
            </svg>
          </Box>

          {/* Title */}
          <Typography
            variant="h3"
            component="h2"
            sx={{
              color: '#1976d2',
              fontWeight: 700,
              fontSize: '2rem',
              mb: 2
            }}
          >
            Shop art by category
          </Typography>
        </Box>

        {/* Category Buttons - 4 in a row */}
        <Grid container spacing={2} justifyContent="center">
          {categories.map((category) => (
            <Grid item xs={12} sm={6} md={3} key={category.name}>
              <Button
                fullWidth
                variant="outlined"
                href={category.href}
                onClick={() => handleCategoryClick(category)}
                sx={{
                  py: 2,
                  backgroundColor: '#f8f9fa',
                  border: '1px solid #dee2e6',
                  color: '#212529',
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  textTransform: 'none',
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: '#e9ecef',
                    borderColor: '#adb5bd'
                  },
                  height: '56px'
                }}
              >
                {category.name}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ShopByCategorySectionSimple;