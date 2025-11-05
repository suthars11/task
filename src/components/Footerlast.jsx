import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Button,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";

export default function Footerlast() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#3b2359", // Singulart purple
        color: "#b5d3f0", // brand blue
        overflowWrap: "anywhere",
        wordBreak: "normal",
        mt: "6rem",
        pt: "4rem",
      }}
    >
      {/* PRIMARY NAVIGATION */}
      <Box
        sx={{
          borderBottom: "1px solid rgba(255,255,255,0.2)",
          pb: 6,
        }}
      >
        <Container>
          <Grid
            container
            spacing={6}
            sx={{
              display: "grid",
              gridTemplateAreas: {
                xs: `"famous" "creators" "service" "about"`,
                sm: `"famous creators" "service about"`,
                md: `"famous creators service about"`,
              },
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: 4,
            }}
          >
            {/* FAMOUS ARTISTS */}
            <Box sx={{ gridArea: "famous" }}>
              <Typography
                variant="h6"
                sx={{
                  borderBottom: "1px solid rgba(255,255,255,0.3)",
                  pb: 1,
                  mb: 2,
                  fontWeight: 600,
                }}
              >
                Famous Artists on Singulart
              </Typography>
              {[
                "Henri Matisse",
                "Marc Chagall",
                "Pablo Picasso",
                "Salvador Dalí",
                "Banksy",
                "Mr. Brainwash",
                "Shepard Fairey",
              ].map((name) => (
                <Typography key={name} sx={{ mt: 1 }}>
                  <Link
                    href="#"
                    color="inherit"
                    underline="hover"
                    sx={{
                      "&:hover": { textDecorationThickness: "0.1rem" },
                    }}
                  >
                    {name}
                  </Link>
                </Typography>
              ))}
            </Box>

            {/* FOR ARTISTS + GALLERIES */}
            <Box sx={{ gridArea: "creators" }}>
              <Typography
                variant="h6"
                sx={{
                  borderBottom: "1px solid rgba(255,255,255,0.3)",
                  pb: 1,
                  mb: 2,
                  fontWeight: 600,
                }}
              >
                For Artists
              </Typography>
              {[
                { label: "Join Singulart as an Artist", href: "/en/application" },
                { label: "Log in as an Artist", href: "/my-singulart/account/login" },
              ].map((item) => (
                <Typography key={item.label} sx={{ mt: 1 }}>
                  <Link href={item.href} color="inherit" underline="hover">
                    {item.label}
                  </Link>
                </Typography>
              ))}

              <Typography
                variant="h6"
                sx={{
                  borderBottom: "1px solid rgba(255,255,255,0.3)",
                  pb: 1,
                  mt: 4,
                  mb: 2,
                  fontWeight: 600,
                }}
              >
                Galleries
              </Typography>
              {[
                "United States",
                "United Kingdom",
                "Canada",
                "Australia",
              ].map((country) => (
                <Typography key={country} sx={{ mt: 1 }}>
                  <Link href="#" color="inherit" underline="hover">
                    Art galleries in {country}
                  </Link>
                </Typography>
              ))}
            </Box>

            {/* CUSTOMER SERVICE */}
            <Box sx={{ gridArea: "service" }}>
              <Typography
                variant="h6"
                sx={{
                  borderBottom: "1px solid rgba(255,255,255,0.3)",
                  pb: 1,
                  mb: 2,
                  fontWeight: 600,
                }}
              >
                Customer Service
              </Typography>
              {[
                "Contact us",
                "Shipping",
                "Return policy",
                "Customer testimonials",
                "Offer a gift card",
                "Join our trade program",
                "My account",
                "FAQ",
              ].map((label) => (
                <Typography key={label} sx={{ mt: 1 }}>
                  <Link href="#" color="inherit" underline="hover">
                    {label}
                  </Link>
                </Typography>
              ))}
              <Typography sx={{ mt: 1 }}>
                <Link href="tel:+44-20-3695-2251" color="inherit" underline="hover">
                  +44 20 3695 2251
                </Link>
              </Typography>
            </Box>

            {/* ABOUT US */}
            <Box sx={{ gridArea: "about" }}>
              <Typography
                variant="h6"
                sx={{
                  borderBottom: "1px solid rgba(255,255,255,0.3)",
                  pb: 1,
                  mb: 2,
                  fontWeight: 600,
                }}
              >
                About Singulart
              </Typography>
              {[
                { label: "About us", href: "/en/about" },
                {
                  label: "Affiliates",
                  href: "https://www.singulart.com/landing/en/join-singulart-affiliate-program",
                },
                { label: "Our artists", href: "/en/artists" },
                {
                  label: "Singulart Magazine",
                  href: "https://www.singulart.com/en/blog/",
                },
                {
                  label: "Jobs",
                  href: "https://www.welcometothejungle.co/companies/singulart/jobs",
                },
              ].map((item) => (
                <Typography key={item.label} sx={{ mt: 1 }}>
                  <Link
                    href={item.href}
                    color="inherit"
                    underline="hover"
                    target="_blank"
                    rel="noopener"
                  >
                    {item.label}
                  </Link>
                </Typography>
              ))}
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* SECONDARY FOOTER NAV */}
      <Box
        sx={{
          pt: 4,
          pb: 3,
          borderTop: "1px solid rgba(255,255,255,0.2)",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Container>
          <Grid
            container
            spacing={3}
            alignItems="center"
            justifyContent="space-between"
          >
            {/* LANGUAGE / CURRENCY */}
            <Grid item xs={12} md={4}>
              <Typography variant="body1">
                Languages &amp; Currency:{" "}
                <Button
                  sx={{
                    textTransform: "none",
                    color: "#b5d3f0",
                    fontWeight: 600,
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  English | INR
                </Button>
              </Typography>
            </Grid>

            {/* SOCIAL ICONS */}
            <Grid item xs={12} md={4} textAlign="center">
              <IconButton
                href="https://www.facebook.com/SINGULARTofficial/"
                target="_blank"
                sx={{ color: "#b5d3f0" }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href="https://www.instagram.com/singulartofficial/"
                target="_blank"
                sx={{ color: "#b5d3f0" }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                href="https://www.pinterest.fr/singulart0774/"
                target="_blank"
                sx={{ color: "#b5d3f0" }}
              >
                <PinterestIcon />
              </IconButton>
            </Grid>

            {/* COPYRIGHT + LEGAL */}
            <Grid item xs={12} md={4} textAlign={{ xs: "center", md: "right" }}>
              <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)" }}>
                © 2025 Singulart
              </Typography>
              <Box>
                <Link
                  href="https://www.singulart.com/assets/assets/build/docs/cgu_en.184d700d.pdf"
                  target="_blank"
                  rel="noopener"
                  color="inherit"
                  underline="hover"
                  sx={{ mr: 2 }}
                >
                  Legal Notices
                </Link>
                <Link
                  href="https://www.singulart.com/assets/assets/build/docs/cgv_en.bf878128.pdf"
                  target="_blank"
                  rel="noopener"
                  color="inherit"
                  underline="hover"
                >
                  General Terms & Conditions
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
