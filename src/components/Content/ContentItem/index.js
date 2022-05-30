import React from 'react'
import { useMatch, useNavigate } from 'react-router-dom'

const ContentItem = ({ data }) => {
    const navigate = useNavigate()
    const pathMatch = useMatch('/tvshows')

    const navigateTo = (id) => {
        const path = !!pathMatch ? 'tvshow' : 'movie'

        navigate(`/${path}/${id}`, { replace: true })
    }

    return data.map((item) => {
        const { rating, image, id } = item
        let { title } = item

        if (title.length > 32) {
            title = title.slice(0, 32) + '...'
        }

        return (
            <div
                className='content__item'
                onClick={() => navigateTo(id)}
                key={id}
            >
                <img src={image} alt='img' className='content__item__img' />
                <div className='content__item__descr'>
                    <p className='content__item__descr__title'>{title}</p>
                    <p className='content__item__descr__rating'>{rating}</p>
                </div>
            </div>
        )
    })
}

export default ContentItem
