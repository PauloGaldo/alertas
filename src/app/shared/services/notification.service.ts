import { Injectable } from '@angular/core';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { Subject } from 'rxjs';

@Injectable()
export class NotificationService {

    private notificationAnnoucedSource = new Subject<any>();
    notificationAnnouced$ = this.notificationAnnoucedSource.asObservable();

    constructor(private notificationsService: NotificationsService) { }

    /**
     * Metodo para mostrar notificacion del sistema
     * @param title titulo de la notificacion
     * @param content Texto contenido de la notificacion
     * @param type Tipo de prioridad de la notificacion
     */
    showNotification(title: string, content: string, type: string): void {
        this.notificationsService.create(title, content, NotificationType[type], {
            timeOut: 3000,
            showProgressBar: false,
            pauseOnHover: true
        });
    }

}
