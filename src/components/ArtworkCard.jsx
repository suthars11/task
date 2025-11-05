import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip
} from '@mui/material';

function ArtworkCard({ artwork }) {
  return (
    <Card sx={{ maxWidth: 345, cursor: 'pointer' }}>
      <CardMedia
        component="img"
        height="300"
        image={artwork.image}
        alt={artwork.title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {artwork.artist}
        </Typography>
        <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
          {artwork.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {artwork.size}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
          <Typography variant="h6" component="p" sx={{ fontWeight: 'bold' }}>
            {artwork.price}
          </Typography>
          {artwork.originalPrice && (
            <>
              <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                {artwork.originalPrice}
              </Typography>
              <Chip 
                label={artwork.discount} 
                size="small" 
                color="error" 
                variant="outlined"
              />
            </>
          )}
        </Box>
        
        {artwork.timeLeft && (
          <Typography variant="caption" color="error" sx={{ mt: 1, display: 'block' }}>
            {artwork.timeLeft}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default ArtworkCard;