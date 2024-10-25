import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }
  private API_API=" http://localhost:3000/json"



  //escribir - guardar
  postWeb( metodo: JSON ):Observable<any>{
    return this.http.post(this.API_API, metodo)
  }


  //leer
  getWeb():Observable<any>{
    return this.http.get(this.API_API)

  }

  getWebb( id: string):Observable<any>{
    return this.http.get(this.API_API+"/"+id)
  }


  //editar
  putWWeb(metodo:any):Observable<any> {
    return this.http.put(`${this.API_API}/${metodo.id}`,metodo)
  }

  //eliminar
  deleteWeb(id: string):Observable<any>{
    return this.http.delete(`${this.API_API}/${id}`)
  }


}
