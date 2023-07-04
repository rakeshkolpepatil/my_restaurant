import React from 'react'
import Layout from '../components/layouts/Layout'
import { Box, Typography } from '@mui/material'
<style>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto:wght@500;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100&family=Open+Sans&family=Roboto:wght@500;700&display=swap');
</style>

const About = () => {
  const whiteSpaces = '\&nbsp; &nbsp; &nbsp;'
  return (
    <Layout>
      <Box
        sx={{ p: 10,
          '& p':{
            textAlign: 'justify',
            // fontFamily: 'monospace',
            // fontFamily: "'Open Sans', 'sans-serif'",
            // fontFamily: "'Roboto', 'sans-serif'",
            fontFamily: "'Noto-sans', 'sans-serif'",
            fontSize: '1.3rem'
          },
          '@media (max-width:600px)': {
            '& p':{
              fontSize: '0.9rem'
            },
            // '& h4':{
            '& .MuiTypography-root':{
              fontSize: '1.4rem'
            }
          }
        }}
      >
        <Typography variant='h4' sx={{ textAlign: 'center', m: '0rem 0rem 3rem' }}> Welcome to the Restaurant </Typography>
        <p>
        Magna nisi nulla nostrud ad est consequat dolor pariatur reprehenderit laborum eu. Lorem occaecat dolore laborum laboris labore dolor excepteur id nostrud adipisicing esse id. Veniam magna laboris officia in amet pariatur. Deserunt et excepteur nulla fugiat magna minim fugiat qui quis fugiat pariatur dolore nisi nostrud. Officia pariatur proident nisi tempor dolore minim ad quis eu sunt cillum et.Eiusmod sint officia ut non id aliqua. Labore magna in amet enim et. Tempor officia dolore labore ipsum anim consequat nulla. Qui esse proident enim fugiat laborum mollit anim eiusmod amet cupidatat. Tempor nostrud voluptate exercitation officia fugiat ex irure exercitation culpa irure.Minim ullamco fugiat ea exercitation adipisicing cillum sit id deserunt non consequat. Duis consequat est pariatur eiusmod. Non Lorem veniam non magna irure. Consequat eiusmod eiusmod consectetur aliqua sunt veniam ipsum. Dolore nulla consequat duis minim irure fugiat enim quis occaecat laboris incididunt enim.Dolor officia nisi velit quis. Non voluptate enim elit reprehenderit nostrud proident quis. Consequat eu esse nulla culpa dolore nulla enim tempor elit sit. Ex fugiat anim sint fugiat aliqua enim eu reprehenderit.
        </p>
        <br/>
        <p>
        &nbsp; &nbsp; &nbsp; &nbsp; Magna nisi nulla nostrud ad est consequat dolor pariatur reprehenderit laborum eu. Lorem occaecat dolore laborum laboris labore dolor excepteur id nostrud adipisicing esse id. Veniam magna laboris officia in amet pariatur. Deserunt et excepteur nulla fugiat magna minim fugiat qui quis fugiat pariatur dolore nisi nostrud. Officia pariatur proident nisi tempor dolore minim ad quis eu sunt cillum et.Eiusmod sint officia ut non id aliqua. Labore magna in amet enim et. Tempor officia dolore labore ipsum anim consequat nulla. Qui esse proident enim fugiat laborum mollit anim eiusmod amet cupidatat. Tempor nostrud voluptate exercitation officia fugiat ex irure exercitation culpa irure.Minim ullamco fugiat ea exercitation adipisicing cillum sit id deserunt non consequat. Duis consequat est pariatur eiusmod. Non Lorem veniam non magna irure. Consequat eiusmod eiusmod consectetur aliqua sunt veniam ipsum. Dolore nulla consequat duis minim irure fugiat enim quis occaecat laboris incididunt enim.Dolor officia nisi velit quis. Non voluptate enim elit reprehenderit nostrud proident quis. Consequat eu esse nulla culpa dolore nulla enim tempor elit sit. Ex fugiat anim sint fugiat aliqua enim eu reprehenderit.
        </p>
        <br/>
        <p>
        &emsp;&emsp; Magna nisi nulla nostrud ad est consequat dolor pariatur reprehenderit laborum eu. Lorem occaecat dolore laborum laboris labore dolor excepteur id nostrud adipisicing esse id. Veniam magna laboris officia in amet pariatur. Deserunt et excepteur nulla fugiat magna minim fugiat qui quis fugiat pariatur dolore nisi nostrud. Officia pariatur proident nisi tempor dolore minim ad quis eu sunt cillum et.Eiusmod sint officia ut non id aliqua. Labore magna in amet enim et. Tempor officia dolore labore ipsum anim consequat nulla. Qui esse proident enim fugiat laborum mollit anim eiusmod amet cupidatat. Tempor nostrud voluptate exercitation officia fugiat ex irure exercitation culpa irure.Minim ullamco fugiat ea exercitation adipisicing cillum sit id deserunt non consequat. Duis consequat est pariatur eiusmod. Non Lorem veniam non magna irure. Consequat eiusmod eiusmod consectetur aliqua sunt veniam ipsum. Dolore nulla consequat duis minim irure fugiat enim quis occaecat laboris incididunt enim.Dolor officia nisi velit quis. Non voluptate enim elit reprehenderit nostrud proident quis. Consequat eu esse nulla culpa dolore nulla enim tempor elit sit. Ex fugiat anim sint fugiat aliqua enim eu reprehenderit.
        </p>
        <br/>
        <p>
        &emsp;&emsp; Magna nisi nulla nostrud ad est consequat dolor pariatur reprehenderit laborum eu. Lorem occaecat dolore laborum laboris labore dolor excepteur id nostrud adipisicing esse id. Veniam magna laboris officia in amet pariatur. Deserunt et excepteur nulla fugiat magna minim fugiat qui quis fugiat pariatur dolore nisi nostrud. Officia pariatur proident nisi tempor dolore minim ad quis eu sunt cillum et.Eiusmod sint officia ut non id aliqua. Labore magna in amet enim et. Tempor officia dolore labore ipsum anim consequat nulla. Qui esse proident enim fugiat laborum mollit anim eiusmod amet cupidatat. Tempor nostrud voluptate exercitation officia fugiat ex irure exercitation culpa irure.Minim ullamco fugiat ea exercitation adipisicing cillum sit id deserunt non consequat. Duis consequat est pariatur eiusmod. Non Lorem veniam non magna irure. Consequat eiusmod eiusmod consectetur aliqua sunt veniam ipsum. Dolore nulla consequat duis minim irure fugiat enim quis occaecat laboris incididunt enim.Dolor officia nisi velit quis. Non voluptate enim elit reprehenderit nostrud proident quis. Consequat eu esse nulla culpa dolore nulla enim tempor elit sit. Ex fugiat anim sint fugiat aliqua enim eu reprehenderit.
        </p>
        <br/>
        <p>
        &emsp;&emsp; Magna nisi nulla nostrud ad est consequat dolor pariatur reprehenderit laborum eu. Lorem occaecat dolore laborum laboris labore dolor excepteur id nostrud adipisicing esse id. Veniam magna laboris officia in amet pariatur. Deserunt et excepteur nulla fugiat magna minim fugiat qui quis fugiat pariatur dolore nisi nostrud. Officia pariatur proident nisi tempor dolore minim ad quis eu sunt cillum et.Eiusmod sint officia ut non id aliqua. Labore magna in amet enim et. Tempor officia dolore labore ipsum anim consequat nulla. Qui esse proident enim fugiat laborum mollit anim eiusmod amet cupidatat. Tempor nostrud voluptate exercitation officia fugiat ex irure exercitation culpa irure.Minim ullamco fugiat ea exercitation adipisicing cillum sit id deserunt non consequat. Duis consequat est pariatur eiusmod. Non Lorem veniam non magna irure. Consequat eiusmod eiusmod consectetur aliqua sunt veniam ipsum. Dolore nulla consequat duis minim irure fugiat enim quis occaecat laboris incididunt enim.Dolor officia nisi velit quis. Non voluptate enim elit reprehenderit nostrud proident quis. Consequat eu esse nulla culpa dolore nulla enim tempor elit sit. Ex fugiat anim sint fugiat aliqua enim eu reprehenderit.
        </p>
      </Box>
    </Layout>
  )
}

export default About