const useDeduplicate = (array: Object[]) => {
	const uniqueFilms = [...new Set(array.map((item) => JSON.stringify(item)))];
	const uniqueFilmsSerialized: Object[] = uniqueFilms.map((film) => JSON.parse(film));
	return uniqueFilmsSerialized;
};

export default useDeduplicate;
