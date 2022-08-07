import React, { useEffect, useState } from 'react'
import { AppBar, Typography, Grow, Grid, Container } from '@material-ui/core';
import { getRestaurants } from './actions/restaurants'
import { useDispatch } from 'react-redux';

import restoRev from './images/restoreview.png';

import Restaurants from './components/Restaurants/Restaurants';
import Form from './components/Form/Form';
import useStyles from './styles'

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null)

    useEffect(() => {
        dispatch(getRestaurants());
    }, [dispatch])
    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h2' align='center'>Resto-Reviews</Typography> 
                <img className={classes.image} src={restoRev} alt='restorev' height='60' />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Restaurants />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App
