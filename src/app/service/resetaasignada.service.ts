import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RecetaAsignada } from '../model/resetaasignada';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class ResetaasignadaService {

  private url = `${base_url}/recetaAsignada`
  private listaCambio = new Subject<RecetaAsignada[]>()

  constructor(private http:HttpClient) { }
  list() {
    return this.http.get<RecetaAsignada[]>(this.url);
  }
  insert(cita: RecetaAsignada) {
    return this.http.post(this.url, cita);
  }
  setList(listaNueva: RecetaAsignada[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
}
