import './CurrentItem.sass';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getMovie, CLEAR_MOVIE } from '../../Redux/actions';
import Loading from '../../assets/Loading';

const mapState = ({currentFilm}) => {
    const {title, overview, popularity, backdrop_path,
    release_date, vote_average} = currentFilm;

    return {
        title,
        img: `https://image.tmdb.org/t/p/w500${backdrop_path}`,
        overview,
        popularity,
        date: release_date,
        rating: vote_average
    }
}

const mapDispatch = (dispatch) => {
    return {
        dispatch: (id) => dispatch(getMovie(id)),
        clearMovie: () => dispatch(CLEAR_MOVIE())
    }
}

const CurrentItem = ({title, img, overview, popularity, date, rating, dispatch, clearMovie}) => {
    const {id} = useParams();

    useEffect(() => {
        dispatch(id);
        return clearMovie;
        // eslint-disable-next-line
    }, [id])

    return (
        title ?
        <main className='currentFilm'>
            <img className='currentFilm__img' src={img} alt="filmImage" />
            <div className="currentFilm__descr">
                <div className='currentFilm__descr__title'>{title}</div>
                <div className='currentFilm__descr__date'>{date}</div>
                <div className='currentFilm__descr__owerview'>{overview}</div>
            </div>
            <div className="currentFilm__rating">
                <div className='currentFilm__rating__rate'>Rating: {rating}</div>
                <div className='currentFilm__rating__popularity'>Popularity: {popularity}</div>
            </div>
        </main>
        : <Loading/>
    )
}

export default connect(mapState, mapDispatch)(CurrentItem)