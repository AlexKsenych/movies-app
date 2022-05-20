import React, { useEffect } from 'react';
import { getDataList } from '../../Redux/actions';
import './Content.sass';
import { connect } from 'react-redux';
import ContentItem from './ContentItem';

const mapState = (state, {actionType}) => {
    return {
		data: state.data,
		ContentItem,
		actionType
    }
}

const mapDispatch = (dispatch, {actionType}) => {
	return {
		getList: () => dispatch(getDataList(actionType))
	}
}

const Content = ({data, getList, ContentItem}) => {
    useEffect(() => {
        return getList()
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