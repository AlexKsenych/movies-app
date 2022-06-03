import getData from '../services/movieApi'

export function SET_LIST({ data, pages }) {
    return {
        type: 'SET_LIST',
        data,
        pages,
    }
}

export function ADD_LIST({ data, pages }) {
    return {
        type: 'ADD_LIST',
        data,
        pages,
    }
}

function SET_ITEM(data) {
    return {
        type: 'SET_ITEM',
        data,
    }
}

export function CLEAR_LIST() {
    return {
        type: 'CLEAR_LIST',
    }
}

export function CLEAR_ITEM() {
    return {
        type: 'CLEAR_ITEM',
    }
}

export function getDataList(type = 'popular', action, query) {
    return (dispatch, getState) => {
        const {
            itemList: { nextPage },
        } = getState()

        const page = action === SET_LIST ? 1 : nextPage

        getData(type, page, query).then((res) => dispatch(action(res)))
    }
}

export function getItem(type = 'movie', id) {
    return (dispatch) => {
        getData(type, id).then((res) => dispatch(SET_ITEM(res)))
    }
}
