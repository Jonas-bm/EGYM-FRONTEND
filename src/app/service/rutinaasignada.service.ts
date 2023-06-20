import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RutinaAsignada } from '../model/rutinaasignada';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class RutinaasignadaService {

  private url = `${base_url}/rutinaAsignada`
  private listaCambio = new Subject<RutinaAsignada[]>()
  private confirmaEliminar=new Subject<Boolean>();

  constructor(private http:HttpClient) { }
  list() {
    return this.http.get<RutinaAsignada[]>(this.url);
  }
  insert(rutina: RutinaAsignada) {
    return this.http.post(this.url, rutina);
  }
  setList(listaNueva: RutinaAsignada[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  listID(id:number){
    return this.http.get<RutinaAsignada>(`${this.url}/${id}`);
  }
  update(rua:RutinaAsignada){
    return this.http.put(this.url,rua);
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
