import React, { useState } from 'react'
import {AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography} from "@mui/material"
import FastfoodIcon from '@mui/icons-material/Fastfood';
import "../../styles/HeaderStyles.css"
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../images/logo.svg'

const Header = () => {

  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const drawer = (
    <Box 
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center' }}
    >
      <Typography 
        color='inherit'
        backgroundColor='black'
        variant='h6'
        component='div'
        sx={{ flexGrow: 1 }}
        margin='10px 0px'
        
      >
        {/* <FastfoodIcon/>
        My Restaurant  */}
        <img src={Logo} alt='Logo' width={'200px'} height={'100px'}  />
      </Typography>
      <Divider/>
        <ul className="mobile-navigation">
          <li> <NavLink activeClassName='active' to={"/"}> Home </NavLink></li>
          <li> <NavLink to={"/menu"}> Menu </NavLink></li>
          <li> <NavLink to={"/about"}> About </NavLink></li>
          <li> <NavLink to={"/contact"}> Contact </NavLink></li>
        </ul>
    </Box>
  )

  return (
    <Box> 
      <AppBar component={'nav'} sx={{bgcolor: 'black'}}>
        <Toolbar>
          <IconButton 
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              color: 'goldenrod',
              edge: 'start',
              display: { sm: 'none'}
            }}>
            <MenuIcon/>
          </IconButton>
          <img src={Logo} alt='logo' width={'300'} height={'90'}  />
          <Typography 
            color={"goldenrod"}
            variant='h6'
            component='div'
            sx={{ flexGrow: 1 }}
          >
            {/* <FastfoodIcon/>
            &nbsp;&nbsp; My Restaurant */}
          </Typography>
          <Box sx={{display: {xs:'none', sm:'block'}, flexDirection:'row'}}>
            <ul className="navigation-menu">
              <li> <NavLink activeClassName='active' to={"/"}> Home </NavLink></li>
              <li> <NavLink to={"/menu"}> Menu </NavLink></li>
              <li> <NavLink to={"/about"}> About </NavLink></li>
              <li> <NavLink to={"/contact"}> Contact </NavLink></li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav" >
        <Drawer variant='temporary' open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: {xs: 'block', sm: 'none'},
            "& .MuiDrawer-paper":{
              boxSizing: 'border-box',
              width:'50vw'
            }
          }}
        >
          {drawer }
        </Drawer>
        <Toolbar/>
      </Box>
    </Box>
  )
}

export default Header