import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { VideoRutinario } from '../model/videorutinario';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const base_url=environment.base;

@Injectable({
  providedIn: 'root'
})
export class VideorutinarioService {

  private url = `${base_url}/videoRutinario`
  private listaCambio = new Subject<VideoRutinario[]>()

  constructor(private http:HttpClient) { }
  list() {
    let token = sessionStorage.getItem("token");
    return this.http.get<VideoRutinario[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insert(video: VideoRutinario) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, video,{
      headers: new HttpHeaders().set('Authorization',`Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  setList(listaNueva: VideoRutinario[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
}
