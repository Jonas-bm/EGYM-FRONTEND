import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Suscripcion } from '../model/suscripcion';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class SuscripcionService {
  private url=`${base_url}/suscripcion`
  private listaCambio=new Subject<Suscripcion[]>();

  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<Suscripcion[]>(this.url);
  }
  insert(suscripcion:Suscripcion){
    return this.http.post(this.url, suscripcion);
  }
  setList(listanueva:Suscripcion[]){
    this.listaCambio.next(listanueva);
  }
  getLista(){
    return this.listaCambio.asObservable()
  }
}
