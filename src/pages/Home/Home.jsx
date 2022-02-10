import React from 'react'

import { Grid } from '@material-ui/core'

import Leftbar from '../../components/Leftbar/Leftbar'
import Carousel from '../../components/HomeComponenents/Carousel/Carousel'

const Home = () => {
  return (
    <div>
      <Grid container spacing = {0}>
        <Grid item sm = {2}>
          <Leftbar />
        </Grid >
        <Grid item sm = {10}>
          <Carousel />
        </Grid>
      </Grid>
      <h1>Hello World</h1>
    </div>
  )
}

export default Home