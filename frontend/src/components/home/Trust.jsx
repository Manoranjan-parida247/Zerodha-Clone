import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react'
import { features } from '../../utils/constant';
import ecoSystem from '../../assets/images/ecosystem.png'
import Button from '@mui/material/Button';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import pressLogos from '../../assets/images/press-logos.png'

const Trust = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", mb: 20 }}>
      <Box sx={{ display: "flex", justifyContent: "space-evenly", mb: 10 }}>
        <Grid container spacing={3} sx={{ ml: "250px", mr: "250px" }}>
          <Grid size={{ xs: 12, md: 6 }} >
            <Typography variant='h4' sx={{ mb: "40px", ml: "150px" }} >Trust with confidence</Typography>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "flex-end", flexDirection: "column" }}>
              {
                features.map((item, idx) => (
                  <Box key={idx} sx={{ mt: "5px", mb: "32px", maxWidth: "500px" }} >
                    <Typography variant='h5'>{item.title}</Typography>
                    <Typography variant='body1' sx={{ opacity: "0.7" }}>{item.description}</Typography>
                  </Box>
                ))
              }
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex", alignItems: "center", flexDirection: "column", maxWidth: "60%" }}>
            <img src={ecoSystem} style={{ maxWidth: "90%" }} alt="The Zerodha Universe" />
            <Box>
              <Button endIcon={<ArrowForwardOutlinedIcon />} sx={{ mr: "10px" }}>Explore our products</Button>
              <Button endIcon={<ArrowForwardOutlinedIcon />}>Try Kite demo</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <img src={pressLogos} alt='press-logo' />
    </Box>
  )
}

export default Trust;