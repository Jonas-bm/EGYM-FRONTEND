import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Alumno } from 'src/app/model/alumno';
import { VideoRutinario } from 'src/app/model/videorutinario';
import { Visualizaciones } from 'src/app/model/visualizaciones';
import { AlumnoService } from 'src/app/service/alumno.service';
import { VideorutinarioService } from 'src/app/service/videorutinario.service';
import { VisualizacionesService } from 'src/app/service/visualizaciones.service';


@Component({
  selector: 'app-visualizaciones-creaedita',
  templateUrl: './visualizaciones-creaedita.component.html',
  styleUrls: ['./visualizaciones-creaedita.component.css']
})
export class VisualizacionesCreaeditaComponent implements OnInit {
  form: FormGroup= new FormGroup({});
  visu: Visualizaciones=new Visualizaciones();
  mensaje: string = ""
  maxFecha: Date = moment().add(-1, 'days').toDate();
  listaA: Alumno[] = [];
  listaRu: VideoRutinario[] = [];
  idAlumnoSeleccionado: number = 0;
  idVideosRutinariosSeleccionado: number = 0;

  constructor(private dvS: VisualizacionesService,
    private router: Router,
    private route: ActivatedRoute, private aS:AlumnoService, private vrS:VideorutinarioService) {
  }

  ngOnInit(): void {
    this.aS.list().subscribe(data => { this.listaA = data });
    this.vrS.list().subscribe(data => { this.listaRu = data });

    this.form = new FormGroup({
      idVisualizaciones: new FormControl(),
      alumno: new FormControl(),
      videosRutinario: new FormControl(),
      comentario:new FormControl(),
    });
  }
  aceptar(): void {
    this.visu.idVisualizaciones = this.form.value['idVisualizaciones'];
    this.visu.alumno.nombre=this.form.value['alumno.nombre']
    this.visu.videosRutinario.descripcion = this.form.value['videosRutinario.descripcion'];
    this.visu.comentario=this.form.value['comentario'];
    if (this.idAlumnoSeleccionado>0 && this.idVideosRutinariosSeleccionado>0) {
      let a = new Alumno();
      let ru = new VideoRutinario();
      a.id = this.idAlumnoSeleccionado;
      ru.idVideosRutinarios = this.idVideosRutinariosSeleccionado;
      this.visu.alumno=a;
      this.visu.videosRutinario=ru;
      this.dvS.insert(this.visu).subscribe(() => {
      this.dvS.list().subscribe(data => {
            this.dvS.setList(data);
          })
        })

      this.router.navigate(['/egym/visualizaciones']);
  }
}

}
