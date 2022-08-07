import React, { useState } from 'react'
import useStyles from './styles'
import FileBase from 'react-file-base64'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { createRestaurant } from '../../actions/restaurants';


const Form = () => {
    const classes = useStyles();
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createRestaurant(restaurantData))
    }

    const clear = () => {
        
    }

    const dispatch = useDispatch();

    const [restaurantData, setRestaurantData] = useState({ 
        name: '', 
        title: '', 
        desc: '', 
        tags: '', 
        selectedFile: '' 
    });
    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>Add A Restaurant</Typography> 
                <TextField name='name' variant='outlined' label ='Name' fullWidth value={restaurantData.name} onChange={(e) => setRestaurantData({...restaurantData, name: e.target.value})} />
                <TextField name='title' variant='outlined' label ='Title' fullWidth value={restaurantData.title} onChange={(e) => setRestaurantData({...restaurantData, title: e.target.value})} />
                <TextField name='description' variant='outlined' label ='Description' fullWidth value={restaurantData.desc} onChange={(e) => setRestaurantData({...restaurantData, desc: e.target.value})} />
                <TextField name='tags' variant='outlined' label ='Tags' fullWidth value={restaurantData.tags} onChange={(e) => setRestaurantData({...restaurantData, tags: e.target.value})} />
                <div className={classes.fileInput}>
                    <FileBase  type='file' multiple={false} onDone={({base64}) => setRestaurantData({ ...restaurantData, selectedFile: base64})} />
                </div>
                <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
                <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form
