import axios from "axios";

const API_KEY = 'api_key=a159c9a67088679cbfca53df641e55c2',
      LANGUAGE = 'language=en-US';

const getPopular = async (page = 1) => {
    const res = await axios(`https://api.themoviedb.org/3/movie/popular?${API_KEY}&${LANGUAGE}&page=${page}`).then(
        res => res.data.results
    )

    return res;
}

export default function getData(type = 'popular') {
    if (type === 'popular') return getPopular();
}