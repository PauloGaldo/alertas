import { HttpClient, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DRIVERS, Locker } from 'angular-safeguard';


@Injectable()
export class AuthService {

    cachedRequests: Array<HttpRequest<any>> = [];

    constructor(private locker: Locker, public jwtHelper: JwtHelperService, private http: HttpClient) { }
   
    /**
     * Funcion para devolver token almacenado en la aplicacion
     * @returns {string} token de autenticacion
     */
    public getToken(): string {
        const jwt = this.locker.get(DRIVERS.LOCAL, 'jwt');
        return jwt ? jwt.id_token : null;
    }

    /**
     * Funcion para retornar el estado de autenticacion del usuario con la aplicacion
     * @returns {boolean} retorna booleano para determinar estado de autorizacion
     */
    public isAuthenticated(): boolean {
        return !this.jwtHelper.isTokenExpired(this.getToken());
    }

}
