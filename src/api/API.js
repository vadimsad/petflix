import axios from 'axios';

('mail: 290a29e5-6a38-41ae-a8bf-f1708456187d (500/500)');
('gmail: acf887b4-bdef-4246-a283-3737a6f89e96 (0/500)');

const HEADERS = {
	'X-API-KEY': 'acf887b4-bdef-4246-a283-3737a6f89e96',
	'Content-Type': 'application/json',
};

const axiosInstance = axios.create({
	baseURL: 'https://kinopoiskapiunofficial.tech/api/v2.2/',
	headers: HEADERS,
});

export const api = {
	async getFilms(genres, countries, type, ratingFrom, yearFrom, order, page) {
		const config = {
			params: {
				genres,
				countries,
				type,
				ratingFrom,
				yearFrom,
				order,
				page,
			},
		};

		const res = await axiosInstance.get('films', config);
		return res.data;
	},
	async getPopular(page) {
		const config = {
			params: {
				type: 'TOP_100_POPULAR_FILMS',
				page,
			},
		};
		const res = await axiosInstance.get('films/top', config);
		return res.data;
	},
	async getFilmById(filmId) {
		const res = await axiosInstance.get(`films/${filmId}`);
		return res.data;
	},
	async getFilmImages(filmId, type, page) {
		const config = {
			params: {
				type,
				page,
			},
		};
		const res = await axiosInstance.get(`films/${filmId}/images`, config);
		return res.data;
	},
	async getFilters() {
		const res = await axiosInstance.get(`films/filters`);
		return res.data;
	},
};
