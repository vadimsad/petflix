import React from 'react';
import { useParams } from 'react-router';

const SingleFilm = () => {
	const { id } = useParams();

	return (
		<>
			<div>
				<h1>Название фильма</h1>
				<div>
					<span>Оценка</span>
					<span>Год</span>
					<span>Длительность</span>
					<span>Жанр</span>
				</div>
				<p>Описание</p>
				<div>Режиссер</div>
				<div>Актеры</div>
			</div>
			<div>Изображение</div>
		</>
	);
};

export default SingleFilm;
