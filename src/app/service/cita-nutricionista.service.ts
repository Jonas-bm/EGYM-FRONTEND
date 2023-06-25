import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CitaNutricionista } from '../model/citaNutricionista';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { NutricionistaCitaNutricionistaDTO } from '../model/NutricionistaCitaNutricionistaDTO';
import { formatDate } from '@angular/common';
import { CitaxFechaDTO } from '../model/CitaxFechaDTO';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class CitaNutricionistaService {

  private url = `${base_url}/citaNutricionista`
  private listaCambio = new Subject<CitaNutricionista[]>()
  fechaInicio:Date= new Date(Date.now());
  fechaFin:Date= new Date(Date.now());

  constructor(private http:HttpClient) { }
  list() {
    let token = sessionStorage.getItem("token");
    return this.http.get<CitaNutricionista[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insert(cita: CitaNutricionista) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, cita,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  setList(listaNueva: CitaNutricionista[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  getContarCitasxNutricionista(): Observable<NutricionistaCitaNutricionistaDTO[]>{
    let token = sessionStorage.getItem("token");
    return this.http.get<NutricionistaCitaNutricionistaDTO[]>(`${this.url}/citanxn-count`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  getCitasxfecha():Observable<CitaxFechaDTO[]>{
    let token = sessionStorage.getItem("token");
    return this.http.get<CitaxFechaDTO[]>(`${this.url}/ng`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    })
  }


}
