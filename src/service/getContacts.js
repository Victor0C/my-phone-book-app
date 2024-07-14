import api from './api';

export default async function getContacts() {
	try {
		const { data } = await api.get('/contacts');
		return data;
	} catch (e) {
		return { error: e.response.status };
	}
}
