import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  IconButton,
  Button,
  InputBase,
  Menu,
  MenuItem,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  Paper,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Collapse,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Search,
  Person,
  Favorite,
  ShoppingBag,
  ExpandMore,
  ExpandLess,
  Close,
  ArrowForward,
} from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';

// Styled components
const SearchContainer = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: 600,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  borderRadius: theme.shape.borderRadius,
  margin: '0 auto',
}));

const SearchInput = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  padding: theme.spacing(1, 2),
}));

const AnimatedPlaceholder = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: 16,
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.text.secondary,
  pointerEvents: 'none',
}));

const NavigationMenu = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(4),
  minHeight: 400,
}));

const CategorySection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const HighlightCard = styled(Card)(({ theme }) => ({
  height: '100%',
  cursor: 'pointer',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

const ArtGalleryHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [searchOpen, setSearchOpen] = useState(false);
  const [wishlistAnchor, setWishlistAnchor] = useState(null);
  const [accountAnchor, setAccountAnchor] = useState(null);
  const [navMenu, setNavMenu] = useState(null);
  const [mobileDrawer, setMobileDrawer] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});

  const navigationItems = [
    { label: 'New In', id: 'new_in' },
    { label: 'Painting', id: 'painting' },
    { label: 'Print', id: 'print' },
    { label: 'Photography', id: 'photography' },
    { label: 'Sculpture', id: 'sculpture' },
    { label: 'Drawing', id: 'drawing' },
    { label: 'Artists', id: 'artists' },
    { label: 'Special deals', id: 'special-deals', highlight: true },
  ];

  const wishlistItems = [
    {
      title: 'My Favorite Artworks',
      description: 'Your Favorites are only temporarily saved. To keep them saved, create your account on Singulart!',
    }
  ];

  const handleCategoryToggle = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const renderNavigationContent = (menuId) => {
    const content = {
      new_in: (
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <CategorySection>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                New Artworks
              </Typography>
              <List>
                {['Under ₹25,000', '₹25,000-₹50,000', '₹50,000-₹250,000', '₹250,000-₹1,000,000', 'Over ₹1,000,000'].map((item, index) => (
                  <ListItem key={index} disableGutters>
                    <Button color="inherit" sx={{ justifyContent: 'flex-start', px: 1 }}>
                      {item}
                    </Button>
                  </ListItem>
                ))}
              </List>
              <Button endIcon={<ArrowForward />} sx={{ mt: 1 }}>
                Explore all artworks
              </Button>
            </CategorySection>
          </Grid>
          <Grid item xs={12} md={3}>
            <CategorySection>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                New Collections
              </Typography>
              <List>
                {['Forms in acceleration', 'Modern mythology', 'Contemporary minimalism', 'Futurist landscapes', 'Rest in motion'].map((item, index) => (
                  <ListItem key={index} disableGutters>
                    <Button color="inherit" sx={{ justifyContent: 'flex-start', px: 1 }}>
                      {item}
                    </Button>
                  </ListItem>
                ))}
              </List>
              <Button endIcon={<ArrowForward />} sx={{ mt: 1 }}>
                Explore All Collections
              </Button>
            </CategorySection>
          </Grid>
          <Grid item xs={12} md={3}>
            <CategorySection>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                New artists
              </Typography>
              <List sx={{ maxHeight: 300, overflow: 'auto' }}>
                {[
                  'José Antonio Garrucho', 'Julien Hayot', 'NUPUR JHA', 'Enzo FORGIONE', 
                  'T Turban', 'Juan Pinilla Pinilla Gonzalez', 'Anthony Agbovi', 
                  'Florian Tillack', 'Ann Capitano', 'ph nos'
                ].map((artist, index) => (
                  <ListItem key={index} disableGutters>
                    <Button color="inherit" sx={{ justifyContent: 'flex-start', px: 1 }}>
                      {artist}
                    </Button>
                  </ListItem>
                ))}
              </List>
              <Button endIcon={<ArrowForward />} sx={{ mt: 1 }}>
                Explore all artists
              </Button>
            </CategorySection>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Highlights
              </Typography>
              <HighlightCard>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://www.singulart.com/images/collections/v2/pictures/cropped/list/base/19773_list_338d31131edb23d04f30796e1c76b1cc.jpeg"
                  alt="Maximalism"
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Maximalism
                  </Typography>
                  <Button endIcon={<ArrowForward />} color="primary">
                    Discover
                  </Button>
                </CardContent>
              </HighlightCard>
            </Box>
          </Grid>
        </Grid>
      ),
      // Add other menu contents similarly...
    };

    return content[menuId] || (
      <Typography>Menu content coming soon...</Typography>
    );
  };

  return (
    <>
      <AppBar position="static" color="default" elevation={1}>
        {/* Top Bar */}
        <Toolbar sx={{ py: 2 }}>
          <Container maxWidth="xl" sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            {/* Logo */}
            <Box sx={{ flexShrink: 0 }}>
              <img
                src="https://www.singulart.com/assets/assets/build/images/logos/logo-rebrand-line-white-bg.4e298f4e.svg"
                alt="SINGULART Gallery | Buy art online"
                style={{ height: 28, width: 'auto' }}
              />
            </Box>

            {/* Search Bar - Desktop */}
            {!isMobile && (
              <Box sx={{ flex: 1, maxWidth: 600, position: 'relative' }}>
                <SearchContainer>
                  <SearchInput
                    placeholder=""
                    startAdornment={<Search sx={{ ml: 2, mr: 1, color: 'text.secondary' }} />}
                  />
                </SearchContainer>
                <AnimatedPlaceholder>
                  <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                    {/* Search for{' '} */}
                    <Box component="span" sx={{ ml: 4, color: 'primary.main' }}>
                      
                    </Box>
                  </Typography>
                </AnimatedPlaceholder>
              </Box>
            )}

            {/* Quick Access */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 'auto' }}>
              {/* Sell My Art Button */}
              <Button
                variant="outlined"
                color="primary"
                size="small"
                sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
              >
                Sell my art
              </Button>

              {/* Account */}
              <IconButton
                color="inherit"
                onClick={(e) => setAccountAnchor(e.currentTarget)}
              >
                <Person />
              </IconButton>

              {/* Wishlist */}
              <IconButton
                color="inherit"
                onClick={(e) => setWishlistAnchor(e.currentTarget)}
              >
                <Badge badgeContent={0} color="error">
                  <Favorite />
                </Badge>
              </IconButton>

              {/* Cart */}
              <IconButton color="inherit">
                <Badge badgeContent={0} color="error">
                  <ShoppingBag />
                </Badge>
              </IconButton>

              {/* Mobile Search */}
              {isMobile && (
                <IconButton color="inherit" onClick={() => setSearchOpen(true)}>
                  <Search />
                </IconButton>
              )}

              {/* Mobile Menu */}
              {isMobile && (
                <IconButton color="inherit" onClick={() => setMobileDrawer(true)}>
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          </Container>
        </Toolbar>

        {/* Navigation Bar */}
        {!isMobile && (
          <Toolbar variant="dense" sx={{ backgroundColor: 'background.paper', borderTop: 1, borderColor: 'divider' }}>
            <Container maxWidth="xl">
              <Box sx={{ display: 'flex', gap: 4 }}>
                {navigationItems.map((item) => (
                  <Button
                    key={item.id}
                    color="inherit"
                    onMouseEnter={(e) => setNavMenu({ anchor: e.currentTarget, id: item.id })}
                    sx={{
                      color: item.highlight ? 'primary.main' : 'text.primary',
                      fontWeight: item.highlight ? 'bold' : 'normal',
                      '&:hover': {
                        backgroundColor: 'action.hover',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            </Container>
          </Toolbar>
        )}
      </AppBar>

      {/* Navigation Menu Dropdown */}
      <Menu
        anchorEl={navMenu?.anchor}
        open={Boolean(navMenu)}
        onClose={() => setNavMenu(null)}
        MenuListProps={{ 
          onMouseLeave: () => setNavMenu(null),
          sx: { py: 0, minWidth: 800 }
        }}
        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      >
        <NavigationMenu>
          {navMenu && renderNavigationContent(navMenu.id)}
        </NavigationMenu>
      </Menu>

      {/* Wishlist Menu */}
      <Menu
        anchorEl={wishlistAnchor}
        open={Boolean(wishlistAnchor)}
        onClose={() => setWishlistAnchor(null)}
        PaperProps={{ sx: { width: 320, p: 2 } }}
      >
        {wishlistItems.map((item, index) => (
          <Box key={index}>
            <Typography variant="h6" align="center" gutterBottom>
              {item.title}
            </Typography>
            <Typography variant="body2" align="center" color="text.secondary" paragraph>
              {item.description}
            </Typography>
            <Button variant="outlined" fullWidth sx={{ mb: 2 }}>
              Create an account
            </Button>
            <Typography variant="body2" align="center">
              Already have an account?
              <br />
              <Button color="primary" size="small">
                Sign in
              </Button>
            </Typography>
          </Box>
        ))}
      </Menu>

      {/* Account Menu */}
      <Menu
        anchorEl={accountAnchor}
        open={Boolean(accountAnchor)}
        onClose={() => setAccountAnchor(null)}
      >
        <MenuItem onClick={() => setAccountAnchor(null)}>Sign up</MenuItem>
        <MenuItem onClick={() => setAccountAnchor(null)}>Login</MenuItem>
      </Menu>

      {/* Mobile Search Drawer */}
      <Drawer
        anchor="top"
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        PaperProps={{ sx: { p: 2 } }}
      >
        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
          <SearchContainer sx={{ flex: 1 }}>
            <SearchInput
              placeholder="Search for any artwork, style, artist name, color..."
              autoFocus
            />
          </SearchContainer>
          <IconButton onClick={() => setSearchOpen(false)}>
            <Close />
          </IconButton>
        </Box>
      </Drawer>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="left"
        open={mobileDrawer}
        onClose={() => setMobileDrawer(false)}
        PaperProps={{ sx: { width: 280 } }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Menu
          </Typography>
          <List>
            {navigationItems.map((item) => (
              <Box key={item.id}>
                <ListItem 
                  button 
                  onClick={() => handleCategoryToggle(item.id)}
                  sx={{ color: item.highlight ? 'primary.main' : 'text.primary' }}
                >
                  <ListItemText primary={item.label} />
                  {expandedCategories[item.id] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={expandedCategories[item.id]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem sx={{ pl: 4 }}>
                      <ListItemText primary="Mobile menu items would go here..." />
                    </ListItem>
                  </List>
                </Collapse>
                <Divider />
              </Box>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

// Menu icon component for mobile
const MenuIcon = () => (
  <Box sx={{ width: 24, height: 24, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    <Box sx={{ height: 2, backgroundColor: 'currentColor', borderRadius: 1 }} />
    <Box sx={{ height: 2, backgroundColor: 'currentColor', borderRadius: 1 }} />
    <Box sx={{ height: 2, backgroundColor: 'currentColor', borderRadius: 1 }} />
  </Box>
);

export default ArtGalleryHeader;