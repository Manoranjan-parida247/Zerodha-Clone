import Box from '@mui/material/Box'
import React from 'react'
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <Box sx={{display:"flex", justifyContent:"space-around", alignItems:"center", py:3,  border:"1px solid #ebf0f5"}}>
      <img src='images/logo.svg' alt='logo' style={{ width: "150px",height:"18px" }} />
      <Box sx={{display:"flex", gap:4, fontSize:"18px", alignItems:"center", opacity:0.7}}>
        <NavLink  to="/signup" style={({isActive}) => ({color: isActive ? "blue" : "black", textDecoration:"none"})}>Signup</NavLink>
        <NavLink to="/about" style={({isActive}) => ({color: isActive ? "blue" : "black", textDecoration:"none"})}>About</NavLink>
        <NavLink to="/product" style={({isActive}) => ({color: isActive ? "blue" : "black" , textDecoration:"none"})}>Product</NavLink>
        <NavLink to="/pricing" style={({isActive}) => ({color: isActive ? "blue" : "black" , textDecoration:"none"})}>Pricing</NavLink>
        <NavLink to="support" style={({isActive}) => ({color: isActive ? "blue" : "black" , textDecoration:"none"})}>Support</NavLink>
        <Box><MenuIcon /></Box>
      </Box>
    </Box>
  )
}

export default Navbar
