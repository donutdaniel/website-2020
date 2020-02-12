import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Grid, Divider } from "@material-ui/core"
import CustomCard from "./customcard"

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
              href
              img
              title
              subtitle
            }
          }
        }
      }
    `
  )

  const experiences_data = data.allExperiencesJson.edges
  var experiences = []
  for (var i = 0; i < experiences_data.length; i++) {
    var exp = experiences_data[i].node
    experiences.push(
      <Grid key={'experience'+i} item>
        <CustomCard
          header={exp.company}
          title={exp.title}
          subtitle={exp.subtitle}
          img={exp.img}
          href={exp.href}
          description={exp.description}
        />
      </Grid>
    )
    experiences.push(
      <Grid key={'divider'+i} item>
        <Divider variant='middle' />
      </Grid>
    )
  }
  experiences.pop() // remove the last divider

  return (
    <Grid
      container
      direction="column"
      spacing={2}
    >
      {experiences}
    </Grid>
  )
}

export default Experience
