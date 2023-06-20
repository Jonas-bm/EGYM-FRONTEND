import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ClassNutricionista } from '../model/nutricionista';
import { Subject } from 'rxjs';
const base_url=environment.base

@Injectable({
  providedIn: 'root'
})
export class NutricionistaService {
  private url=`${base_url}/nutricionistas`;
  private listaCambio=new Subject<ClassNutricionista[]>();
  //para el eliminar
  private confirmaEliminar=new Subject<Boolean>();
  //metodos
  constructor(private http:HttpClient) { }
  list(){
  let token = sessionStorage.getItem("token");
    return this.http.get<ClassNutricionista[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  //metodo de insertar
  insert(nutricionista:ClassNutricionista){
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, nutricionista,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  });
  }
  setList(listanueva:ClassNutricionista[]){
    this.listaCambio.next(listanueva);
  }
  getList(){
    return this.listaCambio.asObservable();
  }
  //trae la id
  listID(id:number){
    let token = sessionStorage.getItem("token");
    return this.http.get<ClassNutricionista>(`${this.url}/${id}`,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  //modificar
  update(n:ClassNutricionista){
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url,n,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  //delete
  delete(id:number){
    let token = sessionStorage.getItem("token");
    return this.http.delete(`${this.url}/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    })
  }
  getConfirmDelete(){
    return this.confirmaEliminar.asObservable();
  }
  setConfirmDelete(est:Boolean){
    this.confirmaEliminar.next(est);
  }
}
