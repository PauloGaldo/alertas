import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialNetworksRoutingModule } from './social-networks-routing.module';
import { ControlPanelComponent } from './control-panel/control-panel.component';

@NgModule({
  imports: [
    CommonModule,
    SocialNetworksRoutingModule
  ],
  declarations: [
      ControlPanelComponent
  ]
})
export class SocialNetworksModule { }
