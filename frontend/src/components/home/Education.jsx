import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import React from 'react'
// import educationSvg from 'frontend/public/images/education.svg/'
import { education } from '../../utils/constant'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const Education = () => {
  return (
    <Box sx={{pl:"20px", pr:"20px", pb:"100px"}}>
        <Grid container spacing={20} sx={{ ml: "250px", mr: "200px" }}>
            <Grid size={{ xs: 12, md: 6 }} sx={{display:"flex", justifyContent:"flex-end"}}>
                <img src='images/education.svg' style={{maxWidth:"432px"}} alt="education" />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>

                <Box>
                    <Typography variant='h4' sx={{mb:"20px"}}>{education.title}</Typography>
                    {
                        education.features.map((item)=>(
                            <Box key={item.id}>
                                <Typography variant='body2' sx={{mb:"16px", opacity:0.7}}>{item.desc}</Typography>
                                <Button sx={{mb:"12px"}} endIcon={<ArrowForwardOutlinedIcon />}>{item.link}</Button>
                            </Box>
                        ))
                    }
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Education