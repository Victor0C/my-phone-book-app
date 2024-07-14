<script setup></script>

<template>
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
			};
		},
		methods: {
			async fetchContacts() {
				const data = await getContacts();

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
