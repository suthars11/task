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
import { styled } from '@mui/material/styles';

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

const CategoryTilesList = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '1.6rem',
  marginBottom: theme.spacing(6),
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
}));

const CategoryTile = styled(Box)(({ theme, bgcolor }) => ({
  backgroundColor: bgcolor || '#FFF8F2',
  borderRadius: '0.8rem',
  color: '#1A0A3E',
  overflow: 'hidden',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    borderRadius: '1.2rem',
  },
}));

const CategoryTileLink = styled('a')(({ theme }) => ({
  aspectRatio: '2/1',
  display: 'block',
  padding: '1.2rem',
  textDecoration: 'none',
  color: 'inherit',
  position: 'relative',
  zIndex: 2,
  [theme.breakpoints.up('md')]: {
    padding: '1.6rem',
  },
}));

const CategoryTitle = styled(Typography)(({ theme }) => ({
  position: 'relative',
  width: '80%',
  zIndex: 2,
  fontSize: '1.1rem',
  fontWeight: 600,
  marginBottom: 0,
  [theme.breakpoints.up('xl')]: {
    width: '58%',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.2rem',
  },
}));

const ImageWrapper = styled(Box)(({ theme, type }) => ({
  aspectRatio: '1',
  borderRadius: '0.8rem',
  display: 'block',
  overflow: 'hidden',
  position: 'absolute',
  width: '43%',
  ...(type === 'first' && {
    bottom: '-15%',
    right: '-14%',
    transform: 'rotate(-6.45deg)',
    zIndex: 1,
    boxShadow: 'rgba(0, 0, 0, 0.2) 0 1px 12px 0, rgba(0, 0, 0, 0.2) 0 2px 4px 0',
  }),
  ...(type === 'last' && {
    bottom: '-32%',
    right: '-3%',
    transform: 'rotate(-15.22deg)',
    zIndex: 0,
    boxShadow: 'rgba(0, 0, 0, 0.2) 0 1px 12px 0',
  }),
  [theme.breakpoints.up('md')]: {
    borderRadius: '1.2rem',
    width: '41%',
    ...(type === 'first' && {
      bottom: '-19%',
      right: '-14%',
    }),
    ...(type === 'last' && {
      bottom: '-31%',
      right: '-5%',
    }),
  },
  [theme.breakpoints.up('lg')]: {
    width: '44%',
    ...(type === 'first' && {
      bottom: '-8%',
      right: '-7%',
    }),
    ...(type === 'last' && {
      bottom: '-18%',
      right: '0%',
    }),
  },
}));

const CategoryImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
});

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

// Main component
const CategoryTilesSection1 = () => {
  const theme = useTheme();

  const categories = [
    {
      id: 1,
      title: 'Abstract',
      href: 'https://www.singulart.com/en/painting/abstract',
      bgColor: '#F8F2FF', // brand purple
      firstImage: 'https://www.singulart.com/images/category-tile/pictures/cropped/default/070d9215-b607-425d-8c14-2ac176e196ce_e9de9cdf5fcea7cd44193f820cd426d4.jpeg',
      lastImage: 'https://www.singulart.com/images/category-tile/pictures/cropped/default/070d9215-b607-425d-8c14-2ac176e196ce_eda7808b4332415ce524481cce0efbb8.jpeg',
      gaLabel: 'abstract-category-tiles',
      gaName: 'abstract-category-tiles'
    },
    {
      id: 2,
      title: 'Landscapes',
      href: 'https://www.singulart.com/en/painting/landscape',
      bgColor: '#FFFCE6', // brand yellow
      firstImage: 'https://www.singulart.com/images/category-tile/pictures/cropped/default/4d756f8f-53f0-4a74-9ed4-481ca51bbedb_e582e99d25c2aa843e09e34932a85dbc.jpeg',
      lastImage: 'https://www.singulart.com/images/category-tile/pictures/cropped/default/4d756f8f-53f0-4a74-9ed4-481ca51bbedb_6e79e31c77b7f5e74fbb19c5e550a26e.jpeg',
      gaLabel: 'landscape-category-tiles',
      gaName: 'landscape-category-tiles'
    },
    {
      id: 3,
      title: 'Portraits',
      href: 'https://www.singulart.com/en/painting/portrait',
      bgColor: '#F9F9F9', // light
      firstImage: 'https://www.singulart.com/images/category-tile/pictures/cropped/default/6e3cc9bf-1a63-4740-9f79-fcd5377e8f0f_ef5887d1fb8507e17a8e6588f3ec7f7d.jpeg',
      lastImage: 'https://www.singulart.com/images/category-tile/pictures/cropped/default/6e3cc9bf-1a63-4740-9f79-fcd5377e8f0f_356df6b20756aae0d3b7a405ebc2b0b4.jpeg',
      gaLabel: 'portraits-category-tiles',
      gaName: 'portraits-category-tiles'
    },
    {
      id: 4,
      title: 'Large paintings',
      href: 'https://www.singulart.com/en/painting?size=large',
      bgColor: '#F9F9F9', // light
      firstImage: 'https://www.singulart.com/images/category-tile/pictures/cropped/default/7ff4200d-8f71-4f3a-a8e2-f8f448a303f3_2aa9edea04c13b30830de545bbf40e32.jpeg',
      lastImage: 'https://www.singulart.com/images/category-tile/pictures/cropped/default/7ff4200d-8f71-4f3a-a8e2-f8f448a303f3_8383c2743bd66c3ef578787eec2f14a3.jpeg',
      gaLabel: 'large-paintings-category-tiles',
      gaName: 'large-paintings-category-tiles'
    },
    {
      id: 5,
      title: 'Special deals',
      href: 'https://www.singulart.com/en/our-artworks?isDiscountExclusive=true',
      bgColor: '#FFF8F2', // brand orange
      firstImage: 'https://www.singulart.com/images/category-tile/pictures/cropped/default/93bc48d8-33be-4bf3-aa18-403b15d64010_696a4546f343363fc09e0f8c6ef4673d.jpeg',
      lastImage: 'https://www.singulart.com/images/category-tile/pictures/cropped/default/93bc48d8-33be-4bf3-aa18-403b15d64010_dc05e1668b2d81058fa0b6f091fa5855.jpeg',
      gaLabel: 'special-deals-category-tiles',
      gaName: 'special-deals-category-tiles'
    },
    {
      id: 6,
      title: 'Best-selling artists',
      href: 'https://www.singulart.com/en/our-artworks?highlightedBadge=best_seller',
      bgColor: '#FFFCE6', // brand yellow
      firstImage: 'https://www.singulart.com/images/category-tile/pictures/cropped/default/dffabe02-323d-4216-b84b-e70a47c5ecd1_de830d869c0cfab64dc57c86f58a7f49.jpeg',
      lastImage: 'https://www.singulart.com/images/category-tile/pictures/cropped/default/dffabe02-323d-4216-b84b-e70a47c5ecd1_0cfcef0c6272d15fbdf809b600db2156.jpeg',
      gaLabel: 'best-selling-category-tiles',
      gaName: 'best-selling-category-tiles'
    },
    {
      id: 7,
      title: 'Famous artists',
      href: 'https://www.singulart.com/en/our-artworks?highlightedBadge=grand_artists',
      bgColor: '#F8F2FF', // brand purple
      firstImage: 'https://www.singulart.com/images/category-tile/pictures/cropped/default/d5b2447a-7833-4a9c-9d74-4ff76b091426_7da483eaf6b5e97438b3d970408d575a.jpeg',
      lastImage: 'https://www.singulart.com/images/category-tile/pictures/cropped/default/d5b2447a-7833-4a9c-9d74-4ff76b091426_a598806346e779d6dfe09e777991c2c6.jpeg',
      gaLabel: 'famousartists-category-tiles',
      gaName: 'famousartists-category-tiles'
    },
    {
      id: 8,
      title: 'Just sold',
      href: 'https://www.singulart.com/en/just-sold',
      bgColor: '#FFFCE6', // brand yellow
      firstImage: 'https://www.singulart.com/images/category-tile/pictures/cropped/default/0666e133-ed8c-4d66-a4e7-e479fad94280_b33b41a4e376ebf27cf2fe3c311de3a9.jpeg',
      lastImage: 'https://www.singulart.com/images/category-tile/pictures/cropped/default/0666e133-ed8c-4d66-a4e7-e479fad94280_8acf4a601809c01b893c9c746cd68417.jpeg',
      gaLabel: 'just-sold-category-tiles',
      gaName: 'just-sold-category-tiles'
    }
  ];

  const handleCategoryClick = (category) => {
    // Google Analytics tracking
    if (window.gtag) {
      window.gtag('event', 'ClickCategory', {
        event_category: 'HomepageClicks',
        event_label: category.gaLabel,
        value: category.gaName
      });
    }
  };

  return (
    <SectionContainer 
      id="category-tiles-section"
      className="page-section scroll-target homepage-section"
    >
      <Container className="container">
        {/* Header */}
        <SectionHeader>
          <SectionIcon className="page-section__icon">
            <svg
              viewBox="0 0 40 40"
              width={40}
              height={40}
              className="icon"
              aria-hidden="true"
            >
              <use href="https://www.singulart.com/assets/assets/build/images/components/atoms/icons/icon-global-defs.d84972f4.svg#icon-global-highlight" />
            </svg>
          </SectionIcon>
          <div className="page-section__header">
            <SectionTitle variant="h2" component="h2" className="page-section__title heading--l">
              Artworks for sale by category
            </SectionTitle>
          </div>
          <SectionDescription variant="body1" component="p" className="heading--s text--secondary mt-3xs">
            Whatever your taste, style, or mood, find original art you love in these popular categories
          </SectionDescription>
        </SectionHeader>

        {/* Category Tiles */}
        <Box className="page-section__body">
          <CategoryTilesList 
            className="category-tiles-list category-tiles-list--homepage"
            data-controller="categoryTilesList"
          >
            {categories.map((category) => (
              <CategoryTile 
                key={category.id}
                className="category-tile"
                bgcolor={category.bgColor}
              >
                <CategoryTileLink
                  href={category.href}
                  className="category-tile__link js-track-artwork js-track-artwork-link"
                  data-ga-category="HomepageClicks"
                  data-ga-c="ClickCategory"
                  data-ga-l={category.gaLabel}
                  data-gal="browse-hp-categories"
                  data-ga-name={category.gaName}
                  onClick={() => handleCategoryClick(category)}
                >
                  <CategoryTitle variant="h3" component="h3" className="body--l lg:heading--s category-tile__title">
                    {category.title}
                  </CategoryTitle>

                  {/* First Image */}
                  <ImageWrapper 
                    type="first"
                    className="category-tile__image-wrapper category-tile__image-wrapper--first"
                  >
                    <CategoryImage
                      className="category-tile__image loaded"
                      src={category.firstImage}
                      alt={category.title}
                      loading="lazy"
                      data-initialized="true"
                    />
                  </ImageWrapper>

                  {/* Last Image */}
                  <ImageWrapper 
                    type="last"
                    className="category-tile__image-wrapper category-tile__image-wrapper--last"
                  >
                    <CategoryImage
                      className="category-tile__image loaded"
                      src={category.lastImage}
                      alt={category.title}
                      loading="lazy"
                      data-initialized="true"
                    />
                  </ImageWrapper>
                </CategoryTileLink>
              </CategoryTile>
            ))}
          </CategoryTilesList>
        </Box>

        {/* Footer */}
        <Box className="page-section__footer container" sx={{ textAlign: 'center' }}>
          <ExploreButton
            variant="outlined"
            href="/en/our-artworks"
            className="button button--outlined-brand button--large ga"
            data-ga-c="click_all_categories"
          >
            Explore all categories
          </ExploreButton>
        </Box>
      </Container>
    </SectionContainer>
  );
};

export default CategoryTilesSection1;