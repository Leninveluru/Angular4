import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable()
export class ValidationService {

    constructor() { }

    static validateAllFormFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            }
        });
    }
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        const config = {
            'alphabets': 'Only alphabets are allowed',
            'required': 'This field is required',
            'invalidEmailAddress': 'Invalid Email Address'
        };
        return config[validatorName];
    }

    static required(control) {
        if (!control.value) {
            return { 'required': true };
        }
        return null;
    }

    static emailValidator(control) {
        if (control.value && !String(control.value).match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)) {
            return { 'invalidEmailAddress': true };
        }
        return null;
    }

    static alphabets(control) {
        if (control.value && String(control.value).match(/^(?![0-9\W]*$)[a-zA-Z\W]+$/)) {
            return null;
        }
        return { 'alphabets': true };
    }


}
