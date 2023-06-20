import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DetalleVenta } from '../model/detalleventa';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class DetalleventaService {

  private url = `${base_url}/detalleVenta`//tiene que ser igual en el controlador del backend de detalleventa
  private listaCambio = new Subject<DetalleVenta[]>()
  private confirmaEliminar=new Subject<Boolean>();

  constructor(private http:HttpClient) { }
  list() {
    return this.http.get<DetalleVenta[]>(this.url);
  }
  insert(detalle: DetalleVenta) {
    return this.http.post(this.url, detalle);
  }
  setList(listaNueva: DetalleVenta[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  listID(id:number){
    return this.http.get<DetalleVenta>(`${this.url}/${id}`);
  }
  update(dv:DetalleVenta){
    return this.http.put(this.url,dv);
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
