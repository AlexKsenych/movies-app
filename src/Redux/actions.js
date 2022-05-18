import getData from "../services/movieApi"

export function POPULAR_MOVIES(data) {
    return {
        type: 'POPULAR_MOVIES',
        data: data
    }
}

export function showPopularMovies() {
    return (dispatch) => {
        getData().then(
            res => dispatch(POPULAR_MOVIES(res))
        )
    }
}