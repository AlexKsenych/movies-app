import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
    getDataList,
    CLEAR_LIST,
    SET_LIST,
    ADD_LIST,
} from '../../Redux/actions'
import './Content.sass'
import { connect } from 'react-redux'
import ContentItem from './ContentItem'
import Loading from '../../assets/Loading'
import { useSearchParams } from 'react-router-dom'

const mapState = ({ itemList: { data, hasMore } }, { actionType }) => {
    return {
        data: [...new Set(data)],
        hasMore,
        ContentItem,
        actionType,
    }
}

const mapDispatch = (dispatch, { actionType }) => {
    return {
        getList: (query) => dispatch(getDataList(actionType, SET_LIST, query)),
        addList: () => dispatch(getDataList(actionType, ADD_LIST)),
        clearList: () => dispatch(CLEAR_LIST()),
    }
}

const Content = ({
    data,
    hasMore,
    getList,
    addList,
    clearList,
    ContentItem,
    actionType,
}) => {
    const [loading, setLoading] = useState(true)
    const [searchParams] = useSearchParams()
    const query = searchParams.get('query')

    const observer = useRef()
    const lastElemRef = useCallback(
        (elem) => {
            if (loading || actionType === 'search') return
            if (observer.current) observer.current.disconnect()
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    setLoading(true)
                    addList()
                }
            })
            if (elem) observer.current.observe(elem)
        },
        // eslint-disable-next-line
        [loading, hasMore]
    )

    useEffect(() => {
        getList()
        return clearList
        // eslint-disable-next-line
    }, [actionType])

    useEffect(() => {
        if (query) {
            getList(query)
        }
        // eslint-disable-next-line
    }, [query])

    useEffect(() => {
        if (data) setLoading(false)
    }, [data])

    return (
        <main className='content'>
            {data && <ContentItem data={data} lastElemRef={lastElemRef} />}
            {loading && <Loading />}
        </main>
    )
}

export default connect(mapState, mapDispatch)(Content)
