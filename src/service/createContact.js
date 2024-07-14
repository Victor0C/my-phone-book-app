import api from './api';

export default async function createContact(contact) {
	try {
		const { data } = await api.post('/contacts', contact);
		return data;
	} catch (e) {
		return { error: e.response.status };
	}
}
