import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,Validators } from '@angular/forms';
import { SocialNetworksService } from '../services/social-networks.service';
import { Configuration } from '../models/configuration.model';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { JsonCircularParser } from 'src/app/shared/utils/json-circular-parser';

@Component({
  selector: 'al-facebook-panel',
  templateUrl: './facebook-panel.component.html',
  styleUrls: ['./facebook-panel.component.scss']
})
export class FacebookPanelComponent implements OnInit {

  public formFacebook: FormGroup;

  constructor(
    private fBuilder: FormBuilder,
    private socialNetworkService: SocialNetworksService,
    private notificationService: NotificationService
    ) { 

      this.formFacebook = this.fBuilder.group({
        connectionFolderFeed: ['', [Validators.required]],
        connectionFolderImages: ['', [Validators.required]],
        connectionFolderVideos: ['', [Validators.required]],
        securityKey: ['', [Validators.required]]
    });

    this.socialNetworkService.getConfiguration('facebook').subscribe((response: Configuration) => {
        if (response.config) {
            const facebook = JSON.parse(response.config);
            this.initializeFacebookConfigurationForm(facebook);
        }
    }, error => this.initializeFacebookConfigurationForm());

  }

  ngOnInit() {
  }


  /**
     * Metodo para inicializar formulario con configuracion de facebook
     * @param facebook configuracion de facebook
     */
    initializeFacebookConfigurationForm(facebook?: any) {
      this.formFacebook.setValue({
        connectionFolderFeed: facebook ? facebook.consumerApiKey : '',
        connectionFolderImages: facebook ? facebook.consumerApiSecretKey : '',
        connectionFolderVideos: facebook ? facebook.accessToken : '',
        securityKey: facebook ? facebook.accessSecretToken : ''
      });
  }

  /**
     * Metodo para guardar desde formulario configuracion de facebook
     * @param formTwitter facebook configuration
     */
    sendTwitterConfiguration(formFacebook: FormGroup) {
      if (formFacebook.valid) {
          const config: Configuration = {
              id: null,
              type: 'facebook',
              config: JsonCircularParser({
                connectionFolderFeed: formFacebook.controls.connectionFolderFeed.value,
                connectionFolderImages: formFacebook.controls.connectionFolderImages.value,
                connectionFolderVideos: formFacebook.controls.connectionFolderVideos.value,
                securityKey: formFacebook.controls.securityKey.value
              })
          };
          this.socialNetworkService.postConfiguration(config).subscribe((response: any) => {
              this.notificationService.showNotification('Exito', response, 'Success');
          }, (error: any) => {
              this.notificationService.showNotification('Error', error, 'Error');
          });
      }

  }


}
