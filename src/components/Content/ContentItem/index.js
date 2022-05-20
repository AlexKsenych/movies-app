import React from 'react';

const ContentItem = ({data}) => {
  	return data.map(item => {
    	const {original_title, vote_average, backdrop_path, id} = item;

		return (
			<div className="content__item" key={id}>
				<img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="img" className="content__item__img" />
				<div className="content__item__descr">
					<p className="content__item__title">{original_title}</p>
					<p className="content__item__rating">{vote_average}</p>
				</div>
			</div>
		)
  	})
}

export default ContentItem;