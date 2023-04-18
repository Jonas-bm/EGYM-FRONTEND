import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Entrenador } from '../model/entrenador';

const base_url=environment.base

@Injectable({
  providedIn: 'root'
})
export class EntrenadorService {
private url=`${base_url}/entrenador`
  constructor(private http: HttpClient) {}
  list(){
    return this.http.get<Entrenador[]>(this.url)  }

}
