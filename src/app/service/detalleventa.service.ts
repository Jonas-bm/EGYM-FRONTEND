import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DetalleVenta } from '../model/detalleventa';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    let token = sessionStorage.getItem("token");
    return this.http.get<DetalleVenta[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insert(detalle: DetalleVenta) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, detalle,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  setList(listaNueva: DetalleVenta[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
}
