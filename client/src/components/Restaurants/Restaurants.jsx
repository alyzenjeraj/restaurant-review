import React from 'react'
import Restaurant from './Restaurant/Restaurant'
import useStyles from './styles'

import { useSelector } from 'react-redux';

import { Grid, CircularProgress } from '@material-ui/core'


const Restaurants = () => {
    const classes = useStyles();
    const restaurants = useSelector((state) => state.restaurants);

    console.log(restaurants)
    return (
        !restaurants.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {
                    restaurants.map((restaurant) => (
                        <Grid item key={restaurant.id} xs={12} sm={6}>
                            <Restaurant restaurant={restaurant} />
                        </Grid>
                    ))
                }
            </Grid>
        )
    )
}

export default Restaurants
