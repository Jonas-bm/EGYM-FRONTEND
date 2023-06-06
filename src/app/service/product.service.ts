import { HttpClient } from '@angular/common/http';
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
    return this.http.get<Product[]>(this.url)
  }

  insert(producto: Product) {
    return this.http.post(this.url, producto)
  }

  setList (ListaNueva: Product[]) {
    this.listaCambio.next(ListaNueva)
  }

  getList () {
    return this.listaCambio.asObservable()
  }

  listId(id: number) {
    return this.http.get<Product>(`${this.url}/${id}`);
  }

  update(a: Product){
    return this.http.put(this.url,a)
  }

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
