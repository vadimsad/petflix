import axios from 'axios';
import {
	FilmCollectionParams,
	FilmCollectionType,
	FilmParams,
	FilmType,
	IFetchConfig,
	ImageParams,
	ImageType,
} from '../redux/types';

('mail: 290a29e5-6a38-41ae-a8bf-f1708456187d (0/500)');
('gmail: acf887b4-bdef-4246-a283-3737a6f89e96 (500/500)');

const MAX_REQUESTS_COUNT = 6;
const INTERVAL_MS = 10;
let PENDING_REQUESTS = 0;

const HEADERS = {
	'X-API-KEY': '290a29e5-6a38-41ae-a8bf-f1708456187d',
	'Content-Type': 'application/json',
};

const axiosInstance = axios.create({
	baseURL: 'https://kinopoiskapiunofficial.tech/api/',
	headers: HEADERS,
});

axiosInstance.interceptors.request.use((config) => {
	return new Promise((resolve, reject) => {
		let interval = setInterval(() => {
			if (PENDING_REQUESTS < MAX_REQUESTS_COUNT) {
				PENDING_REQUESTS++;
				clearInterval(interval);
				resolve(config);
			}
		}, INTERVAL_MS);
	});
});

axiosInstance.interceptors.response.use(
	(response) => {
		PENDING_REQUESTS = Math.max(0, PENDING_REQUESTS - 1);
		return Promise.resolve(response);
	},
	(error) => {
		PENDING_REQUESTS = Math.max(0, PENDING_REQUESTS - 1);
		return Promise.reject(error);
	},
);

export const api = {
	async getFilms(config: IFetchConfig<FilmParams>) {
		const res = await axiosInstance.get('v2.2/films', config);
		return res.data;
	},
	async getPersons(config: { params: { name?: string } }) {
		const res = await axiosInstance.get('v1/persons', config);
		return res.data;
	},
	async getPersonById(personId: number) {
		const res = await axiosInstance.get(`v1/staff/${personId}`);
		return res.data;
	},
	async getTop(type: FilmCollectionType, page: number) {
		const config: IFetchConfig<FilmCollectionParams> = {
			params: {
				type,
				page,
			},
		};
		const res = await axiosInstance.get('v2.2/films/top', config);
		return res.data;
	},
	async getSimilar(filmId: number) {
		const res = await axiosInstance.get(`v2.2/films/${filmId}/similars`);
		return res.data;
	},
	async getFilmById(filmId: number) {
		const res = await axiosInstance.get(`v2.2/films/${filmId}`);
		return res.data;
	},
	async getReviews(filmId: number) {
		const res = await axiosInstance.get(`v2.2/films/${filmId}/reviews`);
		return res.data;
	},
	async getFacts(filmId: number) {
		const res = await axiosInstance.get(`v2.2/films/${filmId}/facts`);
		return res.data;
	},
	async getAwards(filmId: number) {
		const res = await axiosInstance.get(`v2.2/films/${filmId}/awards`);
		return res.data;
	},
	async getFilmImages(filmId: number, type: ImageType, page: number) {
		const config: IFetchConfig<ImageParams> = {
			params: {
				type,
				page,
			},
		};
		const res = await axiosInstance.get(`v2.2/films/${filmId}/images`, config);
		return res.data;
	},
	async getFilters() {
		const res = await axiosInstance.get(`v2.2/films/filters`);
		return res.data;
	},
};
