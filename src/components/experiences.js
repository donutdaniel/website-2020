import React from "react"
import { Grid, Card } from "@material-ui/core"

const Experience = ({ title }) => {
  

  return (
      <Grid
        container
        direction="column"
        spacing={3}
      >
        <Card>
            {title}
        </Card>
      </Grid>
  )
}

export default Experience
