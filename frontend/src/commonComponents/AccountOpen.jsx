import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import React from 'react'

const AccountOpen = () => {
  return (
    <Box sx={{pt:"40px", pb:"80px"}}>
    <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", gap:3, flexDirection:"column"}}>
        <Typography variant='h3'>Open a Zerodha account</Typography>
        <Typography variant='body2' > Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</Typography>
        <Button variant='contained'>Sign up for free</Button>
    </Box>
    </Box>
  )
}

export default AccountOpen