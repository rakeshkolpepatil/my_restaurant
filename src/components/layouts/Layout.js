import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Box } from '@mui/material'

const Layout = ({children}) => {
  return (
    <>
      <Header/>
      <Box sx={{ minHeight: '100vh', position:'relative' }} > {children} </Box>
      <Footer/>
    </>
  )
}

export default Layout