import { Box, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'; 
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <Box
      sx={{ backgroundColor:'#1A1A19', color: 'white', p:3, textAlign:'center', position:'static', bottom:'0px', width:'100%'}}
    >
      <Box
        sx={{my:2,
          '& svg': {
            fontSize: '35px',
            mr:2,
            cursor: 'pointer',
          },
          '& svg:hover':{
            color:'goldenrod',
          },
          '& svg:active':{
            transform: 'translateX(5px)'
          }
        }}
      >
        <InstagramIcon/>
        <TwitterIcon/>
        <LinkedInIcon/>
        <YouTubeIcon/>
      </Box>

      <Typography
        variant='h5'
        sx={{
          "@media (max-width: 600px)":{
            fontSize: '1rem'
          }
        }}
      >
        All Rights Reserved &copy; TechMaster.com
      </Typography>
    </Box>
  )
}

export default Footer