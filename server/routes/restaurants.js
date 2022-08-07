import express from 'express';

import { getRestaurants, createRestaurant } from '../controllers/restaurants.js'

const router = express.Router();

router.get('/', getRestaurants)
router.post('/', createRestaurant)
router.patch('/:id', updateRestaurant)

export default router;