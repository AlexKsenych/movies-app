const rootReducer = (store = {}, action) => {
    switch(action.type) {
        case 'POPULAR_MOVIES':
            return {
                data: action.data
            }
        default:
            return store
    }
}

export default rootReducer;