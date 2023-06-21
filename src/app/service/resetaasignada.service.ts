import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RecetaAsignada } from '../model/resetaasignada';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class ResetaasignadaService {

  private url = `${base_url}/recetaAsignada`
  private listaCambio = new Subject<RecetaAsignada[]>()

  constructor(private http:HttpClient) { }
  list() {
    let token = sessionStorage.getItem("token");
    return this.http.get<RecetaAsignada[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insert(cita: RecetaAsignada) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, cita,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  setList(listaNueva: RecetaAsignada[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
}
