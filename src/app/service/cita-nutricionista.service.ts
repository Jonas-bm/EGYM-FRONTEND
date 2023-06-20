import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CitaNutricionista } from '../model/citaNutricionista';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class CitaNutricionistaService {

  private url = `${base_url}/citaNutricionista`
  private listaCambio = new Subject<CitaNutricionista[]>()

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
}
