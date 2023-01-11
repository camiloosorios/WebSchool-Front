import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, Params } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Response } from '../../interfaces/response.interface';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent {

  constructor(  private fb: FormBuilder,
                private authService: AuthServiceService,
                private router: Router) { }

  formUpdate: FormGroup = this.fb.group({
    password: [,[Validators.required, Validators.minLength(6)]],
    password_validation: [,[Validators.required]]
  });

  //Validar el campo
  formValidate( campo: string ){
    return this.formUpdate.controls[campo].invalid && this.formUpdate.controls[campo].touched
    ? true
    : false
    }

  //Mostrar errores con CSS
  cssValidate( campo: string ) {
    return this.formUpdate.controls[campo].invalid && this.formUpdate.controls[campo].touched
    ? 'error'
    : 'text'
    }

  //Validar que las contraseñas sean iguales
  passValidate(): boolean {
    const password1 = this.formUpdate.controls['password'];
    const password2 = this.formUpdate.controls['password_validation'];

    if(password1.value?.trim() !== password2.value?.trim() && password2.touched) {
      //Establecemos error si las contraseñas no son iguales
      this.formUpdate.setErrors({'notEqual': true});
      return true;

    } else {
      return false;
    }
  }

  //Postear información
  update(){
    
    if(this.formUpdate.invalid){
      this.formUpdate.markAllAsTouched();
      return;
    } else {
      const { token } = this.router.parseUrl(this.router.url).queryParams;
      this.authService.update(this.formUpdate.controls['password'].value, token)
      .subscribe({
      next: (resp: Response) => {

        Swal.fire({
          icon: 'success',
          title: '¡Actualización exitosa!',
          text: resp.msg,
          confirmButtonText: 'Iniciar Sesión'
        })
        .then( event => {
          if (event.isConfirmed) {
            this.router.navigate(['login']);                
          }
        })

      },
      error: (err) => {

      Swal.fire({
        icon: 'error',
        title: '¡Upss!',
        text: err.error.msg,  
      });

      }
      })
    }
  }
}
