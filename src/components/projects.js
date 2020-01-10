import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Grid, Divider } from "@material-ui/core"
import CustomCard from "./customcard"

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
              subtitle
            }
          }
        }
      }
    `
  )

  const projects_data = data.allProjectsJson.edges
  var projects = []
  for (var i = 0; i < projects_data.length; i++) {
    var proj = projects_data[i].node
    projects.push(
      <Grid item>
        <CustomCard
          header={proj.title}
          subtitle={proj.subtitle}
          img={proj.img}
          description={proj.description}
        />
      </Grid>
    )
    projects.push(<Divider variant='middle' />)
  }
  projects.pop() // remove the last divider

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
