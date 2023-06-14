import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DetalleVenta } from '../model/detalleventa';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class DetalleventaService {

  private url = `${base_url}/detalleVenta`//tiene que ser igual en el controlador del backend de detalleventa
  private listaCambio = new Subject<DetalleVenta[]>()

  constructor(private http:HttpClient) { }
  list() {
    return this.http.get<DetalleVenta[]>(this.url);
  }
  insert(detalle: DetalleVenta) {
    return this.http.post(this.url, detalle);
  }
  setList(listaNueva: DetalleVenta[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
}
