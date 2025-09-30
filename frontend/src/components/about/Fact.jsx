import Grid from '@mui/material/Grid'
import React from 'react'
import { factData } from '../../utils/constant'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
 const Fact = () => {
  return (
    <Box>
        <Grid container spacing={2}  >
            <Grid size={{xs:12, md:6}} sx={{display:"flex", alignItems:"flex-end", flexDirection:"column"}}>
                {
                    factData.leftSide.map((item) => (
                        <Typography key={item.id} variant='body1' maxWidth="432px" mb={5} fontSize={18}>{item.desc}</Typography>
                    ))
                }
            </Grid>
            <Grid size={{xs:12, md:6}}>
                {
                    factData.rightSide.map((item) => (
                        <Typography key={item.id} variant='body2' maxWidth="432px" mb={5} fontSize={18}>{item.desc}</Typography>
                    ))
                }
            </Grid>
        </Grid>
    </Box>
  )
}

export default Fact