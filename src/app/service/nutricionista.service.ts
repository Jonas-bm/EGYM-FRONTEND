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
  private listacambio=new Subject<ClassNutricionista[]>();

  constructor(private http:HttpClient) { }

  list(){
    return this.http.get<ClassNutricionista[]>(this.url)
  }
  insert(nutricionista:ClassNutricionista){
    return this.http.post(this.url,nutricionista)
  }
  set(listanutri:ClassNutricionista[]){
    this.listacambio.next(listanutri);
  }
  get(){
    return this.listacambio.asObservable();
  }
}
