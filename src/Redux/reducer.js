import { combineReducers } from "redux";

const filmListReducer = (store = [], action) => {
    const {type, data} = action;

    switch(type) {
        case 'POPULAR_MOVIES':
            return [...data]
        case 'TOP_MOVIES': 
            return [...data]
        case 'NEW_MOVIES':
            return [...data]
        case 'TV_SHOWS':
            return [...data]
        default:
            return store
    }
}

const currentFilmReducer = (store = {}, action) => {
    const {type, data} = action;

    switch(type) {
        case 'MOVIE':
            return {
                ...data
            }
        case 'CLEAR_MOVIE':
            return {}
        default:
            return store
    }
}

const rootReducer = combineReducers({
    filmList: filmListReducer,
    currentFilm: currentFilmReducer
})

export default rootReducer;