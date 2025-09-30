import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import React from 'react'

const People = () => {
  return (
    <Box>
      <Typography variant='h3' sx={{display:"flex", justifyContent:"center", alignItems:"center", pb:4}}>People</Typography>
        <Grid container spacing={5} sx={{ ml: "250px", mr: "200px" }}>
            
            <Grid size={{ xs: 12, md: 6 }} sx={{p:5}} >
              <Box sx={{display:"flex",flexDirection:"column", alignItems:"flex-end",}}>
                <Box sx={{ textAlign: "center" }}>
                <img src='images/nithinKamath.jpg' style={{width:"295px", borderRadius:"50%"}} alt='people'/>
                <Typography variant='h5'>Nithin Kamath</Typography>
                <Typography variant='h6' sx={{opacity:0.8}}>Founder, CEO</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} sx={{p:5}} >
              <Typography variant='body1' sx={{pb:3, opacity:0.8}}>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</Typography>
              <Typography variant='body1' sx={{pb:3, opacity:0.8}}>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</Typography>
              <Typography variant='body1' sx={{pb:3, opacity:0.8}}>Playing basketball is his zen.</Typography>
              <Typography variant='body1' sx={{pb:3, opacity:0.8}}>Connect on Homepage / TradingQnA / Twitter</Typography>
            </Grid>
        </Grid>
    </Box>
  )
}

export default People