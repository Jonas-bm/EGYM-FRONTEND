import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Entrenador } from 'src/app/model/entrenador';
import { VideoRutinario } from 'src/app/model/videorutinario';
import { EntrenadorService } from 'src/app/service/entrenador.service';
import { VideorutinarioService } from 'src/app/service/videorutinario.service';

@Component({
  selector: 'app-videorutinario-creaedita',
  templateUrl: './videorutinario-creaedita.component.html',
  styleUrls: ['./videorutinario-creaedita.component.css']
})
export class VideorutinarioCreaeditaComponent implements OnInit{
  form: FormGroup= new FormGroup({});
  video: VideoRutinario=new VideoRutinario();
  mensaje: string = "";
  listaE: Entrenador[] = [];
  idEntrenadorSeleccionado: number = 0;

  constructor(private vrS: VideorutinarioService,
    private router: Router,
    private route: ActivatedRoute, private eS:EntrenadorService) {
  }

  ngOnInit(): void {
    this.eS.list().subscribe(data => { this.listaE = data });

    this.form = new FormGroup({
      idVideosRutinarios: new FormControl(),
      entrenador:new FormControl(),
      nombreTipoVideo: new FormControl(),
      descripcion: new FormControl(),
      duracion: new FormControl(),
    });
  }
  aceptar(): void {
    this.video.idVideosRutinarios = this.form.value['idVideosRutinarios'];
    this.video.entrenador=this.form.value['entrenador.nombre'];
    this.video.nombreTipoVideo=this.form.value['nombreTipoVideo'];
    this.video.descripcion = this.form.value['descripcion'];
    this.video.duracion=this.form.value['duracion']
    if (this.idEntrenadorSeleccionado>0) {
      let e = new Entrenador();
      e.id = this.idEntrenadorSeleccionado;
      this.video.entrenador=e;
      this.vrS.insert(this.video).subscribe(() => {
      this.vrS.list().subscribe(data => {
            this.vrS.setList(data);
          })
        })

      this.router.navigate(['videosRutinarios']);
  }
}

}
