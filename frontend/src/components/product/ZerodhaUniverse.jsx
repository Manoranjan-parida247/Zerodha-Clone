import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import React from 'react'

const ZerodhaUniverse = () => {
    return (
        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", pb:5, flexDirection:"column", gap:2}}>
            <Typography variant='h5' sx={{ pt: 2 }}>The Zerodha Universe</Typography>
            <Typography variant='body2'>Extend your trading and investment experience even further with our partner platforms</Typography>
            <Box sx={{display:"flex", justifyContent:"space-around", gap:8}}>
                <Box sx={{display:"flex", flexDirection:"column",gap:8, justifyContent:"space-between", p:2}}>
                    <Box sx={{display:"flex", flexDirection:"column", gap:2}}>
                        <img src='images/zerodhaFundhouse.png' style={{width:"200px"}} alt='Zerodha fund house' />
                        <Typography variant='body2' sx={{width:"250px"}}>Our asset management venture
                            that is creating simple and transparent index
                            funds to help you save for your goals.
                        </Typography>
                    </Box>
                    <Box sx={{display:"flex", flexDirection:"column", gap:2}}>
                        <img src='images/streakLogo.png' style={{width:"200px"}} alt='Streak' />
                        <Typography variant='body2' sx={{width:"250px"}}>Our asset management venture
                            that is creating simple and transparent index
                            funds to help you save for your goals.
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{display:"flex", flexDirection:"column",gap:8, justifyContent:"space-between", p:2}}>
                    <Box sx={{display:"flex", flexDirection:"column", gap:2}}>
                        <img src='images/sensibullLogo.svg' style={{width:"200px"}} alt='Zerodha fund house' />
                        <Typography variant='body2' sx={{width:"250px"}}>Our asset management venture
                            that is creating simple and transparent index
                            funds to help you save for your goals.
                        </Typography>
                    </Box>
                    <Box sx={{display:"flex", flexDirection:"column", gap:2}}>
                        <img src='images/smallcaseLogo.png' style={{width:"200px"}} alt='Zerodha fund house' />
                        <Typography variant='body2' sx={{width:"250px"}}>Our asset management venture
                            that is creating simple and transparent index
                            funds to help you save for your goals.
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{display:"flex", flexDirection:"column",gap:8, justifyContent:"space-between", p:2}}>
                    <Box sx={{display:"flex", flexDirection:"column", gap:2}}>
                        <img src='images/goldenpiLogo.png' style={{width:"200px"}} alt='Zerodha fund house' />
                        <Typography variant='body2' sx={{width:"250px"}}>Our asset management venture
                            that is creating simple and transparent index
                            funds to help you save for your goals.
                        </Typography>
                    </Box>
                    <Box sx={{display:"flex", flexDirection:"column", gap:2}}>
                        <img src='images/dittoLogo.png' style={{width:"200px"}} alt='Zerodha fund house' />
                        <Typography variant='body2' sx={{width:"250px"}}>Our asset management venture
                            that is creating simple and transparent index
                            funds to help you save for your goals.
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Button variant='contained'> Sign up for free</Button>
        </Box>
    )
}

export default ZerodhaUniverse