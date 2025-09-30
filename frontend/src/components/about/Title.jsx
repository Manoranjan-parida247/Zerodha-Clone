import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'

const Title = () => {
  return (
    <Box sx={{mx:"250px",py:"100px", display:"flex", justifyContent:"space-between", alignItems:"center", flexDirection:"column"}}>
        <Typography variant='h4' sx={{opacity:0.8}} >We pioneered the discount broking model in India.</Typography>
        <Typography variant='h4' sx={{opacity:0.8}} >Now, we are breaking ground with our technology.</Typography>
    </Box>
  )
}

export default Title