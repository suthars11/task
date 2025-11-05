// 

// import React, { useState } from 'react';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import { 
//   AppBar, 
//   Toolbar, 
//   Typography, 
//   Button, 
//   Box, 
//   Container,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   Chip,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Divider,
//   Slider,
//   Checkbox,
//   FormControlLabel,
//   Badge
// } from '@mui/material';
// import {
//   Menu as MenuIcon,
//   FilterList as FilterIcon,
//   KeyboardArrowLeft,
//   KeyboardArrowRight
// } from '@mui/icons-material';
// import NewInSection from './components/NewInSection';
// import ArtworkCard from './components/ArtworkCard';
// import FilterDrawer from './components/FilterDrawer';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#000000',
//     },
//     secondary: {
//       main: '#f5f5f5',
//     },
//   },
// });

// const artworks = [
//   {
//     id: 1,
//     artist: "Ellen Fasthuber-Huerner",
//     title: "Autumn Window",
//     size: "80x60cm",
//     price: "¥233,000",
//     originalPrice: null,
//     discount: null,
//     timeLeft: null,
//     image: "/api/placeholder/300/400"
//   },
//   {
//     id: 2,
//     artist: "Stewart Fletcher",
//     title: "Tea and Sugar",
//     size: "36x46cm",
//     price: "¥156,800",
//     originalPrice: "¥224,600",
//     discount: "-30%",
//     timeLeft: "6 days left",
//     image: "/api/placeholder/300/400"
//   },
//   {
//     id: 3,
//     artist: "Natalie Odermatt",
//     title: "THE BIRTH OF EMOTIONS",
//     size: "60x60cm",
//     price: "¥261,500",
//     originalPrice: null,
//     discount: null,
//     timeLeft: null,
//     image: "/api/placeholder/300/400"
//   },
//   {
//     id: 4,
//     artist: "Davide Danesi",
//     title: "MBI",
//     size: "60x50cm",
//     price: "¥79,000",
//     originalPrice: null,
//     discount: null,
//     timeLeft: null,
//     image: "/api/placeholder/300/400"
//   }
// ];

// const navItems = ['New In', 'Painting', 'Print', 'Photography', 'Sculpture', 'Drawing', 'Artists', 'Special deals'];

// function App() {
//   const [filterOpen, setFilterOpen] = useState(false);
//   const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
//   const [sortBy, setSortBy] = useState('most-recent');

//   const handleFilterOpen = () => setFilterOpen(true);
//   const handleFilterClose = () => setFilterOpen(false);

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
      
//       {/* Navbar */}
//       <AppBar position="static" color="default" elevation={1}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={() => setMobileDrawerOpen(true)}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
          
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
//             SINGULART
//           </Typography>
          
//           <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//             {navItems.map((item) => (
//               <Button 
//                 key={item} 
//                 color="inherit"
//                 sx={{ 
//                   mx: 1,
//                   fontWeight: item === 'New In' ? 'bold' : 'normal',
//                   position: 'relative'
//                 }}
//               >
//                 {item}
//                 {item === 'New In' && (
//                   <Box
//                     sx={{
//                       position: 'absolute',
//                       bottom: -8,
//                       left: '50%',
//                       transform: 'translateX(-50%)',
//                       width: '4px',
//                       height: '4px',
//                       backgroundColor: 'black',
//                       borderRadius: '50%'
//                     }}
//                   />
//                 )}
//               </Button>
//             ))}
//           </Box>
          
//           <Button color="inherit" sx={{ ml: 2 }}>
//             Sell my art
//           </Button>
//         </Toolbar>
//       </AppBar>

//       {/* Mobile Drawer */}
//       <Drawer
//         anchor="left"
//         open={mobileDrawerOpen}
//         onClose={() => setMobileDrawerOpen(false)}
//       >
//         <Box sx={{ width: 250 }} role="presentation">
//           <List>
//             {navItems.map((item) => (
//               <ListItem button key={item}>
//                 <ListItemText primary={item} />
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Drawer>

//       {/* Main Content */}
//       <Container maxWidth="lg" sx={{ mt: 4 }}>
//         {/* Header Section */}
//         <Box sx={{ textAlign: 'center', mb: 4 }}>
//           <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
//             Original Artworks for Sale
//           </Typography>
//           <Typography variant="subtitle1" color="text.secondary">
//             Discover SINGULART's selection of original artworks created by contemporary artists from around the world.
//           </Typography>
//         </Box>

//         {/* Filters and Sort Section */}
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, flexWrap: 'wrap', gap: 2 }}>
//           <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
//             <Chip 
//               icon={<FilterIcon />} 
//               label="Filters" 
//               onClick={handleFilterOpen}
//               variant="outlined"
//             />
//             <Chip label="Price" variant="outlined" />
//             <Chip label="Medium" variant="outlined" />
//             <Chip label="Size" variant="outlined" />
//             <Chip label="Clear all" variant="outlined" />
//           </Box>
          
//           <Box>
//             <Typography variant="body2" color="text.secondary">
//               Sort by <strong>Most recent</strong>
//             </Typography>
//           </Box>
//         </Box>

//         <Divider sx={{ mb: 4 }} />

//         {/* New In Section with Hover Effect */}
//         <NewInSection />

//         {/* Artworks Grid */}
//         <Grid container spacing={4} sx={{ mt: 2 }}>
//           {artworks.map((artwork) => (
//             <Grid item xs={12} sm={6} md={3} key={artwork.id}>
//               <ArtworkCard artwork={artwork} />
//             </Grid>
//           ))}
//         </Grid>
//       </Container>

//       {/* Filter Drawer */}
//       <FilterDrawer open={filterOpen} onClose={handleFilterClose} />
//     </ThemeProvider>
//   );
// }

// export default App;


// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <div className="header header--desktop js-header-desktop js-header-common js-header-with-searchbar">
//   <div className="header__content">
//     <div className="header__logo" data-controller="headerLogo">
//       <a href="/en/" className="header__logo-link js-click-trigger-mao-modal">
//         <img
//           width={93}
//           height={28}
//           src="https://www.singulart.com/assets/assets/build/images/logos/logo-rebrand-line-white-bg.4e298f4e.svg"
//           alt="SINGULART Gallery | Buy art online"
//           title="SINGULART Gallery | Buy art online"
//         />
//         <span
//           id="animationLogoDesktop"
//           className="header__logo-animation"
//           data-headerlogo-target="animationLogo"
//         />
//       </a>
//     </div>
//     <div className="header__search">
//       <div className="quick-search-desktop">
//         <div
//           className="quick-search-desktop__search-bar js-algolia-desktop-search-bar"
//           data-placeholder="Search for any artwork, style, artist name, color..."
//           data-clear="Reset"
//           data-submit="Search"
//         >
//           <form method="GET" action="/en/search">
//             <div
//               className="search-input__container"
//               data-controller="searchInput"
//             >
//               <div className="search-input-animated-placeholder">
//                 <p className="search-input-animated-placeholder__fixed-text">
//                   Search for{" "}
//                 </p>
//                 <ul
//                   className="search-input-animated-placeholder__animated-text animating"
//                   data-searchinput-target="animatedPlaceholderList"
//                   style={{
//                     transform: "translateY(calc(-3 * var(--input-height)))"
//                   }}
//                 >
//                   <li>New York</li>
//                   <li>Photography</li>
//                   <li>Pop Art</li>
//                   <li>Pablo Picasso</li>
//                   <li>New York</li>
//                 </ul>
//               </div>
//               <div className="form-input search-input quick-search-desktop__input js-algolia-desktop-input-container form-input--icon-start">
//                 <input
//                   id="q"
//                   name="q"
//                   type="text"
//                   defaultValue=""
//                   className="form-input__input form-field"
//                   autoComplete="off"
//                   inputMode="text"
//                 />
//                 <svg
//                   viewBox="0 0 20 20"
//                   width={20}
//                   height={20}
//                   className="icon form-input__inner-item form-input__inner-item--start form-field__icon"
//                   aria-hidden="true"
//                 >
//                   <use href="#icon-main-navigation-magnifying-glass-stroke-light" />
//                 </svg>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//     <div className="header__quick-access">
//       <a
//         href="/en/application"
//         className="ga button button--small button--outlined-brand header__highlighted-button"
//         data-ga-c="sell_my_art"
//       >
//         Sell my art
//       </a>
//       <div className="header__secondary-nav">
//         <div
//           className="header__secondary-nav-item account ds-dropdown__wrapper js-dropdown-wrapper"
//           data-initialized="true"
//         >
//           <a
//             className="header__secondary-nav-link js-user-login"
//             href="/en/register"
//             data-testid="user-login"
//           >
//             <svg
//               viewBox="0 0 30 30"
//               width={30}
//               height={30}
//               className="icon header__secondary-nav-icon header__secondary-nav-icon--account icon--inline"
//             >
//               <title>Sign up / Login</title>{" "}
//               <use href="#icon-main-navigation-user-stroke-light" />
//             </svg>
//           </a>
//         </div>
//         <div className="header__secondary-nav-item wishlist-menu js-wishlist-menu-toggle">
//           <a
//             href="/en/wishlist"
//             className="header__secondary-nav-link ga js-wishlist-menu-link"
//             data-ga-c="visitor_wishlist_icon"
//             data-ga-l={0}
//             aria-label="View whishlist"
//             data-testid="wishlist-link"
//           >
//             <svg
//               viewBox="0 0 30 30"
//               width={30}
//               height={30}
//               className="icon header__secondary-nav-icon icon--inline"
//               aria-hidden="true"
//             >
//               <use href="#icon-main-navigation-heart" />
//             </svg>
//             <span className="body--xs header__secondary-nav-items-count js-wishlist-number">
//               0
//             </span>
//           </a>
//           <div className="wishlist-menu__items-container ds-dropdown ds-dropdown--open-left ds-dropdown--menu scrollbar js-wishlist-menu">
//             <div className="body--l-medium text--center mb-3xs">
//               My Favorite Artworks
//             </div>
//             <p className="body--m text--center mb-xs">
//               Your Favorites are only temporarily saved. To keep them saved,
//               create your account on Singulart!
//             </p>
//             <button
//               type="button"
//               className="button button--outlined-brand button--medium button--block wishlist-menu__subscribe js-wishlist-register ga"
//               data-ga-c="account_create"
//             >
//               Create an account
//             </button>
//             <p className="wishlist-menu__login mt-xs">
//               Already have an account?
//               <br />
//               <button
//                 type="button"
//                 className="link-button link-button--contrast-dark link-button--large wishlist-menu__login-link js-wishlist-login ga mt-2xs"
//                 data-ga-c="account_login"
//               >
//                 Sign in
//               </button>
//             </p>
//           </div>
//         </div>
//         <div className="header__secondary-nav-item cart">
//           <a
//             href="/en/checkout/cart"
//             className="header__secondary-nav-link"
//             aria-label="View cart"
//           >
//             <svg
//               viewBox="0 0 30 30"
//               width={30}
//               height={30}
//               className="icon header__secondary-nav-icon icon--inline"
//             >
//               <title>cart</title>{" "}
//               <use href="#icon-main-navigation-bag-simple" />
//             </svg>
//             <span className="body--xs header__secondary-nav-items-count">
//               0
//             </span>
//           </a>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="container container--no-bs-grid">
//     <div className="js-header-navigation-desktop">
//       <nav data-refresh="navigation-desktop">
//         <div className="navigation-desktop navigation-desktop-first-level js-navigation-menu-desktop js-navigation-container">
//           <ul className="navigation-desktop-first-level__list">
//             <li
//               className="body--m js-navigation-first-level-toggle js-navigation-item-with-children"
//               data-target="#menu-new_in"
//             >
//               <a
//                 className="navigation-desktop-first-level__link js-navigation-second-level-link ga js-navigation-link"
//                 aria-expanded="false"
//                 href="/en/our-artworks?orderBy=date"
//                 data-ga-c="browse_new_in"
//               >
//                 New In
//               </a>
//             </li>
//             <li
//               className="body--m js-navigation-first-level-toggle js-navigation-item-with-children"
//               data-target="#menu-painting"
//             >
//               <a
//                 className="navigation-desktop-first-level__link js-navigation-second-level-link ga js-navigation-link"
//                 aria-expanded="false"
//                 href="/en/painting"
//                 data-ga-c="browse_painting"
//               >
//                 Painting
//               </a>
//             </li>
//             <li
//               className="body--m js-navigation-first-level-toggle js-navigation-item-with-children"
//               data-target="#menu-print"
//             >
//               <a
//                 className="navigation-desktop-first-level__link js-navigation-second-level-link ga js-navigation-link"
//                 aria-expanded="false"
//                 href="/en/print"
//                 data-ga-c="browse_print"
//               >
//                 Print
//               </a>
//             </li>
//             <li
//               className="body--m js-navigation-first-level-toggle js-navigation-item-with-children"
//               data-target="#menu-photography"
//             >
//               <a
//                 className="navigation-desktop-first-level__link js-navigation-second-level-link ga js-navigation-link"
//                 aria-expanded="false"
//                 href="/en/photography"
//                 data-ga-c="browse_photography"
//               >
//                 Photography
//               </a>
//             </li>
//             <li
//               className="body--m js-navigation-first-level-toggle js-navigation-item-with-children"
//               data-target="#menu-sculpture"
//             >
//               <a
//                 className="navigation-desktop-first-level__link js-navigation-second-level-link ga js-navigation-link"
//                 aria-expanded="false"
//                 href="/en/sculpture"
//                 data-ga-c="browse_sculpture"
//               >
//                 Sculpture
//               </a>
//             </li>
//             <li
//               className="body--m js-navigation-first-level-toggle js-navigation-item-with-children"
//               data-target="#menu-drawing"
//             >
//               <a
//                 className="navigation-desktop-first-level__link js-navigation-second-level-link ga js-navigation-link"
//                 aria-expanded="false"
//                 href="/en/drawing"
//                 data-ga-c="browse_drawing"
//               >
//                 Drawing
//               </a>
//             </li>
//             <li
//               className="body--m js-navigation-first-level-toggle js-navigation-item-with-children"
//               data-target="#menu-artists"
//             >
//               <a
//                 className="navigation-desktop-first-level__link js-navigation-second-level-link ga js-navigation-link"
//                 aria-expanded="false"
//                 href="/en/artists"
//                 data-ga-c="browse_artists"
//               >
//                 Artists
//               </a>
//             </li>
//             <li
//               className="body--m js-navigation-first-level-toggle js-navigation-item-with-children"
//               data-target="#menu-special-deals"
//             >
//               <a
//                 className="navigation-desktop-first-level__link js-navigation-second-level-link ga js-navigation-link navigation-desktop-first-level__link--brand-blue"
//                 aria-expanded="false"
//                 href="/en/our-artworks?isDiscountExclusive=true"
//                 data-ga-c="browse_artworks"
//                 data-ga-l="special_deals"
//               >
//                 Special deals
//               </a>
//             </li>
//           </ul>
//           <div data-refresh="navigation-desktop-second-level">
//             <div
//               className="navigation-desktop-second-level-container js-navigation-second-level-container"
//               data-testid="navigation-desktop-second-level-container"
//             >
//               <div
//                 className="navigation-desktop-second-level scrollbar js-navigation-second-level-category"
//                 id="menu-new_in"
//               >
//                 <div className="navigation-desktop-second-level__content-wrapper">
//                   <div className="navigation-desktop-second-level__columns-container js-desktop-menu-columns-container">
//                     <div className="navigation-desktop-second-level__column js-desktop-menu-column">
//                       <strong className="navigation-desktop-second-level__title body--subheadline">
//                         New Artworks
//                       </strong>
//                       <ul className="navigation-desktop-second-level__list">
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/our-artworks?maxPrice=25000&orderBy=date"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="homepage"
//                             data-ga-c="homepage"
//                             data-ga-name="artworks_under_500_usd"
//                             data-ga-l="artworks_under_500_usd"
//                             data-index={1}
//                           >
//                             Under ₹25,000
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/our-artworks?minPrice=25000&maxPrice=50000&orderBy=date"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="homepage"
//                             data-ga-c="homepage"
//                             data-ga-name="artworks_between_500_1000_usd"
//                             data-ga-l="artworks_between_500_1000_usd"
//                             data-index={2}
//                           >
//                             ₹25,000-₹50,000
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/our-artworks?minPrice=50000&maxPrice=250000&orderBy=date"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="homepage"
//                             data-ga-c="homepage"
//                             data-ga-name="artworks_between_1000_5000_usd"
//                             data-ga-l="artworks_between_1000_5000_usd"
//                             data-index={3}
//                           >
//                             ₹50,000-₹250,000
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/our-artworks?minPrice=250000&maxPrice=1000000&orderBy=date"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="homepage"
//                             data-ga-c="homepage"
//                             data-ga-name="artworks_between_5000_20000_usd"
//                             data-ga-l="artworks_between_5000_20000_usd"
//                             data-index={4}
//                           >
//                             ₹250,000-₹1,000,000
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/our-artworks?minPrice=1000000&orderBy=date"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="homepage"
//                             data-ga-c="homepage"
//                             data-ga-name="artworks_over_20000_usd"
//                             data-ga-l="artworks_over_20000_usd"
//                             data-index={5}
//                           >
//                             Over ₹1,000,000
//                           </a>
//                         </li>{" "}
//                         <li className="navigation-desktop-second-level__item ps-s">
//                           <a
//                             href="/en/our-artworks?orderBy=date"
//                             className="text-button text-button--contrast-dark text-button--medium js-navigation-link ga"
//                             data-gal="browse_new_in"
//                             data-ga-c="browse_new_in"
//                             data-ga-name="all_new_in"
//                             data-ga-l="all_new_in"
//                           >
//                             Explore all artworks
//                             <svg
//                               viewBox="0 0 12 12"
//                               width={12}
//                               height={12}
//                               className="icon ms-1 icon--inline"
//                               aria-hidden="true"
//                             >
//                               <use href="https://www.singulart.com/assets/assets/build/images/components/atoms/icons/icon-global-defs.d84972f4.svg#icon-global-arrow-right" />
//                             </svg>
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="navigation-desktop-second-level__column js-desktop-menu-column">
//                       <strong className="navigation-desktop-second-level__title body--subheadline">
//                         New Collections
//                       </strong>
//                       <ul className="navigation-desktop-second-level__list">
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/collection/forms-in-acceleration-23498"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_new_in"
//                             data-ga-c="browse_new_in"
//                             data-ga-name="collection_23498"
//                             data-ga-l="collection_23498"
//                             data-index={1}
//                           >
//                             Forms in acceleration
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/collection/modern-mythology-22463"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_new_in"
//                             data-ga-c="browse_new_in"
//                             data-ga-name="collection_22463"
//                             data-ga-l="collection_22463"
//                             data-index={2}
//                           >
//                             Modern mythology
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/collection/contemporary-minimalism-22336"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_new_in"
//                             data-ga-c="browse_new_in"
//                             data-ga-name="collection_22336"
//                             data-ga-l="collection_22336"
//                             data-index={3}
//                           >
//                             Contemporary minimalism
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/collection/futurist-landscapes-22226"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_new_in"
//                             data-ga-c="browse_new_in"
//                             data-ga-name="collection_22226"
//                             data-ga-l="collection_22226"
//                             data-index={4}
//                           >
//                             Futurist landscapes
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/collection/rest-in-motion-26973"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_new_in"
//                             data-ga-c="browse_new_in"
//                             data-ga-name="collection_26973"
//                             data-ga-l="collection_26973"
//                             data-index={5}
//                           >
//                             Rest in motion
//                           </a>
//                         </li>{" "}
//                         <li className="navigation-desktop-second-level__item ps-s">
//                           <a
//                             href="/en/collections"
//                             className="text-button text-button--contrast-dark text-button--medium js-navigation-link ga"
//                             data-gal="browse_new_in"
//                             data-ga-c="browse_new_in"
//                             data-ga-name="browse_all_collections"
//                             data-ga-l="browse_all_collections"
//                           >
//                             Explore All Collections
//                             <svg
//                               viewBox="0 0 12 12"
//                               width={12}
//                               height={12}
//                               className="icon ms-1 icon--inline"
//                               aria-hidden="true"
//                             >
//                               <use href="https://www.singulart.com/assets/assets/build/images/components/atoms/icons/icon-global-defs.d84972f4.svg#icon-global-arrow-right" />
//                             </svg>
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="navigation-desktop-second-level__column js-desktop-menu-column">
//                       <strong className="navigation-desktop-second-level__title body--subheadline">
//                         New artists
//                       </strong>
//                       <ul className="navigation-desktop-second-level__list">
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/artist/jos%C3%A9-antonio-garrucho-1095"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_new_in"
//                             data-ga-c="browse_new_in"
//                             data-ga-name="browse_artist_1095"
//                             data-ga-l="browse_artist_1095"
//                             data-index={1}
//                           >
//                             José Antonio Garrucho
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/artist/julien-hayot-23101"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_new_in"
//                             data-ga-c="browse_new_in"
//                             data-ga-name="browse_artist_23101"
//                             data-ga-l="browse_artist_23101"
//                             data-index={2}
//                           >
//                             Julien Hayot
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/artist/nupur-jha-33652"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_new_in"
//                             data-ga-c="browse_new_in"
//                             data-ga-name="browse_artist_33652"
//                             data-ga-l="browse_artist_33652"
//                             data-index={3}
//                           >
//                             NUPUR JHA
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/artist/enzo-forgione-35439"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_new_in"
//                             data-ga-c="browse_new_in"
//                             data-ga-name="browse_artist_35439"
//                             data-ga-l="browse_artist_35439"
//                             data-index={4}
//                           >
//                             Enzo FORGIONE
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/artist/t-turban-37002"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_new_in"
//                             data-ga-c="browse_new_in"
//                             data-ga-name="browse_artist_37002"
//                             data-ga-l="browse_artist_37002"
//                             data-index={5}
//                           >
//                             T Turban
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/artist/juan-pinilla-pinilla-gonzalez-37109"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_new_in"
//                             data-ga-c="browse_new_in"
//                             data-ga-name="browse_artist_37109"
//                             data-ga-l="browse_artist_37109"
//                             data-index={6}
//                           >
//                             Juan Pinilla Pinilla Gonzalez
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/artist/anthony-agbovi-37302"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_new_in"
//                             data-ga-c="browse_new_in"
//                             data-ga-name="browse_artist_37302"
//                             data-ga-l="browse_artist_37302"
//                             data-index={7}
//                           >
//                             Anthony Agbovi
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/artist/florian-tillack-59057"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_new_in"
//                             data-ga-c="browse_new_in"
//                             data-ga-name="browse_artist_59057"
//                             data-ga-l="browse_artist_59057"
//                             data-index={8}
//                           >
//                             Florian Tillack
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/artist/ann-capitano-59925"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_new_in"
//                             data-ga-c="browse_new_in"
//                             data-ga-name="browse_artist_59925"
//                             data-ga-l="browse_artist_59925"
//                             data-index={9}
//                           >
//                             Ann Capitano
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/artist/ph-nos-65112"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_new_in"
//                             data-ga-c="browse_new_in"
//                             data-ga-name="browse_artist_65112"
//                             data-ga-l="browse_artist_65112"
//                             data-index={10}
//                           >
//                             ph nos
//                           </a>
//                         </li>{" "}
//                         <li className="navigation-desktop-second-level__item ps-s">
//                           <a
//                             href="/en/new-artists"
//                             className="text-button text-button--contrast-dark text-button--medium js-navigation-link ga"
//                             data-gal="browse_new_in"
//                             data-ga-c="browse_new_in"
//                             data-ga-name="browse_new_artists"
//                             data-ga-l="browse_new_artists"
//                           >
//                             Explore all artists
//                             <svg
//                               viewBox="0 0 12 12"
//                               width={12}
//                               height={12}
//                               className="icon ms-1 icon--inline"
//                               aria-hidden="true"
//                             >
//                               <use href="https://www.singulart.com/assets/assets/build/images/components/atoms/icons/icon-global-defs.d84972f4.svg#icon-global-arrow-right" />
//                             </svg>
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="navigation-desktop-second-level__column js-desktop-menu-column">
//                       <strong className="navigation-desktop-second-level__title body--subheadline">
//                         Featured Artists
//                       </strong>
//                       <ul className="navigation-desktop-second-level__list">
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/artist/julia-bright-13701"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_new_in"
//                             data-ga-c="browse_new_in"
//                             data-ga-name="browse_artist"
//                             data-ga-l="browse_artist"
//                             data-index={1}
//                           >
//                             Julia Bright
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/artist/anders-post-24055"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_new_in"
//                             data-ga-c="browse_new_in"
//                             data-ga-name="browse_artist"
//                             data-ga-l="browse_artist"
//                             data-index={2}
//                           >
//                             Anders Post
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/artist/julijana-ravbar-25373"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_new_in"
//                             data-ga-c="browse_new_in"
//                             data-ga-name="browse_artist"
//                             data-ga-l="browse_artist"
//                             data-index={3}
//                           >
//                             Julijana Ravbar
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/artist/baiba-limane-37016"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_new_in"
//                             data-ga-c="browse_new_in"
//                             data-ga-name="browse_artist"
//                             data-ga-l="browse_artist"
//                             data-index={4}
//                           >
//                             Baiba Limane
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/artist/maja-weller-52471"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_new_in"
//                             data-ga-c="browse_new_in"
//                             data-ga-name="browse_artist"
//                             data-ga-l="browse_artist"
//                             data-index={5}
//                           >
//                             Maja Weller
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/artist/renate-hoefer-77786"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_new_in"
//                             data-ga-c="browse_new_in"
//                             data-ga-name="browse_artist"
//                             data-ga-l="browse_artist"
//                             data-index={6}
//                           >
//                             Renate Hoefer
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/artist/susana-mazzarino-jimenez-79351"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_new_in"
//                             data-ga-c="browse_new_in"
//                             data-ga-name="browse_artist"
//                             data-ga-l="browse_artist"
//                             data-index={7}
//                           >
//                             SUSANA MAZZARINO JIMENEZ
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/artist/mila-bozic-79520"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_new_in"
//                             data-ga-c="browse_new_in"
//                             data-ga-name="browse_artist"
//                             data-ga-l="browse_artist"
//                             data-index={8}
//                           >
//                             Mila Bozic
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/artist/isabelle-plante-79524"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_new_in"
//                             data-ga-c="browse_new_in"
//                             data-ga-name="browse_artist"
//                             data-ga-l="browse_artist"
//                             data-index={9}
//                           >
//                             Isabelle Plante
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/artist/bogdan-kostenetsky-79533"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_new_in"
//                             data-ga-c="browse_new_in"
//                             data-ga-name="browse_artist"
//                             data-ga-l="browse_artist"
//                             data-index={10}
//                           >
//                             Bogdan Kostenetsky
//                           </a>
//                         </li>{" "}
//                         <li className="navigation-desktop-second-level__item ps-s">
//                           <a
//                             href="/en/featured-artists"
//                             className="text-button text-button--contrast-dark text-button--medium js-navigation-link ga"
//                             data-gal="browse_new_in"
//                             data-ga-c="browse_new_in"
//                             data-ga-name="all_featured_artists"
//                             data-ga-l="all_featured_artists"
//                           >
//                             Explore all artists
//                             <svg
//                               viewBox="0 0 12 12"
//                               width={12}
//                               height={12}
//                               className="icon ms-1 icon--inline"
//                               aria-hidden="true"
//                             >
//                               <use href="https://www.singulart.com/assets/assets/build/images/components/atoms/icons/icon-global-defs.d84972f4.svg#icon-global-arrow-right" />
//                             </svg>
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                   <div className="navigation-desktop-second-level__highlights js-nav-highlights">
//                     <div className="navigation-desktop-second-level__title body--subheadline">
//                       Highlights
//                     </div>
//                     <div className="navigation-desktop-second-level__highlights-list">
//                       <a
//                         href="/en/collection/maximalism-19773"
//                         className="navigation-carousel-item navigation-desktop-second-level__highlight ga"
//                         data-navigationcarousel-target="slide"
//                         data-action="click auxclick->navigationCarousel#trackClickEvent"
//                         data-ga-c="browse_new_in"
//                         data-ga-l="menu_highlight_collection_19773"
//                       >
//                         <picture>
//                           <source
//                             type="image/jpeg"
//                             srcSet="https://www.singulart.com/images-sh/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiY29sbGVjdGlvbnNcL3YyXC9waWN0dXJlc1wvY3JvcHBlZFwvbGlzdFwvYmFzZVwvMTk3NzNfbGlzdF8zMzhkMzExMzFlZGIyM2QwNGYzMDc5NmUxYzc2YjFjYy5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyNDIsImhlaWdodCI6MzAyLCJmaXQiOiJjb3ZlciIsImJhY2tncm91bmQiOm51bGx9LCJ0b0Zvcm1hdCI6ImpwZWcifX0=?signature=2299122d88c69b4fe12533eb35f334469abc49d754e00b7eb3a127da809072b8 242w,https://www.singulart.com/images-sh/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiY29sbGVjdGlvbnNcL3YyXC9waWN0dXJlc1wvY3JvcHBlZFwvbGlzdFwvYmFzZVwvMTk3NzNfbGlzdF8zMzhkMzExMzFlZGIyM2QwNGYzMDc5NmUxYzc2YjFjYy5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0ODQsImhlaWdodCI6NjA0LCJmaXQiOiJjb3ZlciIsImJhY2tncm91bmQiOm51bGx9LCJ0b0Zvcm1hdCI6ImpwZWcifX0=?signature=eb58253210dd57ccffd9391a37a1d73245d3ae44f2eb9191a802981377f26a79 484w"
//                             sizes="242px"
//                           />
//                           <img
//                             className="navigation-carousel-item__image loaded"
//                             src="https://www.singulart.com/images/collections/v2/pictures/cropped/list/base/19773_list_338d31131edb23d04f30796e1c76b1cc.jpeg"
//                             alt="Maximalism"
//                             width={242}
//                             height={302}
//                             loading="lazy"
//                             data-initialized="true"
//                           />
//                         </picture>
//                         <div className="navigation-carousel-item__content">
//                           <div className="navigation-carousel-item__title-wrapper">
//                             <h2 className="heading--s navigation-carousel-item__title">
//                               Maximalism
//                             </h2>
//                             <div className="link-button link-button--contrast-light link-button--medium link-button--with-icon navigation-carousel-item__link">
//                               <span>Discover</span>
//                               <svg
//                                 viewBox="0 0 14 14"
//                                 width={14}
//                                 height={14}
//                                 className="icon"
//                                 aria-hidden="true"
//                               >
//                                 <use href="https://www.singulart.com/assets/assets/build/images/components/atoms/icons/icon-global-defs.d84972f4.svg#icon-global-arrow-right" />
//                               </svg>
//                             </div>
//                           </div>
//                         </div>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="container">
//                   <a
//                     href="/en/our-artworks?orderBy=date"
//                     className="ga text-button text-button--contrast-dark text-button--medium mt-s"
//                     data-gal="all_new_in"
//                     data-ga-c="all_new_in"
//                   >
//                     Explore All New In
//                     <svg
//                       viewBox="0 0 12 12"
//                       width={12}
//                       height={12}
//                       className="icon ms-1 icon--inline"
//                       aria-hidden="true"
//                     >
//                       <use href="https://www.singulart.com/assets/assets/build/images/components/atoms/icons/icon-global-defs.d84972f4.svg#icon-global-arrow-right" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//               <div
//                 className="navigation-desktop-second-level scrollbar js-navigation-second-level-category"
//                 id="menu-painting"
//               >
//                 <div className="navigation-desktop-second-level__content-wrapper">
//                   <div className="navigation-desktop-second-level__columns-container js-desktop-menu-columns-container">
//                     <div className="navigation-desktop-second-level__column js-desktop-menu-column">
//                       <strong className="navigation-desktop-second-level__title body--subheadline">
//                         Style
//                       </strong>
//                       <ul className="navigation-desktop-second-level__list">
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/painting/abstract"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_painting"
//                             data-ga-c="browse_painting"
//                             data-ga-name="abstract"
//                             data-ga-l="abstract"
//                             data-index={1}
//                           >
//                             Abstract
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/painting/figurative"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_painting"
//                             data-ga-c="browse_painting"
//                             data-ga-name="figurative"
//                             data-ga-l="figurative"
//                             data-index={2}
//                           >
//                             Figurative
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/painting/impressionism"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_painting"
//                             data-ga-c="browse_painting"
//                             data-ga-name="impressionism"
//                             data-ga-l="impressionism"
//                             data-index={3}
//                           >
//                             Impressionism
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/painting/realism"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_painting"
//                             data-ga-c="browse_painting"
//                             data-ga-name="realism"
//                             data-ga-l="realism"
//                             data-index={4}
//                           >
//                             Realism
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/painting/pop-art"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_painting"
//                             data-ga-c="browse_painting"
//                             data-ga-name="pop_art"
//                             data-ga-l="pop_art"
//                             data-index={5}
//                           >
//                             Pop Art
//                           </a>
//                         </li>{" "}
//                         <li className="navigation-desktop-second-level__item ps-s">
//                           <a
//                             href="/en/painting"
//                             className="text-button text-button--contrast-dark text-button--medium js-navigation-link ga"
//                             data-gal="browse_painting"
//                             data-ga-c="browse_painting"
//                             data-ga-name="all_styles"
//                             data-ga-l="all_styles"
//                           >
//                             Explore all Styles
//                             <svg
//                               viewBox="0 0 12 12"
//                               width={12}
//                               height={12}
//                               className="icon ms-1 icon--inline"
//                               aria-hidden="true"
//                             >
//                               <use href="https://www.singulart.com/assets/assets/build/images/components/atoms/icons/icon-global-defs.d84972f4.svg#icon-global-arrow-right" />
//                             </svg>
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="navigation-desktop-second-level__column js-desktop-menu-column">
//                       <strong className="navigation-desktop-second-level__title body--subheadline">
//                         Theme
//                       </strong>
//                       <ul className="navigation-desktop-second-level__list">
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/painting/landscape"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_painting"
//                             data-ga-c="browse_painting"
//                             data-ga-name="landscape"
//                             data-ga-l="landscape"
//                             data-index={1}
//                           >
//                             Landscape
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/painting/portrait"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_painting"
//                             data-ga-c="browse_painting"
//                             data-ga-name="portrait"
//                             data-ga-l="portrait"
//                             data-index={2}
//                           >
//                             Portrait
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/painting/floral"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_painting"
//                             data-ga-c="browse_painting"
//                             data-ga-name="floral"
//                             data-ga-l="floral"
//                             data-index={3}
//                           >
//                             Floral
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/painting/urban"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_painting"
//                             data-ga-c="browse_painting"
//                             data-ga-name="urban"
//                             data-ga-l="urban"
//                             data-index={4}
//                           >
//                             Urban
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/painting/pop-culture"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_painting"
//                             data-ga-c="browse_painting"
//                             data-ga-name="pop_culture"
//                             data-ga-l="pop_culture"
//                             data-index={5}
//                           >
//                             Pop Culture
//                           </a>
//                         </li>{" "}
//                         <li className="navigation-desktop-second-level__item ps-s">
//                           <a
//                             href="/en/painting"
//                             className="text-button text-button--contrast-dark text-button--medium js-navigation-link ga"
//                             data-gal="browse_painting"
//                             data-ga-c="browse_painting"
//                             data-ga-name="all_themes"
//                             data-ga-l="all_themes"
//                           >
//                             Explore all Themes
//                             <svg
//                               viewBox="0 0 12 12"
//                               width={12}
//                               height={12}
//                               className="icon ms-1 icon--inline"
//                               aria-hidden="true"
//                             >
//                               <use href="https://www.singulart.com/assets/assets/build/images/components/atoms/icons/icon-global-defs.d84972f4.svg#icon-global-arrow-right" />
//                             </svg>
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="navigation-desktop-second-level__column js-desktop-menu-column">
//                       <strong className="navigation-desktop-second-level__title body--subheadline">
//                         Shop by artists
//                       </strong>
//                       <ul className="navigation-desktop-second-level__list">
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/painting?highlightedBadge=grand_artists"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_painting"
//                             data-ga-c="browse_painting"
//                             data-ga-name="artist_badge_grand_artists"
//                             data-ga-l="artist_badge_grand_artists"
//                             data-index={1}
//                           >
//                             Famous Painters
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/painting?highlightedBadge=best_seller"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_painting"
//                             data-ga-c="browse_painting"
//                             data-ga-name="artist_badge_best_seller"
//                             data-ga-l="artist_badge_best_seller"
//                             data-index={2}
//                           >
//                             Bestsellers
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/painting?highlightedBadge=new_online"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_painting"
//                             data-ga-c="browse_painting"
//                             data-ga-name="artist_badge_new_online"
//                             data-ga-l="artist_badge_new_online"
//                             data-index={3}
//                           >
//                             New online
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/painting?highlightedBadge=invest_in"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_painting"
//                             data-ga-c="browse_painting"
//                             data-ga-name="artist_badge_invest_in"
//                             data-ga-l="artist_badge_invest_in"
//                             data-index={4}
//                           >
//                             Curator's selection
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/painting?highlightedBadge=featured_artists"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_painting"
//                             data-ga-c="browse_painting"
//                             data-ga-name="artist_badge_featured_artists"
//                             data-ga-l="artist_badge_featured_artists"
//                             data-index={5}
//                           >
//                             Featured Painters
//                           </a>
//                         </li>{" "}
//                       </ul>
//                     </div>
//                     <div className="navigation-desktop-second-level__column js-desktop-menu-column">
//                       <strong className="navigation-desktop-second-level__title body--subheadline">
//                         Shop by
//                       </strong>
//                       <ul className="navigation-desktop-second-level__list">
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/painting?isDiscountExclusive=true"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_painting"
//                             data-ga-c="browse_painting"
//                             data-ga-name="on_sale"
//                             data-ga-l="on_sale"
//                             data-index={1}
//                           >
//                             Special deals
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/painting?orderBy=date_newin"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_painting"
//                             data-ga-c="browse_painting"
//                             data-ga-name="new_in"
//                             data-ga-l="new_in"
//                             data-index={2}
//                           >
//                             New In
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <div
//                             className="accordion scroll-target js-readmore accordion--plus-minus accordion--icon-aligned-left js-navigation-desktop-second-level-accordion"
//                             data-opened-class="accordion--opened"
//                             data-panel-class="accordion__panel"
//                             data-text-container="accordion__title"
//                             data-ga-label="painting_price"
//                           >
//                             <button
//                               type="button"
//                               className="accordion__header js-readmore-toggle navigation-desktop-second-level__link navigation-desktop-second-level__accordion-toggle"
//                               aria-expanded="false"
//                               aria-controls="accordion-436642587"
//                             >
//                               <span className="accordion__title expand-click-area body--m">
//                                 Price{" "}
//                               </span>
//                               <span className="accordion__toggle-icon body--m">
//                                 <span className="accordion__toggle-icon-text accordion__toggle-icon-text--closed">
//                                   +
//                                 </span>
//                                 <span className="accordion__toggle-icon-text accordion__toggle-icon-text--opened">
//                                   -
//                                 </span>
//                               </span>
//                             </button>
//                             <div
//                               className="accordion__panel js-readmore-content navigation-desktop-second-level__accordion-panel ps-s"
//                               hidden=""
//                               id="accordion-436642587"
//                             >
//                               <div className="accordion__panel-inner">
//                                 <a
//                                   href="/en/painting?maxPrice=25000&orderBy=date"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="homepage"
//                                   data-ga-l="artworks_under_500_usd"
//                                 >
//                                   Under ₹25,000
//                                 </a>
//                                 <a
//                                   href="/en/painting?minPrice=25000&maxPrice=50000&orderBy=date"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="homepage"
//                                   data-ga-l="artworks_between_500_1000_usd"
//                                 >
//                                   ₹25,000-₹50,000
//                                 </a>
//                                 <a
//                                   href="/en/painting?minPrice=50000&maxPrice=250000&orderBy=date"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="homepage"
//                                   data-ga-l="artworks_between_1000_5000_usd"
//                                 >
//                                   ₹50,000-₹250,000
//                                 </a>
//                                 <a
//                                   href="/en/painting?minPrice=250000&maxPrice=1000000&orderBy=date"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="homepage"
//                                   data-ga-l="artworks_between_5000_20000_usd"
//                                 >
//                                   ₹250,000-₹1,000,000
//                                 </a>
//                                 <a
//                                   href="/en/painting?minPrice=1000000&orderBy=date"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="homepage"
//                                   data-ga-l="artworks_over_20000_usd"
//                                 >
//                                   Over ₹1,000,000
//                                 </a>
//                               </div>
//                             </div>
//                           </div>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <div
//                             className="accordion scroll-target js-readmore accordion--plus-minus accordion--icon-aligned-left js-navigation-desktop-second-level-accordion"
//                             data-opened-class="accordion--opened"
//                             data-panel-class="accordion__panel"
//                             data-text-container="accordion__title"
//                             data-ga-label="painting_size"
//                           >
//                             <button
//                               type="button"
//                               className="accordion__header js-readmore-toggle navigation-desktop-second-level__link navigation-desktop-second-level__accordion-toggle"
//                               aria-expanded="false"
//                               aria-controls="accordion-1082726603"
//                             >
//                               <span className="accordion__title expand-click-area body--m">
//                                 Size{" "}
//                               </span>
//                               <span className="accordion__toggle-icon body--m">
//                                 <span className="accordion__toggle-icon-text accordion__toggle-icon-text--closed">
//                                   +
//                                 </span>
//                                 <span className="accordion__toggle-icon-text accordion__toggle-icon-text--opened">
//                                   -
//                                 </span>
//                               </span>
//                             </button>
//                             <div
//                               className="accordion__panel js-readmore-content navigation-desktop-second-level__accordion-panel ps-s"
//                               hidden=""
//                               id="accordion-1082726603"
//                             >
//                               <div className="accordion__panel-inner">
//                                 <a
//                                   href="/en/painting?size=miniature"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_painting"
//                                   data-ga-l="size_miniature"
//                                 >
//                                   Miniature
//                                 </a>
//                                 <a
//                                   href="/en/painting?size=small"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_painting"
//                                   data-ga-l="size_small"
//                                 >
//                                   Small
//                                 </a>
//                                 <a
//                                   href="/en/painting?size=medium"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_painting"
//                                   data-ga-l="size_medium"
//                                 >
//                                   Medium
//                                 </a>
//                                 <a
//                                   href="/en/painting?size=large"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_painting"
//                                   data-ga-l="size_large"
//                                 >
//                                   Large
//                                 </a>
//                                 <a
//                                   href="/en/painting?size=oversized"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_painting"
//                                   data-ga-l="size_oversized"
//                                 >
//                                   Oversized
//                                 </a>
//                               </div>
//                             </div>
//                           </div>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <div
//                             className="accordion scroll-target js-readmore accordion--plus-minus accordion--icon-aligned-left js-navigation-desktop-second-level-accordion"
//                             data-opened-class="accordion--opened"
//                             data-panel-class="accordion__panel"
//                             data-text-container="accordion__title"
//                             data-ga-label="painting_colors"
//                           >
//                             <button
//                               type="button"
//                               className="accordion__header js-readmore-toggle navigation-desktop-second-level__link navigation-desktop-second-level__accordion-toggle"
//                               aria-expanded="false"
//                               aria-controls="accordion-1240300234"
//                             >
//                               <span className="accordion__title expand-click-area body--m">
//                                 Color{" "}
//                               </span>
//                               <span className="accordion__toggle-icon body--m">
//                                 <span className="accordion__toggle-icon-text accordion__toggle-icon-text--closed">
//                                   +
//                                 </span>
//                                 <span className="accordion__toggle-icon-text accordion__toggle-icon-text--opened">
//                                   -
//                                 </span>
//                               </span>
//                             </button>
//                             <div
//                               className="accordion__panel js-readmore-content navigation-desktop-second-level__accordion-panel ps-s"
//                               hidden=""
//                               id="accordion-1240300234"
//                             >
//                               <div className="accordion__panel-inner">
//                                 <a
//                                   href="/en/painting?colors%5B0%5D=FF69B4&colors%5B1%5D=A7194B&colors%5B2%5D=FE2712&colors%5B3%5D=FB9902&colors%5B4%5D=FABC02&colors%5B5%5D=FEFE33"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_painting"
//                                   data-ga-l="colors_warm"
//                                 >
//                                   Warm palette
//                                 </a>
//                                 <a
//                                   href="/en/painting?colors%5B0%5D=66B032&colors%5B1%5D=0391CE&colors%5B2%5D=0247FE&colors%5B3%5D=3D01A5&colors%5B4%5D=8601AF"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_painting"
//                                   data-ga-l="colors_cool"
//                                 >
//                                   Cool palette
//                                 </a>
//                                 <a
//                                   href="/en/painting?colors%5B0%5D=FFFFFF&colors%5B1%5D=C8C8C8&colors%5B2%5D=FFEBCD&colors%5B3%5D=000000&colors%5B4%5D=6E3300"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_painting"
//                                   data-ga-l="colors_neutral"
//                                 >
//                                   Neutral palette
//                                 </a>
//                                 <a
//                                   href="/en/painting?colors%5B0%5D=FFFFFF&colors%5B1%5D=000000"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_painting"
//                                   data-ga-l="colors_black_white"
//                                 >
//                                   Black And White
//                                 </a>
//                               </div>
//                             </div>
//                           </div>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <div
//                             className="accordion scroll-target js-readmore accordion--plus-minus accordion--icon-aligned-left js-navigation-desktop-second-level-accordion"
//                             data-opened-class="accordion--opened"
//                             data-panel-class="accordion__panel"
//                             data-text-container="accordion__title"
//                             data-ga-label="painting_technique"
//                           >
//                             <button
//                               type="button"
//                               className="accordion__header js-readmore-toggle navigation-desktop-second-level__link navigation-desktop-second-level__accordion-toggle"
//                               aria-expanded="false"
//                               aria-controls="accordion-834124500"
//                             >
//                               <span className="accordion__title expand-click-area body--m">
//                                 Technique{" "}
//                               </span>
//                               <span className="accordion__toggle-icon body--m">
//                                 <span className="accordion__toggle-icon-text accordion__toggle-icon-text--closed">
//                                   +
//                                 </span>
//                                 <span className="accordion__toggle-icon-text accordion__toggle-icon-text--opened">
//                                   -
//                                 </span>
//                               </span>
//                             </button>
//                             <div
//                               className="accordion__panel js-readmore-content navigation-desktop-second-level__accordion-panel ps-s"
//                               hidden=""
//                               id="accordion-834124500"
//                             >
//                               <div className="accordion__panel-inner">
//                                 <a
//                                   href="/en/painting/oil"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_painting"
//                                   data-ga-l="technique_oil"
//                                 >
//                                   Oil Painting
//                                 </a>
//                                 <a
//                                   href="/en/painting/acrylic"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_painting"
//                                   data-ga-l="technique_acrylic"
//                                 >
//                                   Acrylic Painting
//                                 </a>
//                                 <a
//                                   href="/en/painting/watercolor"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_painting"
//                                   data-ga-l="technique_watercolor"
//                                 >
//                                   Watercolor Painting
//                                 </a>
//                               </div>
//                             </div>
//                           </div>
//                         </li>{" "}
//                       </ul>
//                     </div>
//                   </div>
//                   <div className="navigation-desktop-second-level__highlights js-nav-highlights">
//                     <div className="navigation-desktop-second-level__title body--subheadline">
//                       Highlights
//                     </div>
//                     <div className="navigation-desktop-second-level__highlights-list">
//                       <a
//                         href="/en/collection/contemporary-landscapes-21430"
//                         className="navigation-carousel-item navigation-desktop-second-level__highlight ga"
//                         data-navigationcarousel-target="slide"
//                         data-action="click auxclick->navigationCarousel#trackClickEvent"
//                         data-ga-c="browse_painting"
//                         data-ga-l="menu_highlight_collection_21430"
//                       >
//                         <picture>
//                           <source
//                             type="image/jpeg"
//                             srcSet="https://www.singulart.com/images-sh/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiY29sbGVjdGlvbnNcL3YyXC9waWN0dXJlc1wvY3JvcHBlZFwvbGlzdFwvYmFzZVwvMjE0MzBfbGlzdF80OGFhMzZkZmZlZjY0YmExMzg4M2M2ODU3YTA0YWFmZS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyNDIsImhlaWdodCI6MzAyLCJmaXQiOiJjb3ZlciIsImJhY2tncm91bmQiOm51bGx9LCJ0b0Zvcm1hdCI6ImpwZWcifX0=?signature=d5e0c6edd891c8c9015930ec9299a629b529ac9bd1279b857e5bc3461fc9c878 242w,https://www.singulart.com/images-sh/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiY29sbGVjdGlvbnNcL3YyXC9waWN0dXJlc1wvY3JvcHBlZFwvbGlzdFwvYmFzZVwvMjE0MzBfbGlzdF80OGFhMzZkZmZlZjY0YmExMzg4M2M2ODU3YTA0YWFmZS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0ODQsImhlaWdodCI6NjA0LCJmaXQiOiJjb3ZlciIsImJhY2tncm91bmQiOm51bGx9LCJ0b0Zvcm1hdCI6ImpwZWcifX0=?signature=025924595601c7f61778c8ed886484e7c7320886e48aecadbc41a87146dff798 484w"
//                             sizes="242px"
//                           />
//                           <img
//                             className="navigation-carousel-item__image loaded"
//                             src="https://www.singulart.com/images/collections/v2/pictures/cropped/list/base/21430_list_48aa36dffef64ba13883c6857a04aafe.jpeg"
//                             alt="Contemporary landscapes"
//                             width={242}
//                             height={302}
//                             loading="lazy"
//                             data-initialized="true"
//                           />
//                         </picture>
//                         <div className="navigation-carousel-item__content">
//                           <div className="navigation-carousel-item__title-wrapper">
//                             <h2 className="heading--s navigation-carousel-item__title">
//                               Contemporary landscapes
//                             </h2>
//                             <div className="link-button link-button--contrast-light link-button--medium link-button--with-icon navigation-carousel-item__link">
//                               <span>Discover</span>
//                               <svg
//                                 viewBox="0 0 14 14"
//                                 width={14}
//                                 height={14}
//                                 className="icon"
//                                 aria-hidden="true"
//                               >
//                                 <use href="https://www.singulart.com/assets/assets/build/images/components/atoms/icons/icon-global-defs.d84972f4.svg#icon-global-arrow-right" />
//                               </svg>
//                             </div>
//                           </div>
//                         </div>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="container">
//                   <a
//                     href="/en/painting"
//                     className="ga text-button text-button--contrast-dark text-button--medium mt-s"
//                     data-gal="all_painting"
//                     data-ga-c="all_painting"
//                   >
//                     Explore All Paintings
//                     <svg
//                       viewBox="0 0 12 12"
//                       width={12}
//                       height={12}
//                       className="icon ms-1 icon--inline"
//                       aria-hidden="true"
//                     >
//                       <use href="https://www.singulart.com/assets/assets/build/images/components/atoms/icons/icon-global-defs.d84972f4.svg#icon-global-arrow-right" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//               <div
//                 className="navigation-desktop-second-level scrollbar js-navigation-second-level-category"
//                 id="menu-print"
//               >
//                 <div className="navigation-desktop-second-level__content-wrapper">
//                   <div className="navigation-desktop-second-level__columns-container js-desktop-menu-columns-container">
//                     <div className="navigation-desktop-second-level__column js-desktop-menu-column">
//                       <strong className="navigation-desktop-second-level__title body--subheadline">
//                         Style
//                       </strong>
//                       <ul className="navigation-desktop-second-level__list">
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/print/abstract"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_print"
//                             data-ga-c="browse_print"
//                             data-ga-name="abstract"
//                             data-ga-l="abstract"
//                             data-index={1}
//                           >
//                             Abstract
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/print/figurative"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_print"
//                             data-ga-c="browse_print"
//                             data-ga-name="figurative"
//                             data-ga-l="figurative"
//                             data-index={2}
//                           >
//                             Figurative
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/print/realism"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_print"
//                             data-ga-c="browse_print"
//                             data-ga-name="realism"
//                             data-ga-l="realism"
//                             data-index={3}
//                           >
//                             Realism
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/print/pop-art"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_print"
//                             data-ga-c="browse_print"
//                             data-ga-name="pop_art"
//                             data-ga-l="pop_art"
//                             data-index={4}
//                           >
//                             Pop Art
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/print/vintage"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_print"
//                             data-ga-c="browse_print"
//                             data-ga-name="vintage"
//                             data-ga-l="vintage"
//                             data-index={5}
//                           >
//                             Vintage
//                           </a>
//                         </li>{" "}
//                         <li className="navigation-desktop-second-level__item ps-s">
//                           <a
//                             href="/en/print"
//                             className="text-button text-button--contrast-dark text-button--medium js-navigation-link ga"
//                             data-gal="browse_print"
//                             data-ga-c="browse_print"
//                             data-ga-name="all_styles"
//                             data-ga-l="all_styles"
//                           >
//                             Explore all Styles
//                             <svg
//                               viewBox="0 0 12 12"
//                               width={12}
//                               height={12}
//                               className="icon ms-1 icon--inline"
//                               aria-hidden="true"
//                             >
//                               <use href="https://www.singulart.com/assets/assets/build/images/components/atoms/icons/icon-global-defs.d84972f4.svg#icon-global-arrow-right" />
//                             </svg>
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="navigation-desktop-second-level__column js-desktop-menu-column">
//                       <strong className="navigation-desktop-second-level__title body--subheadline">
//                         Theme
//                       </strong>
//                       <ul className="navigation-desktop-second-level__list">
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/print/landscape"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_print"
//                             data-ga-c="browse_print"
//                             data-ga-name="landscape"
//                             data-ga-l="landscape"
//                             data-index={1}
//                           >
//                             Landscape
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/print/portrait"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_print"
//                             data-ga-c="browse_print"
//                             data-ga-name="portrait"
//                             data-ga-l="portrait"
//                             data-index={2}
//                           >
//                             Portrait
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/print/fantasy"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_print"
//                             data-ga-c="browse_print"
//                             data-ga-name="fantasy"
//                             data-ga-l="fantasy"
//                             data-index={3}
//                           >
//                             Fantasy
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/print/urban"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_print"
//                             data-ga-c="browse_print"
//                             data-ga-name="urban"
//                             data-ga-l="urban"
//                             data-index={4}
//                           >
//                             Urban
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/print/abstraction"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_print"
//                             data-ga-c="browse_print"
//                             data-ga-name="abstract_art"
//                             data-ga-l="abstract_art"
//                             data-index={5}
//                           >
//                             Abstraction
//                           </a>
//                         </li>{" "}
//                         <li className="navigation-desktop-second-level__item ps-s">
//                           <a
//                             href="/en/print"
//                             className="text-button text-button--contrast-dark text-button--medium js-navigation-link ga"
//                             data-gal="browse_print"
//                             data-ga-c="browse_print"
//                             data-ga-name="all_themes"
//                             data-ga-l="all_themes"
//                           >
//                             Explore all Themes
//                             <svg
//                               viewBox="0 0 12 12"
//                               width={12}
//                               height={12}
//                               className="icon ms-1 icon--inline"
//                               aria-hidden="true"
//                             >
//                               <use href="https://www.singulart.com/assets/assets/build/images/components/atoms/icons/icon-global-defs.d84972f4.svg#icon-global-arrow-right" />
//                             </svg>
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="navigation-desktop-second-level__column js-desktop-menu-column">
//                       <strong className="navigation-desktop-second-level__title body--subheadline">
//                         Famous artists prints
//                       </strong>
//                       <ul className="navigation-desktop-second-level__list">
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/artist/pablo-picasso-36501"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_print"
//                             data-ga-c="browse_print"
//                             data-ga-name="famous_artist_36501"
//                             data-ga-l="famous_artist_36501"
//                             data-index={1}
//                           >
//                             Pablo Picasso
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/artist/salvador-dali-36504"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_print"
//                             data-ga-c="browse_print"
//                             data-ga-name="famous_artist_36504"
//                             data-ga-l="famous_artist_36504"
//                             data-index={2}
//                           >
//                             Salvador Dali
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/artist/banksy-36514"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_print"
//                             data-ga-c="browse_print"
//                             data-ga-name="famous_artist_36514"
//                             data-ga-l="famous_artist_36514"
//                             data-index={3}
//                           >
//                             Banksy
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/artist/shepard-fairey-36722"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_print"
//                             data-ga-c="browse_print"
//                             data-ga-name="famous_artist_36722"
//                             data-ga-l="famous_artist_36722"
//                             data-index={4}
//                           >
//                             Shepard Fairey
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/artist/marc-chagall-36491"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_print"
//                             data-ga-c="browse_print"
//                             data-ga-name="famous_artist_36491"
//                             data-ga-l="famous_artist_36491"
//                             data-index={5}
//                           >
//                             Marc Chagall
//                           </a>
//                         </li>{" "}
//                         <li className="navigation-desktop-second-level__item ps-s">
//                           <a
//                             href="/en/our-artworks?highlightedBadge=grand_artists"
//                             className="text-button text-button--contrast-dark text-button--medium js-navigation-link ga"
//                             data-gal="browse_print"
//                             data-ga-c="browse_print"
//                             data-ga-name="browse_artworks_grand_artists"
//                             data-ga-l="browse_artworks_grand_artists"
//                           >
//                             Explore All Famous Artists
//                             <svg
//                               viewBox="0 0 12 12"
//                               width={12}
//                               height={12}
//                               className="icon ms-1 icon--inline"
//                               aria-hidden="true"
//                             >
//                               <use href="https://www.singulart.com/assets/assets/build/images/components/atoms/icons/icon-global-defs.d84972f4.svg#icon-global-arrow-right" />
//                             </svg>
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="navigation-desktop-second-level__column js-desktop-menu-column">
//                       <strong className="navigation-desktop-second-level__title body--subheadline">
//                         Shop by
//                       </strong>
//                       <ul className="navigation-desktop-second-level__list">
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/print?isDiscountExclusive=true"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_print"
//                             data-ga-c="browse_print"
//                             data-ga-name="on_sale"
//                             data-ga-l="on_sale"
//                             data-index={1}
//                           >
//                             Special deals
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/print?orderBy=date_newin"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_print"
//                             data-ga-c="browse_print"
//                             data-ga-name="new_in"
//                             data-ga-l="new_in"
//                             data-index={2}
//                           >
//                             New In
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <div
//                             className="accordion scroll-target js-readmore accordion--plus-minus accordion--icon-aligned-left js-navigation-desktop-second-level-accordion"
//                             data-opened-class="accordion--opened"
//                             data-panel-class="accordion__panel"
//                             data-text-container="accordion__title"
//                             data-ga-label="print_price"
//                           >
//                             <button
//                               type="button"
//                               className="accordion__header js-readmore-toggle navigation-desktop-second-level__link navigation-desktop-second-level__accordion-toggle"
//                               aria-expanded="false"
//                               aria-controls="accordion-864395831"
//                             >
//                               <span className="accordion__title expand-click-area body--m">
//                                 Price{" "}
//                               </span>
//                               <span className="accordion__toggle-icon body--m">
//                                 <span className="accordion__toggle-icon-text accordion__toggle-icon-text--closed">
//                                   +
//                                 </span>
//                                 <span className="accordion__toggle-icon-text accordion__toggle-icon-text--opened">
//                                   -
//                                 </span>
//                               </span>
//                             </button>
//                             <div
//                               className="accordion__panel js-readmore-content navigation-desktop-second-level__accordion-panel ps-s"
//                               hidden=""
//                               id="accordion-864395831"
//                             >
//                               <div className="accordion__panel-inner">
//                                 <a
//                                   href="/en/print?maxPrice=25000&orderBy=date"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="homepage"
//                                   data-ga-l="artworks_under_500_usd"
//                                 >
//                                   Under ₹25,000
//                                 </a>
//                                 <a
//                                   href="/en/print?minPrice=25000&maxPrice=50000&orderBy=date"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="homepage"
//                                   data-ga-l="artworks_between_500_1000_usd"
//                                 >
//                                   ₹25,000-₹50,000
//                                 </a>
//                                 <a
//                                   href="/en/print?minPrice=50000&maxPrice=250000&orderBy=date"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="homepage"
//                                   data-ga-l="artworks_between_1000_5000_usd"
//                                 >
//                                   ₹50,000-₹250,000
//                                 </a>
//                                 <a
//                                   href="/en/print?minPrice=250000&maxPrice=1000000&orderBy=date"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="homepage"
//                                   data-ga-l="artworks_between_5000_20000_usd"
//                                 >
//                                   ₹250,000-₹1,000,000
//                                 </a>
//                                 <a
//                                   href="/en/print?minPrice=1000000&orderBy=date"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="homepage"
//                                   data-ga-l="artworks_over_20000_usd"
//                                 >
//                                   Over ₹1,000,000
//                                 </a>
//                               </div>
//                             </div>
//                           </div>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <div
//                             className="accordion scroll-target js-readmore accordion--plus-minus accordion--icon-aligned-left js-navigation-desktop-second-level-accordion"
//                             data-opened-class="accordion--opened"
//                             data-panel-class="accordion__panel"
//                             data-text-container="accordion__title"
//                             data-ga-label="print_size"
//                           >
//                             <button
//                               type="button"
//                               className="accordion__header js-readmore-toggle navigation-desktop-second-level__link navigation-desktop-second-level__accordion-toggle"
//                               aria-expanded="false"
//                               aria-controls="accordion-224136302"
//                             >
//                               <span className="accordion__title expand-click-area body--m">
//                                 Size{" "}
//                               </span>
//                               <span className="accordion__toggle-icon body--m">
//                                 <span className="accordion__toggle-icon-text accordion__toggle-icon-text--closed">
//                                   +
//                                 </span>
//                                 <span className="accordion__toggle-icon-text accordion__toggle-icon-text--opened">
//                                   -
//                                 </span>
//                               </span>
//                             </button>
//                             <div
//                               className="accordion__panel js-readmore-content navigation-desktop-second-level__accordion-panel ps-s"
//                               hidden=""
//                               id="accordion-224136302"
//                             >
//                               <div className="accordion__panel-inner">
//                                 <a
//                                   href="/en/print?size=miniature"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_print"
//                                   data-ga-l="size_miniature"
//                                 >
//                                   Miniature
//                                 </a>
//                                 <a
//                                   href="/en/print?size=small"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_print"
//                                   data-ga-l="size_small"
//                                 >
//                                   Small
//                                 </a>
//                                 <a
//                                   href="/en/print?size=medium"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_print"
//                                   data-ga-l="size_medium"
//                                 >
//                                   Medium
//                                 </a>
//                                 <a
//                                   href="/en/print?size=large"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_print"
//                                   data-ga-l="size_large"
//                                 >
//                                   Large
//                                 </a>
//                                 <a
//                                   href="/en/print?size=oversized"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_print"
//                                   data-ga-l="size_oversized"
//                                 >
//                                   Oversized
//                                 </a>
//                               </div>
//                             </div>
//                           </div>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <div
//                             className="accordion scroll-target js-readmore accordion--plus-minus accordion--icon-aligned-left js-navigation-desktop-second-level-accordion"
//                             data-opened-class="accordion--opened"
//                             data-panel-class="accordion__panel"
//                             data-text-container="accordion__title"
//                             data-ga-label="print_colors"
//                           >
//                             <button
//                               type="button"
//                               className="accordion__header js-readmore-toggle navigation-desktop-second-level__link navigation-desktop-second-level__accordion-toggle"
//                               aria-expanded="false"
//                               aria-controls="accordion-413375036"
//                             >
//                               <span className="accordion__title expand-click-area body--m">
//                                 Color{" "}
//                               </span>
//                               <span className="accordion__toggle-icon body--m">
//                                 <span className="accordion__toggle-icon-text accordion__toggle-icon-text--closed">
//                                   +
//                                 </span>
//                                 <span className="accordion__toggle-icon-text accordion__toggle-icon-text--opened">
//                                   -
//                                 </span>
//                               </span>
//                             </button>
//                             <div
//                               className="accordion__panel js-readmore-content navigation-desktop-second-level__accordion-panel ps-s"
//                               hidden=""
//                               id="accordion-413375036"
//                             >
//                               <div className="accordion__panel-inner">
//                                 <a
//                                   href="/en/print?colors%5B0%5D=FF69B4&colors%5B1%5D=A7194B&colors%5B2%5D=FE2712&colors%5B3%5D=FB9902&colors%5B4%5D=FABC02&colors%5B5%5D=FEFE33"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_print"
//                                   data-ga-l="colors_warm"
//                                 >
//                                   Warm palette
//                                 </a>
//                                 <a
//                                   href="/en/print?colors%5B0%5D=66B032&colors%5B1%5D=0391CE&colors%5B2%5D=0247FE&colors%5B3%5D=3D01A5&colors%5B4%5D=8601AF"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_print"
//                                   data-ga-l="colors_cool"
//                                 >
//                                   Cool palette
//                                 </a>
//                                 <a
//                                   href="/en/print?colors%5B0%5D=FFFFFF&colors%5B1%5D=C8C8C8&colors%5B2%5D=FFEBCD&colors%5B3%5D=000000&colors%5B4%5D=6E3300"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_print"
//                                   data-ga-l="colors_neutral"
//                                 >
//                                   Neutral palette
//                                 </a>
//                                 <a
//                                   href="/en/print?colors%5B0%5D=FFFFFF&colors%5B1%5D=000000"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_print"
//                                   data-ga-l="colors_black_white"
//                                 >
//                                   Black And White
//                                 </a>
//                               </div>
//                             </div>
//                           </div>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <div
//                             className="accordion scroll-target js-readmore accordion--plus-minus accordion--icon-aligned-left js-navigation-desktop-second-level-accordion"
//                             data-opened-class="accordion--opened"
//                             data-panel-class="accordion__panel"
//                             data-text-container="accordion__title"
//                             data-ga-label="print_technique"
//                           >
//                             <button
//                               type="button"
//                               className="accordion__header js-readmore-toggle navigation-desktop-second-level__link navigation-desktop-second-level__accordion-toggle"
//                               aria-expanded="false"
//                               aria-controls="accordion-1211262501"
//                             >
//                               <span className="accordion__title expand-click-area body--m">
//                                 Technique{" "}
//                               </span>
//                               <span className="accordion__toggle-icon body--m">
//                                 <span className="accordion__toggle-icon-text accordion__toggle-icon-text--closed">
//                                   +
//                                 </span>
//                                 <span className="accordion__toggle-icon-text accordion__toggle-icon-text--opened">
//                                   -
//                                 </span>
//                               </span>
//                             </button>
//                             <div
//                               className="accordion__panel js-readmore-content navigation-desktop-second-level__accordion-panel ps-s"
//                               hidden=""
//                               id="accordion-1211262501"
//                             >
//                               <div className="accordion__panel-inner">
//                                 <a
//                                   href="/en/print/gicl%C3%A9e-print"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_print"
//                                   data-ga-l="technique_giclee_print"
//                                 >
//                                   Giclée print
//                                 </a>
//                                 <a
//                                   href="/en/print/lithography"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_print"
//                                   data-ga-l="technique_lithography"
//                                 >
//                                   Lithography
//                                 </a>
//                                 <a
//                                   href="/en/print/screen-printing"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_print"
//                                   data-ga-l="technique_silk_screen_printing"
//                                 >
//                                   Screen Printing
//                                 </a>
//                                 <a
//                                   href="/en/print/relief-printing"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_print"
//                                   data-ga-l="technique_relief_printing"
//                                 >
//                                   Relief Printing
//                                 </a>
//                                 <a
//                                   href="/en/print/engraving"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_print"
//                                   data-ga-l="technique_gravure"
//                                 >
//                                   Engraving
//                                 </a>
//                               </div>
//                             </div>
//                           </div>
//                         </li>{" "}
//                       </ul>
//                     </div>
//                   </div>
//                   <div className="navigation-desktop-second-level__highlights js-nav-highlights">
//                     <div className="navigation-desktop-second-level__title body--subheadline">
//                       Highlights
//                     </div>
//                     <div className="navigation-desktop-second-level__highlights-list">
//                       <a
//                         href="/en/collection/famous-artists-surrealist-visions-21222"
//                         className="navigation-carousel-item navigation-desktop-second-level__highlight ga"
//                         data-navigationcarousel-target="slide"
//                         data-action="click auxclick->navigationCarousel#trackClickEvent"
//                         data-ga-c="browse_print"
//                         data-ga-l="menu_highlight_collection_21222"
//                       >
//                         <picture>
//                           <source
//                             type="image/jpeg"
//                             srcSet="https://www.singulart.com/images-sh/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiY29sbGVjdGlvbnNcL3YyXC9waWN0dXJlc1wvY3JvcHBlZFwvbGlzdFwvYmFzZVwvMjEyMjJfbGlzdF9hNTU2NmMzYWNjMGM2ZmM0YWMyNjRlZjM4YzU3NzIwMC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyNDIsImhlaWdodCI6MzAyLCJmaXQiOiJjb3ZlciIsImJhY2tncm91bmQiOm51bGx9LCJ0b0Zvcm1hdCI6ImpwZWcifX0=?signature=a2232183805daabedfe2e5172cccbff29a4b9806bcbea238d372fe8c3973f439 242w,https://www.singulart.com/images-sh/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiY29sbGVjdGlvbnNcL3YyXC9waWN0dXJlc1wvY3JvcHBlZFwvbGlzdFwvYmFzZVwvMjEyMjJfbGlzdF9hNTU2NmMzYWNjMGM2ZmM0YWMyNjRlZjM4YzU3NzIwMC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0ODQsImhlaWdodCI6NjA0LCJmaXQiOiJjb3ZlciIsImJhY2tncm91bmQiOm51bGx9LCJ0b0Zvcm1hdCI6ImpwZWcifX0=?signature=6d848a81064200f55fc49018dd4fc62a204336aa23d50f3eddab7208f3a77c44 484w"
//                             sizes="242px"
//                           />
//                           <img
//                             className="navigation-carousel-item__image loaded"
//                             src="https://www.singulart.com/images/collections/v2/pictures/cropped/list/base/21222_list_a5566c3acc0c6fc4ac264ef38c577200.jpeg"
//                             alt="Famous artists: surrealist visions"
//                             width={242}
//                             height={302}
//                             loading="lazy"
//                             data-initialized="true"
//                           />
//                         </picture>
//                         <div className="navigation-carousel-item__content">
//                           <div className="navigation-carousel-item__title-wrapper">
//                             <h2 className="heading--s navigation-carousel-item__title">
//                               Famous artists: surrealist visions
//                             </h2>
//                             <div className="link-button link-button--contrast-light link-button--medium link-button--with-icon navigation-carousel-item__link">
//                               <span>Discover</span>
//                               <svg
//                                 viewBox="0 0 14 14"
//                                 width={14}
//                                 height={14}
//                                 className="icon"
//                                 aria-hidden="true"
//                               >
//                                 <use href="https://www.singulart.com/assets/assets/build/images/components/atoms/icons/icon-global-defs.d84972f4.svg#icon-global-arrow-right" />
//                               </svg>
//                             </div>
//                           </div>
//                         </div>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="container">
//                   <a
//                     href="/en/print"
//                     className="ga text-button text-button--contrast-dark text-button--medium mt-s"
//                     data-gal="all_print"
//                     data-ga-c="all_print"
//                   >
//                     Explore All Prints
//                     <svg
//                       viewBox="0 0 12 12"
//                       width={12}
//                       height={12}
//                       className="icon ms-1 icon--inline"
//                       aria-hidden="true"
//                     >
//                       <use href="https://www.singulart.com/assets/assets/build/images/components/atoms/icons/icon-global-defs.d84972f4.svg#icon-global-arrow-right" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//               <div
//                 className="navigation-desktop-second-level scrollbar js-navigation-second-level-category"
//                 id="menu-photography"
//               >
//                 <div className="navigation-desktop-second-level__content-wrapper">
//                   <div className="navigation-desktop-second-level__columns-container js-desktop-menu-columns-container">
//                     <div className="navigation-desktop-second-level__column js-desktop-menu-column">
//                       <strong className="navigation-desktop-second-level__title body--subheadline">
//                         Style
//                       </strong>
//                       <ul className="navigation-desktop-second-level__list">
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/photography/color"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_photography"
//                             data-ga-c="browse_photography"
//                             data-ga-name="color"
//                             data-ga-l="color"
//                             data-index={1}
//                           >
//                             Color
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/photography/black-and-white"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_photography"
//                             data-ga-c="browse_photography"
//                             data-ga-name="black_and_white"
//                             data-ga-l="black_and_white"
//                             data-index={2}
//                           >
//                             Black and White
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/photography/sepia"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_photography"
//                             data-ga-c="browse_photography"
//                             data-ga-name="sepia"
//                             data-ga-l="sepia"
//                             data-index={3}
//                           >
//                             Sepia
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/photography/digital"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_photography"
//                             data-ga-c="browse_photography"
//                             data-ga-name="digital_creation"
//                             data-ga-l="digital_creation"
//                             data-index={4}
//                           >
//                             Digital
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/photography/street-photo"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_photography"
//                             data-ga-c="browse_photography"
//                             data-ga-name="street_photo"
//                             data-ga-l="street_photo"
//                             data-index={5}
//                           >
//                             Street Photo
//                           </a>
//                         </li>{" "}
//                         <li className="navigation-desktop-second-level__item ps-s">
//                           <a
//                             href="/en/photography"
//                             className="text-button text-button--contrast-dark text-button--medium js-navigation-link ga"
//                             data-gal="browse_photography"
//                             data-ga-c="browse_photography"
//                             data-ga-name="all_styles"
//                             data-ga-l="all_styles"
//                           >
//                             Explore all Styles
//                             <svg
//                               viewBox="0 0 12 12"
//                               width={12}
//                               height={12}
//                               className="icon ms-1 icon--inline"
//                               aria-hidden="true"
//                             >
//                               <use href="https://www.singulart.com/assets/assets/build/images/components/atoms/icons/icon-global-defs.d84972f4.svg#icon-global-arrow-right" />
//                             </svg>
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="navigation-desktop-second-level__column js-desktop-menu-column">
//                       <strong className="navigation-desktop-second-level__title body--subheadline">
//                         Theme
//                       </strong>
//                       <ul className="navigation-desktop-second-level__list">
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/photography/landscape"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_photography"
//                             data-ga-c="browse_photography"
//                             data-ga-name="landscape"
//                             data-ga-l="landscape"
//                             data-index={1}
//                           >
//                             Landscape
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/photography/urban"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_photography"
//                             data-ga-c="browse_photography"
//                             data-ga-name="urban"
//                             data-ga-l="urban"
//                             data-index={2}
//                           >
//                             Urban
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/photography/portrait"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_photography"
//                             data-ga-c="browse_photography"
//                             data-ga-name="portrait"
//                             data-ga-l="portrait"
//                             data-index={3}
//                           >
//                             Portrait
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/photography/nature"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_photography"
//                             data-ga-c="browse_photography"
//                             data-ga-name="nature"
//                             data-ga-l="nature"
//                             data-index={4}
//                           >
//                             Nature
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/photography/travel"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_photography"
//                             data-ga-c="browse_photography"
//                             data-ga-name="travel"
//                             data-ga-l="travel"
//                             data-index={5}
//                           >
//                             Travel
//                           </a>
//                         </li>{" "}
//                         <li className="navigation-desktop-second-level__item ps-s">
//                           <a
//                             href="/en/photography"
//                             className="text-button text-button--contrast-dark text-button--medium js-navigation-link ga"
//                             data-gal="browse_photography"
//                             data-ga-c="browse_photography"
//                             data-ga-name="all_themes"
//                             data-ga-l="all_themes"
//                           >
//                             Explore all Themes
//                             <svg
//                               viewBox="0 0 12 12"
//                               width={12}
//                               height={12}
//                               className="icon ms-1 icon--inline"
//                               aria-hidden="true"
//                             >
//                               <use href="https://www.singulart.com/assets/assets/build/images/components/atoms/icons/icon-global-defs.d84972f4.svg#icon-global-arrow-right" />
//                             </svg>
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="navigation-desktop-second-level__column js-desktop-menu-column">
//                       <strong className="navigation-desktop-second-level__title body--subheadline">
//                         Shop by artists
//                       </strong>
//                       <ul className="navigation-desktop-second-level__list">
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/photography?highlightedBadge=grand_artists"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_photography"
//                             data-ga-c="browse_photography"
//                             data-ga-name="artist_badge_grand_artists"
//                             data-ga-l="artist_badge_grand_artists"
//                             data-index={1}
//                           >
//                             Famous photographers
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/photography?highlightedBadge=best_seller"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_photography"
//                             data-ga-c="browse_photography"
//                             data-ga-name="artist_badge_best_seller"
//                             data-ga-l="artist_badge_best_seller"
//                             data-index={2}
//                           >
//                             Bestsellers
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/photography?highlightedBadge=new_online"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_photography"
//                             data-ga-c="browse_photography"
//                             data-ga-name="artist_badge_new_online"
//                             data-ga-l="artist_badge_new_online"
//                             data-index={3}
//                           >
//                             New online
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/photography?highlightedBadge=invest_in"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_photography"
//                             data-ga-c="browse_photography"
//                             data-ga-name="artist_badge_invest_in"
//                             data-ga-l="artist_badge_invest_in"
//                             data-index={4}
//                           >
//                             Curator's selection
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/photography?highlightedBadge=featured_artists"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_photography"
//                             data-ga-c="browse_photography"
//                             data-ga-name="artist_badge_featured_artists"
//                             data-ga-l="artist_badge_featured_artists"
//                             data-index={5}
//                           >
//                             Featured photographers
//                           </a>
//                         </li>{" "}
//                       </ul>
//                     </div>
//                     <div className="navigation-desktop-second-level__column js-desktop-menu-column">
//                       <strong className="navigation-desktop-second-level__title body--subheadline">
//                         Shop by
//                       </strong>
//                       <ul className="navigation-desktop-second-level__list">
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/photography?isDiscountExclusive=true"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_photography"
//                             data-ga-c="browse_photography"
//                             data-ga-name="on_sale"
//                             data-ga-l="on_sale"
//                             data-index={1}
//                           >
//                             Special deals
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/photography?orderBy=date_newin"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_photography"
//                             data-ga-c="browse_photography"
//                             data-ga-name="new_in"
//                             data-ga-l="new_in"
//                             data-index={2}
//                           >
//                             New In
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <div
//                             className="accordion scroll-target js-readmore accordion--plus-minus accordion--icon-aligned-left js-navigation-desktop-second-level-accordion"
//                             data-opened-class="accordion--opened"
//                             data-panel-class="accordion__panel"
//                             data-text-container="accordion__title"
//                             data-ga-label="photography_price"
//                           >
//                             <button
//                               type="button"
//                               className="accordion__header js-readmore-toggle navigation-desktop-second-level__link navigation-desktop-second-level__accordion-toggle"
//                               aria-expanded="false"
//                               aria-controls="accordion-1489902240"
//                             >
//                               <span className="accordion__title expand-click-area body--m">
//                                 Price{" "}
//                               </span>
//                               <span className="accordion__toggle-icon body--m">
//                                 <span className="accordion__toggle-icon-text accordion__toggle-icon-text--closed">
//                                   +
//                                 </span>
//                                 <span className="accordion__toggle-icon-text accordion__toggle-icon-text--opened">
//                                   -
//                                 </span>
//                               </span>
//                             </button>
//                             <div
//                               className="accordion__panel js-readmore-content navigation-desktop-second-level__accordion-panel ps-s"
//                               hidden=""
//                               id="accordion-1489902240"
//                             >
//                               <div className="accordion__panel-inner">
//                                 <a
//                                   href="/en/photography?maxPrice=25000&orderBy=date"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="homepage"
//                                   data-ga-l="artworks_under_500_usd"
//                                 >
//                                   Under ₹25,000
//                                 </a>
//                                 <a
//                                   href="/en/photography?minPrice=25000&maxPrice=50000&orderBy=date"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="homepage"
//                                   data-ga-l="artworks_between_500_1000_usd"
//                                 >
//                                   ₹25,000-₹50,000
//                                 </a>
//                                 <a
//                                   href="/en/photography?minPrice=50000&maxPrice=250000&orderBy=date"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="homepage"
//                                   data-ga-l="artworks_between_1000_5000_usd"
//                                 >
//                                   ₹50,000-₹250,000
//                                 </a>
//                                 <a
//                                   href="/en/photography?minPrice=250000&maxPrice=1000000&orderBy=date"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="homepage"
//                                   data-ga-l="artworks_between_5000_20000_usd"
//                                 >
//                                   ₹250,000-₹1,000,000
//                                 </a>
//                                 <a
//                                   href="/en/photography?minPrice=1000000&orderBy=date"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="homepage"
//                                   data-ga-l="artworks_over_20000_usd"
//                                 >
//                                   Over ₹1,000,000
//                                 </a>
//                               </div>
//                             </div>
//                           </div>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <div
//                             className="accordion scroll-target js-readmore accordion--plus-minus accordion--icon-aligned-left js-navigation-desktop-second-level-accordion"
//                             data-opened-class="accordion--opened"
//                             data-panel-class="accordion__panel"
//                             data-text-container="accordion__title"
//                             data-ga-label="photography_size"
//                           >
//                             <button
//                               type="button"
//                               className="accordion__header js-readmore-toggle navigation-desktop-second-level__link navigation-desktop-second-level__accordion-toggle"
//                               aria-expanded="false"
//                               aria-controls="accordion-2030440401"
//                             >
//                               <span className="accordion__title expand-click-area body--m">
//                                 Size{" "}
//                               </span>
//                               <span className="accordion__toggle-icon body--m">
//                                 <span className="accordion__toggle-icon-text accordion__toggle-icon-text--closed">
//                                   +
//                                 </span>
//                                 <span className="accordion__toggle-icon-text accordion__toggle-icon-text--opened">
//                                   -
//                                 </span>
//                               </span>
//                             </button>
//                             <div
//                               className="accordion__panel js-readmore-content navigation-desktop-second-level__accordion-panel ps-s"
//                               hidden=""
//                               id="accordion-2030440401"
//                             >
//                               <div className="accordion__panel-inner">
//                                 <a
//                                   href="/en/photography?size=miniature"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_photography"
//                                   data-ga-l="size_miniature"
//                                 >
//                                   Miniature
//                                 </a>
//                                 <a
//                                   href="/en/photography?size=small"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_photography"
//                                   data-ga-l="size_small"
//                                 >
//                                   Small
//                                 </a>
//                                 <a
//                                   href="/en/photography?size=medium"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_photography"
//                                   data-ga-l="size_medium"
//                                 >
//                                   Medium
//                                 </a>
//                                 <a
//                                   href="/en/photography?size=large"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_photography"
//                                   data-ga-l="size_large"
//                                 >
//                                   Large
//                                 </a>
//                                 <a
//                                   href="/en/photography?size=oversized"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_photography"
//                                   data-ga-l="size_oversized"
//                                 >
//                                   Oversized
//                                 </a>
//                               </div>
//                             </div>
//                           </div>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <div
//                             className="accordion scroll-target js-readmore accordion--plus-minus accordion--icon-aligned-left js-navigation-desktop-second-level-accordion"
//                             data-opened-class="accordion--opened"
//                             data-panel-class="accordion__panel"
//                             data-text-container="accordion__title"
//                             data-ga-label="photography_colors"
//                           >
//                             <button
//                               type="button"
//                               className="accordion__header js-readmore-toggle navigation-desktop-second-level__link navigation-desktop-second-level__accordion-toggle"
//                               aria-expanded="false"
//                               aria-controls="accordion-2084200954"
//                             >
//                               <span className="accordion__title expand-click-area body--m">
//                                 Color{" "}
//                               </span>
//                               <span className="accordion__toggle-icon body--m">
//                                 <span className="accordion__toggle-icon-text accordion__toggle-icon-text--closed">
//                                   +
//                                 </span>
//                                 <span className="accordion__toggle-icon-text accordion__toggle-icon-text--opened">
//                                   -
//                                 </span>
//                               </span>
//                             </button>
//                             <div
//                               className="accordion__panel js-readmore-content navigation-desktop-second-level__accordion-panel ps-s"
//                               hidden=""
//                               id="accordion-2084200954"
//                             >
//                               <div className="accordion__panel-inner">
//                                 <a
//                                   href="/en/photography?colors%5B0%5D=FF69B4&colors%5B1%5D=A7194B&colors%5B2%5D=FE2712&colors%5B3%5D=FB9902&colors%5B4%5D=FABC02&colors%5B5%5D=FEFE33"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_photography"
//                                   data-ga-l="colors_warm"
//                                 >
//                                   Warm palette
//                                 </a>
//                                 <a
//                                   href="/en/photography?colors%5B0%5D=66B032&colors%5B1%5D=0391CE&colors%5B2%5D=0247FE&colors%5B3%5D=3D01A5&colors%5B4%5D=8601AF"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_photography"
//                                   data-ga-l="colors_cool"
//                                 >
//                                   Cool palette
//                                 </a>
//                                 <a
//                                   href="/en/photography?colors%5B0%5D=FFFFFF&colors%5B1%5D=C8C8C8&colors%5B2%5D=FFEBCD&colors%5B3%5D=000000&colors%5B4%5D=6E3300"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_photography"
//                                   data-ga-l="colors_neutral"
//                                 >
//                                   Neutral palette
//                                 </a>
//                                 <a
//                                   href="/en/photography?colors%5B0%5D=FFFFFF&colors%5B1%5D=000000"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_photography"
//                                   data-ga-l="colors_black_white"
//                                 >
//                                   Black And White
//                                 </a>
//                               </div>
//                             </div>
//                           </div>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <div
//                             className="accordion scroll-target js-readmore accordion--plus-minus accordion--icon-aligned-left js-navigation-desktop-second-level-accordion"
//                             data-opened-class="accordion--opened"
//                             data-panel-class="accordion__panel"
//                             data-text-container="accordion__title"
//                             data-ga-label="photography_technique"
//                           >
//                             <button
//                               type="button"
//                               className="accordion__header js-readmore-toggle navigation-desktop-second-level__link navigation-desktop-second-level__accordion-toggle"
//                               aria-expanded="false"
//                               aria-controls="accordion-1537828916"
//                             >
//                               <span className="accordion__title expand-click-area body--m">
//                                 Technique{" "}
//                               </span>
//                               <span className="accordion__toggle-icon body--m">
//                                 <span className="accordion__toggle-icon-text accordion__toggle-icon-text--closed">
//                                   +
//                                 </span>
//                                 <span className="accordion__toggle-icon-text accordion__toggle-icon-text--opened">
//                                   -
//                                 </span>
//                               </span>
//                             </button>
//                             <div
//                               className="accordion__panel js-readmore-content navigation-desktop-second-level__accordion-panel ps-s"
//                               hidden=""
//                               id="accordion-1537828916"
//                             >
//                               <div className="accordion__panel-inner">
//                                 <a
//                                   href="/en/photography/analogue"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_photography"
//                                   data-ga-l="technique_analogue"
//                                 >
//                                   Analogue
//                                 </a>
//                                 <a
//                                   href="/en/photography/digital"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_photography"
//                                   data-ga-l="technique_digital"
//                                 >
//                                   Digital
//                                 </a>
//                                 <a
//                                   href="/en/photography/hybrid"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_photography"
//                                   data-ga-l="technique_hybrid"
//                                 >
//                                   Hybrid
//                                 </a>
//                               </div>
//                             </div>
//                           </div>
//                         </li>{" "}
//                       </ul>
//                     </div>
//                   </div>
//                   <div className="navigation-desktop-second-level__highlights js-nav-highlights">
//                     <div className="navigation-desktop-second-level__title body--subheadline">
//                       Highlights
//                     </div>
//                     <div className="navigation-desktop-second-level__highlights-list">
//                       <a
//                         href="/en/collection/famous-artists-iconic-photographers-21269"
//                         className="navigation-carousel-item navigation-desktop-second-level__highlight ga"
//                         data-navigationcarousel-target="slide"
//                         data-action="click auxclick->navigationCarousel#trackClickEvent"
//                         data-ga-c="browse_photography"
//                         data-ga-l="menu_highlight_collection_21269"
//                       >
//                         <picture>
//                           <source
//                             type="image/jpeg"
//                             srcSet="https://www.singulart.com/images-sh/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiY29sbGVjdGlvbnNcL3YyXC9waWN0dXJlc1wvY3JvcHBlZFwvbGlzdFwvYmFzZVwvMjEyNjlfbGlzdF85MmNhMDUwMWFkNzE2NzI5OWY4NTIyMWE0YTk3N2MyMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyNDIsImhlaWdodCI6MzAyLCJmaXQiOiJjb3ZlciIsImJhY2tncm91bmQiOm51bGx9LCJ0b0Zvcm1hdCI6ImpwZWcifX0=?signature=2cfec60aca18b769f9c1ddf973f09ddb32d244f1721c1f40e2de143e41ecf02d 242w,https://www.singulart.com/images-sh/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiY29sbGVjdGlvbnNcL3YyXC9waWN0dXJlc1wvY3JvcHBlZFwvbGlzdFwvYmFzZVwvMjEyNjlfbGlzdF85MmNhMDUwMWFkNzE2NzI5OWY4NTIyMWE0YTk3N2MyMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0ODQsImhlaWdodCI6NjA0LCJmaXQiOiJjb3ZlciIsImJhY2tncm91bmQiOm51bGx9LCJ0b0Zvcm1hdCI6ImpwZWcifX0=?signature=36abd15c710e7efa22bddd95b64abb4fcf2e6cf76e8d481f80b4b57e701405d6 484w"
//                             sizes="242px"
//                           />
//                           <img
//                             className="navigation-carousel-item__image loaded"
//                             src="https://www.singulart.com/images/collections/v2/pictures/cropped/list/base/21269_list_92ca0501ad7167299f85221a4a977c21.jpeg"
//                             alt="Famous artists: iconic photographers"
//                             width={242}
//                             height={302}
//                             loading="lazy"
//                             data-initialized="true"
//                           />
//                         </picture>
//                         <div className="navigation-carousel-item__content">
//                           <div className="navigation-carousel-item__title-wrapper">
//                             <h2 className="heading--s navigation-carousel-item__title">
//                               Famous artists: iconic photographers
//                             </h2>
//                             <div className="link-button link-button--contrast-light link-button--medium link-button--with-icon navigation-carousel-item__link">
//                               <span>Discover</span>
//                               <svg
//                                 viewBox="0 0 14 14"
//                                 width={14}
//                                 height={14}
//                                 className="icon"
//                                 aria-hidden="true"
//                               >
//                                 <use href="https://www.singulart.com/assets/assets/build/images/components/atoms/icons/icon-global-defs.d84972f4.svg#icon-global-arrow-right" />
//                               </svg>
//                             </div>
//                           </div>
//                         </div>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="container">
//                   <a
//                     href="/en/photography"
//                     className="ga text-button text-button--contrast-dark text-button--medium mt-s"
//                     data-gal="all_photography"
//                     data-ga-c="all_photography"
//                   >
//                     Explore All Photographs
//                     <svg
//                       viewBox="0 0 12 12"
//                       width={12}
//                       height={12}
//                       className="icon ms-1 icon--inline"
//                       aria-hidden="true"
//                     >
//                       <use href="https://www.singulart.com/assets/assets/build/images/components/atoms/icons/icon-global-defs.d84972f4.svg#icon-global-arrow-right" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//               <div
//                 className="navigation-desktop-second-level scrollbar js-navigation-second-level-category"
//                 id="menu-sculpture"
//               >
//                 <div className="navigation-desktop-second-level__content-wrapper">
//                   <div className="navigation-desktop-second-level__columns-container js-desktop-menu-columns-container">
//                     <div className="navigation-desktop-second-level__column js-desktop-menu-column">
//                       <strong className="navigation-desktop-second-level__title body--subheadline">
//                         Style
//                       </strong>
//                       <ul className="navigation-desktop-second-level__list">
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/sculpture/freestanding"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_sculpture"
//                             data-ga-c="browse_sculpture"
//                             data-ga-name="freestanding"
//                             data-ga-l="freestanding"
//                             data-index={1}
//                           >
//                             Freestanding
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/sculpture/wall-object"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_sculpture"
//                             data-ga-c="browse_sculpture"
//                             data-ga-name="wall_object"
//                             data-ga-l="wall_object"
//                             data-index={2}
//                           >
//                             Wall-object
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/sculpture/outdoor-sculptures"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_sculpture"
//                             data-ga-c="browse_sculpture"
//                             data-ga-name="outdoor_sculpture"
//                             data-ga-l="outdoor_sculpture"
//                             data-index={3}
//                           >
//                             Outdoor Sculptures
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/sculpture/bust"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_sculpture"
//                             data-ga-c="browse_sculpture"
//                             data-ga-name="bust"
//                             data-ga-l="bust"
//                             data-index={4}
//                           >
//                             Bust
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/sculpture/installation"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_sculpture"
//                             data-ga-c="browse_sculpture"
//                             data-ga-name="installation"
//                             data-ga-l="installation"
//                             data-index={5}
//                           >
//                             Installation
//                           </a>
//                         </li>{" "}
//                         <li className="navigation-desktop-second-level__item ps-s">
//                           <a
//                             href="/en/sculpture"
//                             className="text-button text-button--contrast-dark text-button--medium js-navigation-link ga"
//                             data-gal="browse_sculpture"
//                             data-ga-c="browse_sculpture"
//                             data-ga-name="all_styles"
//                             data-ga-l="all_styles"
//                           >
//                             Explore all Styles
//                             <svg
//                               viewBox="0 0 12 12"
//                               width={12}
//                               height={12}
//                               className="icon ms-1 icon--inline"
//                               aria-hidden="true"
//                             >
//                               <use href="https://www.singulart.com/assets/assets/build/images/components/atoms/icons/icon-global-defs.d84972f4.svg#icon-global-arrow-right" />
//                             </svg>
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="navigation-desktop-second-level__column js-desktop-menu-column">
//                       <strong className="navigation-desktop-second-level__title body--subheadline">
//                         Theme
//                       </strong>
//                       <ul className="navigation-desktop-second-level__list">
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/sculpture/human-form"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_sculpture"
//                             data-ga-c="browse_sculpture"
//                             data-ga-name="human_form"
//                             data-ga-l="human_form"
//                             data-index={1}
//                           >
//                             Human Form
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/sculpture/nature"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_sculpture"
//                             data-ga-c="browse_sculpture"
//                             data-ga-name="nature"
//                             data-ga-l="nature"
//                             data-index={2}
//                           >
//                             Nature
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/sculpture/abstraction"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_sculpture"
//                             data-ga-c="browse_sculpture"
//                             data-ga-name="abstract_art"
//                             data-ga-l="abstract_art"
//                             data-index={3}
//                           >
//                             Abstraction
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/sculpture/conceptual"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_sculpture"
//                             data-ga-c="browse_sculpture"
//                             data-ga-name="conceptual"
//                             data-ga-l="conceptual"
//                             data-index={4}
//                           >
//                             Conceptual
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/sculpture/animals"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_sculpture"
//                             data-ga-c="browse_sculpture"
//                             data-ga-name="animals"
//                             data-ga-l="animals"
//                             data-index={5}
//                           >
//                             Animals
//                           </a>
//                         </li>{" "}
//                         <li className="navigation-desktop-second-level__item ps-s">
//                           <a
//                             href="/en/sculpture"
//                             className="text-button text-button--contrast-dark text-button--medium js-navigation-link ga"
//                             data-gal="browse_sculpture"
//                             data-ga-c="browse_sculpture"
//                             data-ga-name="all_themes"
//                             data-ga-l="all_themes"
//                           >
//                             Explore all Themes
//                             <svg
//                               viewBox="0 0 12 12"
//                               width={12}
//                               height={12}
//                               className="icon ms-1 icon--inline"
//                               aria-hidden="true"
//                             >
//                               <use href="https://www.singulart.com/assets/assets/build/images/components/atoms/icons/icon-global-defs.d84972f4.svg#icon-global-arrow-right" />
//                             </svg>
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="navigation-desktop-second-level__column js-desktop-menu-column">
//                       <strong className="navigation-desktop-second-level__title body--subheadline">
//                         Shop by artists
//                       </strong>
//                       <ul className="navigation-desktop-second-level__list">
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/sculpture?highlightedBadge=grand_artists"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_sculpture"
//                             data-ga-c="browse_sculpture"
//                             data-ga-name="artist_badge_grand_artists"
//                             data-ga-l="artist_badge_grand_artists"
//                             data-index={1}
//                           >
//                             Famous sculptors
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/sculpture?highlightedBadge=best_seller"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_sculpture"
//                             data-ga-c="browse_sculpture"
//                             data-ga-name="artist_badge_best_seller"
//                             data-ga-l="artist_badge_best_seller"
//                             data-index={2}
//                           >
//                             Bestsellers
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/sculpture?highlightedBadge=new_online"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_sculpture"
//                             data-ga-c="browse_sculpture"
//                             data-ga-name="artist_badge_new_online"
//                             data-ga-l="artist_badge_new_online"
//                             data-index={3}
//                           >
//                             New online
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/sculpture?highlightedBadge=invest_in"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_sculpture"
//                             data-ga-c="browse_sculpture"
//                             data-ga-name="artist_badge_invest_in"
//                             data-ga-l="artist_badge_invest_in"
//                             data-index={4}
//                           >
//                             Curator's selection
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/sculpture?highlightedBadge=featured_artists"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_sculpture"
//                             data-ga-c="browse_sculpture"
//                             data-ga-name="artist_badge_featured_artists"
//                             data-ga-l="artist_badge_featured_artists"
//                             data-index={5}
//                           >
//                             Featured sculptors
//                           </a>
//                         </li>{" "}
//                       </ul>
//                     </div>
//                     <div className="navigation-desktop-second-level__column js-desktop-menu-column">
//                       <strong className="navigation-desktop-second-level__title body--subheadline">
//                         Shop by
//                       </strong>
//                       <ul className="navigation-desktop-second-level__list">
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/sculpture?isDiscountExclusive=true"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_sculpture"
//                             data-ga-c="browse_sculpture"
//                             data-ga-name="on_sale"
//                             data-ga-l="on_sale"
//                             data-index={1}
//                           >
//                             Special deals
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/sculpture?orderBy=date_newin"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_sculpture"
//                             data-ga-c="browse_sculpture"
//                             data-ga-name="new_in"
//                             data-ga-l="new_in"
//                             data-index={2}
//                           >
//                             New In
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <div
//                             className="accordion scroll-target js-readmore accordion--plus-minus accordion--icon-aligned-left js-navigation-desktop-second-level-accordion"
//                             data-opened-class="accordion--opened"
//                             data-panel-class="accordion__panel"
//                             data-text-container="accordion__title"
//                             data-ga-label="sculpture_price"
//                           >
//                             <button
//                               type="button"
//                               className="accordion__header js-readmore-toggle navigation-desktop-second-level__link navigation-desktop-second-level__accordion-toggle"
//                               aria-expanded="false"
//                               aria-controls="accordion-1522145173"
//                             >
//                               <span className="accordion__title expand-click-area body--m">
//                                 Price{" "}
//                               </span>
//                               <span className="accordion__toggle-icon body--m">
//                                 <span className="accordion__toggle-icon-text accordion__toggle-icon-text--closed">
//                                   +
//                                 </span>
//                                 <span className="accordion__toggle-icon-text accordion__toggle-icon-text--opened">
//                                   -
//                                 </span>
//                               </span>
//                             </button>
//                             <div
//                               className="accordion__panel js-readmore-content navigation-desktop-second-level__accordion-panel ps-s"
//                               hidden=""
//                               id="accordion-1522145173"
//                             >
//                               <div className="accordion__panel-inner">
//                                 <a
//                                   href="/en/sculpture?maxPrice=25000&orderBy=date"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="homepage"
//                                   data-ga-l="artworks_under_500_usd"
//                                 >
//                                   Under ₹25,000
//                                 </a>
//                                 <a
//                                   href="/en/sculpture?minPrice=25000&maxPrice=50000&orderBy=date"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="homepage"
//                                   data-ga-l="artworks_between_500_1000_usd"
//                                 >
//                                   ₹25,000-₹50,000
//                                 </a>
//                                 <a
//                                   href="/en/sculpture?minPrice=50000&maxPrice=250000&orderBy=date"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="homepage"
//                                   data-ga-l="artworks_between_1000_5000_usd"
//                                 >
//                                   ₹50,000-₹250,000
//                                 </a>
//                                 <a
//                                   href="/en/sculpture?minPrice=250000&maxPrice=1000000&orderBy=date"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="homepage"
//                                   data-ga-l="artworks_between_5000_20000_usd"
//                                 >
//                                   ₹250,000-₹1,000,000
//                                 </a>
//                                 <a
//                                   href="/en/sculpture?minPrice=1000000&orderBy=date"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="homepage"
//                                   data-ga-l="artworks_over_20000_usd"
//                                 >
//                                   Over ₹1,000,000
//                                 </a>
//                               </div>
//                             </div>
//                           </div>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <div
//                             className="accordion scroll-target js-readmore accordion--plus-minus accordion--icon-aligned-left js-navigation-desktop-second-level-accordion"
//                             data-opened-class="accordion--opened"
//                             data-panel-class="accordion__panel"
//                             data-text-container="accordion__title"
//                             data-ga-label="sculpture_size"
//                           >
//                             <button
//                               type="button"
//                               className="accordion__header js-readmore-toggle navigation-desktop-second-level__link navigation-desktop-second-level__accordion-toggle"
//                               aria-expanded="false"
//                               aria-controls="accordion-78501171"
//                             >
//                               <span className="accordion__title expand-click-area body--m">
//                                 Size{" "}
//                               </span>
//                               <span className="accordion__toggle-icon body--m">
//                                 <span className="accordion__toggle-icon-text accordion__toggle-icon-text--closed">
//                                   +
//                                 </span>
//                                 <span className="accordion__toggle-icon-text accordion__toggle-icon-text--opened">
//                                   -
//                                 </span>
//                               </span>
//                             </button>
//                             <div
//                               className="accordion__panel js-readmore-content navigation-desktop-second-level__accordion-panel ps-s"
//                               hidden=""
//                               id="accordion-78501171"
//                             >
//                               <div className="accordion__panel-inner">
//                                 <a
//                                   href="/en/sculpture?size=miniature"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_sculpture"
//                                   data-ga-l="size_miniature"
//                                 >
//                                   Miniature
//                                 </a>
//                                 <a
//                                   href="/en/sculpture?size=small"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_sculpture"
//                                   data-ga-l="size_small"
//                                 >
//                                   Small
//                                 </a>
//                                 <a
//                                   href="/en/sculpture?size=medium"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_sculpture"
//                                   data-ga-l="size_medium"
//                                 >
//                                   Medium
//                                 </a>
//                                 <a
//                                   href="/en/sculpture?size=large"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_sculpture"
//                                   data-ga-l="size_large"
//                                 >
//                                   Large
//                                 </a>
//                                 <a
//                                   href="/en/sculpture?size=oversized"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_sculpture"
//                                   data-ga-l="size_oversized"
//                                 >
//                                   Oversized
//                                 </a>
//                               </div>
//                             </div>
//                           </div>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <div
//                             className="accordion scroll-target js-readmore accordion--plus-minus accordion--icon-aligned-left js-navigation-desktop-second-level-accordion"
//                             data-opened-class="accordion--opened"
//                             data-panel-class="accordion__panel"
//                             data-text-container="accordion__title"
//                             data-ga-label="sculpture_material"
//                           >
//                             <button
//                               type="button"
//                               className="accordion__header js-readmore-toggle navigation-desktop-second-level__link navigation-desktop-second-level__accordion-toggle"
//                               aria-expanded="false"
//                               aria-controls="accordion-2030938895"
//                             >
//                               <span className="accordion__title expand-click-area body--m">
//                                 Material{" "}
//                               </span>
//                               <span className="accordion__toggle-icon body--m">
//                                 <span className="accordion__toggle-icon-text accordion__toggle-icon-text--closed">
//                                   +
//                                 </span>
//                                 <span className="accordion__toggle-icon-text accordion__toggle-icon-text--opened">
//                                   -
//                                 </span>
//                               </span>
//                             </button>
//                             <div
//                               className="accordion__panel js-readmore-content navigation-desktop-second-level__accordion-panel ps-s"
//                               hidden=""
//                               id="accordion-2030938895"
//                             >
//                               <div className="accordion__panel-inner">
//                                 <a
//                                   href="/en/sculpture/bronze"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_sculpture"
//                                   data-ga-l="materials_bronze"
//                                 >
//                                   Bronze
//                                 </a>
//                                 <a
//                                   href="/en/sculpture/stone"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_sculpture"
//                                   data-ga-l="materials_stone"
//                                 >
//                                   Stone
//                                 </a>
//                                 <a
//                                   href="/en/sculpture/steel"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_sculpture"
//                                   data-ga-l="materials_metal"
//                                 >
//                                   Steel
//                                 </a>
//                                 <a
//                                   href="/en/sculpture/wood"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_sculpture"
//                                   data-ga-l="materials_wood"
//                                 >
//                                   Wood
//                                 </a>
//                                 <a
//                                   href="/en/sculpture/marble"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_sculpture"
//                                   data-ga-l="materials_marble"
//                                 >
//                                   Marble
//                                 </a>
//                               </div>
//                             </div>
//                           </div>
//                         </li>{" "}
//                       </ul>
//                     </div>
//                   </div>
//                   <div className="navigation-desktop-second-level__highlights js-nav-highlights">
//                     <div className="navigation-desktop-second-level__title body--subheadline">
//                       Highlights
//                     </div>
//                     <div className="navigation-desktop-second-level__highlights-list">
//                       <a
//                         href="/en/collection/outdoor-sculptures-3055"
//                         className="navigation-carousel-item navigation-desktop-second-level__highlight ga"
//                         data-navigationcarousel-target="slide"
//                         data-action="click auxclick->navigationCarousel#trackClickEvent"
//                         data-ga-c="browse_sculpture"
//                         data-ga-l="menu_highlight_collection_3055"
//                       >
//                         <picture>
//                           <source
//                             type="image/jpeg"
//                             srcSet="https://www.singulart.com/images-sh/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiY29sbGVjdGlvbnNcL3YyXC9waWN0dXJlc1wvY3JvcHBlZFwvbGlzdFwvYmFzZVwvMzA1NV9saXN0XzZjZTJkYmYzNDYxZjViOTVjYzNlOTllYWJiYmNhYWY1LmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI0MiwiaGVpZ2h0IjozMDIsImZpdCI6ImNvdmVyIiwiYmFja2dyb3VuZCI6bnVsbH0sInRvRm9ybWF0IjoianBlZyJ9fQ==?signature=fa89db92d3fcd86ab351c15a6ed623d926c7383a84794fe9b300e3fba3f41b6d 242w,https://www.singulart.com/images-sh/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiY29sbGVjdGlvbnNcL3YyXC9waWN0dXJlc1wvY3JvcHBlZFwvbGlzdFwvYmFzZVwvMzA1NV9saXN0XzZjZTJkYmYzNDYxZjViOTVjYzNlOTllYWJiYmNhYWY1LmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ4NCwiaGVpZ2h0Ijo2MDQsImZpdCI6ImNvdmVyIiwiYmFja2dyb3VuZCI6bnVsbH0sInRvRm9ybWF0IjoianBlZyJ9fQ==?signature=0a12de8cadc419b6cc3111d7e53adbc3f314c9a1df27d32cc3fd7d37d9cdfa79 484w"
//                             sizes="242px"
//                           />
//                           <img
//                             className="navigation-carousel-item__image loaded"
//                             src="https://www.singulart.com/images/collections/v2/pictures/cropped/list/base/3055_list_6ce2dbf3461f5b95cc3e99eabbbcaaf5.jpeg"
//                             alt="Outdoor sculptures"
//                             width={242}
//                             height={302}
//                             loading="lazy"
//                             data-initialized="true"
//                           />
//                         </picture>
//                         <div className="navigation-carousel-item__content">
//                           <div className="navigation-carousel-item__title-wrapper">
//                             <h2 className="heading--s navigation-carousel-item__title">
//                               Outdoor sculptures
//                             </h2>
//                             <div className="link-button link-button--contrast-light link-button--medium link-button--with-icon navigation-carousel-item__link">
//                               <span>Discover</span>
//                               <svg
//                                 viewBox="0 0 14 14"
//                                 width={14}
//                                 height={14}
//                                 className="icon"
//                                 aria-hidden="true"
//                               >
//                                 <use href="https://www.singulart.com/assets/assets/build/images/components/atoms/icons/icon-global-defs.d84972f4.svg#icon-global-arrow-right" />
//                               </svg>
//                             </div>
//                           </div>
//                         </div>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="container">
//                   <a
//                     href="/en/sculpture"
//                     className="ga text-button text-button--contrast-dark text-button--medium mt-s"
//                     data-gal="all_sculpture"
//                     data-ga-c="all_sculpture"
//                   >
//                     Explore All Sculptures
//                     <svg
//                       viewBox="0 0 12 12"
//                       width={12}
//                       height={12}
//                       className="icon ms-1 icon--inline"
//                       aria-hidden="true"
//                     >
//                       <use href="https://www.singulart.com/assets/assets/build/images/components/atoms/icons/icon-global-defs.d84972f4.svg#icon-global-arrow-right" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//               <div
//                 className="navigation-desktop-second-level scrollbar js-navigation-second-level-category"
//                 id="menu-drawing"
//               >
//                 <div className="navigation-desktop-second-level__content-wrapper">
//                   <div className="navigation-desktop-second-level__columns-container js-desktop-menu-columns-container">
//                     <div className="navigation-desktop-second-level__column js-desktop-menu-column">
//                       <strong className="navigation-desktop-second-level__title body--subheadline">
//                         Style
//                       </strong>
//                       <ul className="navigation-desktop-second-level__list">
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/drawing/abstract"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_drawing"
//                             data-ga-c="browse_drawing"
//                             data-ga-name="abstract"
//                             data-ga-l="abstract"
//                             data-index={1}
//                           >
//                             Abstract
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/drawing/figurative"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_drawing"
//                             data-ga-c="browse_drawing"
//                             data-ga-name="figurative"
//                             data-ga-l="figurative"
//                             data-index={2}
//                           >
//                             Figurative
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/drawing/realism"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_drawing"
//                             data-ga-c="browse_drawing"
//                             data-ga-name="realism"
//                             data-ga-l="realism"
//                             data-index={3}
//                           >
//                             Realism
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/drawing/geometric"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_drawing"
//                             data-ga-c="browse_drawing"
//                             data-ga-name="geometric"
//                             data-ga-l="geometric"
//                             data-index={4}
//                           >
//                             Geometric
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/drawing/symbolic"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_drawing"
//                             data-ga-c="browse_drawing"
//                             data-ga-name="symbolic"
//                             data-ga-l="symbolic"
//                             data-index={5}
//                           >
//                             Symbolic
//                           </a>
//                         </li>{" "}
//                         <li className="navigation-desktop-second-level__item ps-s">
//                           <a
//                             href="/en/drawing"
//                             className="text-button text-button--contrast-dark text-button--medium js-navigation-link ga"
//                             data-gal="all_drawing"
//                             data-ga-c="all_drawing"
//                           >
//                             Explore all Styles
//                             <svg
//                               viewBox="0 0 12 12"
//                               width={12}
//                               height={12}
//                               className="icon ms-1 icon--inline"
//                               aria-hidden="true"
//                             >
//                               <use href="https://www.singulart.com/assets/assets/build/images/components/atoms/icons/icon-global-defs.d84972f4.svg#icon-global-arrow-right" />
//                             </svg>
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="navigation-desktop-second-level__column js-desktop-menu-column">
//                       <strong className="navigation-desktop-second-level__title body--subheadline">
//                         Theme
//                       </strong>
//                       <ul className="navigation-desktop-second-level__list">
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/drawing/landscape"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_drawing"
//                             data-ga-c="browse_drawing"
//                             data-ga-name="landscape"
//                             data-ga-l="landscape"
//                             data-index={1}
//                           >
//                             Landscape
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/drawing/portrait"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_drawing"
//                             data-ga-c="browse_drawing"
//                             data-ga-name="portrait"
//                             data-ga-l="portrait"
//                             data-index={2}
//                           >
//                             Portrait
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/drawing/animals"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_drawing"
//                             data-ga-c="browse_drawing"
//                             data-ga-name="animals"
//                             data-ga-l="animals"
//                             data-index={3}
//                           >
//                             Animals
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/drawing/still-life"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_drawing"
//                             data-ga-c="browse_drawing"
//                             data-ga-name="still_life"
//                             data-ga-l="still_life"
//                             data-index={4}
//                           >
//                             Still Life
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/drawing/urban"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_drawing"
//                             data-ga-c="browse_drawing"
//                             data-ga-name="urban"
//                             data-ga-l="urban"
//                             data-index={5}
//                           >
//                             Urban
//                           </a>
//                         </li>{" "}
//                         <li className="navigation-desktop-second-level__item ps-s">
//                           <a
//                             href="/en/drawing"
//                             className="text-button text-button--contrast-dark text-button--medium js-navigation-link ga"
//                             data-gal="all_drawing"
//                             data-ga-c="all_drawing"
//                           >
//                             Explore all Themes
//                             <svg
//                               viewBox="0 0 12 12"
//                               width={12}
//                               height={12}
//                               className="icon ms-1 icon--inline"
//                               aria-hidden="true"
//                             >
//                               <use href="https://www.singulart.com/assets/assets/build/images/components/atoms/icons/icon-global-defs.d84972f4.svg#icon-global-arrow-right" />
//                             </svg>
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="navigation-desktop-second-level__column js-desktop-menu-column">
//                       <strong className="navigation-desktop-second-level__title body--subheadline">
//                         Shop by
//                       </strong>
//                       <ul className="navigation-desktop-second-level__list">
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/drawing?isDiscountExclusive=true"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_drawing"
//                             data-ga-c="browse_drawing"
//                             data-ga-name="on_sale"
//                             data-ga-l="on_sale"
//                             data-index={1}
//                           >
//                             Special deals
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/drawing?orderBy=date_newin"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_drawing"
//                             data-ga-c="browse_drawing"
//                             data-ga-name="new_in"
//                             data-ga-l="new_in"
//                             data-index={2}
//                           >
//                             New In
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <div
//                             className="accordion scroll-target js-readmore accordion--plus-minus accordion--icon-aligned-left js-navigation-desktop-second-level-accordion"
//                             data-opened-class="accordion--opened"
//                             data-panel-class="accordion__panel"
//                             data-text-container="accordion__title"
//                             data-ga-label="drawing_price"
//                           >
//                             <button
//                               type="button"
//                               className="accordion__header js-readmore-toggle navigation-desktop-second-level__link navigation-desktop-second-level__accordion-toggle"
//                               aria-expanded="false"
//                               aria-controls="accordion-605824123"
//                             >
//                               <span className="accordion__title expand-click-area body--m">
//                                 Price{" "}
//                               </span>
//                               <span className="accordion__toggle-icon body--m">
//                                 <span className="accordion__toggle-icon-text accordion__toggle-icon-text--closed">
//                                   +
//                                 </span>
//                                 <span className="accordion__toggle-icon-text accordion__toggle-icon-text--opened">
//                                   -
//                                 </span>
//                               </span>
//                             </button>
//                             <div
//                               className="accordion__panel js-readmore-content navigation-desktop-second-level__accordion-panel ps-s"
//                               hidden=""
//                               id="accordion-605824123"
//                             >
//                               <div className="accordion__panel-inner">
//                                 <a
//                                   href="/en/drawing?maxPrice=25000&orderBy=date"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="homepage"
//                                   data-ga-l="artworks_under_500_usd"
//                                 >
//                                   Under ₹25,000
//                                 </a>
//                                 <a
//                                   href="/en/drawing?minPrice=25000&maxPrice=50000&orderBy=date"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="homepage"
//                                   data-ga-l="artworks_between_500_1000_usd"
//                                 >
//                                   ₹25,000-₹50,000
//                                 </a>
//                                 <a
//                                   href="/en/drawing?minPrice=50000&maxPrice=250000&orderBy=date"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="homepage"
//                                   data-ga-l="artworks_between_1000_5000_usd"
//                                 >
//                                   ₹50,000-₹250,000
//                                 </a>
//                                 <a
//                                   href="/en/drawing?minPrice=250000&maxPrice=1000000&orderBy=date"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="homepage"
//                                   data-ga-l="artworks_between_5000_20000_usd"
//                                 >
//                                   ₹250,000-₹1,000,000
//                                 </a>
//                                 <a
//                                   href="/en/drawing?minPrice=1000000&orderBy=date"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="homepage"
//                                   data-ga-l="artworks_over_20000_usd"
//                                 >
//                                   Over ₹1,000,000
//                                 </a>
//                               </div>
//                             </div>
//                           </div>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <div
//                             className="accordion scroll-target js-readmore accordion--plus-minus accordion--icon-aligned-left js-navigation-desktop-second-level-accordion"
//                             data-opened-class="accordion--opened"
//                             data-panel-class="accordion__panel"
//                             data-text-container="accordion__title"
//                             data-ga-label="drawing_size"
//                           >
//                             <button
//                               type="button"
//                               className="accordion__header js-readmore-toggle navigation-desktop-second-level__link navigation-desktop-second-level__accordion-toggle"
//                               aria-expanded="false"
//                               aria-controls="accordion-1579914258"
//                             >
//                               <span className="accordion__title expand-click-area body--m">
//                                 Size{" "}
//                               </span>
//                               <span className="accordion__toggle-icon body--m">
//                                 <span className="accordion__toggle-icon-text accordion__toggle-icon-text--closed">
//                                   +
//                                 </span>
//                                 <span className="accordion__toggle-icon-text accordion__toggle-icon-text--opened">
//                                   -
//                                 </span>
//                               </span>
//                             </button>
//                             <div
//                               className="accordion__panel js-readmore-content navigation-desktop-second-level__accordion-panel ps-s"
//                               hidden=""
//                               id="accordion-1579914258"
//                             >
//                               <div className="accordion__panel-inner">
//                                 <a
//                                   href="/en/drawing?size=miniature"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_drawing"
//                                   data-ga-l="size_miniature"
//                                 >
//                                   Miniature
//                                 </a>
//                                 <a
//                                   href="/en/drawing?size=small"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_drawing"
//                                   data-ga-l="size_small"
//                                 >
//                                   Small
//                                 </a>
//                                 <a
//                                   href="/en/drawing?size=medium"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_drawing"
//                                   data-ga-l="size_medium"
//                                 >
//                                   Medium
//                                 </a>
//                                 <a
//                                   href="/en/drawing?size=large"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_drawing"
//                                   data-ga-l="size_large"
//                                 >
//                                   Large
//                                 </a>
//                                 <a
//                                   href="/en/drawing?size=oversized"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_drawing"
//                                   data-ga-l="size_oversized"
//                                 >
//                                   Oversized
//                                 </a>
//                               </div>
//                             </div>
//                           </div>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <div
//                             className="accordion scroll-target js-readmore accordion--plus-minus accordion--icon-aligned-left js-navigation-desktop-second-level-accordion"
//                             data-opened-class="accordion--opened"
//                             data-panel-class="accordion__panel"
//                             data-text-container="accordion__title"
//                             data-ga-label="drawing_material"
//                           >
//                             <button
//                               type="button"
//                               className="accordion__header js-readmore-toggle navigation-desktop-second-level__link navigation-desktop-second-level__accordion-toggle"
//                               aria-expanded="false"
//                               aria-controls="accordion-1570610190"
//                             >
//                               <span className="accordion__title expand-click-area body--m">
//                                 Technique{" "}
//                               </span>
//                               <span className="accordion__toggle-icon body--m">
//                                 <span className="accordion__toggle-icon-text accordion__toggle-icon-text--closed">
//                                   +
//                                 </span>
//                                 <span className="accordion__toggle-icon-text accordion__toggle-icon-text--opened">
//                                   -
//                                 </span>
//                               </span>
//                             </button>
//                             <div
//                               className="accordion__panel js-readmore-content navigation-desktop-second-level__accordion-panel ps-s"
//                               hidden=""
//                               id="accordion-1570610190"
//                             >
//                               <div className="accordion__panel-inner">
//                                 <a
//                                   href="/en/drawing/graphite"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_drawing"
//                                   data-ga-l="materials_graphite"
//                                 >
//                                   Graphite
//                                 </a>
//                                 <a
//                                   href="/en/drawing/pencil"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_drawing"
//                                   data-ga-l="materials_pencil"
//                                 >
//                                   Pencil
//                                 </a>
//                                 <a
//                                   href="/en/drawing/pastel"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_drawing"
//                                   data-ga-l="materials_pastel"
//                                 >
//                                   Pastel
//                                 </a>
//                                 <a
//                                   href="/en/drawing/charcoal"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_drawing"
//                                   data-ga-l="materials_charcoal"
//                                 >
//                                   Charcoal
//                                 </a>
//                                 <a
//                                   href="/en/drawing/india-ink"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_drawing"
//                                   data-ga-l="materials_india_ink"
//                                 >
//                                   India Ink
//                                 </a>
//                                 <a
//                                   href="/en/drawing/pen"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_drawing"
//                                   data-ga-l="materials_pen"
//                                 >
//                                   Pen
//                                 </a>
//                               </div>
//                             </div>
//                           </div>
//                         </li>{" "}
//                       </ul>
//                     </div>
//                   </div>
//                   <div className="navigation-desktop-second-level__highlights js-nav-highlights">
//                     <div className="navigation-desktop-second-level__title body--subheadline">
//                       Highlights
//                     </div>
//                     <div className="navigation-desktop-second-level__highlights-list">
//                       <a
//                         href="/en/collection/our-best-drawings-on-paper-22591"
//                         className="navigation-carousel-item navigation-desktop-second-level__highlight ga"
//                         data-navigationcarousel-target="slide"
//                         data-action="click auxclick->navigationCarousel#trackClickEvent"
//                         data-ga-c="browse_drawing"
//                         data-ga-l="menu_highlight_collection_22591"
//                       >
//                         <picture>
//                           <source
//                             type="image/jpeg"
//                             srcSet="https://www.singulart.com/images-sh/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiY29sbGVjdGlvbnNcL3YyXC9waWN0dXJlc1wvY3JvcHBlZFwvbGlzdFwvYmFzZVwvMjI1OTFfbGlzdF84MWZkZjhmOWU5NzMzOWE3NjEwOWY2YzFiZTcwZjYwMy5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyNDIsImhlaWdodCI6MzAyLCJmaXQiOiJjb3ZlciIsImJhY2tncm91bmQiOm51bGx9LCJ0b0Zvcm1hdCI6ImpwZWcifX0=?signature=d340893c4251daaa9ae317e470a1a6249577f5b07f7251a48ffc381fc2efdbf2 242w,https://www.singulart.com/images-sh/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiY29sbGVjdGlvbnNcL3YyXC9waWN0dXJlc1wvY3JvcHBlZFwvbGlzdFwvYmFzZVwvMjI1OTFfbGlzdF84MWZkZjhmOWU5NzMzOWE3NjEwOWY2YzFiZTcwZjYwMy5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0ODQsImhlaWdodCI6NjA0LCJmaXQiOiJjb3ZlciIsImJhY2tncm91bmQiOm51bGx9LCJ0b0Zvcm1hdCI6ImpwZWcifX0=?signature=ab918c7675b39790ddf99736d3d8270f75cde2e91802dfbeb67172f1e242c20e 484w"
//                             sizes="242px"
//                           />
//                           <img
//                             className="navigation-carousel-item__image loaded"
//                             src="https://www.singulart.com/images/collections/v2/pictures/cropped/list/base/22591_list_81fdf8f9e97339a76109f6c1be70f603.jpeg"
//                             alt="Our best drawings on paper"
//                             width={242}
//                             height={302}
//                             loading="lazy"
//                             data-initialized="true"
//                           />
//                         </picture>
//                         <div className="navigation-carousel-item__content">
//                           <div className="navigation-carousel-item__title-wrapper">
//                             <h2 className="heading--s navigation-carousel-item__title">
//                               Our best drawings on paper
//                             </h2>
//                             <div className="link-button link-button--contrast-light link-button--medium link-button--with-icon navigation-carousel-item__link">
//                               <span>Discover</span>
//                               <svg
//                                 viewBox="0 0 14 14"
//                                 width={14}
//                                 height={14}
//                                 className="icon"
//                                 aria-hidden="true"
//                               >
//                                 <use href="https://www.singulart.com/assets/assets/build/images/components/atoms/icons/icon-global-defs.d84972f4.svg#icon-global-arrow-right" />
//                               </svg>
//                             </div>
//                           </div>
//                         </div>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="container">
//                   <a
//                     href="/en/drawing"
//                     className="ga text-button text-button--contrast-dark text-button--medium mt-s"
//                     data-gal="all_drawing"
//                     data-ga-c="all_drawing"
//                   >
//                     Explore All Drawings
//                     <svg
//                       viewBox="0 0 12 12"
//                       width={12}
//                       height={12}
//                       className="icon ms-1 icon--inline"
//                       aria-hidden="true"
//                     >
//                       <use href="https://www.singulart.com/assets/assets/build/images/components/atoms/icons/icon-global-defs.d84972f4.svg#icon-global-arrow-right" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//               <div
//                 className="navigation-desktop-second-level scrollbar js-navigation-second-level-category"
//                 id="menu-artists"
//               >
//                 <div className="navigation-desktop-second-level__content-wrapper">
//                   <div className="navigation-desktop-second-level__columns-container js-desktop-menu-columns-container">
//                     <div className="navigation-desktop-second-level__column js-desktop-menu-column">
//                       <strong className="navigation-desktop-second-level__title body--subheadline">
//                         Famous artists
//                       </strong>
//                       <ul className="navigation-desktop-second-level__list">
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/artist/pablo-picasso-36501"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_artists"
//                             data-ga-c="browse_artists"
//                             data-ga-name="browse_artist_36501"
//                             data-ga-l="browse_artist_36501"
//                             data-index={1}
//                           >
//                             Pablo Picasso
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/artist/salvador-dal%C3%AD-36504"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_artists"
//                             data-ga-c="browse_artists"
//                             data-ga-name="browse_artist_36504"
//                             data-ga-l="browse_artist_36504"
//                             data-index={2}
//                           >
//                             Salvador Dali
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/artist/banksy-36514"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_artists"
//                             data-ga-c="browse_artists"
//                             data-ga-name="browse_artist_36514"
//                             data-ga-l="browse_artist_36514"
//                             data-index={3}
//                           >
//                             Banksy
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/artist/keith-haring-36518"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_artists"
//                             data-ga-c="browse_artists"
//                             data-ga-name="browse_artist_36518"
//                             data-ga-l="browse_artist_36518"
//                             data-index={4}
//                           >
//                             Keith Haring
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/artist/marc-chagall-36491"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_artists"
//                             data-ga-c="browse_artists"
//                             data-ga-name="browse_artist_36491"
//                             data-ga-l="browse_artist_36491"
//                             data-index={5}
//                           >
//                             Marc Chagall
//                           </a>
//                         </li>{" "}
//                         <li className="navigation-desktop-second-level__item ps-s">
//                           <a
//                             href="/en/famous-artists"
//                             className="text-button text-button--contrast-dark text-button--medium js-navigation-link ga"
//                             data-gal="browse_artists"
//                             data-ga-c="browse_artists"
//                             data-ga-name="all_grand_artists"
//                             data-ga-l="all_grand_artists"
//                           >
//                             Explore All Famous Artists
//                             <svg
//                               viewBox="0 0 12 12"
//                               width={12}
//                               height={12}
//                               className="icon ms-1 icon--inline"
//                               aria-hidden="true"
//                             >
//                               <use href="https://www.singulart.com/assets/assets/build/images/components/atoms/icons/icon-global-defs.d84972f4.svg#icon-global-arrow-right" />
//                             </svg>
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="navigation-desktop-second-level__column js-desktop-menu-column">
//                       <strong className="navigation-desktop-second-level__title body--subheadline">
//                         Bestsellers
//                       </strong>
//                       <ul className="navigation-desktop-second-level__list">
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/artist/jean-marie-gitard-60445"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_artists"
//                             data-ga-c="browse_artists"
//                             data-ga-name="browse_artist_60445"
//                             data-ga-l="browse_artist_60445"
//                             data-index={1}
//                           >
//                             Jean-Marie Gitard
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/artist/yayoi-kusama-36527"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_artists"
//                             data-ga-c="browse_artists"
//                             data-ga-name="browse_artist_36527"
//                             data-ga-l="browse_artist_36527"
//                             data-index={2}
//                           >
//                             Yayoi Kusama
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/artist/daniel-paugam-59966"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_artists"
//                             data-ga-c="browse_artists"
//                             data-ga-name="browse_artist_59966"
//                             data-ga-l="browse_artist_59966"
//                             data-index={3}
//                           >
//                             Daniel PAUGAM
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/artist/banksy-36514"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_artists"
//                             data-ga-c="browse_artists"
//                             data-ga-name="browse_artist_36514"
//                             data-ga-l="browse_artist_36514"
//                             data-index={4}
//                           >
//                             Banksy
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/artist/pablo-picasso-36501"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_artists"
//                             data-ga-c="browse_artists"
//                             data-ga-name="browse_artist_36501"
//                             data-ga-l="browse_artist_36501"
//                             data-index={5}
//                           >
//                             Pablo Picasso
//                           </a>
//                         </li>{" "}
//                         <li className="navigation-desktop-second-level__item ps-s">
//                           <a
//                             href="/en/best-seller"
//                             className="text-button text-button--contrast-dark text-button--medium js-navigation-link ga"
//                             data-gal="browse_artists"
//                             data-ga-c="browse_artists"
//                             data-ga-name="all_best_sellers"
//                             data-ga-l="all_best_sellers"
//                           >
//                             Explore all bestselling artists
//                             <svg
//                               viewBox="0 0 12 12"
//                               width={12}
//                               height={12}
//                               className="icon ms-1 icon--inline"
//                               aria-hidden="true"
//                             >
//                               <use href="https://www.singulart.com/assets/assets/build/images/components/atoms/icons/icon-global-defs.d84972f4.svg#icon-global-arrow-right" />
//                             </svg>
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="navigation-desktop-second-level__column js-desktop-menu-column">
//                       <strong className="navigation-desktop-second-level__title body--subheadline">
//                         Shop by nationality
//                       </strong>
//                       <ul className="navigation-desktop-second-level__list">
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/artists/french"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_artists"
//                             data-ga-c="browse_artists"
//                             data-ga-name="nationality_FR"
//                             data-ga-l="nationality_FR"
//                             data-index={1}
//                           >
//                             France
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/artists/german"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_artists"
//                             data-ga-c="browse_artists"
//                             data-ga-name="nationality_DE"
//                             data-ga-l="nationality_DE"
//                             data-index={2}
//                           >
//                             Germany
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/artists/italian"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_artists"
//                             data-ga-c="browse_artists"
//                             data-ga-name="nationality_IT"
//                             data-ga-l="nationality_IT"
//                             data-index={3}
//                           >
//                             Italy
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/artists/american"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_artists"
//                             data-ga-c="browse_artists"
//                             data-ga-name="nationality_US"
//                             data-ga-l="nationality_US"
//                             data-index={4}
//                           >
//                             United States
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/artists/spanish"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_artists"
//                             data-ga-c="browse_artists"
//                             data-ga-name="nationality_ES"
//                             data-ga-l="nationality_ES"
//                             data-index={5}
//                           >
//                             Spain
//                           </a>
//                         </li>{" "}
//                         <li className="navigation-desktop-second-level__item ps-s">
//                           <a
//                             href="/en/artists"
//                             className="text-button text-button--contrast-dark text-button--medium js-navigation-link ga"
//                             data-gal="browse_artists"
//                             data-ga-c="browse_artists"
//                             data-ga-name="all_nationalities"
//                             data-ga-l="all_nationalities"
//                           >
//                             Explore all nationalities
//                             <svg
//                               viewBox="0 0 12 12"
//                               width={12}
//                               height={12}
//                               className="icon ms-1 icon--inline"
//                               aria-hidden="true"
//                             >
//                               <use href="https://www.singulart.com/assets/assets/build/images/components/atoms/icons/icon-global-defs.d84972f4.svg#icon-global-arrow-right" />
//                             </svg>
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="navigation-desktop-second-level__column js-desktop-menu-column">
//                       <strong className="navigation-desktop-second-level__title body--subheadline">
//                         Shop by
//                       </strong>
//                       <ul className="navigation-desktop-second-level__list">
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/new-artists"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link ga"
//                             data-gal="browse_artists"
//                             data-ga-c="browse_artists"
//                             data-ga-name="all_new_in"
//                             data-ga-l="all_new_in"
//                             data-index={1}
//                           >
//                             New In
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <div
//                             className="accordion scroll-target js-readmore accordion--plus-minus accordion--icon-aligned-left js-navigation-desktop-second-level-accordion"
//                             data-opened-class="accordion--opened"
//                             data-panel-class="accordion__panel"
//                             data-text-container="accordion__title"
//                             data-ga-label="all_artist_types"
//                           >
//                             <button
//                               type="button"
//                               className="accordion__header js-readmore-toggle navigation-desktop-second-level__link navigation-desktop-second-level__accordion-toggle"
//                               aria-expanded="false"
//                               aria-controls="accordion-26802823"
//                             >
//                               <span className="accordion__title expand-click-area body--m">
//                                 Type of artists{" "}
//                               </span>
//                               <span className="accordion__toggle-icon body--m">
//                                 <span className="accordion__toggle-icon-text accordion__toggle-icon-text--closed">
//                                   +
//                                 </span>
//                                 <span className="accordion__toggle-icon-text accordion__toggle-icon-text--opened">
//                                   -
//                                 </span>
//                               </span>
//                             </button>
//                             <div
//                               className="accordion__panel js-readmore-content navigation-desktop-second-level__accordion-panel ps-s"
//                               hidden=""
//                               id="accordion-26802823"
//                             >
//                               <div className="accordion__panel-inner">
//                                 <a
//                                   href="/en/artists/painters"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_artists"
//                                   data-ga-l="artist_type_painter"
//                                 >
//                                   Painter
//                                 </a>
//                                 <a
//                                   href="/en/artists/photographers"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_artists"
//                                   data-ga-l="artist_type_photographer"
//                                 >
//                                   Photographer
//                                 </a>
//                                 <a
//                                   href="/en/artists/draftsman"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_artists"
//                                   data-ga-l="artist_type_drawer"
//                                 >
//                                   Draftsman
//                                 </a>
//                                 <a
//                                   href="/en/artists/sculptors"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_artists"
//                                   data-ga-l="artist_type_sculptor"
//                                 >
//                                   Sculptor
//                                 </a>
//                               </div>
//                             </div>
//                           </div>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <div
//                             className="accordion scroll-target js-readmore accordion--plus-minus accordion--icon-aligned-left js-navigation-desktop-second-level-accordion"
//                             data-opened-class="accordion--opened"
//                             data-panel-class="accordion__panel"
//                             data-text-container="accordion__title"
//                             data-ga-label="all_artist_badges"
//                           >
//                             <button
//                               type="button"
//                               className="accordion__header js-readmore-toggle navigation-desktop-second-level__link navigation-desktop-second-level__accordion-toggle"
//                               aria-expanded="false"
//                               aria-controls="accordion-792311452"
//                             >
//                               <span className="accordion__title expand-click-area body--m">
//                                 Categories{" "}
//                               </span>
//                               <span className="accordion__toggle-icon body--m">
//                                 <span className="accordion__toggle-icon-text accordion__toggle-icon-text--closed">
//                                   +
//                                 </span>
//                                 <span className="accordion__toggle-icon-text accordion__toggle-icon-text--opened">
//                                   -
//                                 </span>
//                               </span>
//                             </button>
//                             <div
//                               className="accordion__panel js-readmore-content navigation-desktop-second-level__accordion-panel ps-s"
//                               hidden=""
//                               id="accordion-792311452"
//                             >
//                               <div className="accordion__panel-inner">
//                                 <a
//                                   href="/en/painting?highlightedBadge=grand_artists"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_artists"
//                                   data-ga-l="artist_badge_grand_artists"
//                                 >
//                                   Famous Painters
//                                 </a>
//                                 <a
//                                   href="/en/painting?highlightedBadge=best_seller"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_artists"
//                                   data-ga-l="artist_badge_best_seller"
//                                 >
//                                   Bestsellers
//                                 </a>
//                                 <a
//                                   href="/en/painting?highlightedBadge=invest_in"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_artists"
//                                   data-ga-l="artist_badge_invest_in"
//                                 >
//                                   Curator's selection
//                                 </a>
//                                 <a
//                                   href="/en/painting?highlightedBadge=featured_artists"
//                                   className="ga navigation-desktop-second-level__link navigation-link body--m mb-4xs ps-s js-navigation-link"
//                                   data-ga-c="browse_artists"
//                                   data-ga-l="artist_badge_featured_artists"
//                                 >
//                                   Featured Painters
//                                 </a>
//                               </div>
//                             </div>
//                           </div>
//                         </li>{" "}
//                       </ul>
//                     </div>
//                   </div>
//                   <div className="navigation-desktop-second-level__highlights js-nav-highlights">
//                     <div className="navigation-desktop-second-level__title body--subheadline">
//                       Highlights
//                     </div>
//                     <div className="navigation-desktop-second-level__highlights-list">
//                       <a
//                         href="https://www.singulart.com/landing/en/singulart-artists-subscription-ofa87b"
//                         className="navigation-carousel-item navigation-desktop-second-level__highlight ga"
//                         data-navigationcarousel-target="slide"
//                         data-action="click auxclick->navigationCarousel#trackClickEvent"
//                         data-ga-c="browse_artists"
//                         data-ga-l="menu_highlight_custom_artist-subscription-menu"
//                       >
//                         <picture>
//                           <source
//                             type="image/jpeg"
//                             srcSet="https://www.singulart.com/images-sh/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoibWVudUhpZ2hsaWdodFwvYzU3NjBjYjAxNWZjNmJiMWY3Y2QyMTc0MzFmOTEwZDhlMDY3ZWY3Yy02N2FmNzNiYTM5MGJlNi4yODI3NDYwOS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI0MiwiaGVpZ2h0IjozMDIsImZpdCI6ImNvdmVyIiwiYmFja2dyb3VuZCI6bnVsbH0sInRvRm9ybWF0IjoianBlZyJ9fQ==?signature=e5ac97ecc0939f60c91866fc313864a3e32c920700f8f0665747fc1ecc426d1e 242w,https://www.singulart.com/images-sh/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoibWVudUhpZ2hsaWdodFwvYzU3NjBjYjAxNWZjNmJiMWY3Y2QyMTc0MzFmOTEwZDhlMDY3ZWY3Yy02N2FmNzNiYTM5MGJlNi4yODI3NDYwOS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ4NCwiaGVpZ2h0Ijo2MDQsImZpdCI6ImNvdmVyIiwiYmFja2dyb3VuZCI6bnVsbH0sInRvRm9ybWF0IjoianBlZyJ9fQ==?signature=4159b141ae7c28fae9061ee4a63e2d53ae8357e3bcbf3c31bdd95cc57bc27762 484w"
//                             sizes="242px"
//                           />
//                           <img
//                             className="navigation-carousel-item__image loaded"
//                             src="https://www.singulart.com/images/menuHighlight/c5760cb015fc6bb1f7cd217431f910d8e067ef7c-67af73ba390be6.28274609.jpg"
//                             alt="Artists: sell your art worldwide with Singulart"
//                             width={242}
//                             height={302}
//                             loading="lazy"
//                             data-initialized="true"
//                           />
//                         </picture>
//                         <div className="navigation-carousel-item__content">
//                           <div className="navigation-carousel-item__title-wrapper">
//                             <h2 className="heading--s navigation-carousel-item__title">
//                               Artists: sell your art worldwide with Singulart
//                             </h2>
//                             <div className="link-button link-button--contrast-light link-button--medium link-button--with-icon navigation-carousel-item__link">
//                               <span>Discover</span>
//                               <svg
//                                 viewBox="0 0 14 14"
//                                 width={14}
//                                 height={14}
//                                 className="icon"
//                                 aria-hidden="true"
//                               >
//                                 <use href="https://www.singulart.com/assets/assets/build/images/components/atoms/icons/icon-global-defs.d84972f4.svg#icon-global-arrow-right" />
//                               </svg>
//                             </div>
//                           </div>
//                         </div>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="container">
//                   <a
//                     href="/en/artists"
//                     className="ga text-button text-button--contrast-dark text-button--medium mt-s"
//                     data-gal="browse_artists"
//                     data-ga-c="browse_artists"
//                   >
//                     Explore All Artists
//                     <svg
//                       viewBox="0 0 12 12"
//                       width={12}
//                       height={12}
//                       className="icon ms-1 icon--inline"
//                       aria-hidden="true"
//                     >
//                       <use href="https://www.singulart.com/assets/assets/build/images/components/atoms/icons/icon-global-defs.d84972f4.svg#icon-global-arrow-right" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//               <div
//                 className="navigation-desktop-second-level scrollbar js-navigation-second-level-category js-navigation-custom-padding"
//                 id="menu-special-deals"
//                 style={{ paddingLeft: 659 }}
//               >
//                 <div className="navigation-desktop-second-level__content-wrapper navigation-desktop-second-level__content-wrapper--no-wrapper">
//                   <div className="navigation-desktop-second-level__columns-container js-desktop-menu-columns-container">
//                     <div
//                       className="navigation-desktop-second-level__column js-desktop-menu-column"
//                       data-controller="navigationTracking"
//                     >
//                       <strong className="navigation-desktop-second-level__title body--subheadline">
//                         Medium
//                       </strong>
//                       <ul
//                         className="navigation-desktop-second-level__list"
//                         data-navigationtracking-target="list"
//                       >
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/painting?isDiscountExclusive=true"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link js-track-artwork js-track-artwork-link"
//                             data-gal="browse_artworks"
//                             data-ga-c="browse_artworks"
//                             data-ga-name="painting"
//                             data-ga-l="painting"
//                             data-index={1}
//                           >
//                             Painting
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/sculpture?isDiscountExclusive=true"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link js-track-artwork js-track-artwork-link"
//                             data-gal="browse_artworks"
//                             data-ga-c="browse_artworks"
//                             data-ga-name="sculpture"
//                             data-ga-l="sculpture"
//                             data-index={2}
//                           >
//                             Sculpture
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/photography?isDiscountExclusive=true"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link js-track-artwork js-track-artwork-link"
//                             data-gal="browse_artworks"
//                             data-ga-c="browse_artworks"
//                             data-ga-name="photography"
//                             data-ga-l="photography"
//                             data-index={3}
//                           >
//                             Photography
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/drawing?isDiscountExclusive=true"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link js-track-artwork js-track-artwork-link"
//                             data-gal="browse_artworks"
//                             data-ga-c="browse_artworks"
//                             data-ga-name="drawing"
//                             data-ga-l="drawing"
//                             data-index={4}
//                           >
//                             Drawing
//                           </a>
//                         </li>
//                         <li className="navigation-desktop-second-level__item">
//                           <a
//                             href="/en/print?isDiscountExclusive=true"
//                             className="navigation-desktop-second-level__link navigation-link body--m ps-s js-navigation-link js-track-artwork js-track-artwork-link"
//                             data-gal="browse_artworks"
//                             data-ga-c="browse_artworks"
//                             data-ga-name="print"
//                             data-ga-l="print"
//                             data-index={5}
//                           >
//                             Print
//                           </a>
//                         </li>{" "}
//                         <li className="navigation-desktop-second-level__item ps-s">
//                           <a
//                             href="/en/our-artworks?isDiscountExclusive=true"
//                             className="text-button text-button--contrast-dark text-button--medium js-navigation-link js-track-artwork js-track-artwork-link"
//                             data-gal="browse_artworks"
//                             data-ga-c="browse_artworks"
//                             data-ga-name="all_special_deals"
//                             data-ga-l="all_special_deals"
//                           >
//                             Explore All Special Deals
//                             <svg
//                               viewBox="0 0 12 12"
//                               width={12}
//                               height={12}
//                               className="icon ms-1 icon--inline"
//                               aria-hidden="true"
//                             >
//                               <use href="https://www.singulart.com/assets/assets/build/images/components/atoms/icons/icon-global-defs.d84972f4.svg#icon-global-arrow-right" />
//                             </svg>
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   </div>
//   <div className="quick-search-modal-desktop js-quick-search-modal-container-desktop">
//     <div className="quick-search-modal-desktop__form">
//       <div className="js-algolia-desktop-input quick-search-modal-desktop__input-wrapper" />
//       <button className="button button--small button--with-icon button--outlined-brand quick-search-modal-desktop__close-button js-algolia-desktop-close-button">
//         Close
//         <svg
//           viewBox="0 0 12 12"
//           width={12}
//           height={12}
//           className="icon"
//           aria-hidden="true"
//         >
//           <use href="https://www.singulart.com/assets/assets/build/images/components/atoms/icons/icon-global-defs.d84972f4.svg#icon-global-close" />
//         </svg>
//       </button>
//     </div>
//     <div className="quick-search-modal-desktop__content js-algolia-desktop-static-content">
//       <div
//         className="quick-search-modal-desktop__results js-algolia-desktop-results js-track-recent-search-results"
//         data-track-recent-search-impressions="true"
//       />
//     </div>
//   </div>
// </div>

//     </div>
//   )
// }

// export default App




import React from 'react'
import ArtGalleryHeader from './components/ArtGalleryHeader'
import Footer from './components/Footer'
import HomepageHeroGrid from './components/HomepageHeroGrid'
import CategoryTilesSection from './components/CategoryTilesSection'
import PriceRangeCardSection from './components/PriceRangeCardSection'
import CategoryTilesSection1 from './components/CategoryTilesSection1'
import ReassuranceFooterWithCustomIcons from './components/ReassuranceFooterWithCustomIcons'
import FeaturedCollectionsSection from './components/FeaturedCollectionsSection'
import CompanyPurposeSectionWithCustomIcon from './components/CompanyPurposeSection'
import CompanyPurposeSection from './components/CompanyPurposeSection'
import ShopByCategorySectionGrid from './components/ShopByCategorySectionGrid'
import Footerlast from './components/Footerlast'

const App = () => {
  return (
    <div>
      <ArtGalleryHeader/>
      <HomepageHeroGrid/>
      <CategoryTilesSection/>
      <PriceRangeCardSection/>
      {/* <CategoryTilesSection1/> */}
      <FeaturedCollectionsSection/>
      <ShopByCategorySectionGrid/>
      
      <ReassuranceFooterWithCustomIcons/>
     
      <CompanyPurposeSection/>
      {/* <Footerlast/> */}
      
      <Footer/>
    </div>
  )
}

export default App
