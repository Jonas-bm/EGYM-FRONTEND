import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Alumno } from 'src/app/model/alumno';
import { CitaEntrenador } from 'src/app/model/citaEntrenador';
import { Entrenador } from 'src/app/model/entrenador';
import { AlumnoService } from 'src/app/service/alumno.service';
import { CitaEntrenadorService } from 'src/app/service/cita-entrenador.service';
import { EntrenadorService } from 'src/app/service/entrenador.service';

@Component({
  selector: 'app-centrenador-creaedita',
  templateUrl: './centrenador-creaedita.component.html',
  styleUrls: ['./centrenador-creaedita.component.css']
})
export class CentrenadorCreaeditaComponent implements OnInit{

  form: FormGroup = new FormGroup({});
  cita: CitaEntrenador=new CitaEntrenador();
  mensaje: string = ""
  maxFecha: Date = moment().add(-1, 'days').toDate();
  listaE: Entrenador[] = [];
  listaA: Alumno[] = [];
  idAlumnoSeleccionado: number = 0;
  idEntrenadorSeleccionado: number = 0;

  constructor(private ceS: CitaEntrenadorService,
    private router: Router,
    private route: ActivatedRoute, private eS:EntrenadorService,private aS:AlumnoService) {
  }

  ngOnInit(): void {
    this.eS.list().subscribe(data => { this.listaE = data });
    this.aS.list().subscribe(data => { this.listaA = data });

    this.form = new FormGroup({
      idCita: new FormControl(),
      fechaCita: new FormControl(),
      descripcion: new FormControl(),
      entrenador: new FormControl(),
      alumno:new FormControl(),
    });
  }
  aceptar(): void {
    this.cita.idCita = this.form.value['idCita'];
    this.cita.fechaCita = this.form.value['fechaCita'];
    this.cita.descripcion = this.form.value['descripcion'];
    this.cita.entrenador.nombre= this.form.value['entrenador.nombre'];
    this.cita.alumno.nombre=this.form.value['alumno.nombre'];
    if (this.idEntrenadorSeleccionado>0 && this.idAlumnoSeleccionado>0) {
      let a = new Alumno();
      let e = new Entrenador();
      a.id = this.idAlumnoSeleccionado;
      e.id=this.idEntrenadorSeleccionado;
      this.cita.alumno=a;
      this.cita.entrenador=e;
      this.ceS.insert(this.cita).subscribe(() => {
      this.ceS.list().subscribe(data => {
            this.ceS.setList(data);
          })
        })

      this.router.navigate(['citaEntrenadores']);
  }
}
}
