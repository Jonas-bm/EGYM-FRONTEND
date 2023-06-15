import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { VideoRutinario } from '../model/videorutinario';
import { HttpClient } from '@angular/common/http';

const base_url=environment.base;

@Injectable({
  providedIn: 'root'
})
export class VideorutinarioService {

  private url = `${base_url}/videoRutinario`
  private listaCambio = new Subject<VideoRutinario[]>()

  constructor(private http:HttpClient) { }
  list() {
    return this.http.get<VideoRutinario[]>(this.url);
  }
  insert(video: VideoRutinario) {
    return this.http.post(this.url, video);
  }
  setList(listaNueva: VideoRutinario[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
}
