import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CitaNutricionista } from '../model/citaNutricionista';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class CitaNutricionistaService {

  private url = `${base_url}/citaNutricionista`
  private listaCambio = new Subject<CitaNutricionista[]>()

  constructor(private http:HttpClient) { }
  list() {
    return this.http.get<CitaNutricionista[]>(this.url);
  }
  insert(cita: CitaNutricionista) {
    return this.http.post(this.url, cita);
  }
  setList(listaNueva: CitaNutricionista[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
}