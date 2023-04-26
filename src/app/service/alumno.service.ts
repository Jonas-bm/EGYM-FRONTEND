import { Injectable } from '@angular/core';
import { Alumno } from '../model/alumno';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private url=`${base_url}/alumnos`
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio=new Subject<Alumno[]>();
  constructor(private http:HttpClient) { }
  list()
  {
    return this.http.get<Alumno[]>(this.url);
  }
  insert(alumno:Alumno)
  {
    return this.http.post(this.url,alumno);
  }
  setList(listaNueva:Alumno[])
  {
    this.listaCambio.next(listaNueva);
  }
  getList()
  {
    return this.listaCambio.asObservable();
  }
  listId(id:number)
  {
    return this.http.get<Alumno>(`${this.url}/${id}`);
  }
  update(a:Alumno)
  {
    return this.http.put(this.url+"/"+a.id,a);
  }

  //delete
  delete(id:number)
  {
    return this.http.delete(`${this.url}/${id}`)
  }
  getConfirmDelete()
  {
    return this.confirmarEliminacion.asObservable();
  }
  setConfirmDelete(estado:Boolean)
  {
    this.confirmarEliminacion.next(estado);
  }
}