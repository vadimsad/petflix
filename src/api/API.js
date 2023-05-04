import axios from 'axios';

('mail: 290a29e5-6a38-41ae-a8bf-f1708456187d (0/500)');
('gmail: acf887b4-bdef-4246-a283-3737a6f89e96 (500/500)');

const HEADERS = {
	'X-API-KEY': '290a29e5-6a38-41ae-a8bf-f1708456187d',
	'Content-Type': 'application/json',
};

const axiosInstance = axios.create({
	baseURL: 'https://kinopoiskapiunofficial.tech/api/v2.2/',
	headers: HEADERS,
});

export const api = {
	async getFilms(config) {
		const res = await axiosInstance.get('films', config);
		return res.data;
	},
	async getTop(type, page) {
		const config = {
			params: {
				type,
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
