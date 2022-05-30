import React, { useEffect } from 'react'
import { getDataList, CLEAR_LIST } from '../../Redux/actions'
import './Content.sass'
import { connect } from 'react-redux'
import ContentItem from './ContentItem'
import Loading from '../../assets/Loading'
import { useSearchParams } from 'react-router-dom'

const mapState = ({ itemList }, { actionType }) => {
    return {
        itemList,
        ContentItem,
        actionType,
    }
}

const mapDispatch = (dispatch, { actionType }) => {
    return {
        getList: (page, query) =>
            dispatch(getDataList(actionType, page, query)),
        clearList: () => dispatch(CLEAR_LIST()),
    }
}

const Content = ({ itemList, getList, clearList, ContentItem, actionType }) => {
    const [searchParams] = useSearchParams()
    const query = searchParams.get('query')

    useEffect(() => {
        getList()
        return clearList
        // eslint-disable-next-line
    }, [actionType])

    useEffect(() => {
        if (query) {
            getList(1, query)
        }
        // eslint-disable-next-line
    }, [query])

    const value = itemList ? <ContentItem data={itemList} /> : <Loading />

    return <main className='content'>{value}</main>
}

export default connect(mapState, mapDispatch)(Content)
