import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CitaEntrenador } from '../model/citaEntrenador';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class CitaEntrenadorService {
  private url = `${base_url}/citaEntrenador`
  private listaCambio = new Subject<CitaEntrenador[]>()

  constructor(private http:HttpClient) { }
  list() {
    let token = sessionStorage.getItem("token");
    return this.http.get<CitaEntrenador[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insert(cita: CitaEntrenador) {
    let token = sessionStorage.getItem("token");

    return this.http.post(this.url, cita,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  setList(listaNueva: CitaEntrenador[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }

}
