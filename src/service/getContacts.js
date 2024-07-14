import api from './api';

export default async function getContacts(name ='') {
	try {
		const { data } = await api.get('/contacts', {
			params:{
				name
			}
		});
		return data;
	} catch (e) {
		return { error: e.response.status };
	}
}
