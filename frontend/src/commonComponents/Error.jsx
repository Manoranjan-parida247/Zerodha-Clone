import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'

const Error = () => {
  return (
    <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", minHeight:"100vh"}}>
        <Typography variant='h2' color='primary'>404 Page Not Found</Typography>
        <Typography>The page you are looking for is not exist</Typography>
    </Box>
  )
}

export default Error