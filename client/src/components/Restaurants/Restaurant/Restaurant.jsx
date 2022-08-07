import React from 'react'
import useStyles from './styles'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumpUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

import moment from 'moment';


const Restaurant = ({ restaurant }) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={restaurant.selectedFile} title={restaurant.title} />
            <div className={classes.overlay}>
                <Typography variant='h6'>{restaurant.name}</Typography>
                <Typography variant='body2'>{moment(restaurant.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2} >
                <Button style={{color: 'white'}} size='small' onClick={() => {}}>
                    <MoreHorizIcon fontSize='default' />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant='body2' color='textSecondary'>{restaurant.tags.map((tag) => `#${tag}`)}</Typography>
            </div>
            <CardContent>
                <Typography className={classes.title} variant='h5' gutterBottom>{restaurant.desc}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size='small' color='primary' onClick={() => {}}>
                    <ThumpUpAltIcon fontSize='small' /> Like {restaurant.likeCount}
                </Button>
                <Button size='small' color='primary' onClick={() => {}}>
                    <DeleteIcon fontSize='small' /> Delete
                </Button>
            </CardActions>
            
        </Card>
    )
}

export default Restaurant
