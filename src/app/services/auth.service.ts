import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../auth/interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private apiURL: string = 'http://localhost:8080/auth';

  constructor( private http: HttpClient ) { }

  login(body: User): Observable<any>{

    const url = `${this.apiURL}/login`;

    return this.http.post(url, body);
  }

  register(body: User): Observable<any>{

    const url = `${this.apiURL}/register`;

    return this.http.post(url, body);
  }

  renew(email:string){

    const url = `${this.apiURL}/renew`;
    const body = {
      email
    }

    return this.http.post(url, body);
  }

}
