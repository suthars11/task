import React, { useState } from 'react';
import {
  Drawer,
  Box,
  Typography,
  Slider,
  FormControlLabel,
  Checkbox,
  Divider,
  IconButton,
  Button
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

function FilterDrawer({ open, onClose }) {
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState({
    all: true,
    under50k: false,
    fiftyTo200k: false,
    twoHundredTo400k: false,
    fourHundredTo800k: false
  });

  const handlePriceRangeChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleCheckboxChange = (event) => {
    setSelectedPriceRanges({
      ...selectedPriceRanges,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: { xs: '100%', sm: 400 },
          p: 3
        }
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
          Filters
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Price Filter Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
          PRICE
        </Typography>
        
        <Box sx={{ px: 1 }}>
          <Slider
            value={priceRange}
            onChange={handlePriceRangeChange}
            valueLabelDisplay="auto"
            min={0}
            max={1000000}
            step={10000}
            valueLabelFormat={(value) => `₹${value.toLocaleString()}`}
            sx={{ mb: 3 }}
          />
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="body2">Min price: ₹{priceRange[0].toLocaleString()}</Typography>
            <Typography variant="body2">Max price: ₹{priceRange[1].toLocaleString()}</Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Price Range Checkboxes */}
        <Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedPriceRanges.all}
                onChange={handleCheckboxChange}
                name="all"
              />
            }
            label="All"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedPriceRanges.under50k}
                onChange={handleCheckboxChange}
                name="under50k"
              />
            }
            label="₹50,000 and under"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedPriceRanges.fiftyTo200k}
                onChange={handleCheckboxChange}
                name="fiftyTo200k"
              />
            }
            label="₹50,000 - ₹200,000"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedPriceRanges.twoHundredTo400k}
                onChange={handleCheckboxChange}
                name="twoHundredTo400k"
              />
            }
            label="₹200,000 - ₹400,000"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedPriceRanges.fourHundredTo800k}
                onChange={handleCheckboxChange}
                name="fourHundredTo800k"
              />
            }
            label="₹400,000 - ₹800,000"
          />
        </Box>
      </Box>

      {/* Additional Filter Sections can be added here */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
          MEDIUM
        </Typography>
        {/* Add medium filter options here */}
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
          SIZE
        </Typography>
        {/* Add size filter options here */}
      </Box>

      {/* Action Buttons */}
      <Box sx={{ display: 'flex', gap: 2, mt: 'auto' }}>
        <Button 
          variant="outlined" 
          fullWidth
          onClick={() => {
            setPriceRange([0, 1000000]);
            setSelectedPriceRanges({
              all: true,
              under50k: false,
              fiftyTo200k: false,
              twoHundredTo400k: false,
              fourHundredTo800k: false
            });
          }}
        >
          Clear All
        </Button>
        <Button 
          variant="contained" 
          fullWidth
          onClick={onClose}
        >
          Apply Filters
        </Button>
      </Box>
    </Drawer>
  );
}

export default FilterDrawer;