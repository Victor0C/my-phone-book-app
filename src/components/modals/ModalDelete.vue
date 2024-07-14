<template>
	<button
		type="button"
		class="btn btn-danger myButton"
		data-bs-toggle="modal"
		:data-bs-target="`#${contact.id}DeleteModal`">
		Deletar
	</button>

	<div
		class="modal fade"
		:id="`${contact.id}DeleteModal`"
		tabindex="-1"
		:aria-labelledby="`#${contact.id}DeleteModalLabel`"
		aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5" :id="`${contact.id}DeleteModalLabel`">
						Deletar o contato de {{ contact.name }}
					</h1>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="modal"
						aria-label="Close"></button>
				</div>
				<div class="modal-body text-danger">
					<p class="fs-5">
						Tem certeza em deletar o contato de {{ contact.name }}?
					</p>
				</div>
				<div class="modal-footer">
					<button
						@click="eliminateContact"
						type="button"
						class="btn btn-danger"
						data-bs-dismiss="modal">
						Deletar
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import deleteContact from '../../service/deleteContact.js';
	export default {
		name: 'ModalDelete',
		emits: ['contactDeleted'],
		props: {
			contact: null,
		},
		methods: {
			async eliminateContact() {
				const data = await deleteContact(this.contact.id);
				if (data.erro) {
					alert('Não foi possível deletar o contato');
				}

				this.$emit('contactDeleted');
			},
		},
	};
</script>
