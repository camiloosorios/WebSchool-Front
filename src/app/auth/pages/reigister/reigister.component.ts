import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reigister',
  templateUrl: './reigister.component.html',
  styleUrls: ['./reigister.component.css']
})
export class ReigisterComponent  {

  constructor( private fb: FormBuilder ) { }

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
    return this.formRegister.controls[field].touched && this.formRegister.controls[field].errors
      ? 'error'
      : 'text'
  }

  register() {
    this.formRegister.markAllAsTouched();
  }

}
