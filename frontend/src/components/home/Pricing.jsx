import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import React from 'react'
import { pricing } from '../../utils/constant'
import Button from '@mui/material/Button';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const Pricing = () => {
    return (
        <Box sx={{pl:"20px",pr:"20px", pb: "120px"}}>
            <Grid container spacing={2} sx={{ ml: "275px", mr: "175px", p: 2 }}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant='h4' sx={{mb:"16px"}}>{pricing.title}</Typography>
                    <Typography variant='body1' sx={{ opacity: 0.9, mb:"15px" }}>{pricing.description}</Typography>
                    <Button endIcon={<ArrowForwardOutlinedIcon />}>See pricing </Button>

                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ display: "flex" }}>
                        {
                            pricing.features.map((item, idx) => (
                                <Box key={idx} sx={{ display: "flex" }}>
                                    <img src={item.img} style={{ width: "120px", height: "90px" }} alt="imgage" />
                                    <Typography variant='body1' sx={{fontSize:"10px", display:"flex", alignItems:"center", pl:"-20px"}}>{item.text}</Typography>
                                </Box>
                            ))
                        }</Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Pricing