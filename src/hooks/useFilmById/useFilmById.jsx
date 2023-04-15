import { api } from '../../api/API';

const useFilmById = (
	mainFilmId,
	setMainFilmName,
	setMainFilmDescription,
	isLoading,
	setIsLoading
) => {
	api
		.getFilmById(mainFilmId)
		.then((res) => {
			setMainFilmName(res.nameRu);
			setMainFilmDescription(res.description);
			isLoading && setIsLoading(false);
		})
		.catch(console.log);
};

export default useFilmById;
