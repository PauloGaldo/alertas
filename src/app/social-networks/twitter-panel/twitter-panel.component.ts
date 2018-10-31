import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialNetworksService } from '../services/social-networks.service';

@Component({
  selector: 'al-twitter-panel',
  templateUrl: './twitter-panel.component.html',
  styleUrls: ['./twitter-panel.component.scss']
})
export class TwitterPanelComponent implements OnInit {

  public formTwitter: FormGroup;
  //va a ser publico para que lo lea el html
  constructor(private fBuilder: FormBuilder,private socialNetworkService : SocialNetworksService) {
    this.formTwitter = this.fBuilder.group({
      consumerApiKey: ['', [Validators.required]],
      consumerApiSecretKey: ['', [Validators.required]],
      accessToken: ['', [Validators.required]],
      accessSecretToken: ['', [Validators.required]]

    });
  }


  ngOnInit() {
  }

  sendTwitterConfiguration(formTwitter: FormGroup) {
    console.log(formTwitter);
    if (formTwitter.valid) {
      let twitterData = {
        apiKey: formTwitter.controls.consumerApiKey.value,
        apiSecretKey: formTwitter.controls.consumerApiSecretKey,
        accessToken: formTwitter.controls.accessToken,
        accessSecretToken: formTwitter.controls.accessSecretToken
      };   
      this.socialNetworkService.showDataTwitter(twitterData);
    }
    
  }


}
