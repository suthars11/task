import React from "react";
import { Box, Button, MenuItem, Select } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";

export default function Filters() {
  return (
    <Box sx={{ display: "flex", gap: 2, alignItems: "center", mt: 2 }}>
      <Button variant="outlined" startIcon={<TuneIcon />}>Filters</Button>
      <Select defaultValue="medium" size="small">
        <MenuItem value="price">Price</MenuItem>
        <MenuItem value="medium">Medium</MenuItem>
        <MenuItem value="size">Size</MenuItem>
      </Select>
    </Box>
  );
}
