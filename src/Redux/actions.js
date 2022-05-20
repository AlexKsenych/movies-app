import getData from "../services/movieApi"

function POPULAR_MOVIES(data) {
    return {
        type: 'POPULAR_MOVIES',
        data
    }
}

function TOP_MOVIES(data) {
    return {
        type: 'TOP_MOVIES',
        data
    }
}

function NEW_MOVIES(data) {
    return {
        type: 'NEW_MOVIES',
        data
    }
}

function TV_SHOWS(data) {
    return {
        type: 'TV_SHOWS',
        data
    }
}

export function getDataList(type = 'popular') {
    const action = (type, value) => {
        if (type === 'popular') return POPULAR_MOVIES(value);
        if (type === 'top') return TOP_MOVIES(value);
        if (type === 'newMovies') return NEW_MOVIES(value);
        if (type === 'tvShows') return TV_SHOWS(value);
    }

    return (dispatch) => {
        getData(type).then(
            res => dispatch(action(type, res))
        )
    }
}