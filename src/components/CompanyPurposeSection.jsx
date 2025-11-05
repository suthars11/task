import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Palette as ArtIcon } from '@mui/icons-material';

const CompanyPurposeSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleButtonClick = (action) => {
    // Google Analytics tracking
    console.log('GA Event:', {
      category: 'HomePageCompanyPurpose',
      action: 'Click',
      label: action
    });
  };

  return (
    <Box
      component="section"
      sx={{
        py: 8,
        backgroundColor: '#fff9c4',
        [theme.breakpoints.up('md')]: {
          py: 12
        }
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'flex-start',
            gap: 6
          }}
        >
          {/* Text Content - LEFT SIDE */}
          <Box
            sx={{
              flex: 7,
              width: '100%'
            }}
          >
            <Box>
              {/* Icon */}
              <ArtIcon
                sx={{
                  fontSize: 40,
                  color: '#0b08c8',
                  mb: 3
                }}
              />

              {/* Main Title */}
              <Typography
                variant="h3"
                component="h1"
                sx={{
                  color: '#0b08c8',
                  fontWeight: 700,
                  fontSize: { xs: '2rem', md: '2.5rem', lg: '2.75rem' },
                  lineHeight: 1.2,
                  mb: 4
                }}
              >
                Discover and Sell Art Online with Singulart
              </Typography>

              {/* Main Description Paragraphs */}
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#0b08c8',
                    fontSize: '1.125rem',
                    lineHeight: 1.6,
                    mb: 3
                  }}
                >
                  At Singulart, we believe every space deserves art as unique as the people who inhabit it. As the leading <strong>online art gallery</strong>, we make it easy and joyful to <strong>buy art online</strong> or <strong>sell art online</strong> —connecting a global community of <strong>art collectors</strong> and <strong>contemporary artists</strong>.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: '#0b08c8',
                    fontSize: '1.125rem',
                    lineHeight: 1.6,
                    mb: 3
                  }}
                >
                  Whether you're discovering your first piece of <strong>art for sale</strong> or offering your latest creation, we bring art lovers and artists together through thoughtful curation, powerful tools, and trusted global support.
                </Typography>
              </Box>

              {/* For Clients Section */}
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{
                    color: '#0b08c8',
                    fontWeight: 600,
                    fontSize: '1.25rem',
                    mb: 1
                  }}
                >
                  For clients
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#0b08c8',
                    fontSize: '1.1rem',
                    lineHeight: 1.6,
                    mb: 3
                  }}
                >
                  We offer expert guidance and personalised recommendations to help you find <strong>original art for sale</strong> that reflects your style, space, and story.
                </Typography>
              </Box>

              {/* For Artists Section */}
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{
                    color: '#0b08c8',
                    fontWeight: 600,
                    fontSize: '1.25rem',
                    mb: 1
                  }}
                >
                  For artists
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#0b08c8',
                    fontSize: '1.1rem',
                    lineHeight: 1.6,
                    mb: 3
                  }}
                >
                  We provide everything you need to <strong>sell art online</strong> with confidence—international exposure, marketing support, and the freedom to focus on creating.
                </Typography>
              </Box>

              {/* Join Section */}
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#0b08c8',
                    fontWeight: 600,
                    fontSize: '1.25rem',
                    lineHeight: 1.6
                  }}
                >
                  Join Singulart and become part of a diverse and creative community—where art is more than decoration, it's self-expression.
                </Typography>
              </Box>

              {/* Action Buttons */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2,
                  alignItems: { xs: 'stretch', sm: 'flex-start' }
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  href="/en/painting"
                  onClick={() => handleButtonClick('DiscoverArt')}
                  sx={{
                    py: 1.5,
                    px: 4,
                    backgroundColor: '#0b08c8',
                    color: '#ffffff',
                    fontSize: '1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    borderRadius: 2,
                    '&:hover': {
                      backgroundColor: '#0906a8'
                    },
                    minWidth: '140px'
                  }}
                >
                  Explore art
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  href="/en/application"
                  onClick={() => handleButtonClick('SellMyArt')}
                  sx={{
                    py: 1.5,
                    px: 4,
                    borderColor: '#0b08c8',
                    color: '#0b08c8',
                    fontSize: '1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    borderRadius: 2,
                    '&:hover': {
                      backgroundColor: '#0b08c8',
                      color: '#ffffff',
                      borderColor: '#0b08c8'
                    },
                    minWidth: '140px'
                  }}
                >
                  Sell Your Art
                </Button>
              </Box>
            </Box>
          </Box>

          {/* Image - RIGHT SIDE */}
          <Box
            sx={{
              flex: 5,
              width: '100%'
            }}
          >
            <Box
              sx={{
                height: { xs: '300px', md: '500px', lg: '600px' },
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: 3
              }}
            >
              <img
                src="https://www.singulart.com/assets/assets/build/images/modules/homepage/homepage-company-purpose/company-purpose.73756503.png"
                alt="Discover and sell art online with Singulart"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '12px'
                }}
                loading="lazy"
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CompanyPurposeSection;