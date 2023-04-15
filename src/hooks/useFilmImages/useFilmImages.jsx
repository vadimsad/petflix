import { api } from '../../api/API';

const useFilmImages = (
	{ mainFilmId, imageType, pageNumber },
	setMainFilmImage,
	isLoading,
	setIsLoading
) => {
	api
		.getFilmImages(mainFilmId, imageType, pageNumber)
		.then((res) => {
			setMainFilmImage(res.items[0].imageUrl);
			isLoading && setIsLoading(false);
		})
		.catch(console.log);
};

export default useFilmImages;
