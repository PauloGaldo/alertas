import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Configuration } from '../models/configuration.model';

@Injectable()
export class SocialNetworksService {

    constructor(private http: HttpClient) { }


    /**
     * Funcion para obtener configuracion de twitter
     */
    getTwitterConfiguration(): Observable<Configuration> {
        return this.http.get<Configuration>('api-alert/twitter');
    }

    /**
     * Funcion para guardar configuracion de twitter
     * @param twitter configuracion de twitter
     */
    postTwitterConfiguration(twitter: Configuration): Observable<Configuration> {
        return this.http.post<Configuration>('api-alert/twitter', twitter);
    }
    
}
