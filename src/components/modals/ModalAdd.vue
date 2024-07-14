<template>
	<button
		type="button"
		class="btn btn-primary"
		data-bs-toggle="modal"
		data-bs-target="#AddModal">
		Adicionar
	</button>
	<div
		class="modal fade"
		id="AddModal"
		tabindex="-1"
		aria-labelledby="AddModalLabel"
		aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5" id="AddModalLabel">
						Adicionar novo contato
					</h1>
					<button
						@click="clearForms"
						type="button"
						class="btn-close"
						data-bs-dismiss="modal"
						aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<form class="d-flex flex-column gap-3">
						<div>
							<label for="#NameInput" class="form-label">Nome</label>
							<input
								v-model="name"
								@blur="validateName"
								type="text"
								class="form-control"
								:class="{ 'is-invalid': this.validations.name.invalid }"
								id="NameInput"
								maxlength="25"
								placeholder="Insira o nome do contato" />

							<small v-if="this.validations.name.invalid" class="text-danger"
								>Por favor, insira um nome válido.</small
							>
						</div>
						<div>
							<label for="#NumberInput" class="form-label">Número</label>
							<input
								v-model="number"
								@blur="validateNumber"
								type="text"
								class="form-control"
								:class="{
									'is-invalid': this.validations.number.invalid,
								}"
								id="NumberInput"
								oninput="this.value = this.value.replace(/\D/g,'')"
								maxlength="11"
								placeholder="Insira o número do contato (Sem formatação) " />
							<small v-if="this.validations.number.invalid" class="text-danger"
								>Por favor, insira um número válido.</small
							>
						</div>
					</form>
				</div>
				<div class="modal-footer">
					<button
						@click="addContact"
						type="button"
						class="btn btn-primary"
						:class="{
							disabled: !this.formOK,
						}"
						data-bs-dismiss="modal">
						Adicionar
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import createContact from '../../service/createContact.js'
	export default {
		name: 'ModalAdd',
		emits: ['contactCreated'],
		data() {
			return {
				name: '',
				number: '',
				formOK: false,
				validations: {
					name: {
						invalid: null,
					},
					number: {
						invalid: null,
					},
				},
			};
		},
		methods: {
			async addContact() {
				const data = await createContact({
					name: this.name,
					number: this.number,
				});
				if(data.error){
					alert('Não foi possível cadastrar o contato')
					return
				}
				this.$emit('contactCreated')
				this.clearForms();
			},
			validateName() {
				if (this.name == '') {
					this.validations.name.invalid = true;
					this.validForm();
					return;
				}

				this.validations.name.invalid = false;
				this.validForm();
			},
			validateNumber() {
				if (this.number == '' || this.number.length != 11) {
					this.validations.number.invalid = true;
					this.validForm();
					return;
				}

				this.validations.number.invalid = false;
				this.validForm();
			},
			validForm() {
				if (
					this.validations.name.invalid == false &&
					this.validations.number.invalid == false
				) {
					this.formOK = true;
					return;
				}

				this.formOK = false;
			},
			clearForms() {
				this.name = '';
				this.number = '';
				(this.formOK = false), (this.validations.name.invalid = false);
				this.validations.number.invalid = false;
			},
		},
	};
</script>
