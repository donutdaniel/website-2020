import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { Typography, Box, Container, Grid, Paper, Divider } from '@material-ui/core';
import Experiences from "../components/experiences"
import Projects from "../components/projects"

import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Box m={3} justifyContent="center">
      <Container maxWidth='md' disableGutters={true}>
        <Paper elevation={5}>
          <Box p={3}>
            <Grid
              container
              align='center'
              justify='center'
              direction='row'
              spacing={0}
            >
              <Grid item xs={4}>
                <Box marginX={1}>
                  <Image />
                </Box>
              </Grid>
              <Grid item xs={8} >
                <Typography id='greeting' variant={window.innerWidth < 700 ? 'h4' : 'h2'}>
                  <Box fontWeight='fontWeightLight'>
                    Hi, I'm Daniel
                  </Box>
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Divider variant='middle'/>
          <Box p={3} textAlign='left'>
            <Typography gutterBottom variant='h4'>
              <Box fontWeight='fontWeightLight' paddingX={3}>
                About Me
              </Box>
            </Typography>
            <Typography variant='body1'>
              <Box p={3}>
                say a bunch of stuff here
              </Box>
            </Typography>
          </Box>

          <Box p={3} textAlign='left'>
            <Typography gutterBottom variant='h4'>
              <Box fontWeight='fontWeightLight' paddingX={3}>
                Experiences
              </Box>
            </Typography>
            <Experiences />
          </Box>
          <Box p={3} textAlign='left'>
            <Typography gutterBottom variant='h4'>
              <Box fontWeight='fontWeightLight' paddingX={3}>
                Work
              </Box>
            </Typography>
            <Projects />
          </Box>
        </Paper>
      </Container>
    </Box>
  </Layout>
)

export default IndexPage
