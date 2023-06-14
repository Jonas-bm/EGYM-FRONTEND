import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RutinaAsignada } from '../model/rutinaasignada';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class RutinaasignadaService {

  private url = `${base_url}/rutinaAsignada`
  private listaCambio = new Subject<RutinaAsignada[]>()

  constructor(private http:HttpClient) { }
  list() {
    return this.http.get<RutinaAsignada[]>(this.url);
  }
  insert(rutina: RutinaAsignada) {
    return this.http.post(this.url, rutina);
  }
  setList(listaNueva: RutinaAsignada[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
}
