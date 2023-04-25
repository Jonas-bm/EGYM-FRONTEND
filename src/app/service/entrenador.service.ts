import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Entrenador } from '../model/entrenador';
import { Subject } from 'rxjs';

const base_url=environment.base

@Injectable({
  providedIn: 'root'
})
export class EntrenadorService {
private url=`${base_url}/entrenadores`
private listaCambio = new Subject<Entrenador[]>();

  constructor(private http: HttpClient) {}
  list(){
    return this.http.get<Entrenador[]>(this.url);
  }

insert(entrenador:Entrenador){                    //lineas de codigo para registar o insertar
return this.http.post(this.url, entrenador);

//para que retorne los datos actualizados
}
setList(listaNueva:Entrenador[]){
this.listaCambio.next(listaNueva);
}
getList(){
return this.listaCambio.asObservable();
}
}
