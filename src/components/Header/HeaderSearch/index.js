import React, { useEffect, useState } from 'react'
import { useMatch, useNavigate } from 'react-router-dom'

const Search = () => {
    const [query, setQuery] = useState('')
    const navigate = useNavigate()
    const isSearch = !!useMatch('/movies-app/search')

    useEffect(() => {
        if (query.length >= 3) {
            navigate(`/movies-app/search?query=${query}`, { replace: true })
        }

        // eslint-disable-next-line
    }, [query])

    useEffect(() => {
        if (!isSearch) setQuery('')
    }, [isSearch])

    const onInput = (e) => {
        const value = e.currentTarget.value
        setQuery(value)
    }

    return (
        <input
            className='header__search'
            type='text'
            value={query}
            onInput={(e) => onInput(e)}
        />
    )
}

export default Search
