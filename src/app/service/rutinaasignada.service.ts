import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RutinaAsignada } from '../model/rutinaasignada';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { entrenadorMasRutinasDTO } from '../model/entrenadorMasRutinasDTO';
const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class RutinaasignadaService {

  private url = `${base_url}/rutinaAsignada`
  private listaCambio = new Subject<RutinaAsignada[]>()

  constructor(private http:HttpClient) { }
  list() {
    let token = sessionStorage.getItem("token");
    return this.http.get<RutinaAsignada[]>(this.url,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insert(rutina: RutinaAsignada) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, rutina,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  setList(listaNueva: RutinaAsignada[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }

  getEntrenadoresRutinas(): Observable<entrenadorMasRutinasDTO[]> {
    let token = sessionStorage.getItem("token");
    return this.http.get<entrenadorMasRutinasDTO[]>(`${this.url}/entrenador-rutinas`,{headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')});
  }


}
