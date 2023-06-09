import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Visualizaciones } from '../model/visualizaciones';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class VisualizacionesService {

  private url = `${base_url}/visualizaciones`
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject<Visualizaciones[]>();
  constructor(private http:HttpClient) { }
  list(){
    let token = sessionStorage.getItem("token");
    return this.http.get<Visualizaciones[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  insert(visualizaciones: Visualizaciones) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, visualizaciones,{
      headers: new HttpHeaders().set('Authorization',`Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  setList (ListaNueva: Visualizaciones[]) {
    this.listaCambio.next(ListaNueva)
  }

  getList () {
    return this.listaCambio.asObservable()
  }

  listId(id: number) {
    return this.http.get<Visualizaciones>(`${this.url}/${id}`);
  }

  update(a: Visualizaciones){
    return this.http.put(this.url,a)
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`)
  }

  getConfirmDelete(){
    return this.confirmarEliminacion.asObservable();
  }

  setConfirmDelete(estado:Boolean){
    this.confirmarEliminacion.next(estado);
  }

}
