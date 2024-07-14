import api from './api';

export default async function getPage(url) {
	try {
		const { data } = await api.get(url);
		return data;
	} catch (e) {
		return { error: e.response.status };
	}
}
