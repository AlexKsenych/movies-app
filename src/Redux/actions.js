import getData from "../services/movieApi"

function SET_LIST(data) {
    return {
        type: 'SET_LIST',
        data
    }
}

function SET_ITEM(data) {
    return {
        type: 'SET_ITEM',
        data
    }
}

export function CLEAR_ITEM() {
    return {
        type: 'CLEAR_ITEM'
    }
}

export function getDataList(type = 'popular') {
    return (dispatch) => {
        getData(type).then(
            res => dispatch(SET_LIST(res))
        )
    }
}

export function getItem(type = 'movie', id) {
    return (dispatch) => {
        getData(type, id).then(
            res => dispatch(SET_ITEM(res))
        )
    }
}