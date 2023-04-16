import { Injectable } from '@angular/core';
import { enviroment } from 'src/environments/environment.prod';
import { Alumno } from '../model/alumno';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ClassNutricionista } from '../model/nutricionista';

const base_url=environment.base

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private url=`${base_url}/alumnos`
  private url2=`${base_url}/Nutricionista`
  constructor(private http:HttpClient) { }
  list()
  {
    return this.http.get<Alumno[]>(this.url);
  }
  listarNutricionistas()
  {
    return this.http.get<ClassNutricionista[]>(this.url2)

  }
}
