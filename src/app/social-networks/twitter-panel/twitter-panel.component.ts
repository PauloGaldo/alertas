import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialNetworksService } from '../services/social-networks.service';
import { Configuration } from '../models/configuration.model';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { JsonCircularParser } from 'src/app/shared/utils/json-circular-parser';

@Component({
    selector: 'al-twitter-panel',
    templateUrl: './twitter-panel.component.html',
    styleUrls: ['./twitter-panel.component.scss']
})
export class TwitterPanelComponent implements OnInit {

    public formTwitter: FormGroup;

    constructor(
        private fBuilder: FormBuilder,
        private socialNetworkService: SocialNetworksService,
        private notificationService: NotificationService
    ) {

        this.formTwitter = this.fBuilder.group({
            consumerApiKey: ['', [Validators.required]],
            consumerApiSecretKey: ['', [Validators.required]],
            accessToken: ['', [Validators.required]],
            accessSecretToken: ['', [Validators.required]]
        });

        this.socialNetworkService.getTwitterConfiguration().subscribe((response: Configuration) => {
            const twitter = JSON.parse(response.config);
            this.initializeTwitterConfigurationForm(twitter);
        }, error => this.initializeTwitterConfigurationForm());
    }


    ngOnInit() {
    }

    /**
     * Metodo para inicializar formulario con configuracion de twitter
     * @param twitter configuracion de twitter
     */
    initializeTwitterConfigurationForm(twitter?: any) {
        this.formTwitter.patchValue({
            consumerApiKey: twitter ? twitter.consumerAp : '',
            consumerApiSecretKey: twitter ? twitter.consumerApiSecre : '',
            accessToken: twitter ? twitter.acces : '',
            accessSecretToken: twitter ? twitter.accessSecre : ''
        });
    }

    /**
     * Metodo para guardar desde formulario configuracion de twitter
     * @param formTwitter twitter configuration
     */
    sendTwitterConfiguration(formTwitter: FormGroup) {
        if (formTwitter.valid) {
            const config: Configuration = {
                id: null,
                type: 'twitter',
                config: JsonCircularParser({
                    apiKey: formTwitter.controls.consumerApiKey.value,
                    apiSecretKey: formTwitter.controls.consumerApiSecretKey.value,
                    accessToken: formTwitter.controls.accessToken.value,
                    accessSecretToken: formTwitter.controls.accessSecretToken.value
                })
            };
            this.socialNetworkService.postTwitterConfiguration(config).subscribe((response: any) => {
                this.notificationService.showNotification('Exito', response, 'Success');
            }, (error: any) => {
                this.notificationService.showNotification('Error', error, 'Error');
            });
        }

    }


}
