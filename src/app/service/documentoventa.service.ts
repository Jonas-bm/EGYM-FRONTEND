import { Injectable } from '@angular/core';
import { DocumentoVenta } from '../model/documentoVenta';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class DocumentoventaService {

  private url = `${base_url}/documentoVenta`
  private listaCambio = new Subject<DocumentoVenta[]>()

  constructor(private http:HttpClient) { }
  list() {
    return this.http.get<DocumentoVenta[]>(this.url);
  }
  insert(cita: DocumentoVenta) {
    return this.http.post(this.url, cita);
  }
  setList(listaNueva: DocumentoVenta[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
}
