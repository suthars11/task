import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Styled components to match the original design
const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: '#ffffff',
}));

const SectionHeader = styled(Box)(({ theme }) => ({
  textAlign: 'left',
  marginBottom: theme.spacing(6),
}));

const SectionIcon = styled(Box)(({ theme }) => ({
  width: 40,
  height: 40,
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main,
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 700,
  color: '#1A0A3E',
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    fontSize: '1.75rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
}));

const SectionDescription = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  color: '#666666',
  lineHeight: 1.6,
  marginTop: theme.spacing(1),
}));

const CarouselContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  '& .slick-slider': {
    position: 'relative',
    display: 'block',
    boxSizing: 'border-box',
  },
  '& .slick-list': {
    position: 'relative',
    display: 'block',
    overflow: 'hidden',
    margin: '0 -8px',
    [theme.breakpoints.up('md')]: {
      margin: 0,
      overflow: 'visible',
    },
  },
  '& .slick-track': {
    display: 'flex',
    alignItems: 'stretch',
  },
  '& .slick-slide': {
    height: 'auto',
    padding: '0 8px',
    '& > div': {
      height: '100%',
    },
    [theme.breakpoints.up('md')]: {
      padding: 0,
    },
  },
}));

const CollectionItem = styled('a')(({ theme }) => ({
  display: 'block',
  textDecoration: 'none',
  color: 'inherit',
  borderRadius: '12px',
  overflow: 'hidden',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  height: '100%',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
  },
}));

const CollectionImageWrapper = styled(Box)({
  position: 'relative',
  width: '100%',
  height: 0,
  paddingBottom: '125%', // 4:5 aspect ratio
  overflow: 'hidden',
  borderRadius: '12px',
});

const CollectionImage = styled('img')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const CollectionContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  backgroundColor: '#ffffff',
}));

const CollectionSubheadline = styled(Typography)(({ theme }) => ({
  fontSize: '0.875rem',
  color: '#666666',
  marginBottom: theme.spacing(0.5),
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  fontWeight: 500,
}));

const CollectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: 600,
  color: '#1A0A3E',
  lineHeight: 1.3,
}));

const ExploreButton = styled(Button)(({ theme }) => ({
  border: '2px solid #1A0A3E',
  color: '#1A0A3E',
  backgroundColor: 'transparent',
  padding: theme.spacing(1, 4),
  fontSize: '1rem',
  fontWeight: 600,
  borderRadius: '4px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#1A0A3E',
    color: '#ffffff',
    border: '2px solid #1A0A3E',
  },
}));

// Custom Arrow Components for Mobile
const MobileArrow = styled(Box)(({ theme }) => ({
  width: 40,
  height: 40,
  border: '1px solid #E0E0E0',
  backgroundColor: '#ffffff',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 1,
  '&:hover': {
    backgroundColor: '#F5F5F5',
  },
  '&.slick-disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  [theme.breakpoints.up('md')]: {
    display: 'none !important',
  },
}));

const MobilePrevArrow = ({ onClick, currentSlide }) => {
  return (
    <MobileArrow
      className={currentSlide === 0 ? 'slick-disabled' : ''}
      onClick={onClick}
      sx={{ left: 10 }}
    >
      <svg viewBox="0 0 24 24" width={20} height={20}>
        <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
      </svg>
    </MobileArrow>
  );
};

const MobileNextArrow = ({ onClick, currentSlide, slideCount }) => {
  return (
    <MobileArrow
      className={currentSlide === slideCount - 1 ? 'slick-disabled' : ''}
      onClick={onClick}
      sx={{ right: 10 }}
    >
      <svg viewBox="0 0 24 24" width={48} height={20}>
        <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
      </svg>
    </MobileArrow>
  );
};

// Desktop Arrow Components
const DesktopArrow = styled(Box)(({ theme }) => ({
  width: 48,
  height: 48,
  border: '1px solid #E0E0E0',
  backgroundColor: '#ffffff',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  position: 'absolute',
  top: '40%',
  transform: 'translateY(-50%)',
  zIndex: 1,
  '&:hover': {
    backgroundColor: '#F5F5F5',
  },
  '&.slick-disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  [theme.breakpoints.down('md')]: {
    display: 'none !important',
  },
}));

const DesktopPrevArrow = ({ onClick, currentSlide }) => {
  return (
    <DesktopArrow
      className={currentSlide === 0 ? 'slick-disabled' : ''}
      onClick={onClick}
      sx={{ left: -60 }}
    >
      <svg viewBox="0 0 24 24" width={24} height={24}>
        <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
      </svg>
    </DesktopArrow>
  );
};

const DesktopNextArrow = ({ onClick, currentSlide, slideCount }) => {
  return (
    <DesktopArrow
      className={currentSlide === slideCount - 1 ? 'slick-disabled' : ''}
      onClick={onClick}
      sx={{ right: -60 }}
    >
      <svg viewBox="0 0 24 24" width={24} height={24}>
        <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
      </svg>
    </DesktopArrow>
  );
};

// Main component
const FeaturedCollectionsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const collections = [
    {
      id: 1,
      title: 'Artful autumn - curation by Lynn Mandeau',
      subtitle: 'By gallery curation',
      href: '/en/collection/artful-autumn-curation-by-lynn-mandeau-25589',
      image: 'https://www.singulart.com/images/collections/v2/pictures/cropped/list/base/25589_list_6d45d50ff2c940b87d93e0c06002513d.jpeg',
      gaLabel: '25589',
      gaName: 'collection-25589'
    },
    {
      id: 2,
      title: 'Modern mythology',
      subtitle: 'By recreations',
      href: '/en/collection/modern-mythology-22463',
      image: 'https://www.singulart.com/images/collections/v2/pictures/cropped/list/base/22463_list_577f74f1852c6f9bdb2c92edbd0ddd4f.jpeg',
      gaLabel: '22463',
      gaName: 'collection-22463'
    },
    {
      id: 3,
      title: 'Rest in motion',
      subtitle: 'By moods',
      href: '/en/collection/rest-in-motion-26973',
      image: 'https://www.singulart.com/images/collections/v2/pictures/cropped/list/base/26973_list_98b4dd5c526cdf56af00fa40467729a8.jpeg',
      gaLabel: '26973',
      gaName: 'collection-26973'
    },
    {
      id: 4,
      title: 'Industrial minimalist',
      subtitle: 'By interior design',
      href: '/en/collection/industrial-minimalist-7328',
      image: 'https://www.singulart.com/images/collections/v2/pictures/cropped/list/base/7328_list_1e3d7a6d546b45c9d8822d879ebbce8e.jpeg',
      gaLabel: '7328',
      gaName: 'collection-7328'
    },
    {
      id: 5,
      title: 'Our best abstract paintings',
      subtitle: 'By art movements',
      href: '/en/collection/our-best-abstract-paintings-18',
      image: 'https://www.singulart.com/images/collections/v2/pictures/cropped/list/base/18_list_f3b17049c5031b0a99f76012ac69d483.jpeg',
      gaLabel: '18',
      gaName: 'collection-18'
    },
    {
      id: 6,
      title: 'Turquoise',
      subtitle: 'By colors',
      href: '/en/collection/turquoise-21904',
      image: 'https://www.singulart.com/images/collections/v2/pictures/cropped/list/base/21904_list_68add0e3f2ba83c1fb534e6fb0331e3a.jpeg',
      gaLabel: '21904',
      gaName: 'collection-21904'
    },
    {
      id: 7,
      title: 'Inspired by Joan Mitchell',
      subtitle: 'By recreations',
      href: '/en/collection/inspired-by-joan-mitchell-21587',
      image: 'https://www.singulart.com/images/collections/v2/pictures/cropped/list/base/21587_list_09fef53a7ae9bf1d5b53b1153c417fd9.jpeg',
      gaLabel: '21587',
      gaName: 'collection-21587'
    },
    {
      id: 8,
      title: 'Inspired by Neo-Memphis design',
      subtitle: 'By interior design',
      href: '/en/collection/inspired-by-neo-memphis-design-21197',
      image: 'https://www.singulart.com/images/collections/v2/pictures/cropped/list/base/21197_list_cf2837037c4d6ebc09b7a0c763813e4d.jpeg',
      gaLabel: '21197',
      gaName: 'collection-21197'
    }
  ];

  // Slick slider settings - Mobile पर भी slide होगा
  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4, // Desktop पर 4 images
    slidesToScroll: 4, // Desktop पर 4 slides scroll
    initialSlide: 0,
    prevArrow: isMobile ? <MobilePrevArrow /> : <DesktopPrevArrow />,
    nextArrow: isMobile ? <MobileNextArrow /> : <DesktopNextArrow />,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg, // 1200px
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          arrows: true,
        }
      },
      {
        breakpoint: theme.breakpoints.values.md, // 900px
        settings: {
          slidesToShow: 2, // Tablet पर 2 images
          slidesToScroll: 2,
          arrows: true,
        }
      },
      {
        breakpoint: theme.breakpoints.values.sm, // 600px
        settings: {
          slidesToShow: 1, // Mobile पर 1 image
          slidesToScroll: 1,
          arrows: true, // Mobile पर arrows show
          centerMode: true, // Center mode on for better mobile view
          centerPadding: '40px', // Padding for centered slide
        }
      }
    ]
  };

  const handleCollectionClick = (collection) => {
    // Google Analytics tracking
    if (window.gtag) {
      window.gtag('event', 'CuratedCollectionClick', {
        event_category: 'HomepageClicks',
        event_label: collection.gaLabel,
        value: collection.gaName
      });
    }
  };

  return (
    <SectionContainer className="page-section homepage-section">
      <Container>
        {/* Header */}
        <SectionHeader className="container">
          <SectionIcon className="page-section__icon">
            <svg
              viewBox="0 0 40 40"
              width={40}
              height={40}
              fill="#1976d2"
              aria-hidden="true"
            >
              <path d="M20 8C13.4 8 8 13.4 8 20s5.4 12 12 12 12-5.4 12-12S26.6 8 20 8zm0 22c-5.5 0-10-4.5-10-10S14.5 10 20 10s10 4.5 10 10-4.5 10-10 10z"/>
              <path d="M25 15l-5 5-5-5-1.4 1.4 5 5-5 5 1.4 1.4 5-5 5 5 1.4-1.4-5-5 5-5z"/>
            </svg>
          </SectionIcon>
          
          <div className="page-section__header">
            <SectionTitle variant="h2" component="h2" className="page-section__title heading--l">
              Featured collections
            </SectionTitle>
          </div>

          <SectionDescription variant="body1" component="p" className="heading--s text--secondary mt-3xs">
            Art just for you, curated by theme, style, movement or color
          </SectionDescription>
        </SectionHeader>

        {/* Carousel */}
        <Box className="page-section__body container">
          <Box>
            <CarouselContainer 
              className="carousel carousel--with-margins carousel--with-stage-padding carousel--no-stage-padding-desktop curated-collections"
            >
              <Slider {...sliderSettings}>
                {collections.map((collection) => (
                  <Box key={collection.id} sx={{ px: 1 }}>
                    <CollectionItem
                      href={collection.href}
                      className="curated-collections-item js-track-artwork js-track-artwork-link"
                      onClick={() => handleCollectionClick(collection)}
                    >
                      <CollectionImageWrapper className="curated-collections-item__image_wrapper">
                        <CollectionImage
                          className="curated-collections-item__image loaded"
                          src={collection.image}
                          alt={collection.title}
                          loading="lazy"
                        />
                      </CollectionImageWrapper>
                      
                      <CollectionContent className="curated-collections-item__content">
                        <CollectionSubheadline className="body--subheadline mb-5xs">
                          {collection.subtitle}
                        </CollectionSubheadline>
                        <CollectionTitle variant="h3" component="h3" className="heading--m text--center">
                          {collection.title}
                        </CollectionTitle>
                      </CollectionContent>
                    </CollectionItem>
                  </Box>
                ))}
              </Slider>
            </CarouselContainer>
          </Box>
        </Box>

        {/* Footer */}
        <Box className="page-section__footer container" sx={{ textAlign: 'center', mt: 4 }}>
          <ExploreButton
            variant="outlined"
            href="/en/collections"
            className="button button--outlined-brand button--large"
          >
            Explore all collections
          </ExploreButton>
        </Box>
      </Container>
    </SectionContainer>
  );
};

export default FeaturedCollectionsSection;