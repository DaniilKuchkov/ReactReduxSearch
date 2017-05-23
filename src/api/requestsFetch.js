import axios from 'axios';


let baseUrl = 'https://www.googleapis.com/youtube/v3/';

export function getAsync(specifyingUrl, settings) {
	let url = baseUrl + specifyingUrl;
	return axios.get(url, settings)
	.then(function(response) {
		return response || null;
	});
}