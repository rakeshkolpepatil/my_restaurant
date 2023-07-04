import React from 'react'
import Layout from '../components/layouts/Layout'
import { MenuList } from '../data/data'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

const Menu = () => {
  return (
    <Layout>
      <Box sx={{ display: 'flex', flexWrap:'wrap', justifyContent: 'center'}} >
        {
          MenuList.map( item => (
            <Card sx={{ maxWidth: '450px', m: 3, border: '2px solid black'}}>
              <CardActionArea>
                <CardMedia component={"img"} image={item.image} alt={item.name} height='400' width='400' />
                <CardContent>
                  <Typography variant='h4' sx={{ textAlign: 'center'}}> {item.name} </Typography>
                  <Typography variant='body2'  sx={{ textAlign: 'justify'}}> {item.description} </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))
        }
      </Box>
    </Layout>
  )
}

export default Menu