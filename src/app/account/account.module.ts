import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { LoginComponent } from './login/login.component';
import { UserService } from './services/user.service';
import { AccountService } from '../shared/authentication/account.service';
import { HttpClientModule } from '@angular/common/http';
import { LockerModule } from 'angular-safeguard';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../shared/authentication/auth.guard';

@NgModule({
    imports: [
        CommonModule,
        AccountRoutingModule,
        HttpClientModule,
        MaterialModule,
        SharedModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        LockerModule
    ],
    declarations: [
        LoginComponent
    ],
    providers: [
        UserService,
        AccountService,
        AuthGuard
    ]
})
export class AccountModule { }
