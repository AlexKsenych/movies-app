import React, { useEffect } from 'react'
import { getDataList, CLEAR_LIST } from '../../Redux/actions'
import './Content.sass'
import { connect } from 'react-redux'
import ContentItem from './ContentItem'
import Loading from '../../assets/Loading'

const mapState = ({ itemList }, { actionType }) => {
    return {
        itemList,
        ContentItem,
        actionType,
    }
}

const mapDispatch = (dispatch, { actionType }) => {
    return {
        getList: () => dispatch(getDataList(actionType)),
        clearList: () => dispatch(CLEAR_LIST()),
    }
}

const Content = ({ itemList, getList, clearList, ContentItem, actionType }) => {
    useEffect(() => {
        getList()
        return clearList
        // eslint-disable-next-line
    }, [actionType])

    const value = itemList ? <ContentItem data={itemList} /> : <Loading />

    return <main className='content'>{value}</main>
}

export default connect(mapState, mapDispatch)(Content)
