import Box from '@mui/material/Box'
import React from 'react'

const CommonImage = ({width, path, alt}) => {
  return (
    <Box >
        <img src={path} style={{width:width}} alt={alt}  />
    </Box>
  )
}

export default CommonImage