import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ReigisterComponent } from './pages/reigister/reigister.component';

const routes: Routes = [
  
  {
    path: '',
    children: [
      
      { path: 'login', component: LoginComponent },
      { path: 'register', component: ReigisterComponent },
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
