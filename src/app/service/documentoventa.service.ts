import { Injectable } from '@angular/core';
import { DocumentoVenta } from '../model/documentoVenta';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { productoAlumnoDTO } from '../model/productoAlumnoDTO';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class DocumentoventaService {

  private url = `${base_url}/documentoVenta`
  private listaCambio = new Subject<DocumentoVenta[]>()

  constructor(private http:HttpClient) { }
  list() {
    let token = sessionStorage.getItem("token");
    return this.http.get<DocumentoVenta[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insert(cita: DocumentoVenta) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, cita,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
  }
  setList(listaNueva: DocumentoVenta[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  getProductCountByAlumn(): Observable<productoAlumnoDTO[]> {
    let token = sessionStorage.getItem("token");
    return this.http.get<productoAlumnoDTO[]>(`${this.url}/documentoVenta-count`,{headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')});
  }
}
