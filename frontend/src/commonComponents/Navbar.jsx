import Box from '@mui/material/Box'
import React from 'react'
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
  return (
    <Box sx={{display:"flex", justifyContent:"space-around", alignItems:"center", py:3,  border:"1px solid #ebf0f5"}}>
      <img src='images/logo.svg' alt='logo' style={{ width: "150px",height:"18px" }} />
      <Box sx={{display:"flex", gap:4, fontSize:"18px", alignItems:"center", opacity:0.7}}>
        <Box>Signup</Box>
        <Box>About</Box>
        <Box>Product</Box>
        <Box>Pricing</Box>
        <Box>Support</Box>
        <Box><MenuIcon /></Box>
      </Box>
    </Box>
  )
}

export default Navbar
