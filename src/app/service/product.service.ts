import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = `${base_url}/productos`
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject<Product[]>();
  constructor(private http:HttpClient) { }
  list(){
    let token = sessionStorage.getItem("token");
    return this.http.get<Product[]>(this.url,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insert(producto: Product) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, producto,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  setList (ListaNueva: Product[]) {
    this.listaCambio.next(ListaNueva)
  }

  getList () {
    return this.listaCambio.asObservable()
  }

  listId(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.get<Product>(`${this.url}/${id}`,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  update(a: Product){
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url,a,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  delete(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.delete(`${this.url}/${id}`,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  getConfirmDelete(){
    return this.confirmarEliminacion.asObservable();
  }

  setConfirmDelete(estado:Boolean){
    this.confirmarEliminacion.next(estado);
  }

}
