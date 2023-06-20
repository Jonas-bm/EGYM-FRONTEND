import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CitaEntrenador } from '../model/citaEntrenador';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class CitaEntrenadorService {
  private url = `${base_url}/citaEntrenador`
  private listaCambio = new Subject<CitaEntrenador[]>()
  private confirmaEliminar = new Subject<Boolean>();

  constructor(private http:HttpClient) { }
  list() {
    return this.http.get<CitaEntrenador[]>(this.url);
  }
  insert(cita: CitaEntrenador) {
    return this.http.post(this.url, cita);
  }
  setList(listaNueva: CitaEntrenador[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  //traer id
  listID(id:number){
    return this.http.get<CitaEntrenador>(`${this.url}/${id}`);
  }
  //modificar
  update(ce:CitaEntrenador){
    return this.http.put(this.url,ce);
  }
  //delete
  delete(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }
  getConfirmDelete(){
    return this.confirmaEliminar.asObservable();
  }
  setConfirmDelete(est:Boolean){
    this.confirmaEliminar.next(est)
  }

}
