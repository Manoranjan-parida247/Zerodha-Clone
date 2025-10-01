import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'

const Hero = () => {
  return (
    <Box sx={{py:"100px", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", gap:3}}>
        <Typography variant='h4'>Zerodha Products</Typography>
        <Typography variant='h6'>Sleek, modern, and intuitive trading platforms</Typography>
        <Typography variant='body1'>Check out our investment offerings →</Typography>
    </Box>
  )
}

export default Hero