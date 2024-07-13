<template>
	<button
		type="button"
		class="btn btn-danger"
		data-bs-toggle="modal"
		data-bs-target="#DeleteModal">
		Deletar
	</button>

	<div
		class="modal fade"
		id="DeleteModal"
		tabindex="-1"
		aria-labelledby="DeleteModalLabel"
		aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5" id="DeleteModalLabel">Deletar o contato de {{ this.contact.name }}</h1>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="modal"
						aria-label="Close"></button>
				</div>
				<div class="modal-body text-danger">
                    <p class="fs-5">Tem certeza em deletar o contato de {{ this.contact.name }}?</p>
                </div>
				<div class="modal-footer">
					<button @click="deleteContact" type="button" class="btn btn-danger" data-bs-dismiss="modal">Deletar</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ModalDelete',
		props: {
			contact: null,
		},
        methods: {
            deleteContact(){
                console.log('Deletar contato')
            }
        },
	};
</script>
