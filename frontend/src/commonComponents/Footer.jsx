import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import React from 'react'
import { footerData } from '../utils/constant'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
const Footer = () => {
    return (
        <Box sx={{bgcolor: "#ebf0f5",}}>
            <Box sx={{  pt: "30px", mb: "40px" }}>
                <Grid container spacing={2} sx={{ display: "flex", justifyContent: "space-evenly" }}>
                    <Grid size={{ xs: 12, md: 2 }}>
                        <img src={footerData.logo} style={{ width: "152px", paddingBottom: "10px", paddingTop: "10px" }} alt='logo' />
                        <Typography variant='body2' sx={{ opacity: 0.7, maxWidth: "240px" }} >{footerData.copyRights}</Typography>
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            {footerData.socials.map((item) => (
                                <IconButton key={item.id} sx={{ width: "18px" }}>
                                    {item.iconLink}
                                </IconButton>
                            ))}
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 2 }}>
                        <Typography variant='h2' sx={{ fontSize: "24px", mb: "10px" }}>Account</Typography>
                        <Box>
                            {
                                footerData.account.map((item) => (
                                    <Typography key={item.id} sx={{ opacity: 0.6 }}>{item.text}</Typography>
                                ))
                            }
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 2 }}>
                        <Typography variant='h3' sx={{ fontSize: "24px", mb: "10px" }}>Support</Typography>
                        <Box>
                            {
                                footerData.support.map((item) => (
                                    <Typography key={item.id} sx={{ opacity: 0.6 }}>{item.text}</Typography>
                                ))
                            }
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 2 }}>
                        <Typography variant='h3' sx={{ fontSize: "24px", mb: "10px" }}>Company</Typography>
                        <Box>
                            {
                                footerData.company.map((item) => (
                                    <Typography key={item.id} sx={{ opacity: 0.6 }}>{item.text}</Typography>
                                ))
                            }
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 2 }}>
                        <Typography variant='h3' sx={{ fontSize: "24px", mb: "10px" }}>Quick Links</Typography>
                        <Box>
                            {
                                footerData.quickLinks.map((item) => (
                                    <Typography key={item.id} sx={{ opacity: 0.6 }}>{item.text}</Typography>
                                ))
                            }
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                {
                    footerData.description.map((item)=>(
                        <Typography key={item.id} variant='body2' sx={{mb:"12px", px:5, opacity:0.5}}>{item.desc}</Typography>
                    ))
                }
            </Box>
            <Box sx={{display:"flex", justifyContent:"space-evenly", p:"24px",  ml:"200px", mr:"200px", }}>
                {footerData.features.map((item)=>(
                    <Box key={item.id} sx={{opacity:0.5,cursor:"pointer"}}>{item.text}</Box>
                ))}
            </Box>
        </Box>
    )
}

export default Footer