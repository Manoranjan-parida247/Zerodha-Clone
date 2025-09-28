import Box from '@mui/material/Box'
import React from 'react'
import homeHero from '../../assets/images/homeHero.png'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
const Hero = () => {
    return (
        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
            <img src={homeHero} alt="home-hero" style={{ maxWidth: "65%", height: "auto",marginBottom:"30px" }} />
            <Typography sx={{pb:"30px"}} variant='h3'>Invest in everything</Typography>
            <Typography sx={{mb:"20px"}} variant='body2'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</Typography>
            <Button sx={{mb:"120px"}} variant='contained'>Sign up for free</Button>
        </Box>
    )
}

export default Hero