import {Form as VeeForm, Field as VeeField, defineRule, ErrorMessage, configure} from 'vee-validate'
import {required, email, min, max, alpha_spaces as alphaSpaces} from '@vee-validate/rules'

export default {
	install (app) {
		app.component('VeeForm', VeeForm);
		app.component('VeeField', VeeField);
		app.component('ErrorMessage', ErrorMessage);

		defineRule('required', required);
		defineRule('firstNameRequired', required);
		defineRule('lastNameRequired', required);
		defineRule('email', email);
		defineRule('min', min);
		defineRule('max', max);
		defineRule('alpha_spaces', alphaSpaces);

		configure( {
			generateMessage: (ctx) => {
				const messages = {
					firstNameRequired: 'Bitte schreiben Sie ihren Vornamen',
					lastNameRequired: 'Bitte schreiben Sie ihren Nachnamen',
					email: 'Bitte geben Sie eine gültige E-Mail Adresse ein',
				};
				const message = messages[ctx.rule.name] ? messages[ctx.rule.name] : 'Dieses Feld ist ungültig';
				return message;
			},
		});
	},
};