import api from './api';

export default async function updatedContact(id, contact) {
	try {
		const { data } = await api.patch(`/contacts/${id}`, contact);
		return data;
	} catch (e) {
		return { error: e.response.status };
	}
}
