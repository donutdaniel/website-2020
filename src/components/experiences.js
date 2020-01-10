import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Grid, Card, Typography } from "@material-ui/core"

const Experience = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allExperiencesJson {
          edges {
            node {
              id
              description
              company
              img
              title
            }
          }
        }
      }
    `
  )

  const experiences_data = data.allExperiencesJson.edges
  var experiences = []
  for (var i=0; i<experiences_data.length; i++) {
    var exp = experiences_data[i].node
    experiences.push(
      <Grid item>
        company: {exp.company} <br/>
        title: {exp.title}
      </Grid>
    )
  }

  return (
      <Grid
        container
        direction="column"
        spacing={3}
      >
        {experiences}
      </Grid>
  )
}

export default Experience
