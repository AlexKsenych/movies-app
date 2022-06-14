import axios from 'axios'
import imageNotFound from '../assets/image_not_found.png'

const API_PATH = 'https://api.themoviedb.org/3',
    API_KEY = 'api_key=a159c9a67088679cbfca53df641e55c2',
    LANGUAGE = 'language=en-US'

const getList = (type, pageId, query) => {
    const search = type === 'search/multi' ? `&query=${query}` : ''

    return axios(
        `${API_PATH}/${type}?${API_KEY}&${LANGUAGE}&page=${pageId}${search}`
    )
        .then((res) => {
            return { data: res.data.results, pages: res.data.total_pages }
        })
        .then((res) => {
            const data = res.data.map((item) => {
                const {
                    title,
                    name,
                    media_type,
                    vote_average,
                    backdrop_path,
                    id,
                } = item

                const image = backdrop_path
                    ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
                    : imageNotFound

                return {
                    title: title ? title : name,
                    name,
                    type: media_type,
                    rating: vote_average,
                    image,
                    id,
                }
            })

            return {
                data,
                pages: res.pages,
            }
        })
}

const getItem = (type, id) => {
    return axios(`${API_PATH}/${type}/${id}?${API_KEY}&${LANGUAGE}`)
        .then((res) => res.data)
        .then((res) => {
            const {
                name,
                title,
                overview,
                popularity,
                backdrop_path,
                release_date,
                first_air_date,
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
                date: release_date ? release_date : first_air_date,
                rating: vote_average,
            }
        })
}

export default function getData(type, id, query) {
    switch (type) {
        case 'search':
            return getList('search/multi', id, query)
        case 'movie':
            return getItem('movie', id)
        case 'tv':
            return getItem('tv', id)
        default:
            return getList(type, id)
    }
}
