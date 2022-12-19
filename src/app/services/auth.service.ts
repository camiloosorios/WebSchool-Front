import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor( private http: HttpClient ) { }

  login(){
    this.http.get('');
    console.log('login');
    
  }

  register(){
    this.http.post('', '');
    console.log('register');
  }

  renew(){
    this.http.get('');
    console.log('renew');
  }

}
