import React, { useEffect } from 'react';
import { showPopularMovies } from '../../Redux/actions';
import './Content.sass';
import { connect } from 'react-redux';
import ContentItem from './ContentItem';

const mapState = (state) => {
    return {
      data: state.data,
      ContentItem
    }
}

const mapDispatch = (dispatch) => {
  return {
    showPopularList: () => dispatch(showPopularMovies())
  }
}

const Content = ({data, showPopularList, ContentItem}) => {
    useEffect(() => {
        return showPopularList()
		// eslint-disable-next-line
    }, [])

    useEffect(() => {
        console.log(data)
    }, [data])

	const value = data ? <ContentItem data={data}/> : 'no data';

    return (
      <main className='content'>
        {value}
      </main>
    )
}

export default connect(mapState, mapDispatch)(Content)