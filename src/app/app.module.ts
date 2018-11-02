import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './shared/authentication/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/authentication/auth.interceptor';
import { AccountModule } from './account/account.module';
import { AuthGuard } from './shared/authentication/auth.guard';
import { FacebookPanelComponent } from './social-networks/facebook-panel/facebook-panel.component';
export function tokenGetter() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
        return JSON.parse(jwt).data;
    }
}

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AccountModule,
        SimpleNotificationsModule.forRoot({
            position: ['top', 'right']
        }),
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,
                whitelistedDomains: ['/api-alert/email/**'],
                blacklistedRoutes: ['/api-alert/auth/**']
            }
        })
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        AuthService,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
