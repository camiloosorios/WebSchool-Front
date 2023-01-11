import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Response } from '../../interfaces/response.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-renew-password',
  templateUrl: './renew-password.component.html',
  styleUrls: ['./renew-password.component.css']
})
export class RenewPasswordComponent {

  constructor(  private fb: FormBuilder,
                private authService: AuthServiceService,
                private router: Router ) { }

  formRenew: FormGroup = this.fb.group({
    email: [, [Validators.required, Validators.email]]
  });

  //Validar el campo
  formValidate(){
    return this.formRenew.invalid && this.formRenew.touched
      ? true
      : false
  }

  //Mostrar errores con CSS
  cssValidate() {
    return this.formRenew.invalid && this.formRenew.touched
      ? 'error'
      : 'text'
  }

  //Postear información
  renew(){
    if(this.formRenew.invalid){
      this.formRenew.markAllAsTouched();
      return;
    } else {
      this.authService.renew(this.formRenew.controls['email'].value)
        .subscribe({
          next: (resp: Response) => {
            
            Swal.fire({
              icon: 'success',
              title: '¡Correo enviado!',
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
