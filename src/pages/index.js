import React from "react"
import Particles from 'react-particles-js'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { Typography, Box, Container, Grid, Paper, Divider, Link } from '@material-ui/core'
import { GitHub, LinkedIn, Description } from '@material-ui/icons'
import Experiences from "../components/experiences"
import Projects from "../components/projects"

import ResumeLink from "../downloads/resume.pdf"

import "./index.css"

const GitHubLink = "https://github.com/donutdaniel"
const LinkedInLink = "https://linkedin.com/in/danielho54"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Particles 
      params={{
        "particles": {
            "number": {
                "value": 80
            },
            "size": {
                "value": 3
            }
        }
      }}
    />
    <Box p={3} justifyContent="center">
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
            <Grid
              container
              align='center'
              justify='space-between'
              direction='row'
              spacing={0}
            >
              <Grid item>
                <Typography gutterBottom variant='h4'>
                  <Box fontWeight='fontWeightLight' paddingX={3}>
                    About Me
                  </Box>
                </Typography>
              </Grid>
              <Grid item>
                <Box paddingX={3}>
                  <Grid
                    container
                    align='center'
                    justify='center'
                    direction='row'
                    spacing={window.innerWidth < 700 ? 1 : 3}
                  >
                    <Grid item>
                      <Link color='inherit' href={GitHubLink} target='_blank' rel='noopener noreferrer'>
                        <GitHub
                          fontSize={window.innerWidth < 700 ? 'medium' : 'large'}
                        />
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link color='inherit' href={LinkedInLink} target='_blank' rel='noopener noreferrer'>
                        <LinkedIn
                          fontSize={window.innerWidth < 700 ? 'medium' : 'large'}
                        />
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link color='inherit' href={ResumeLink} target='_blank' rel='noopener noreferrer'>
                        <Description
                          fontSize={window.innerWidth < 700 ? 'medium' : 'large'}
                        />
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
            <Typography variant='body1'>
              <Box paddingX={3} paddingY={1}>
                I'm currently an undergraduate senior at the University of Southern California - graduating 2020 with a bachelor's in computer science and minor in linguistics.
                Here you'll find my different experiences and projects I have worked on in the past. When I'm not writing code, you can catch me singing, playing volleyball, or taking photographs!
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
