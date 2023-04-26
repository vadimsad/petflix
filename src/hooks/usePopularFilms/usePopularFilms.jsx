import { useSelector, useDispatch } from 'react-redux';

import { api } from '../../api/API';
import { setFilms } from '../../redux/slices/filmsSlice';

const usePopularFilms = (minorFilmsQuantity) => {
	const dispatch = useDispatch();

	api
		.then((res) => {
			let mainFilm = res.films.slice(0, 1)[0];
			let minorFilms = res.films.slice(1, minorFilmsQuantity + 1);

			dispatch();
		})
		.catch(console.log);
};

export default usePopularFilms;
