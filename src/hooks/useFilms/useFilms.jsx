import { api } from '../../api/API';

const useFilms = (
	genres,
	countries,
	type,
	ratingFrom,
	yearFrom,
	sort,
	searchQuery,
	currentPage,
) => {
	return api.getFilms(
		genres,
		countries,
		type,
		ratingFrom,
		yearFrom,
		sort,
		searchQuery,
		currentPage,
	);
};

export default useFilms;
