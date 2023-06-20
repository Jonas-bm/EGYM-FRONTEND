import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RecetaAsignada } from '../model/resetaasignada';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class ResetaasignadaService {

  private url = `${base_url}/recetaAsignada`
  private listaCambio = new Subject<RecetaAsignada[]>()
  private confirmaEliminar=new Subject<Boolean>();

  constructor(private http:HttpClient) { }
  list() {
    return this.http.get<RecetaAsignada[]>(this.url);
  }
  insert(cita: RecetaAsignada) {
    return this.http.post(this.url, cita);
  }
  setList(listaNueva: RecetaAsignada[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  listID(id:number){
    return this.http.get<RecetaAsignada>(`${this.url}/${id}`);
  }
  update(rea:RecetaAsignada){
    return this.http.put(this.url,rea);
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
