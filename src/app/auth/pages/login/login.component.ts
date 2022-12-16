import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemeServiceService } from 'src/app/services/theme-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Variable para validar si un campo está vacio
  isEmpty:boolean = false;

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

  //Validar campos del formulario
  validation(campo: string) {
    if(this.formLogin.controls[campo].hasError('required') && this.formLogin.controls[campo].touched){
      this.isEmpty = false;
      return true;
    } else if(this.formLogin.controls[campo].hasError('email') && this.formLogin.controls[campo].touched){
      this.isEmpty = true;
      return false;
    } else {
      this.isEmpty = false;
      return false;
    }
  }

  validationCss(campo:string) {
    return this.formLogin.controls[campo].invalid && this.formLogin.controls[campo].touched ? 'error' : 'text';
  }

  //Método para postear la información del formulario
  login() {

    this.formLogin.markAllAsTouched();
    console.log(this.formLogin.controls['email'].errors && this.formLogin.controls['email'].touched);
    
    if(this.formLogin.invalid){      
      this.formLogin.controls['email'].touched;
    }
    

  }

}
