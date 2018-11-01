import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DRIVERS, Locker } from 'angular-safeguard';
import { AccountService } from '../../shared/authentication/account.service';
import { NotificationService } from '../../shared/services/notification.service';
import { CustomValidators, errorMessages } from '../../shared/utils/custom-validators';

@Component({
    selector: 'al-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;
    public profiles: Option<any>[];
    public errors: any = errorMessages;

    constructor(
        private formBuilder: FormBuilder,
        private accountService: AccountService,
        private locker: Locker,
        private router: Router,
        private notificationService: NotificationService
    ) {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    /**
     * Evento emitido al iniciarse componente
     */
    ngOnInit() {
    }

    /**
     * Metodo para realizar accion de login en la aplicacion
     * @param form formulario de login
     * @param event evento de click o submit del formulario
     */
    login(form: FormGroup, event: any) {
        if (form.invalid) {
            CustomValidators.markFormGroupTouched(form);
        } else {
            this.accountService
                .login(form.value.username, form.value.password)
                .subscribe(
                    (response: any) => {
                        if (response.accessToken) {
                            this.locker.set(DRIVERS.LOCAL, 'jwt', response.accessToken);
                            this.router.navigate(['main']);
                        }
                    },
                    (error: HttpErrorResponse) => {
                        this.notificationService.showNotification('Error', 'ERROR', 'Error');
                    }
                );
        }
    }
}

export interface Option<ID> {
    id: ID;
    description: string;
    selected?: boolean;
}
