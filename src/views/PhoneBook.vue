<template>
	<div class="div d-flex justify-content-center">
		<div class="d-flex flex-column align-items-center myContainer">
			<div class="d-flex mb-2 gap-1 w-100">
				<form class="w-100">
					<input
						@keyup.enter="fetchContacts"
						type="text"
						v-model="searchQuery"
						placeholder="Pesquisar contatos..."
						class="form-control" />
				</form>
				<button
					@click="fetchContacts"
					class="btn btn-primary"
					aria-label="Pesquisar">
					Pesquisar
				</button>
				<ModalAdd @contactCreated="fetchContacts"></ModalAdd>
			</div>

			<div v-if="contacts.length == 0 && !loading" class="alert alert-warning" role="alert">
				Nenhum contato encontrado...
			</div>

			<div class="accordion w-100" id="ContactAccordion">
				<Contact @refreshList="fetchContacts" v-for="contact in contacts" :contact="contact"></Contact>
			</div>

			<nav
				v-if="pagination.total_page > 1"
				aria-label="Page navigation example">
				<ul class="pagination mt-2">
					<li
						v-for="link in this.pagination.links"
						@click="fetchPage(link.url)"
						class="page-item"
						:class="{ active: link.active, disabled: link.url == null }">
						<button class="page-link">
							{{
								link.label.includes('Previous')
									? 'Anterior'
									: link.label.includes('Next')
									? 'Próximo'
									: link.label
							}}
						</button>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</template>

<script>
	import Contact from '../components/Contact.vue';
	import ModalAdd from '../components/modals/ModalAdd.vue';
	import getContacts from '../service/getContacts.js';
	import getPage from '../service/getPage.js';

	export default {
		name: 'PhoneBook',
		components: {
			Contact,
			ModalAdd,
		},
		data() {
			return {
				contacts: [],
				searchQuery: '',
				pagination: {
					current_page: 1,
					total_page: 1,
					links: [],
				},
				loading: true
			};
		},
		methods: {
			fillDatas(data) {
				this.contacts = data.data;
				this.pagination.links = data.links;
				this.pagination.current_page = data.current_page;
				this.pagination.total_page = data.last_page;
			},
			async fetchContacts() {
				const data = await getContacts(this.searchQuery);

				if (data.error) {
					alert('Algo deu errado com a busca da lista de contatos...');
					return;
				}
				this.fillDatas(data);
				this.loading = false
			},
			async fetchPage(url) {
				const data = await getPage(url);
				if (data.error) {
					alert('Algo deu errado com a busca da lista de contatos...');
					return;
				}

				this.fillDatas(data);
			},
		},
		created() {
			this.fetchContacts();
		},
	};
</script>

<style scoped>
.myContainer{
	width: 60rem;
}

@media screen and (max-width: 750px) {
  .myContainer {
    width: 100%;
  }
}
</style>
