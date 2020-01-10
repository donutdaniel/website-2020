import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Grid, Card } from "@material-ui/core"

const Project = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allProjectsJson {
          edges {
            node {
              id
              description
              img
              title
            }
          }
        }
      }
    `
  )

  const projects_data = data.allProjectsJson.edges
  var projects = []
  for (var i=0; i<projects_data.length; i++) {
    var proj = projects_data[i].node
    projects.push(
      <Grid item>
        company: {proj.company} <br/>
        title: {proj.title}
      </Grid>
    )
  }
  
  return (
      <Grid
        container
        direction="column"
        spacing={3}
      >
        {projects}
      </Grid>
  )
}

export default Project
