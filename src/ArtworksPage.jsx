import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import Filters from "../components/Filters";
import ArtCard from "../components/ArtCard";

const artworks = [
  { image: "https://picsum.photos/300?1", title: "Untitled I", artist: "Artist A" },
  { image: "https://picsum.photos/300?2", title: "Still Life", artist: "Artist B" },
  { image: "https://picsum.photos/300?3", title: "Abstract Flow", artist: "Artist C" },
  { image: "https://picsum.photos/300?4", title: "Modern Portrait", artist: "Artist D" },
];

export default function ArtworksPage() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" fontWeight={700}>Original Artworks for Sale</Typography>
      <Typography variant="subtitle1" color="text.secondary" mt={1}>
        Discover a selection of original artworks by contemporary artists from around the world.
      </Typography>

      <Filters />

      <Grid container spacing={3} mt={3}>
        {artworks.map((art, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <ArtCard {...art} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
