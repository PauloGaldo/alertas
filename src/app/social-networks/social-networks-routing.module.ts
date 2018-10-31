import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { TwitterPanelComponent } from './twitter-panel/twitter-panel.component';

const routes: Routes = [
    {
        path: '', component: ControlPanelComponent,
        children: [
            { path: '', component: TwitterPanelComponent },
            { path: 'facebook', component: TwitterPanelComponent },
            { path: 'whatsapp', component: TwitterPanelComponent },
            { path: 'email', component: TwitterPanelComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SocialNetworksRoutingModule { }
