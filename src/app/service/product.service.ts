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
  private url = `${base_url}/producto`
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
}
