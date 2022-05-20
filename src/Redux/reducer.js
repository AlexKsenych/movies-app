const rootReducer = (store = {}, action) => {
    const {data} = action;

    switch(action.type) {
        case 'POPULAR_MOVIES':
            return {
                data
            }
        case 'TOP_MOVIES': 
            return {
                data
            }
        case 'NEW_MOVIES':
            return {
                data
            }
        case 'TV_SHOWS':
            return {
                data
            }
        default:
            return store
    }
}

export default rootReducer;