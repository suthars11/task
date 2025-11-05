import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

export default function Navbar() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: 600, color: "#1a1a1a" }}>
          Singulart
        </Typography>
        <div>
          <Button color="inherit">New In</Button>
          <Button color="inherit">Painting</Button>
          <Button color="inherit">Print</Button>
          <Button color="inherit">Photography</Button>
          <Button color="inherit">Sculpture</Button>
        </div>
        <div>
          <IconButton><FavoriteBorderIcon /></IconButton>
          <IconButton><ShoppingBagOutlinedIcon /></IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}
