import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }


  //ruta para logearse
  private API_LOGIN="http://localhost:3000/login"

  postLogin( user: JSON):Observable<any>{
    return this.http.post(this.API_LOGIN, user)
  }



  //ruta para registrarse
  private API_REGISTRO="http://localhost:3000/users"

  postResgistrarse( user : any):Observable<any>{
    return this.http.post(this.API_REGISTRO, user)

  }
}
