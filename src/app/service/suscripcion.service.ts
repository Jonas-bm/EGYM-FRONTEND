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
  private confirmaEliminar=new Subject<Boolean>();

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
  listID(id:number){
    return this.http.get<Suscripcion>(`${this.url}/${id}`);
  }
  update(s:Suscripcion){
    return this.http.put(this.url,s);
  }
  delete(id:number){
    return this.http.delete(`${this.url}/${id}`)
  }
  getConfirmDelete(){
    return this.confirmaEliminar.asObservable();
  }
  setConfirmDelete(est:Boolean){
    this.confirmaEliminar.next(est);
  }
}
