import axios from "axios";

const API_KEY = 'api_key=a159c9a67088679cbfca53df641e55c2',
      LANGUAGE = 'language=en-US';

const movieId = '2 - 996';

const getList = async (type, page = 1) => {
    return await axios(`https://api.themoviedb.org/3/${type}?${API_KEY}&${LANGUAGE}&page=${page}`).then(
        res => res.data.results
    )
}

export default function getData(type = 'popular') {
    if (type === 'popular') return getList('movie/popular');
    if (type === 'top') return getList('movie/top_rated');
    if (type === 'newMovies') return getList('movie/upcoming');
    if (type === 'tvShows') return getList('tv/popular');
}