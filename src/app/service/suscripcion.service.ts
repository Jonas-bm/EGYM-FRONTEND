import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Suscripcion } from '../model/suscripcion';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class SuscripcionService {
  private url=`${base_url}/suscripcion`
  private listaCambio=new Subject<Suscripcion[]>();

  constructor(private http:HttpClient) { }
  list(){
    let token = sessionStorage.getItem("token");
    return this.http.get<Suscripcion[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insert(suscripcion:Suscripcion){
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, suscripcion,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  setList(listanueva:Suscripcion[]){
    this.listaCambio.next(listanueva);
  }
  getLista(){
    return this.listaCambio.asObservable()
  }
}
