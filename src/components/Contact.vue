<template>
	<div class="accordion-item">
		<h2 class="accordion-header">
			<button
				class="accordion-button collapsed"
				type="button"
				data-bs-toggle="collapse"
				:data-bs-target="`#${this.contact.id}`"
				aria-expanded="true"
				aria-controls="collapseOne">
				{{ this.contact.name }}
			</button>
		</h2>
		<div
			:id="`${this.contact.id}`"
			class="accordion-collapse collapse"
			data-bs-parent="#ContactAccordion">
			<div class="accordion-body d-flex">
				<p>Número: {{ this.contact.number }}</p>
				<div class="d-flex gap-1 ms-auto justify-content-end">
					<ModalEdit @contactUpdated="refreshList" :contact="contact"></ModalEdit>
					<ModalDelete @contactDeleted="refreshList" :contact="contact"></ModalDelete>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import ModalEdit from './modals/ModalEdit.vue';
	import ModalDelete from './modals/ModalDelete.vue';
	export default {
		name: 'Contact',
		emits: ['refreshList'],
		props: {
			contact: null,
		},
		components: {
			ModalEdit,
			ModalDelete,
		},
		methods: {
			refreshList(){
				this.$emit('refreshList')
			}
		},
	};
</script>
