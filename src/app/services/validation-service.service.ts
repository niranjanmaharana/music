export class ValidationService {
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        let config = {
            required: 'Field required!',
            invalidEmailAddress: 'Invalid email address!',
            invalidPassword: 'Invalid password. Password must be at least 8 characters long, and contain a number.',
            invalidMobile: 'Invalid mobile number!',
            minlength: `Minimum length ${validatorValue.requiredLength}`,
            maxlength: `Maximum length ${validatorValue.requiredLength}`
        };
        return config[validatorName];
    }

    static email(control) {
        return (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) ? null : { invalidEmailAddress: true };
    }

    static mobile(control) {
        return (isNaN(control.value) || control.value.length != 10) ? { invalidMobile: true } : null;
    }

    static password(control) {
        return (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,16}$/)) ?  null : { invalidPassword: true };
    }
}