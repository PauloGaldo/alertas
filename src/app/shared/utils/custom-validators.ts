import { FormControl, FormGroup, FormGroupDirective, NgForm, ValidatorFn } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

export class CustomValidators {

    static childrenEqual: ValidatorFn = (formGroup: FormGroup) => {
        const [firstControlName, ...otherControlNames] = Object.keys(formGroup.controls || {});
        const isValid = otherControlNames.every(controlName => formGroup.get(controlName).value === formGroup.get(firstControlName).value);
        return isValid ? null : { childrenNotEqual: true };
    }

    static markFormGroupTouched(formGroup: FormGroup) {
        (<any>Object).values(formGroup.controls).forEach(control => {
            control.markAsTouched();
            if (control.controls) {
                (<any>Object).values(control.controls).forEach(c => {
                    c.markAsTouched();
                });
            }
        });
    }
}

/**
 * Custom ErrorStateMatcher which returns true (error exists) when the parent form group is invalid and the control has been touched
 */
export class ConfirmValidParentMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        return control.parent.invalid && control.touched;
    }
}

/**
 * Constantes con mensajes de error predefinidos para formularios
 */
export const errorMessages: { [key: string]: any } = {
    username: {
        required: 'Por favor, ingrese su nombre de usuario',
        maxlength: 'Nombre de usuario demasiado largo'
    },
    password: {
        required: 'Por favor, ingrese su contraseña',
        minlength: 'La contraseña debe tener como mínimo 8 caracteres'
    },
    extension: {
        required: 'Por favor, ingrese un numero de extensión telefonico'
    },
    email: {
        required: 'Por favor, ingresa tu correo electrónico',
        email: 'Correo electrónico no válido'
    },
    firstName: {
        required: 'Por favor, ingrese su nombre completo',
        maxlength: 'Nombre demasiado largo'
    },
    lastName: {
        required: 'Por favor, ingrese su apellido completo',
        maxlength: 'Apellido demasiado largo'
    },
    authorities: {
        required: 'Por favor, selecciona al menos un rol'
    },
    description: {
        required: 'Por favor, ingresa una descripción'
    },
    sipAddress: {
        required: 'Por favor, ingresa una dirección SIP'
    },
    centerId: {
        required: 'Por favor, ingresa un identificador de centro'
    },
    microphone: {
        required: 'Por favor, selecciona un dispositivo de entrada'
    },
    headphone: {
        required: 'Por favor, selecciona un dispositivo de salida'
    },
    groupPassword: {
        password: {
            required: 'Por favor, ingrese una contraseña',
            minlength: 'La contraseña debe tener como mínimo 5 caracteres',
            pattern: 'Debe tener al menos un número y al menos una letra'
        },
        confirmPassword: {
            required: 'Por favor, vuelve a ingresar tu contraseña',
            childrenNotEqual: 'Las contraseñas ingresadas no son iguales.'
        }
    },
    motivoInc: {
        required: 'Por favor, selecciona el motivo del incidente'
    },
    telefono: {
        required: 'Por favor, ingrese el teléfono del incidente',
        maxlength: 'El número de teléfono debe contener 10 dígitos'
    },
    tipoInvolucrado: {
        required: 'Por favor, seleccione un tipo de involucrado'
    },
    razonamiento: {
        required: 'Por favor, ingrese un razonamiento'
    },
    contraseniaActual: {
        required: 'Por favor, ingrese su contraseña actual'
    },
    nuevaContrasenia: {
        required: 'Por favor, ingrese su nueva contraseña'
    },
    repetirContrasenia: {
        required: 'Por favor, repita su nueva contraseña'
    },
    implicado: {
        required: 'Seleccione el implicado'
    },
    estado: {
        required: 'Por favor, ingrese el estado'
    },
    municipio: {
        required: 'Por favor, ingrese el municipio'
    },
    colonia: {
        required: 'Por favor, ingrese la colonia'
    },
    calle: {
        required: 'Por favor, ingrese la calle'
    },
    tipo: {
        required: 'Por favor, ingrese el tipo'
    },
    compania: {
        required: 'Por favor, ingrese la compañía'
    },
    arma: {
        required: 'Por favor, seleccione un arma'
    },
    sustancia: {
        required: 'Por favor, seleccione una sustancia'
    },
    unidadMedida: {
        required: 'Por favor, seleccione un unidad de medida'
    },
    cantidad: {
        required: 'Por favor, ingrese la cantidad'
    },
    title: {
        required: 'Por favor, ingrese el título de la notificacion'
    },
    folio: {
        required: 'Por favor, ingrese un número de folio'
    },
    motivo: {
        required: 'Por favor, ingrese un motivo'
    },
    recording: {
        required: 'Seleccione grabaciones'
    },
    nameRequired: {
        required: 'Por favor, ingrese el nombre'
    }
};
