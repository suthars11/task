import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components based on your CSS
const CategoryTileWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: 'var(--background-brand-orange)',
  borderRadius: '0.8rem',
  color: 'var(--text-brand-blue)',
  overflow: 'hidden',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    borderRadius: '1.2rem',
  },
}));

const CategoryTileLink = styled(CardActionArea)(({ theme }) => ({
  aspectRatio: '2/1',
  display: 'block',
  padding: '1.2rem',
  [theme.breakpoints.up('md')]: {
    padding: '1.6rem',
  },
  '&:focus .category-image-first, &:hover .category-image-first': {
    animationName: 'springFirstPic',
  },
  '&:focus .category-image-last, &:hover .category-image-last': {
    animationName: 'springLastPic',
  },
}));

const CategoryTitle = styled(Typography)(({ theme }) => ({
  position: 'relative',
  width: '80%',
  zIndex: 2,
  [theme.breakpoints.up('xl')]: {
    width: '58%',
  },
}));

const ImageWrapper = styled(Box)(({ theme, type }) => ({
  aspectRatio: '1',
  borderRadius: '0.8rem',
  display: 'block',
  overflow: 'hidden',
  position: 'absolute',
  width: '43%',
  [theme.breakpoints.up('md')]: {
    animationDuration: 'var(--spring-duration)',
    animationFillMode: 'forwards',
    animationTimingFunction: 'var(--spring-easing)',
    borderRadius: '1.2rem',
    height: 'auto',
    width: '41%',
    willChange: 'transform',
  },
  [theme.breakpoints.up('lg')]: {
    width: '44%',
  },
  ...(type === 'first' && {
    bottom: 'var(--first-bottom-pos)',
    boxShadow: 'var(--alpha-black-20) 0 1px 12px 0, var(--alpha-black-20) 0 2px 4px 0',
    right: 'var(--first-right-pos)',
    transform: 'rotate(var(--first-rotate-start))',
    zIndex: 1,
    [theme.breakpoints.up('md')]: {
      animationName: 'unSpringFirstPic',
    },
  }),
  ...(type === 'last' && {
    bottom: 'var(--last-bottom-pos)',
    boxShadow: 'var(--alpha-black-20) 0 1px 12px 0',
    right: 'var(--last-right-pos)',
    transform: 'rotate(var(--last-rotate-start))',
    zIndex: 0,
    [theme.breakpoints.up('md')]: {
      animationName: 'unSpringLastPic',
    },
  }),
}));

const CategoryImage = styled('img')({
  height: 'auto',
  maxWidth: '100%',
});

const CategoryTilesList = styled(Box)(({ theme }) => ({
  gridColumnGap: '1.6rem',
  gridRowGap: '1.6rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: '1fr',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
}));

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 0),
  backgroundColor: theme.palette.background.default,
}));

// Updated SectionHeader to align left
const SectionHeader = styled(Box)(({ theme }) => ({
  textAlign: 'left',
  marginBottom: theme.spacing(5),
  maxWidth: '100%',
}));

const SectionIcon = styled(Box)(({ theme }) => ({
  width: '40px',
  height: '40px',
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main,
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  color: 'var(--text-primary)',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.75rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
}));

const SectionDescription = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  color: 'var(--text-secondary)',
  lineHeight: 1.6,
  marginTop: theme.spacing(1),
}));

// CSS Variables and Keyframes (injected as global styles)
const globalStyles = `
  :root {
    --spring-easing: linear(0, 0.0009 0.4%, 0.0051 1%, 0.0191 2.01%, 0.0451, 0.0786 4.42%, 0.1602 6.83%, 0.373 12.46%, 0.4727 15.27%, 0.5683, 0.6507 21.3%, 0.7242, 0.7842 27.73%, 0.835 31.15%, 0.8768 34.76%, 0.8956 36.77%, 0.9131 38.98%, 0.9291, 0.9423 43.8%, 0.9539, 0.9632 49.03%, 0.9788 55.26%, 0.9887 62.29%, 0.9949 70.93%, 0.9982 82.39%, 0.9997 99.87%);
    --spring-duration: 0.4s;
    --scale-start: 1;
    --scale-end: 1.05;
    --first-rotate-start: -6.45deg;
    --first-rotate-end: -4.45deg;
    --last-rotate-start: -15.22deg;
    --last-rotate-end: -16.22deg;
    --first-bottom-pos: -15%;
    --first-right-pos: -14%;
    --last-bottom-pos: -32%;
    --last-right-pos: -3%;
    --background-brand-orange: #FFF8F2;
    --background-brand-purple: #F8F2FF;
    --background-brand-yellow: #FFFCE6;
    --background-light: #F9F9F9;
    --text-brand-blue: #1A0A3E;
    --text-primary: #1A0A3E;
    --text-secondary: #666666;
    --alpha-black-20: rgba(0, 0, 0, 0.2);
    --alpha-black-5: rgba(0, 0, 0, 0.05);
  }

  @media (min-width: 768px) {
    :root {
      --first-bottom-pos: -19%;
      --first-right-pos: -14%;
      --last-bottom-pos: -31%;
      --last-right-pos: -5%;
    }
  }

  @media (min-width: 992px) {
    :root {
      --first-bottom-pos: -8%;
      --first-right-pos: -7%;
      --last-bottom-pos: -18%;
      --last-right-pos: 0%;
    }
  }

  @keyframes springFirstPic {
    0% {
      bottom: var(--first-bottom-pos);
      right: var(--first-right-pos);
      transform: scale(var(--scale-start)) rotate(var(--first-rotate-start));
    }
    to {
      bottom: calc(var(--first-bottom-pos) + 10%);
      right: calc(var(--first-right-pos) + 2%);
      transform: scale(var(--scale-end)) rotate(var(--first-rotate-end));
    }
  }

  @keyframes unSpringFirstPic {
    0% {
      bottom: calc(var(--first-bottom-pos) + 10%);
      right: calc(var(--first-right-pos) + 2%);
      transform: scale(var(--scale-end)) rotate(var(--first-rotate-end));
    }
    to {
      bottom: var(--first-bottom-pos);
      right: var(--first-right-pos);
      transform: scale(var(--scale-start)) rotate(var(--first-rotate-start));
    }
  }

  @keyframes springLastPic {
    0% {
      bottom: var(--last-bottom-pos);
      right: var(--last-right-pos);
      transform: scale(var(--scale-start)) rotate(var(--last-rotate-start));
    }
    to {
      bottom: calc(var(--last-bottom-pos) + 6%);
      right: calc(var(--last-right-pos) + 12%);
      transform: scale(var(--scale-end)) rotate(var(--last-rotate-end));
    }
  }

  @keyframes unSpringLastPic {
    0% {
      bottom: calc(var(--last-bottom-pos) + 6%);
      right: calc(var(--last-right-pos) + 12%);
      transform: scale(var(--scale-end)) rotate(var(--last-rotate-end));
    }
    to {
      bottom: var(--last-bottom-pos);
      right: var(--last-right-pos);
      transform: scale(var(--scale-start)) rotate(var(--last-rotate-start));
    }
  }
`;

// Inject global styles
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.innerHTML = globalStyles;
  document.head.appendChild(styleElement);
}

// Main component
const CategoryTilesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const categories = [
    {
      id: 1,
      title: 'Abstract',
      subtitle: 'Special deals',
      href: 'https://www.singulart.com/en/painting/abstract',
      images: {
        first: 'https://www.singulart.com/images/category-tile/pictures/cropped/default/070d9215-b607-425d-8c14-2ac176e196ce_e9de9cdf5fcea7cd44193f820cd426d4.jpeg',
        last: 'https://www.singulart.com/images/category-tile/pictures/cropped/default/070d9215-b607-425d-8c14-2ac176e196ce_eda7808b4332415ce524481cce0efbb8.jpeg'
      },
      backgroundColor: 'var(--background-brand-purple)'
    },
    {
      id: 2,
      title: 'Landscapes',
      subtitle: 'Best-selling artists',
      href: 'https://www.singulart.com/en/painting/landscape',
      images: {
        first: 'https://www.singulart.com/images/category-tile/pictures/cropped/default/4d756f8f-53f0-4a74-9ed4-481ca51bbedb_e582e99d25c2aa843e09e34932a85dbc.jpeg',
        last: 'https://www.singulart.com/images/category-tile/pictures/cropped/default/4d756f8f-53f0-4a74-9ed4-481ca51bbedb_6e79e31c77b7f5e74fbb19c5e550a26e.jpeg'
      },
      backgroundColor: 'var(--background-brand-yellow)'
    },
    {
      id: 3,
      title: 'Portraits',
      subtitle: 'Famous artists',
      href: 'https://www.singulart.com/en/painting/portrait',
      images: {
        first: 'https://www.singulart.com/images/category-tile/pictures/cropped/default/6e3cc9bf-1a63-4740-9f79-fcd5377e8f0f_ef5887d1fb8507e17a8e6588f3ec7f7d.jpeg',
        last: 'https://www.singulart.com/images/category-tile/pictures/cropped/default/6e3cc9bf-1a63-4740-9f79-fcd5377e8f0f_356df6b20756aae0d3b7a405ebc2b0b4.jpeg'
      },
      backgroundColor: 'var(--background-light)'
    },
    {
      id: 4,
      title: 'Large paintings',
      subtitle: 'Just sold',
      href: 'https://www.singulart.com/en/painting?size=large',
      images: {
        first: 'https://www.singulart.com/images/category-tile/pictures/cropped/default/7ff4200d-8f71-4f3a-a8e2-f8f448a303f3_2aa9edea04c13b30830de545bbf40e32.jpeg',
        last: 'https://www.singulart.com/images/category-tile/pictures/cropped/default/7ff4200d-8f71-4f3a-a8e2-f8f448a303f3_8383c2743bd66c3ef578787eec2f14a3.jpeg'
      },
      backgroundColor: 'var(--background-light)'
    },
    {
      id: 5,
      title: 'Special deals',
      subtitle: 'Exclusive offers',
      href: 'https://www.singulart.com/en/our-artworks?isDiscountExclusive=true',
      images: {
        first: 'https://www.singulart.com/images/category-tile/pictures/cropped/default/93bc48d8-33be-4bf3-aa18-403b15d64010_696a4546f343363fc09e0f8c6ef4673d.jpeg',
        last: 'https://www.singulart.com/images/category-tile/pictures/cropped/default/93bc48d8-33be-4bf3-aa18-403b15d64010_dc05e1668b2d81058fa0b6f091fa5855.jpeg'
      },
      backgroundColor: 'var(--background-brand-orange)'
    },
    {
      id: 6,
      title: 'Best-selling artists',
      subtitle: 'Popular creators',
      href: 'https://www.singulart.com/en/our-artworks?highlightedBadge=best_seller',
      images: {
        first: 'https://www.singulart.com/images/category-tile/pictures/cropped/default/dffabe02-323d-4216-b84b-e70a47c5ecd1_de830d869c0cfab64dc57c86f58a7f49.jpeg',
        last: 'https://www.singulart.com/images/category-tile/pictures/cropped/default/dffabe02-323d-4216-b84b-e70a47c5ecd1_0cfcef0c6272d15fbdf809b600db2156.jpeg'
      },
      backgroundColor: 'var(--background-brand-yellow)'
    },
    {
      id: 7,
      title: 'Famous artists',
      subtitle: 'Recognized talent',
      href: 'https://www.singulart.com/en/our-artworks?highlightedBadge=grand_artists',
      images: {
        first: 'https://www.singulart.com/images/category-tile/pictures/cropped/default/d5b2447a-7833-4a9c-9d74-4ff76b091426_7da483eaf6b5e97438b3d970408d575a.jpeg',
        last: 'https://www.singulart.com/images/category-tile/pictures/cropped/default/d5b2447a-7833-4a9c-9d74-4ff76b091426_a598806346e779d6dfe09e777991c2c6.jpeg'
      },
      backgroundColor: 'var(--background-brand-purple)'
    },
    {
      id: 8,
      title: 'Just sold',
      subtitle: 'Recent purchases',
      href: 'https://www.singulart.com/en/just-sold',
      images: {
        first: 'https://www.singulart.com/images/category-tile/pictures/cropped/default/0666e133-ed8c-4d66-a4e7-e479fad94280_b33b41a4e376ebf27cf2fe3c311de3a9.jpeg',
        last: 'https://www.singulart.com/images/category-tile/pictures/cropped/default/0666e133-ed8c-4d66-a4e7-e479fad94280_8acf4a601809c01b893c9c746cd68417.jpeg'
      },
      backgroundColor: 'var(--background-brand-yellow)'
    }
  ];

  return (
    <SectionContainer>
      <Container maxWidth="lg">
        {/* Updated Header with left alignment and icon */}
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
            Whatever your taste, style, or mood, find original art you love in these
            popular categories
          </SectionDescription>
        </SectionHeader>

        <CategoryTilesList className="category-tiles-list--homepage">
          {categories.map((category) => (
            <CategoryTileWrapper 
              key={category.id}
              sx={{ backgroundColor: category.backgroundColor }}
              className="category-tile"
            >
              <CategoryTileLink 
                href={category.href}
                className="category-tile__link"
              >
                <CategoryTitle variant="h6" component="h3">
                  {category.title}
                  <Typography 
                    variant="body2" 
                    component="span" 
                    sx={{ 
                      display: 'block', 
                      color: 'var(--text-brand-blue)',
                      opacity: 0.8,
                      fontSize: '0.9rem',
                      mt: 0.5
                    }}
                  >
                    {category.subtitle}
                  </Typography>
                </CategoryTitle>
                
                <ImageWrapper type="first" className="category-image-first">
                  <CategoryImage
                    src={category.images.first}
                    alt={category.title}
                    loading="lazy"
                  />
                </ImageWrapper>
                
                <ImageWrapper type="last" className="category-image-last">
                  <CategoryImage
                    src={category.images.last}
                    alt={category.title}
                    loading="lazy"
                  />
                </ImageWrapper>
              </CategoryTileLink>
            </CategoryTileWrapper>
          ))}
        </CategoryTilesList>
      </Container>
    </SectionContainer>
  );
};

export default CategoryTilesSection;