export default (restaurants = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;        
        case 'CREATE':
            return [...restaurants, action.payload];
        default:
            return restaurants;
    }
}