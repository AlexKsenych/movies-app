import { combineReducers } from "redux";

const itemListReducer = (store = [], action) => {
    const {type, data} = action;

    switch(type) {
        case 'SET_LIST':
            return [...data]
        case 'CLEAR_LIST':
            return []
        default:
            return store
    }
}

const currentItemReducer = (store = {}, action) => {
    const {type, data} = action;

    switch(type) {
        case 'SET_ITEM':
            return {...data}
        case 'CLEAR_ITEM':
            return {}
        default:
            return store
    }
}

const rootReducer = combineReducers({
    itemList: itemListReducer,
    currentItem: currentItemReducer
})

export default rootReducer;