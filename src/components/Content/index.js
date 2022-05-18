import React, { useEffect } from 'react';
import { showPopularMovies } from '../../Redux/actions';
import './Content.sass';
import { connect } from 'react-redux';

const mapState = (state) => {
    return {
      state
    }
}

const mapDispatch = (dispatch) => {
  return {
    showPopularList: () => dispatch(showPopularMovies())
  }
}

const Content = ({state, showPopularList}) => {
    useEffect(() => {
        showPopularList()
    }, [])

    useEffect(() => {
        console.log(state.data)
    }, [state])

  return (
    <main className='content'>
      <div className="content__item">
        <img src="https://townsquare.media/site/442/files/2020/11/pred-11223344.jpg?w=980&q=75" alt="dadadad" className="content__item__img" />
        <div className="content__item__descr">
          <p className="content__item__title">Predator</p>
          <p className="content__item__rating">7.80</p>
        </div>
      </div>
    </main>
  )
}

export default connect(mapState, mapDispatch)(Content)