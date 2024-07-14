import api from './api';

export default async function deleteContact(id) {
	try {
		const { data } = await api.delete(`/contacts/${id}`);
		return data;
	} catch (e) {
		return { error: e.response.status };
	}
}