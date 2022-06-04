import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Search = () => {
    const [, setSearchParams] = useSearchParams({})
    const [query, setQuery] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        if (query.length >= 3) {
            setSearchParams({ query })
        }

        if (query.length === 3) {
            navigate(`/movies-app/search?query=${query}`, { replace: true })
        }
        // eslint-disable-next-line
    }, [query])

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
