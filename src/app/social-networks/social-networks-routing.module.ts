import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { TwitterPanelComponent } from './twitter-panel/twitter-panel.component';
import { AuthGuard } from '../shared/authentication/auth.guard';

const routes: Routes = [
    {
        path: '', component: ControlPanelComponent, canActivate: [AuthGuard],
        children: [
            { path: '', component: TwitterPanelComponent, canActivate: [AuthGuard] },
            { path: 'facebook', component: TwitterPanelComponent, canActivate: [AuthGuard] },
            { path: 'whatsapp', component: TwitterPanelComponent, canActivate: [AuthGuard] },
            { path: 'email', component: TwitterPanelComponent, canActivate: [AuthGuard] }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SocialNetworksRoutingModule { }
