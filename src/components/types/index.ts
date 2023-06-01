import { Genre } from '../../redux/types';

export type CardInfo = {
	kinopoiskId: number;
	posterUrl: string;
	nameRu: string;
	nameEn: string;
	nameOriginal: string;
	ratingKinopoisk: string | number;
	year: number;
	genres: Genre[];
};

export enum FilmsInSlider {
	popular = 'popular',
	best = 'best',
	await = 'await',
}
