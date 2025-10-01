import Box from '@mui/material/Box'
import React from 'react'
import CommonImage from './CommonImage'
import { CommonText } from './CommonText'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const TechStack = () => {
    return (
        <Box>
            {/* Kite */}
            <Grid container spacing={5} sx={{ display: "flex", justifyContent: "space-evenly", pb: "80px" }}>
                <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
                    <CommonImage path="images/kite.png" alt="kite" width="520px" />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex", flexDirection: "column", gap: 2, pt: "50px" }}>
                    <CommonText heading="Kite" desc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." btn1="Try demo" btn2="Learn more" playStore="images/googlePlayBadge.svg" appleStore="images/appstoreBadge.svg" />
                </Grid>
            </Grid>

            {/* console */}
            <Grid container spacing={5} sx={{ display: "flex", justifyContent: "space-evenly", pb: "80px" }}>
                <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end",  pt: "200px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }} >
                        <Typography variant='h5'>Console</Typography>
                        <Typography variant='body1' sx={{ width: "360px" }}>The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.</Typography>
                        <Button sx={{width:"150px", p:0}} endIcon={<ArrowForwardOutlinedIcon />}>Learn more</Button>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} >
                    <img src='images/kiteconnect.png' style={{ width: "535px" }} alt='console' />
                </Grid>
            </Grid>

            {/* coin */}
            <Grid container spacing={5} sx={{ display: "flex", justifyContent: "space-evenly", pb: "80px" }}>
                <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
                    <CommonImage path="images/coin.png" alt="coin" width="575px" />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex", flexDirection: "column", gap: 2, pt: "50px" }}>
                    <CommonText heading="Coin" desc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." btn1="Coin"  playStore="images/googlePlayBadge.svg" appleStore="images/appstoreBadge.svg" />
                </Grid>
            </Grid>

            {/* Kite Connect API */}
            <Grid container spacing={5} sx={{ display: "flex", justifyContent: "space-evenly", pb: "80px" }}>
                <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end",  pt: "200px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }} >
                        <Typography variant='h5'>Kite Connect API</Typography>
                        <Typography variant='body1' sx={{ width: "360px" }}>Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.</Typography>
                        <Button sx={{width:"150px", p:0}} endIcon={<ArrowForwardOutlinedIcon />}>Kite Connect</Button>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} >
                    <img src='images/console.png' style={{ width: "625px" }} alt='console' />
                </Grid>
            </Grid>

            {/* Varsity mobile */}
            <Grid container spacing={5} sx={{ display: "flex", justifyContent: "space-evenly", pb: "80px" }}>
                <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
                    <CommonImage path="images/varsity.png" alt="varsity" width="520px" />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex", flexDirection: "column", gap: 2, pt: "50px" }}>
                    <CommonText heading="Varsity mobile" desc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." btn1="Try demo" btn2="Learn more" playStore="images/googlePlayBadge.svg" appleStore="images/appstoreBadge.svg" />
                </Grid>
            </Grid>

            <Grid container sx={{pb:"80px"}}>
                <Grid size={{xs:12}} sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <Typography variant='h6' >Want to know more about our technology stack? Check out the Zerodha.tech blog.</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default TechStack