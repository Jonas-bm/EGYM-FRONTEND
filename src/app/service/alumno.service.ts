import { Injectable } from '@angular/core';

import { Alumno } from '../model/alumno';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private url=`${base_url}/alumnos`
  constructor(private http:HttpClient) { }
  list()
  {
    return this.http.get<Alumno[]>(this.url);
  }
}
