import axios from 'axios'
import imageNotFound from '../assets/image_not_found.png'

const API_PATH = 'https://api.themoviedb.org/3',
    API_KEY = 'api_key=a159c9a67088679cbfca53df641e55c2',
    LANGUAGE = 'language=en-US'

const getList = async (type, pageId = 1) => {
    return await axios(
        `${API_PATH}/${type}?${API_KEY}&${LANGUAGE}&page=${pageId}`
    )
        .then((res) => res.data.results)
        .then((res) =>
            res.map((item) => {
                const { title, name, vote_average, backdrop_path, id } = item

                const image = backdrop_path
                    ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
                    : imageNotFound

                return {
                    title: title ? title : name,
                    name,
                    rating: vote_average,
                    image,
                    id,
                }
            })
        )
}

const getItem = async (type, id) => {
    return await axios(`${API_PATH}/${type}/${id}?${API_KEY}&${LANGUAGE}`)
        .then((res) => res.data)
        .then((res) => {
            const {
                name,
                title,
                overview,
                popularity,
                backdrop_path,
                release_date,
                vote_average,
            } = res

            const image = backdrop_path
                ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
                : imageNotFound

            return {
                title: title ? title : name,
                image,
                overview,
                popularity,
                date: release_date,
                rating: vote_average,
            }
        })
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
