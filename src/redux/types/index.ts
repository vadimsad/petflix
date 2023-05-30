export enum FilmOrder {
	RATING = 'RATING',
	NUM_VOTE = 'NUM_VOTE',
	YEAR = 'YEAR',
}

export enum FilterTypes {
	genres = 'genres',
	countries = 'countries',
}

export enum FetchStatus {
	loading = 'loading',
	success = 'success',
	error = 'error',
}

export enum FilmType {
	ALL = 'ALL',
	FILM = 'FILM',
	TV_SHOW = 'TV_SHOW',
	TV_SERIES = 'TV_SERIES',
	MINI_SERIES = 'MINI_SERIES',
}

export enum FilmCollectionType {
	TOP_100_POPULAR_FILMS = 'TOP_100_POPULAR_FILMS',
	TOP_250_BEST_FILMS = 'TOP_250_BEST_FILMS',
	TOP_AWAIT_FILMS = 'TOP_AWAIT_FILMS',
}

export enum ImageType {
	STILL = 'STILL',
	SHOOTING = 'SHOOTING',
	POSTER = 'POSTER',
	FAN_ART = 'FAN_ART',
	PROMO = 'PROMO',
	CONCEPT = 'CONCEPT',
	WALLPAPER = 'WALLPAPER',
	COVER = 'COVER',
	SCREENSHOT = 'SCREENSHOT',
}

export type DataObject = Record<string, string | number | boolean | []>;

export interface IFetchData<T> {
	total: number;
	totalPages: number;
	items: T;
}

export interface IFetchDataBig<T> extends IFetchData<T> {
	[key: string]: string | number | boolean | T;
}

export type ImageItemType = {
	imageUrl: string;
	previewUrl: string;
};

export type FilmParams = {
	genres?: number | string;
	countries?: number | string;
	keyword?: string;
	order?: FilmOrder;
	page?: number;
	ratingFrom?: number | string;
	type?: FilmType;
	yearFrom?: number | string;
};

export type FilterOption<T> = {
	value: T;
	label?: string;
};

export type FilmCollectionParams = {
	type: FilmCollectionType;
	page: number;
};

export type ImageParams = {
	type: ImageType;
	page?: number;
};

export interface IFetchConfig<T> {
	params: T;
}

export interface IFetchContentType<T> {
	status: FetchStatus;
	content: T;
}

export interface Genre {
	genre: string;
}

export interface Country {
	country: string;
}

// export interface FilmData {
// 	kinopoiskId: number;
// 	imdbId: string;
// 	nameRu: string;
// 	nameEn: null;
// 	nameOriginal: string;
// 	posterUrl: string;
// 	posterUrlPreview: string;
// 	coverUrl: string;
// 	logoUrl: string;
// 	reviewsCount: number;
// 	ratingGoodReview: number;
// 	ratingGoodReviewVoteCount: number;
// 	ratingKinopoisk: number;
// 	ratingKinopoiskVoteCount: number;
// 	ratingImdb: number;
// 	ratingImdbVoteCount: number;
// 	ratingFilmCritics: number;
// 	ratingFilmCriticsVoteCount: number;
// 	ratingAwait: null;
// 	ratingAwaitCount: number;
// 	ratingRfCritics: number;
// 	ratingRfCriticsVoteCount: number;
// 	webUrl: string;
// 	year: number;
// 	filmLength: number;
// 	slogan: string;
// 	description: string;
// 	shortDescription: string;
// 	editorAnnotation: string;
// 	isTicketsAvailable: boolean;
// 	productionStatus: null;
// 	type: string;
// 	ratingMpaa: string;
// 	ratingAgeLimits: string;
// 	countries: Country[];
// 	genres: Genre[];
// 	startYear: null;
// 	endYear: null;
// 	serial: boolean;
// 	shortFilm: boolean;
// 	completed: boolean;
// 	hasImax: boolean;
// 	has3D: boolean;
// 	lastSync: Date;
// }

// export interface Country {
// 	country: string;
// }
