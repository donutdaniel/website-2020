import React from "react"
import { Box, Grid, Typography } from "@material-ui/core"

const CustomCard = ({ header, title, subtitle, img, description }) => {
  var descriptions = []
  
  for (var i=0; i<description.length; i++) {
    descriptions.push(
      <Typography variant='body2'> 
        • {description[i]}
      </Typography>
    )
  }

  return (
    <Box m={1} textAlign='left'>
      <Grid container spacing={3}>
        <Grid item xs='2' className='image' align='center'>
          <Box maxWidth='100px'>
            <img src={require('../images/'+img)} alt='oops'></img>
          </Box>
        </Grid>
        <Grid container item direction='column' xs='10'>
          <Grid item>
            <Typography variant='h6' display='inline'>
              {header}
            </Typography>
            <Typography variant='subtitle1' display='inline'>
              {title ? ' | ' : ''}
              {title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='subtitle2'>
              {subtitle}
            </Typography>
          </Grid>
          <Grid item>
            {descriptions}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CustomCard