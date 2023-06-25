import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Entrenador } from '../model/entrenador';
import { Observable, Subject } from 'rxjs';
import { entrenadorDisponibleDTO } from '../model/entrenadorDisponibleDTO';


const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class EntrenadorService {

  private url = `${base_url}/entrenadores`;
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject<Entrenador[]>();

  constructor(private http: HttpClient) {}
  list() {
    let token = sessionStorage.getItem("token");
    return this.http.get<Entrenador[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  insert(entrenador: Entrenador) {
    let token = sessionStorage.getItem("token");
    //lineas de codigo para registar o insertar
    return this.http.post(this.url, entrenador,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
    //para que retorne los datos actualizados
  }
  setList(listaNueva: Entrenador[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.get<Entrenador>(`${this.url}/${id}`,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  update(a: Entrenador) {
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url,a,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  delete(id: number){
    let token = sessionStorage.getItem("token");
    return this.http.delete(`${this.url}/${id}`,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    })
  }
  getConfirmDelete(){
    return this.confirmarEliminacion.asObservable();
  }
  setConfirmDelete(estado:Boolean){
    this.confirmarEliminacion.next(estado);
  }
  getEntrenadorDisponible(): Observable<entrenadorDisponibleDTO[]> {
    let token = sessionStorage.getItem("token");
    return this.http.get<entrenadorDisponibleDTO[]>(`${this.url}/citaEntrenador-disponible`,{headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')});
  }
}
