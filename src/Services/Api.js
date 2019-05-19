import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import md5 from 'md5';

const PUBLIC_KEY = 'f22e13ef63d150f3a8e82fb4ed908c86';
const PRIVATE_KEY = 'ca212258462245e9e725017898f933c3c705818a';
const TIMESTAMP = 1521727919;
const BASE_URL = 'https://gateway.marvel.com/v1/public/';


function createApiService() {
	const client = axios.create({
		baseURL: BASE_URL,
		timeout: 5000,
	});

	const cacheMaxTime = 5 * 60; // 5 min default

	client.interceptors.request.use(function(config) {
		config.params = {
			...config.params,
			apikey: PUBLIC_KEY,
			hash: md5(`${TIMESTAMP}${PRIVATE_KEY}${PUBLIC_KEY}`),
			ts: TIMESTAMP
		};

		return config
	});

	const handleError = error => {
		return error;
	}

	const handleResponse = response => {
		return response.data;
	}

	const cacheResponse = async response => {
		if (response.status === 200) {
			const { url, method } = response.config;
			const cacheKey = `${method}${url}`;
			await AsyncStorage.setItem(cacheKey, JSON.stringify(response));
			await AsyncStorage.setItem(cacheKey + ':ts', Date.now());
		}

		return response;
	}

	const getCacheResponse = async (method, url) => {
		const cacheKey = `${method}${BASE_URL}${url}`;
		const cached = await AsyncStorage.getItem(cacheKey);
		const whenCached = await AsyncStorage.getItem(cacheKey + ':ts');

		if (cached !== null && whenCached !== null) {
			let age = (Date.now() - whenCached) / 1000

			if (age < cacheMaxTime) {
				const response = JSON.parse(cached);
				return Promise.resolve(response);
			} else {
				// We need to clean up this old key
				await AsyncStorage.removeItem(cacheKey)
				await AsyncStorage.removeItem(cacheKey + ':ts')
			}
		}

		return null;
	}

	const get = async (url, options) => {
		let cached = await getCacheResponse('get', url);

		console.log(cached);

		if (cached !== null) {
			return Promise.resolve(cached);
		}

		return client.get(url, options).then(cacheResponse);
	}

	return {
		getComics: () => {
			return get('comics').then(handleResponse).catch(handleError);
		}
	}
}

export default createApiService();
