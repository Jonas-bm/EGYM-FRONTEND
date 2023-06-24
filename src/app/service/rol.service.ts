import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role } from '../model/role';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const base_url=environment.base

@Injectable({
  providedIn: 'root'
})
export class RolService {

  private url=`${base_url}/roles`
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio=new Subject<Role[]>();
  constructor(private http:HttpClient) { }
  list()
  {
    let token = sessionStorage.getItem("token");
    //this.getPokemon();
    return this.http.get<Role[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
  }
  insert(rol:Role)
  {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url,rol,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  setList(listaNueva:Role[])
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
    return this.http.get<Role>(`${this.url}/${id}`,{
     headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  update(r:Role)
  {
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url,r,{
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
