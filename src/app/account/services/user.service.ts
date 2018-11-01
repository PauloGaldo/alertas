import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pageable } from '../../shared/models/pageable.interface';
import { User } from '../../shared/models/usuario.model';

@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }

    /**
     * GETTER PARA SABER SI ESTA AUTENTICADO
     */
    get isLogged(): boolean {
        // return this.authService.isAuthenticated();
        return true;
    }

    /**
     * Funcion para recuperar listado de Usuarios paginado
     * @param page numero de pagina
     * @param size cantidad de elementos por pagina
     * @param sort orden de columnas
     */
    getListOfUsers(page: number, size: number, sort: string): Observable<Pageable<User[]>> {
        return this.http.get<Pageable<User[]>>('/api/users', {
            params: new HttpParams().append('page', page.toString()).append('size', size.toString()).append('sort', sort ? sort : ''),
        });
    }

    /**
     * Funcion para registrar un nuevo usuario
     * @param usuario nuevo usuario a registrar
     */
    saveUser(usuario: User): Observable<User> {
        return this.http.post<User>('/api/users', usuario);
    }

    /**
     * Funcion para actualizar un usuario
     * @param usuario objeto usuario a actualizar
     */
    updateUser(usuario: User): Observable<User> {
        return this.http.put<User>(`/api/users/${usuario.id}`, usuario);
    }

    /**
     * Funcion para actualizar un usuario
     * @param usuario objeto usuario a actualizar
     */
    deleteUser(usuarioId: string): Observable<User> {
        return this.http.delete<User>(`/api/users/${usuarioId}`);
    }

    /**
     * Funcion para configurar estacion de usuario
     * @param configuration configuracion de estacion
     */
    configureUserStation(configuration: any): Observable<any> {
        return this.http.post<any>(`/api/station`, configuration);
    }

}
