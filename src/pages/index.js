import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { Typography, Box, Container, Grid, Paper } from '@material-ui/core';
import Experiences from "../components/experiences"
import Projects from "../components/projects"

const IndexPage = () => (
  <Layout>
    <SEO/>
    <Box m={3} justifyContent="center">
      <Container maxWidth='lg' disableGutters={true}>
        <Paper elevation={5}>
          <Box p={3}>
            <Grid 
              container
              direction={window.innerWidth < 700 ? 'column' : 'row'}
              spacing={3}
            >
              <Grid item xs={4}>
                <Image/>
              </Grid>
              <Grid item xs={8}>
                <Typography variant='h1'>Hi, I'm Daniel</Typography>
                <Typography variant='body1'>
                  Placeholder about me
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box p={3}>
            <Typography variant='h2'>Experiences</Typography>
            <Experiences/>
          </Box>
          <Box p={3}>
            <Typography variant='h2'>Work</Typography>
            <Projects/>
          </Box>
        </Paper>
      </Container>
    </Box>
  </Layout>
)

export default IndexPage
