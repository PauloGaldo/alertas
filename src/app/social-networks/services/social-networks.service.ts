import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Configuration } from '../models/configuration.model';

@Injectable()
export class SocialNetworksService {

    constructor(private http: HttpClient) { }


    /**
     * Funcion para obtener configuracion de twitter
     */
    getConfiguration(type: string): Observable<Configuration> {
        return this.http.get<Configuration>('/api-alert/config', {
            params: new HttpParams().append('type', type)
        });
    }

    /**
     * Funcion para guardar configuracion de twitter
     * @param twitter configuracion de twitter
     */
    postConfiguration(twitter: Configuration): Observable<Configuration> {
        return this.http.post<Configuration>('/api-alert/config', twitter);
    }

}
