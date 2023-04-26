import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ClassNutricionista } from '../model/nutricionista';
import { Subject } from 'rxjs';
const base_url=environment.base

@Injectable({
  providedIn: 'root'
})
export class NutricionistaService {
  private url=`${base_url}/Nutricionista`
  private listaCambio=new Subject<ClassNutricionista[]>();
  //para el eliminar
  private confirmaEliminar=new Subject<Boolean>();
  //metodos
  constructor(private http:HttpClient) { }
  list(){
    return this.http.get<ClassNutricionista[]>(this.url);
  }
  //metodo de insertar
  insert(nutricionista:ClassNutricionista){
    return this.http.post(this.url, nutricionista);
  }
  setList(listanueva:ClassNutricionista[]){
    this.listaCambio.next(listanueva);
  }
  getList(){
    return this.listaCambio.asObservable();
  }
  //tre la id
  listID(id:number){
    return this.http.get<ClassNutricionista>(`${this.url}/${id}`);
  }
  //modificar
  update(n:ClassNutricionista){
    return this.http.put(this.url+"/"+n.id,n);
  }
  //delete
  delete(id:number){
    return this.http.delete(`${this.url}/${id}`)
  }
  getConfirmDelete(){
    return this.confirmaEliminar.asObservable();
  }
  setConfirmDelete(est:Boolean){
    this.confirmaEliminar.next(est);
  }

}
