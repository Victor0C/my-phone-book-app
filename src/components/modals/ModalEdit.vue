<template>
	<button
		type="button"
		class="btn btn-primary myButton"
		data-bs-toggle="modal"
		:data-bs-target="`#${this.contact.id}editModal`">
		Editar
	</button>
	<div
		class="modal fade"
		:id="`${this.contact.id}editModal`"
		tabindex="-1"
		aria-labelledby="EditModalLabel"
		aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5" id="EditModalLabel">
						Editar o contato de {{ localName }}
					</h1>
					<button
						@click="resetForms"
						type="button"
						class="btn-close"
						data-bs-dismiss="modal"
						aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<form class="d-flex flex-column gap-3">
						<div>
							<label :for="`#${this.contact.id}NameInput`" class="form-label"
								>Nome</label
							>
							<input
								v-model="localName"
								@blur="validateName"
								type="text"
								class="form-control"
								:class="{ 'is-invalid': localValidations.name.invalid }"
								:id="`${this.contact.id}NameInput`"
								maxlength="25"
								placeholder="Insira o nome do contato" />

							<small
								v-if="this.localValidations.name.invalid"
								class="text-danger"
								>Por favor, insira um nome válido.</small
							>
						</div>
						<div>
							<label :for="`#${this.contact.id}NumberInput`" class="form-label"
								>Número</label
							>
							<input
								v-model="localNumber"
								@blur="validateNumber"
								type="text"
								class="form-control"
								:class="{
									'is-invalid': localValidations.number.invalid,
								}"
								:id="`${this.contact.id}NumberInput`"
								oninput="this.value = this.value.replace(/\D/g,'')"
								maxlength="11"
								placeholder="Insira o número do contato (Sem formatação) " />
							<small v-if="localValidations.number.invalid" class="text-danger"
								>Por favor, insira um número válido.</small
							>
						</div>
					</form>
				</div>
				<div class="modal-footer">
					<button
						@click="editContact"
						type="button"
						class="btn btn-primary"
						:class="{
							disabled: !this.formOK,
						}"
						data-bs-dismiss="modal">
						Confirmar
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import updatedContact from '../../service/updatedContact.js';
	export default {
		name: 'ModalEdit',
		emits: ['contactUpdated'],
		props: {
			contact: null,
		},
		data() {
			return {
				localName: '',
				localNumber: '',
				formOK: true,
				localValidations: {
					name: {
						invalid: false,
					},
					number: {
						invalid: false,
					},
				},
			};
		},
		created() {
			this.localName = this.contact.name;
			this.localNumber = this.contact.number;
		},
		methods: {
			async editContact() {
				const data = await updatedContact(this.contact.id, {
					name: this.localName,
					number: this.localNumber,
				});
				if (data.error) {
					alert('Não foi possível editar o contato');
					return;
				}
				this.$emit('contactUpdated');
				this.resetForms();
			},
			validateName() {
				if (this.localName == '') {
					this.localValidations.name.invalid = true;
					this.validForm();
					return;
				}

				this.localValidations.name.invalid = false;
				this.validForm();
			},
			validateNumber() {
				if (this.localNumber == '' || this.localNumber.length != 11) {
					this.localValidations.number.invalid = true;
					this.validForm();
					return;
				}

				this.localValidations.number.invalid = false;
				this.validForm();
			},
			validForm() {
				if (
					this.localValidations.name.invalid == false &&
					this.localValidations.number.invalid == false
				) {
					this.formOK = true;
					return;
				}

				this.formOK = false;
			},
			resetForms() {
				this.localName = this.contact.name;
				this.localNumber = this.contact.number;
				this.localValidations.name.invalid = false;
				this.localValidations.number.invalid = false;
				this.formOK = true;
			},
		},
	};
</script>
