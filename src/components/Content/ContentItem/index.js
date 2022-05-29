import React from 'react';
import { useMatch, useNavigate } from 'react-router-dom';

const ContentItem = ({data}) => {
	const navigate = useNavigate();
	const pathMatch = useMatch('/tvshows');

	const navigateTo = (id) => {
		const path = !!pathMatch ? 'tvshow' : 'movie';

		navigate(`/${path}/${id}`, { replace: true });
	}

  	return data.map(item => {
    	const {title, name, vote_average, backdrop_path, id} = item;

		let itemName = title ? title : name;

		if (itemName.length > 32) {
			itemName = title.slice(0, 32) + '...'
		}

		return (
			<div className="content__item" onClick={() => navigateTo(id)} key={id}>
				<img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="img" className="content__item__img" />
				<div className="content__item__descr">
					<p className="content__item__descr__title">{itemName}</p>
					<p className="content__item__descr__rating">{vote_average}</p>
				</div>
			</div>
		)
  	})
}

export default ContentItem;