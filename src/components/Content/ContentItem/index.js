import React from 'react'
import { useMatch, useNavigate } from 'react-router-dom'

const ContentItem = ({ data, lastElemRef }) => {
    const navigate = useNavigate()
    const pathMatch = !!useMatch('/movies-app/tv')

    const navigateTo = (id, type) => {
        const path = pathMatch ? 'tv' : 'movie'

        navigate(`/movies-app/${type ? type : path}/${id}`, { replace: true })
    }

    return data.map((item, i) => {
        const { rating, image, id, type } = item
        let { title } = item

        if (title.length > 30) {
            title = title.slice(0, 30) + '...'
        }

        const isLastElem = data.length - 1 === i ? lastElemRef : null

        return (
            <div
                className='content__item'
                onClick={() => navigateTo(id, type)}
                key={id}
                ref={isLastElem}
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
