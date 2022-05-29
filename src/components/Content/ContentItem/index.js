import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContentItem = ({data}) => {
	const navigate = useNavigate();

	const navigateTo = (id) => {
		navigate(`/movie/${id}`, { replace: true });
	}

  	return data.map(item => {
    	const {original_title, original_name, vote_average, backdrop_path, id} = item;

		let title = original_title ? original_title : original_name;

		if (title.length > 32) {
			title = title.slice(0, 32) + '...'
		}

		return (
			<div className="content__item" onClick={() => navigateTo(id)} key={id}>
				<img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="img" className="content__item__img" />
				<div className="content__item__descr">
					<p className="content__item__descr__title">{title}</p>
					<p className="content__item__descr__rating">{vote_average}</p>
				</div>
			</div>
		)
  	})
}

export default ContentItem;