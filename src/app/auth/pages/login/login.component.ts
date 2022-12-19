import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth.service';
import { ThemeServiceService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(  private servicioTema: ThemeServiceService, 
                private fb: FormBuilder,
                private authService: AuthServiceService ) { }

  ngOnInit(): void {

    //Se ejecuta servicio para establecer el téma
    this.servicioTema.setTema('auth');

  }

  //Se captura la información del formulario
  formLogin: FormGroup = this.fb.group({
    email   : [, [Validators.required]],
    password: [, [Validators.required]],
    remember: []
  });

  //Valida que los campos se encuentren correctamente diligenciados
  formValidate( campo: string ) {
    return this.formLogin.controls[campo].invalid && this.formLogin.controls[campo].touched 
      ? true 
      : false
  }
  
  //Mostrar errores con CSS
  cssValidate(campo:string) {
    return this.formLogin.controls[campo].invalid && this.formLogin.controls[campo].touched 
      ? 'error' 
      : 'text';
  }

  //Método para postear la información del formulario
  login() {

    if(this.formLogin.invalid){
      this.formLogin.markAllAsTouched();
      return;
    } else {
      this.authService.login();
    }
    

  }

}
