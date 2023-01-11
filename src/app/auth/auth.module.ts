import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { ReigisterComponent } from './pages/reigister/reigister.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RenewPasswordComponent } from './pages/renew-password/renew-password.component';
import { UpdatePasswordComponent } from './pages/update-password/update-password.component';


@NgModule({
  declarations: [
    LoginComponent,
    ReigisterComponent,
    RenewPasswordComponent,
    UpdatePasswordComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
