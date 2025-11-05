import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Typography,
  Button,
  Container,
  useTheme,
  useMediaQuery,
  Card,
  CardMedia,
  CardContent,
  LinearProgress,
  IconButton
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// Styled components
const HeroGridContainer = styled(Box)(({ theme }) => ({
  marginBottom: '3.2rem',
  [theme.breakpoints.down('sm')]: {
    marginLeft: `calc(var(--container-padding) * -1)`,
    marginRight: `calc(var(--container-padding) * -1)`,
  },
  [theme.breakpoints.up('md')]: {
    marginBottom: '4rem',
    marginTop: '2rem',
  },
}));

const HeroGridList = styled(Box)(({ theme }) => ({
  height: '60vh',
  maxHeight: '74rem',
  minHeight: '34rem',
  overflow: 'hidden',
  [theme.breakpoints.up('md')]: {
    display: 'grid',
    gridTemplateAreas: '"First Second" "First Third"',
    gridTemplateColumns: 'calc(50% - 0.8rem) calc(50% - 0.8rem)',
    gridTemplateRows: 'repeat(2, 1fr)',
    gap: '1.6rem 2rem',
    maxHeight: '46rem',
    position: 'relative',
  },
  [theme.breakpoints.up('lg')]: {
    height: '63.5vh',
    maxHeight: '74rem',
    minHeight: '48rem',
  },
}));

const HeroSlide = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    height: '100%',
    width: 'auto',
    '&:first-of-type': {
      alignSelf: 'start',
      gridArea: 'First',
    },
    '&:nth-of-type(2)': {
      gridArea: 'Second',
    },
    '&:nth-of-type(3)': {
      gridArea: 'Third',
    },
  },
}));

const HeroGridItem = styled(Card)(({ theme, isFirst }) => ({
  height: '100%',
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    background: 'linear-gradient(180deg, transparent 40%, rgba(0, 0, 0, 0.6) 100%)',
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1,
    [theme.breakpoints.up('md')]: {
      borderRadius: '1.6rem',
      overflow: 'hidden',
      ...(!isFirst && {
        display: 'none',
      }),
    },
  },
  [theme.breakpoints.up('md')]: {
    borderRadius: '1.6rem',
    ...(!isFirst && {
      display: 'flex',
      '&:hover .hero-link': {
        color: theme.palette.primary.main,
      },
    }),
  },
}));

const HeroImageWrapper = styled(Box)(({ theme }) => ({
  display: 'block',
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    height: '60vh',
    maxHeight: '74rem',
    minHeight: '34rem',
  },
  [theme.breakpoints.up('md')]: {
    borderRadius: '1.6rem',
    flex: '0 0 calc(50% - 1rem)',
    overflow: 'hidden',
  },
}));

const HeroContent = styled(Box)(({ theme, isFirst }) => ({
  [theme.breakpoints.down('sm')]: {
    alignItems: 'flex-start',
    bottom: 0,
    color: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'flex-end',
    left: 0,
    padding: '2rem 1.6rem',
    position: 'absolute',
    width: '100%',
    zIndex: 2,
  },
  [theme.breakpoints.up('md')]: {
    marginTop: 0,
    paddingLeft: '1.6rem',
    ...(isFirst && {
      alignItems: 'flex-start',
      bottom: 0,
      color: theme.palette.common.white,
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'flex-end',
      left: 0,
      padding: '1.6rem',
      position: 'absolute',
      width: '100%',
      zIndex: 2,
      [theme.breakpoints.up('lg')]: {
        padding: '2rem',
      },
    }),
  },
}));

const HeroButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  maxWidth: '100%',
  textTransform: 'none',
  [theme.breakpoints.down('sm')]: {
    color: theme.palette.common.white,
    '&:hover': {
      color: theme.palette.common.white,
    },
  },
}));

const Indicators = styled(Typography)(({ theme }) => ({
  bottom: '4.8rem',
  color: theme.palette.common.white,
  pointerEvents: 'none',
  position: 'absolute',
  right: '2rem',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

const ProgressContainer = styled(Box)(({ theme }) => ({
  background: 'rgba(0, 0, 0, 0.2)',
  display: 'flex',
  margin: '2.4rem auto 0',
  width: '9rem',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

// Main component
const HomepageHeroGrid = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Buy art from the world's best artists",
      description: "Bienvenue to Singulart. Discover bold, inspiring creations to elevate your space—curated just for you",
      surtitle: "",
      buttonText: "Start discovering",
      href: "https://www.singulart.com/en/our-artworks",
      image: {
        mobile: "https://www.singulart.com/images/brand-banner/pictures/cropped/mobile/107_mobile_1028d08a3b801e53c40b22d3ea5972f1.jpeg",
        desktop: "https://www.singulart.com/images/brand-banner/pictures/cropped/mobile/107_mobile_1028d08a3b801e53c40b22d3ea5972f1.jpeg"
      },
      isFirst: true
    },
    {
      id: 2,
      title: "Our best abstract paintings",
      description: "Experience emotion, movement, and imagination through the art of abstraction",
      surtitle: "Collection",
      buttonText: "Discover the artworks",
      href: "https://www.singulart.com/en/collection/our-best-abstract-paintings-18",
      image: {
        mobile: "https://www.singulart.com/images/brand-banner/pictures/cropped/mobile/128_mobile_340a0bafed64662d914dbc027dc95bae.jpeg",
        desktop: "https://www.singulart.com/images/brand-banner/pictures/cropped/mobile/128_mobile_340a0bafed64662d914dbc027dc95bae.jpeg"
      },
      isFirst: false
    },
    {
      id: 3,
      title: "Limited-time deals — up to 50% off",
      description: "Elevate your collection with original artworks at exceptional prices",
      surtitle: "Special deals on Singulart",
      buttonText: "Shop special deals",
      href: "https://www.singulart.com/en/our-artworks?isDiscountExclusive=true",
      image: {
        mobile: "https://www.singulart.com/images/brand-banner/pictures/cropped/mobile/127_mobile_fc7c10f7ca0dff2ead0cb817e2139a8e.jpeg",
        desktop: "https://www.singulart.com/images/brand-banner/pictures/cropped/mobile/127_mobile_fc7c10f7ca0dff2ead0cb817e2139a8e.jpeg"
      },
      isFirst: false
    }
  ];

  // Auto-advance carousel for mobile
  useEffect(() => {
    if (!isMobile) return;

    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
      setProgress(0);
    }, 5000);

    const progressTimer = setInterval(() => {
      setProgress((prev) => Math.min(prev + 100 / 50, 100)); // 5 seconds total
    }, 100);

    return () => {
      clearInterval(timer);
      clearInterval(progressTimer);
    };
  }, [isMobile, slides.length]);

  const renderSlide = (slide, index) => (
    <HeroSlide key={slide.id}>
      <HeroGridItem isFirst={slide.isFirst}>
        <HeroImageWrapper>
          <CardMedia
            component="img"
            image={isMobile ? slide.image.mobile : slide.image.desktop}
            alt={slide.title}
            sx={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              ...(slide.isFirst && {
                [theme.breakpoints.up('md')]: {
                  height: '30vh',
                  maxHeight: '52rem',
                  minHeight: '46rem',
                  [theme.breakpoints.up('lg')]: {
                    height: '100%',
                    maxHeight: 'none',
                    minHeight: 'auto',
                  },
                },
              }),
            }}
          />
        </HeroImageWrapper>
        
        <HeroContent isFirst={slide.isFirst}>
          {slide.surtitle && (
            <Typography 
              variant="subtitle2" 
              sx={{ 
                marginBottom: { xs: '1.2rem', md: slide.isFirst ? '0.8rem' : '1.2rem' },
                color: 'inherit',
                fontWeight: 500
              }}
            >
              {slide.surtitle}
            </Typography>
          )}
          
          <Typography 
            variant={slide.isFirst ? "h1" : "h2"}
            sx={{
              marginBottom: '1.2rem',
              color: 'inherit',
              textWrap: slide.isFirst ? 'pretty' : 'normal',
              fontSize: {
                xs: 'var(--heading-mobile-s-font-size)',
                md: slide.isFirst ? 'var(--heading-desktop-l-font-size)' : 'var(--heading-desktop-m-font-size)',
                lg: slide.isFirst ? 'var(--display-desktop-s-font-size)' : 'var(--heading-desktop-l-font-size)'
              },
              fontWeight: slide.isFirst ? 700 : 600,
              lineHeight: {
                xs: 'var(--heading-mobile-s-line-height)',
                md: slide.isFirst ? 'var(--heading-desktop-l-line-height)' : 'var(--heading-desktop-m-line-height)',
                lg: slide.isFirst ? 'var(--display-desktop-s-line-height)' : 'var(--heading-desktop-l-line-height)'
              }
            }}
          >
            {slide.title}
          </Typography>
          
          <Typography 
            variant="body1"
            sx={{
              marginBottom: '1.2rem',
              color: 'inherit',
              fontSize: {
                xs: 'var(--heading-mobile-s-font-size)',
                md: slide.isFirst ? 'var(--heading-desktop-s-font-size)' : 'var(--body-desktop-l-font-size)'
              },
              lineHeight: {
                xs: 'var(--heading-mobile-s-line-height)',
                md: slide.isFirst ? 'var(--heading-desktop-s-line-height)' : 'var(--body-desktop-l-line-height)'
              },
              maxHeight: { xs: '7.2rem', md: 'auto' },
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical'
            }}
          >
            {slide.description}
          </Typography>
          
          <HeroButton
            href={slide.href}
            className="hero-link"
            endIcon={<ArrowForward />}
            sx={{
              color: slide.isFirst ? 'common.white' : 'text.primary'
            }}
          >
            {slide.buttonText}
          </HeroButton>
        </HeroContent>
      </HeroGridItem>
    </HeroSlide>
  );

  return (
    <Box data-testid="homepageHeroGrid">
      <Container>
        <HeroGridContainer>
          <HeroGridList>
            {isMobile ? (
              // Mobile carousel view - show only active slide
              <Box sx={{ position: 'relative', height: '100%' }}>
                {slides.map((slide, index) => (
                  <Box
                    key={slide.id}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      opacity: index === activeSlide ? 1 : 0,
                      transition: 'opacity 0.5s ease-in-out'
                    }}
                  >
                    {renderSlide(slide, index)}
                  </Box>
                ))}
                
                <Indicators variant="body2">
                  {activeSlide + 1} / {slides.length}
                </Indicators>
              </Box>
            ) : (
              // Desktop grid view - show all slides
              slides.map(renderSlide)
            )}
          </HeroGridList>

          {isMobile && (
            <ProgressContainer>
              <LinearProgress 
                variant="determinate" 
                value={progress} 
                sx={{ 
                  width: '100%',
                  height: '0.2rem',
                  backgroundColor: 'transparent',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: 'common.black'
                  }
                }}
              />
            </ProgressContainer>
          )}
        </HeroGridContainer>
      </Container>
    </Box>
  );
};

export default HomepageHeroGrid;