import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordMatchValidator: ValidatorFn = (
    control: AbstractControl
):ValidationErrors | null => {
    const password = control.get('password');
    const retypedPassword = control.get('rPassword');

    return password && retypedPassword && password.value === retypedPassword.value
     ? null
     : { passwordMismatch: true }
}
