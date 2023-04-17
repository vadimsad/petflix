import axios from 'axios';

const HEADERS = {
	'X-API-KEY': '290a29e5-6a38-41ae-a8bf-f1708456187d',
	'Content-Type': 'application/json',
};

const axiosInstance = axios.create({
	baseURL: 'https://kinopoiskapiunofficial.tech/api/v2.2/',
	headers: HEADERS,
});

export const api = {
	async getFilms(genre, country, page) {
		let params = [];
		genre && params.push(`genres=${genre}`);
		country && params.push(`countries=${country}`);
		page && params.push(`countries=${page}`);

		const query = params.length ? `?${params.join('&')}` : '';

		const res = await axiosInstance.get(`films/${query}`);
		return res.data;
	},
	async getPopular(pageNumber) {
		const res = await axiosInstance.get(
			`films/top?type=TOP_100_POPULAR_FILMS&page=${pageNumber}`
		);
		return res.data;
	},
	async getFilmById(filmId) {
		const res = await axiosInstance.get(`films/${filmId}`);
		return res.data;
	},
	async getFilmImages(filmId, imageType, pageNumber) {
		const res = await axiosInstance.get(
			`films/${filmId}/images?type=${imageType}&page=${pageNumber}`
		);
		return res.data;
	},
	async getFilters() {
		const res = await axiosInstance.get(`films/filters`);
		return res.data;
	},
};
