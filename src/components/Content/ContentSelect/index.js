import React from 'react'

const ContentSelect = ({ select, isTV, onSelect }) => {
    return (
        <select
            className='content__select'
            name='sort'
            onChange={(e) => onSelect(e)}
            value={select}
        >
            <option className='content__select__option' value='popular'>
                popular
            </option>
            <option className='content__select__option' value='top_rated'>
                top
            </option>
            <option
                className='content__select__option'
                value={isTV ? 'on_the_air' : 'upcoming'}
            >
                {isTV ? 'on the air' : 'upcoming'}
            </option>
        </select>
    )
}

export default ContentSelect
