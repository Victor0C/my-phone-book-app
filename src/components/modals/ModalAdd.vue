<template>
	<button
		type="button"
		class="btn btn-primary"
		data-bs-toggle="modal"
		data-bs-target="#EditModal">
		Adicionar
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
					<h1 class="modal-title fs-5" id="EditModalLabel">Adicionar novo contato</h1>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="modal"
						aria-label="Close"></button>
				</div>
				<div class="modal-body">
                    <p>aqui vai o forms de novo contato</p>
                </div>
				<div class="modal-footer">
					<button @click="editContact" type="button" class="btn btn-primary" data-bs-dismiss="modal">Adicionar</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ModalAdd',
		methods: {
            editContact(){
                console.log('Editar contato')
            }
        },

	};
</script>
