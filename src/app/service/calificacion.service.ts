import { Injectable } from '@angular/core';
import { enviroment } from 'src/environments/environment.prod';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Calificacion } from '../model/calificacion';
import { Subject } from 'rxjs';

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class CalificacionService {
private url = `${base_url}/calificaciones`
private listaCambio = new Subject<Calificacion[]>();
private confirmarEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  list()
  {
    

    return this.http.get<Calificacion[]>(this.url);
  }
  insert(calificacion: Calificacion){
   return this.http.post(this.url,calificacion)
  }
  set_list(ListaNueva: Calificacion[]){
    this.listaCambio.asObservable();
  }

  get_list(){
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<Calificacion>(`${this.url}/${id}`);
  }
  update(cali: Calificacion) {
    return this.http.put(this.url + "/" + cali.id, cali);
}
//http- HttpClientModule: get-post-put-delete, hacer un cuadro comparativo

delete(id: number) {
  return this.http.delete(`${this.url}/${id}`)
}

getConfirmDelete(){
  return this.confirmarEliminacion.asObservable();
}
setConfirmDelete(estado:Boolean){
  this.confirmarEliminacion.next(estado);
}
}
