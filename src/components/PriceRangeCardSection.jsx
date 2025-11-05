import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  useTheme,
  useMediaQuery
} from '@mui/material';

const PriceRangeSectionExact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const priceRanges = [
    { label: '₹50,000 and under', href: '/en/painting?maxPrice=50000' },
    { label: '₹50,000 - ₹200,000', href: '/en/painting?minPrice=50000&maxPrice=200000' },
    { label: '₹200,000 - ₹400,000', href: '/en/painting?minPrice=200000&maxPrice=400000' },
    { label: '₹400,000 - ₹800,000', href: '/en/painting?minPrice=400000&maxPrice=800000' },
    { label: '₹800,000 and up', href: '/en/painting?minPrice=800000' },
    { label: 'Special deals', href: '/en/painting?isDiscountExclusive=1' }
  ];

  return (
    <Box 
      component="section"
      sx={{
        py: 2,
        backgroundColor: '#ffffff'
      }}
    >
      <Container maxWidth="lg">
        {/* Header - Left Aligned */}
        <Box sx={{ textAlign: 'left', mb: 1}}>
          {/* SVG Icon */}
          <Box sx={{ mb: 1 }}>
            <svg
              viewBox="0 0 40 40"
              width={40}
              height={40}
              className="icon page-section__icon"
              aria-hidden="true"
            >
              <use href="https://www.singulart.com/assets/assets/build/images/components/atoms/icons/icon-global-defs.d84972f4.svg#icon-global-highlight" />
            </svg>
          </Box>
          
          {/* Title */}
          <Box className="page-section__header" sx={{ mb: 2 }}>
            <Typography
              variant="h4"
              component="h2"
              className="page-section__title heading--l"
              sx={{
                color: '#1A0A3E',
                fontWeight: 700,
                fontSize: '2rem',
                lineHeight: 1.2,
                [theme.breakpoints.down('md')]: {
                  fontSize: '1.75rem',
                },
                [theme.breakpoints.down('sm')]: {
                  fontSize: '1.5rem',
                },
              }}
            >
              Shop artworks by price
            </Typography>
          </Box>

          {/* Description */}
          <Typography
            variant="body1"
            component="p"
            className="heading--s text--secondary mt-3xs"
            sx={{
              color: '#666666',
              fontSize: '1.1rem',
              lineHeight: 1.6,
              maxWidth: '600px'
            }}
          >
            Find the perfect piece within your budget from our curated price ranges
          </Typography>
        </Box>

        {/* Price Buttons Grid */}
        <Grid container spacing={2} justifyContent="flex-start">
          {priceRanges.map((range, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
              <Button
                variant="outlined"
                fullWidth
                href={range.href}
                sx={{
                  py: 2.5,
                  backgroundColor: '#ffffff',
                  border: '2px solid #E0E0E0',
                  color: '#1A0A3E',
                  fontSize: '1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  borderRadius: '50px', // Fully rounded for pill shape
                  '&:hover': {
                    backgroundColor: '#F8F9FA',
                    borderColor: '#1976d2',
                    color: '#1976d2',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  },
                  minHeight: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease-in-out'
                }}
              >
                {range.label}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PriceRangeSectionExact;