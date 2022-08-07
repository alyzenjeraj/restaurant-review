import mongoose from "mongoose";
import Restaurant from "../models/restaurantInfo.js" 

export const getRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        console.log(restaurants);

        res.status(200).json(restaurants);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createRestaurant = async (req, res) => {
    const restaurant = req.body;
    
    const newRestaurant = new Restaurant(restaurant)

    try {
        await newRestaurant.save();
        res.status(201).json(newRestaurant);
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const updateRestaurant = async (req, res) => {
    const { id: _id } = req.params;
    const restaurant = req.body;

    if(mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Post with ID')
    const updatedRestaurant = await RestaurantMessage.findByIdAndUpdate(_id, restaurant, { new: true })

    res.json(updateRestaurant)
}