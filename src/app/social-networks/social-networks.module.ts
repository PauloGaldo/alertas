import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialNetworksRoutingModule } from './social-networks-routing.module';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { ControlPanelHeaderComponent } from './control-panel-header/control-panel-header.component';
import { MaterialModule } from '../shared/material.module';
import { TwitterPanelComponent } from './twitter-panel/twitter-panel.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { SocialNetworksService } from './services/social-networks.service';
import { AuthGuard } from '../shared/authentication/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    SocialNetworksRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    ControlPanelComponent,
    ControlPanelHeaderComponent,
    TwitterPanelComponent
  ],
  exports: [
    TwitterPanelComponent
  ],
  providers: [
    SocialNetworksService,
    AuthGuard
  ]
})
export class SocialNetworksModule { }
