import axios from 'axios'

const API_PATH = 'https://api.themoviedb.org/3',
    API_KEY = 'api_key=a159c9a67088679cbfca53df641e55c2',
    LANGUAGE = 'language=en-US'

const getList = async (type, pageId = 1) => {
    return await axios(
        `${API_PATH}/${type}?${API_KEY}&${LANGUAGE}&page=${pageId}`
    ).then((res) => res.data.results)
}

const getItem = async (type, id) => {
    return await axios(`${API_PATH}/${type}/${id}?${API_KEY}&${LANGUAGE}`).then(
        (res) => res.data
    )
}

export default function getData(type, id) {
    switch (type) {
        case 'top':
            return getList('movie/top_rated')
        case 'newMovies':
            return getList('movie/upcoming')
        case 'tvShows':
            return getList('tv/popular')
        case 'movie':
            return getItem('movie', id)
        case 'tvShow':
            return getItem('tv', id)
        default:
            return getList('movie/popular')
    }
}
