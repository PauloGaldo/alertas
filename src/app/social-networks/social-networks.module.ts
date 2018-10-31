import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialNetworksRoutingModule } from './social-networks-routing.module';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { ControlPanelHeaderComponent } from './control-panel-header/control-panel-header.component';
import { MaterialModule } from '../shared/material.module';
import { TwitterPanelComponent } from './twitter-panel/twitter-panel.component';

@NgModule({
  imports: [
    CommonModule,
    SocialNetworksRoutingModule,
    MaterialModule
  ],
  declarations: [
      ControlPanelComponent,
      ControlPanelHeaderComponent,
      TwitterPanelComponent
  ]
})
export class SocialNetworksModule { }
