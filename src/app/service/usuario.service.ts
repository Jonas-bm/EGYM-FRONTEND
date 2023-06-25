import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../model/users';

const base_url=environment.base

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url=`${base_url}/roles`
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio=new Subject<Users[]>();
  constructor(private http:HttpClient) { }
  list()
  {
    let token = sessionStorage.getItem("token");
    //this.getPokemon();
    return this.http.get<Users[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')

    });
  }
  insert(user:Users)
  {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url,user,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  setList(listaNueva:Users[])
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
    return this.http.get<Users>(`${this.url}/${id}`,{
     headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  update(u:Users)
  {
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url,u,{
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
