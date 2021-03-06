import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
    getDataList,
    CLEAR_LIST,
    SET_LIST,
    ADD_LIST,
} from '../../redux/actions'
import './Content.sass'
import { connect } from 'react-redux'
import ContentItem from './ContentItem'
import ContentSelect from './ContentSelect'
import Loading from '../Loading'
import { useSearchParams, useLocation, useMatch } from 'react-router-dom'

const mapState = ({ itemList: { data, hasMore } }) => {
    return {
        data,
        hasMore,
        Loading,
        ContentItem,
        ContentSelect,
    }
}

const mapDispatch = (dispatch) => {
    return {
        getList: (type, query) => dispatch(getDataList(type, SET_LIST, query)),
        addList: (type) => dispatch(getDataList(type, ADD_LIST)),
        clearList: () => dispatch(CLEAR_LIST()),
    }
}

const Content = ({
    data,
    hasMore,
    getList,
    addList,
    clearList,
    Loading,
    ContentItem,
    ContentSelect,
}) => {
    const [loading, setLoading] = useState(true)
    const [select, setSelect] = useState('popular')
    const [searchParams] = useSearchParams()
    const query = searchParams.get('query')

    const location = useLocation()

    const isTV = !!useMatch('/movies-app/tv'),
        isSearch = !!useMatch('/movies-app/search')

    const requestType = isTV ? `tv/${select}` : `movie/${select}`

    const observer = useRef()
    const lastElemRef = useCallback(
        (elem) => {
            if (loading || isSearch) return
            if (observer.current) observer.current.disconnect()
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    setLoading(true)
                    addList(requestType)
                }
            })
            if (elem) observer.current.observe(elem)
        },
        // eslint-disable-next-line
        [loading, hasMore]
    )

    useEffect(() => {
        setSelect('popular')
    }, [location])

    useEffect(() => {
        getList(requestType)
        return clearList
        // eslint-disable-next-line
    }, [select, location])

    useEffect(() => {
        if (query) {
            getList('search', query)
        }
        // eslint-disable-next-line
    }, [query])

    useEffect(() => {
        if (data) return setLoading(false)
        setLoading(true)
    }, [data])

    const onSelect = (e) => {
        setSelect(e.target.value)
    }

    return (
        <main className='content'>
            {!isSearch && (
                <ContentSelect
                    onSelect={onSelect}
                    select={select}
                    isTV={isTV}
                />
            )}
            {data && <ContentItem data={data} lastElemRef={lastElemRef} />}
            {loading && <Loading />}
        </main>
    )
}

export default connect(mapState, mapDispatch)(Content)
