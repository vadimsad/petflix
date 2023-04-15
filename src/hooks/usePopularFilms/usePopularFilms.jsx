import { api } from '../../api/API';

const usePopularFilms = (setMainFilmId, setMinorFilms, minorFilmsQuantity) => {
	api
		.getPopular(1)
		.then((res) => {
			let mainFilm = res.films.slice(0, 1)[0];
			let minorFilms = res.films.slice(1, minorFilmsQuantity + 1);

			setMainFilmId(mainFilm.filmId);
			setMinorFilms(minorFilms);
		})
		.catch(console.log);
};

export default usePopularFilms;
