import { api } from '../../api/API';

const useFilmImages = (mainFilmId, imageType, pageNumber, defaultImageUrl) => {
	return api
		.getFilmImages(mainFilmId, imageType, pageNumber)
		.then((res) => {
			const imageUrl = res?.items[0]?.imageUrl;
			return (
				imageUrl ||
				'https://stream-trader.ru/templates/Postbox/dleimages/no_image.jpg'
			);
		})
		.catch(console.log);
};

export default useFilmImages;
