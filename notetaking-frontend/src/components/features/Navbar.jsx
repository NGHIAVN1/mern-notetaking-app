import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// import NightlightIcon from '@mui/icons-material/Nightlight';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import {useState} from "react";
//import themeOptions from "./Theme.jsx";
export default function Header({children, mode}) {
  
  let theme;
  if(mode === "dark"){
    theme = "default"
  }else{
  theme = "inherit"
  }
  console.log(theme)
  return (
    <Box sx={{ flexGrow: 1, padding: "0" }}>
      <AppBar position="fixed" color={theme}>
        <Toolbar variant="dense">
          {children}
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

