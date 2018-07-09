'use strict';

class MFSValidator {

	constructor (data) {
		this.data = data;
		console.log(this.data);
		this.reg = {
			mailSimbol : /[А-яЁё]/g,
			mailValid : /.+@.+\..+/i,
			notDigit : /(7|8)?\D/g
		};
	}
	/** --- Валидация E-mail --- **/
	get validEmail() {
		let err = 0;
		/** --- Проверка на пустоту --- **/
		if (this.data.length === 0) {
			err = 1; 
			return err
		}
		/** --- Проверка на отсутствие кириллицы --- **/
		if (this.data.match(this.reg.mailSimbol)) {
			err = 2;
			return err;
		}
		/** --- Валидация по правилу составления --- **/
		if (!this.data.match(this.reg.mailValid)) {
			err = 3;
			return err;
		}
		return err
	}
	
	/** --- Валидация телефона --- **/
	get validPhone() {
		let err = 0,
			phoneValid = this.data.replace(this.reg.notDigit, '');
		console.log('phoneValid ', phoneValid);
		/** --- Проверка на пустоту --- **/
		if (phoneValid.length === 0) {
			err = 1;
			return err;
		}
		/** --- Валидация на допустимое количество символов --- **/
		if (phoneValid.length !== 10) {
			err = 2;
			return err;
		}
		return err
		
	}
}


