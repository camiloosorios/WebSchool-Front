import { Component, OnInit } from '@angular/core';
import { ThemeServiceService } from 'src/app/services/theme-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private servicioTema: ThemeServiceService ) { }

  ngOnInit(): void {

    this.servicioTema.setTema('auth');

  }

}
