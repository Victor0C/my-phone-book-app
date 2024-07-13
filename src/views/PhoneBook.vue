<script setup></script>

<template>
	<div class="accordion" id="accordionExample">
		<Contact v-for="contact in contacts" :contact="contacts[0]"></Contact>
	</div>
</template>

<script>
	import Contact from '../components/Contact.vue';
	export default {
		name: 'PhoneBook',
		components: {
			Contact,
		},
		data() {
			return {
				contacts: [
					{
						id: 1,
						name: 'Victor',
						number: '75983299332',
					},
				],
			};
		},
	};
</script>
