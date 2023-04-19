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
}
