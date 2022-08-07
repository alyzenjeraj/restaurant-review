import * as api from '../api'

export const getRestaurants = () => async (dispatch) => {
    try {
        const { data } = await api.fetchRestaurants();

        dispatch({ type: 'FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error.message);
    }
    

    
}

export const createRestaurant = (restaurant) => async (dispatch) => {
    try {
        const { data } = await api.createRestaurant(restaurant)
        dispatch({ type: 'CREATE', payload: data})
    } catch (error) {
        console.log(error)
        
    }
}