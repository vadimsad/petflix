import { api } from '../../api/API';

const useFilmImages = (
	{ mainFilmId, imageType, pageNumber, defaultImageUrl },
	setMainFilmImage,
	isLoading,
	setIsLoading
) => {
	api
		.getFilmImages(mainFilmId, imageType, pageNumber)
		.then((res) => {
			const imageUrl = res?.items[0]?.imageUrl;
			setMainFilmImage(imageUrl || defaultImageUrl);
			isLoading && setIsLoading(false);
		})
		.catch(console.log);
};

export default useFilmImages;
