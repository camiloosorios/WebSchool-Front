import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemeServiceService } from 'src/app/services/theme-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private servicioTema: ThemeServiceService, private fb: FormBuilder ) { }

  ngOnInit(): void {

    //Se ejecuta servicio para establecer el téma
    this.servicioTema.setTema('auth');

  }

  //Se captura la información del formulario
  formLogin: FormGroup = this.fb.group({
    email: [, [Validators.required, Validators.email]],
    password: [, [Validators.required, Validators.minLength(6)]],
    remember: []
  });

  //Valida que los campos se encuentren correctamente diligenciados
  formValidate( campo: string ) {
    return this.formLogin.controls[campo].invalid && this.formLogin.controls['email'].touched 
      ? true 
      : false
  }
  
  //Resalta en el formulario los campos con errores
  cssValidate(campo:string) {
    return this.formLogin.controls[campo].invalid && this.formLogin.controls[campo].touched 
      ? 'error' 
      : 'text';
  }

  //Método para postear la información del formulario
  login() {

    this.formLogin.markAllAsTouched();
    console.log(this.formLogin.controls['password']);
    

  }

}
