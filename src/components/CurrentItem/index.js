import './CurrentItem.sass'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getItem, CLEAR_ITEM } from '../../redux/actions'
import Loading from '../Loading'

const mapState = ({ currentItem }) => {
    return {
        ...currentItem,
    }
}

const mapDispatch = (dispatch, { actionType }) => {
    return {
        dispatch: (id) => dispatch(getItem(actionType, id)),
        clearItem: () => dispatch(CLEAR_ITEM()),
    }
}

const CurrentItem = ({
    title,
    image,
    overview,
    popularity,
    date,
    rating,
    dispatch,
    clearItem,
}) => {
    const { id } = useParams()

    useEffect(() => {
        dispatch(id)
        return clearItem
        // eslint-disable-next-line
    }, [id])

    return title ? (
        <main className='currentItem'>
            <img className='currentItem__img' src={image} alt='ItemImage' />
            <div className='currentItem__descr'>
                <div className='currentItem__descr__title'>{title}</div>
                <div className='currentItem__descr__date'>{date}</div>
                <div className='currentItem__descr__owerview'>{overview}</div>
            </div>
            <div className='currentItem__rating'>
                <div className='currentItem__rating__rate'>
                    Rating: {rating}
                </div>
                <div className='currentItem__rating__popularity'>
                    Popularity: {popularity}
                </div>
            </div>
        </main>
    ) : (
        <Loading />
    )
}

export default connect(mapState, mapDispatch)(CurrentItem)
