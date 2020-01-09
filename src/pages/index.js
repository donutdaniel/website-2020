import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { Box, Container, Grid, Paper } from '@material-ui/core';
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
                <h1>Hi, I'm Daniel</h1>
                <p>
                  Placeholder about me
                </p>
              </Grid>
            </Grid>
          </Box>
          <Box p={3}>
            <h1>Experiences</h1>
            <Experiences/>
          </Box>
          <Box p={3}>
            <h1>Work</h1>
            <Projects/>
          </Box>
        </Paper>
      </Container>
    </Box>
  </Layout>
)

export default IndexPage
