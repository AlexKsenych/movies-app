import { combineReducers } from 'redux'

const itemListReducer = (store = { data: [], nextPage: 1 }, action) => {
    const { type, data, pages } = action

    switch (type) {
        case 'SET_LIST':
            return {
                data: [...data],
                nextPage: 2,
                hasMore: store.nextPage !== pages,
            }
        case 'ADD_LIST':
            return {
                data: [...store.data, ...data],
                nextPage: store.nextPage + 1,
                hasMore: store.nextPage !== pages,
            }
        case 'CLEAR_LIST':
            return []
        default:
            return store
    }
}

const currentItemReducer = (store = {}, action) => {
    const { type, data } = action

    switch (type) {
        case 'SET_ITEM':
            return { ...data }
        case 'CLEAR_ITEM':
            return {}
        default:
            return store
    }
}

const rootReducer = combineReducers({
    itemList: itemListReducer,
    currentItem: currentItemReducer,
})

export default rootReducer
