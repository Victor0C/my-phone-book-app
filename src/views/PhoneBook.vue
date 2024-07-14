<script setup></script>

<template>
	<div class="d-flex mb-2 gap-1">
		<input
			type="text"
			v-model="searchQuery"
			placeholder="Pesquisar contatos..."
			class="form-control" />
		<button
			@click="fetchContacts"
			class="btn btn-primary"
			aria-label="Pesquisar">
			Pesquisar
		</button>
	</div>

	<div class="accordion" id="ContactAccordion">
		<Contact v-for="contact in contacts" :contact="contact"></Contact>
	</div>
</template>

<script>
	import Contact from '../components/Contact.vue';
	import getContacts from '../service/getContacts.js';

	export default {
		name: 'PhoneBook',
		components: {
			Contact,
		},
		data() {
			return {
				contacts: [],
				searchQuery: '',
			};
		},
		methods: {
			async fetchContacts() {
				const data = await getContacts(this.searchQuery);

				if (data.error) {
					alert('Algo deu errado com a busca da lista de contatos...');
					return;
				}
				this.contacts = data.data;
			},
		},
		created() {
			this.fetchContacts();
		},
	};
</script>
