import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ReigisterComponent } from './pages/reigister/reigister.component';
import { RenewPasswordComponent } from './pages/renew-password/renew-password.component';
import { UpdatePasswordComponent } from './pages/update-password/update-password.component';

const routes: Routes = [
  
  {
    path: '',
    children: [
      
      { path: 'login', component: LoginComponent },
      { path: 'register', component: ReigisterComponent },
      { path: 'renew', component: RenewPasswordComponent },
      { path: 'update', component: UpdatePasswordComponent },
      { path: '**', redirectTo: 'login' }

    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
