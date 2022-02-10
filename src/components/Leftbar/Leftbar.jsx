import React from 'react'

import { Container } from '@material-ui/core'

import useStyles from './styles'


const Leftbar = () => {
    const classes = useStyles();
  return (
    <Container className= {classes.container}>
        Hello World
    </Container>
  )
}

export default Leftbar