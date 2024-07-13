<template>
	<button
		type="button"
		class="btn btn-primary"
		data-bs-toggle="modal"
		data-bs-target="#EditModal">
		Editar
	</button>

	<div
		class="modal fade"
		id="EditModal"
		tabindex="-1"
		aria-labelledby="EditModalLabel"
		aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5" id="EditModalLabel">Editar o contato de {{ this.contact.name }}</h1>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="modal"
						aria-label="Close"></button>
				</div>
				<div class="modal-body">
                    <p>aqui vai o forms de edição</p>
                </div>
				<div class="modal-footer">
					<button @click="editContact" type="button" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ModalEdit',
		props: {
			contact: null,
		},
		methods: {
            editContact(){
                console.log('Editar contato')
            }
        },

	};
</script>
