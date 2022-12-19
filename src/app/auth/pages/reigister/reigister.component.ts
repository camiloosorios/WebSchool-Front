import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reigister',
  templateUrl: './reigister.component.html',
  styleUrls: ['./reigister.component.css']
})
export class ReigisterComponent  {

  constructor(  private fb: FormBuilder,
                private authService: AuthServiceService ) { }

  //Se relacionan las variables con el formulario
  formRegister: FormGroup = this.fb.group({
    name               : [, [Validators.required, Validators.minLength(3)]],
    email              : [, [Validators.required, Validators.email]],
    role               : [0, [Validators.required]],
    password           : [, [Validators.required, Validators.minLength(6)]],
    password_validation: [, [Validators.required]]
  });

  //Validar los campos
  formValidate( field: string ) {
    return this.formRegister.controls[field].touched && this.formRegister.controls[field].errors
      ? true
      : false
  }

  //Validar que haya un rol seleccionado
  rolValidate() {
    return this.formRegister.controls['role'].touched && this.formRegister.controls['role'].value == 0
     ? true
     : false
  }

  //Validar que las contraseñas sean iguales
  passValidate() {
    return this.formRegister.controls['password'].value?.trim() !== this.formRegister.controls['password_validation'].value?.trim() 
        && this.formRegister.controls['password_validation'].touched
          ? true
          : false
  }

  //Mostrar errores con CSS
  cssValidate( field: string ) {
    //Validamos errores en el campo de Role
    if(this.formRegister.controls['role'].touched && this.formRegister.controls['role'].value == 0){
      this.formRegister.controls['role'].setErrors({'required': true});
      return 'error'
    }
    //Validamos errores en los demas campos
    else if(this.formRegister.controls[field].touched && this.formRegister.controls[field].errors){
      return 'error'
    } else {
      return 'text'
    }
  }

  register() {
    if(this.formRegister.invalid){
      this.formRegister.markAllAsTouched();

    } else {
      this.authService.register();
    }
    
  }

}
