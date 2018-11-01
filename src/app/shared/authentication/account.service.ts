import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HandleError } from '../utils/handle-error.util';

@Injectable()
export class AccountService {
    constructor(private http: HttpClient) { }

    /**
     * Funcion para realizar accion de login en la aplicacion
     * @param login username/email de usuario
     * @param password contraseña de usuario
     * @param rol rol de usuario con el cual logea
     */
    login(login: string, password: string): Observable<any> {
        return this.http
            .post<any>('/api-alert/auth/login', {
                username: login,
                password: password
            })
            .pipe(catchError(HandleError));
    }

}
