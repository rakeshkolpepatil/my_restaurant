import React from 'react'
import Layout from '../components/layouts/Layout'
import { Box, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto:wght@500;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100&family=Open+Sans&family=Roboto:wght@500;700&display=swap');
</style>

const Contact = () => {
  return (
    <Layout>
      <Box sx={{
        p: 5,
        textAlign:'justify', 
        paddingX:'8vw',
        '& p':{
          fontSize: '1.5rem',
          fontFamily: "'Noto-sans', 'sans-serif'",
        },
        '@media (max-width: 600px)':{
          '& p':{
            fontSize: '1.2rem',
            fontFamily: "'Noto-sans', 'sans-serif'",
          },
          // '& h4':{
          '& .MuiTypography-root':{
            fontSize: '1.7rem',
            my: '10px',  
            mb: '30px'
          }
        }
      }}>
        <Typography variant='h4' sx={{ textAlign: 'center', my: '20px',  mb: '50px' }}> Contact My Restaurant </Typography>
        <p>
          Veniam amet aute aliquip ea minim ex ad do id ex duis irure. Mollit dolor do dolore do cillum irure sit in ex esse. Do est cupidatat in veniam aliqua dolore dolor qui consequat dolor qui.Labore mollit Lorem exercitation tempor anim in sit ut labore qui excepteur nostrud excepteur eu. Non incididunt non non exercitation culpa id nisi laborum commodo. Laborum reprehenderit velit sit eiusmod irure duis nulla eiusmod sit nostrud tempor est. Aliqua enim fugiat nisi exercitation sunt sunt irure occaecat et esse enim ut magna. Anim sit fugiat laboris pariatur consectetur occaecat nulla commodo laboris minim veniam mollit ad. Officia minim tempor elit aliquip pariatur veniam mollit proident qui est mollit reprehenderit in eu. Ut cillum cupidatat minim occaecat.In occaecat ullamco eu laboris quis reprehenderit. Lorem id labore ea dolore dolor excepteur amet magna id in irure nisi velit. Cillum minim eu reprehenderit cillum culpa. Aliqua voluptate sit anim sunt cupidatat duis pariatur et. Occaecat dolore adipisicing laborum laboris. Deserunt exercitation dolor duis voluptate. Deserunt ad qui nostrud sunt ex adipisicing.
        </p>
        <Box sx={{marginTop: '6rem', border: '2px solid black', borderRadius:'5px' }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      backgroundColor: 'black',
                      color:'white',
                      textAlign:'center'
                    }}
                  > Contact Details </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow >
                  <TableCell sx={{ pl:'30vw', textAlign: 'left', borderBottom: '2px solid black'}}>
                    <SupportAgentIcon sx={{color:'red', transform: 'translateY(5px)'}}/> 1234567890 (Tollfree)
                  </TableCell>
                </TableRow>
                {/* <Divider orientation='horizontal' variant='fullWidth' sx={{color: 'black'}} style={{width: '100%'}} /> */}
                <TableRow>
                  <TableCell sx={{ pl:'30vw', textAlign: 'left', borderBottom: '2px solid black'}}>
                    <MailOutlineIcon sx={{color:'blue', transform: 'translateY(7px)'}}/> support@myrestaurant.com
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ pl:'30vw', textAlign: 'left'}}>
                    <CallIcon sx={{color:'blue', transform: 'translateY(7px)'}}/> 1234567890
                  </TableCell>
                </TableRow>
                
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Layout>
  )
}

export default Contact