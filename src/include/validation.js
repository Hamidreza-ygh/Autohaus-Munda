import {Form as VeeForm, Field as VeeField, defineRule, ErrorMessage, configure} from 'vee-validate'
import {required, email, min, regex, max, alpha_spaces as alphaSpaces} from '@vee-validate/rules'

export default {
	install (app) {
		app.component('VeeForm', VeeForm);
		app.component('VeeField', VeeField);
		app.component('ErrorMessage', ErrorMessage);

		defineRule('required', required);
		defineRule('nameRequired', required);
		defineRule('lastNameRequired', required);
		defineRule('email', email);
		defineRule('min', min);
		defineRule('max', max);
		defineRule('alpha_spaces', alphaSpaces);
		defineRule('phoneNumber', regex);

		configure( {
			generateMessage: (ctx) => {
				const messages = {
					nameRequired: 'Bitte schreiben Sie ihren Namen',
					lastNameRequired: 'Bitte schreiben Sie ihren Nachnamen',
					email: 'Bitte geben Sie eine gültige E-Mail Adresse ein',
					phoneNumber: 'Bitte geben Sie eine gültige Telefonenummer ein',
				};
				const message = messages[ctx.rule.name] ? messages[ctx.rule.name] : 'Dieses Feld ist ungültig';
				return message;
			},
		});
	},
};