import React, { useEffect } from 'react';
import { getDataList } from '../../Redux/actions';
import './Content.sass';
import { connect } from 'react-redux';
import ContentItem from './ContentItem';
import Loading from '../../assets/Loading';

const mapState = ({data}, {actionType}) => {
    return {
		data,
		ContentItem,
		actionType
    }
}

const mapDispatch = (dispatch, {actionType}) => {
	return {
		getList: () => dispatch(getDataList(actionType))
	}
}

const Content = ({data, getList, ContentItem, actionType}) => {
    useEffect(() => {
        return getList()
		// eslint-disable-next-line
    }, [actionType])

    useEffect(() => {
        console.log(data)
    }, [data])

	const value = data ? <ContentItem data={data}/> : <Loading/>;

    return (
      <main className='content'>
        {value}
      </main>
    )
}

export default connect(mapState, mapDispatch)(Content)