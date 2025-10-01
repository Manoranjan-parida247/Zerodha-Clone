import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import React from 'react'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

export const CommonText = ({heading, desc, btn1, btn2, playStore, appleStore}) => {
  return (
    <Box sx={{display:"flex", flexDirection:"column", gap:2,  pt:"50px"}}>
        {heading && <Typography variant='h5'>{heading}</Typography>}
        {desc && <Typography variant='body1' sx={{width:"360px"}}>{desc}</Typography>}
        <Box sx={{display:"flex", gap:5}}>
            <Button endIcon={btn1 && <ArrowForwardOutlinedIcon />}>{btn1}</Button>
            <Button endIcon={btn2 && <ArrowForwardOutlinedIcon />}>{btn2}</Button>
        </Box>
        <Box sx={{display:"flex", gap:3}}>
            <img src={playStore} alt='playstore' style={{width:"150px", height:"50px"}} />
            <img src={appleStore} alt='playstore' style={{width:"150px", height:"50px"}} />
        </Box>
    </Box>
  )
}
