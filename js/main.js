function Mask( obj ) {

	if(obj.getAttribute('data-mask') == 'telephone') {

		var telefone = obj;
		
		telefone.value = telefone.value.replace(/\D/g,'');
		telefone.value = telefone.value.replace(/^(\d{2})(\d)/g, '($1) $2');
		telefone.value = telefone.value.replace(/(\d{4})(\d)/, '$1-$2');

	}

	return telefone.value;

}

function validateForm() {

	// Criação das variáveis
	var form = document.contactForm;
	var name = document.contactForm.txtName;
	var email = document.contactForm.txtEmail;
	var telefone = document.contactForm.txtTel;
	var numeros = document.contactForm.txtNumeros;
	var checkboxes = document.getElementsByName('check[]');

	// Validação do campo nome
	if(name.value == '' || name.value == null || name.value.length < 3){
		alert('Digite um nome válido!');
		name.focus();
		return false;
	}

	// Validação do campo e-mail
	if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 || email.value == null || email.value.length < 5){
		alert('Digite um e-mail válido!');
		email.focus();;
		return false;
	}

	// Validação do campo telefone
	/*if( isNaN(telefone.value) ){
		alert('Digite apenas números!');
		telefone.focus();
		mensagem = false;
		return false;
	}*/

	if(telefone.value == '' || telefone.value == null || telefone.value.length < 14){
		alert('Digite um telefone válido!');
		telefone.focus();
		return false;
	}

	//Validação do campo select
	if(numeros.value == '' || numeros.value == null){
		alert('Por favor, escolha uma das opções!');
		numeros.focus();
		return false;
	}

	//Validação do campo check
	if(	checkboxes[0].checked == false &&
		checkboxes[1].checked == false &&
		checkboxes[2].checked == false ) {
			alert('Ecolha uma das checkboxes');
			return false;
	}

}