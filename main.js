let mail = document.getElementById('mail');
mail.addEventListener('blur', () => {
	let mailReq = document.getElementById('mailRequest'),
		validMail = new MFSValidator(mail.value);
	switch (validMail.validEmail) {
		case 1:
			mailReq.style.color = 'red';
			mailReq.textContent = 'Не может быть пустым';
			break;
		case 2: 
			mailReq.style.color = 'red';
			mailReq.textContent = 'Мы не можем обработать адрес, содержащий кирилические символы';
			break;
		case 3:
			mailReq.style.color = 'red';
			mailReq.textContent = 'Данный E-mail не может существовать';
			break;
		default:
			mailReq.style.color = 'green';
			mailReq.textContent = 'Все верно';
	}
});

let phone = document.getElementById('phone');
phone.addEventListener('blur', () => {
	let phoneReq = document.getElementById('phoneRequest'),
		phoneValid = new MFSValidator(phone.value);
	switch (phoneValid.validPhone) {
		case 1:
			phoneReq.style.color = 'red';
			phoneReq.textContent = 'Не может быть пустым';
			break;
		case 2:
			phoneReq.style.color = 'red';
			phoneReq.textContent = 'Не верное количество символов';
			break;
		default:
			phoneReq.style.color = 'green';
			phoneReq.textContent = 'Все верно';
	}
})
	