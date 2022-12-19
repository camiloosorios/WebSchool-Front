import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-renew-password',
  templateUrl: './renew-password.component.html',
  styleUrls: ['./renew-password.component.css']
})
export class RenewPasswordComponent {

  constructor(  private fb: FormBuilder,
                private authService: AuthServiceService ) { }

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
      this.authService.renew();
    }
  }

}
