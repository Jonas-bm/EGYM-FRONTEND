import { Injectable } from '@angular/core';
import { Alumno } from '../model/alumno';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    let token = sessionStorage.getItem("token");
    //this.getPokemon();
    return this.http.get<Alumno[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
  }
  insert(alumno:Alumno)
  {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url,alumno,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  setList(listaNueva:Alumno[])
  {
    this.listaCambio.next(listaNueva);
  }
  getList()
  {
    return this.listaCambio.asObservable();
  }
 /* getPokemon()
  {
    this.http.get('https://exercisedb.p.rapidapi.com/exercises/bodyPartList').subscribe(data=>console.log(data)
    );
  }*/
  listId(id:number)
  {
    let token = sessionStorage.getItem("token");
    return this.http.get<Alumno>(`${this.url}/${id}`,{
     headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  update(a:Alumno)
  {
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url,a,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
  }
  //delete
  delete(id:number)
  {
    let token = sessionStorage.getItem("token");
    return this.http.delete(`${this.url}/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    })
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
