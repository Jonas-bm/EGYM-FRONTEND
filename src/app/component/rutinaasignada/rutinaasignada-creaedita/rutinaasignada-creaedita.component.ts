import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CitaEntrenador } from 'src/app/model/citaEntrenador';
import { RutinaAsignada } from 'src/app/model/rutinaasignada';
import { CitaEntrenadorService } from 'src/app/service/cita-entrenador.service';
import { RutinaasignadaService } from 'src/app/service/rutinaasignada.service';

@Component({
  selector: 'app-rutinaasignada-creaedita',
  templateUrl: './rutinaasignada-creaedita.component.html',
  styleUrls: ['./rutinaasignada-creaedita.component.css']
})
export class RutinaasignadaCreaeditaComponent implements OnInit{
  form: FormGroup= new FormGroup({});
  rutina: RutinaAsignada=new RutinaAsignada();
  mensaje: string = ""
  listaCE: CitaEntrenador[] = [];
  idCitaEntrenadorSeleccionado: number = 0;

  constructor(private raS: RutinaasignadaService,
    private router: Router,
    private route: ActivatedRoute, private ceS:CitaEntrenadorService) {
  }

  ngOnInit(): void {
    this.ceS.list().subscribe(data => { this.listaCE = data });

    this.form = new FormGroup({
      idRutinaAsignada: new FormControl(),
      nombreRutina: new FormControl(),
      descripcion: new FormControl(),
      repeticiones: new FormControl(),
      tiempoRutina: new FormControl(),
      citaEntrenador:new FormControl(),
    });
  }
  aceptar(): void {
    this.rutina.idRutinaAsignada = this.form.value['idRutinaAsignada'];
    this.rutina.nombreRutina=this.form.value['nombreRutina'];
    this.rutina.descripcion = this.form.value['descripcion'];
    this.rutina.repeticiones=this.form.value['repeticiones']
    this.rutina.tiempoRutina = this.form.value['tiempoRutina'];
    this.rutina.citaEntrenador.entrenador=this.form.value['citaEntrenador.entrenador.nombre'];
    if (this.idCitaEntrenadorSeleccionado>0) {
      let ce = new CitaEntrenador();
      ce.idCita = this.idCitaEntrenadorSeleccionado;
      this.rutina.citaEntrenador=ce;
      this.raS.insert(this.rutina).subscribe(() => {
      this.raS.list().subscribe(data => {
            this.raS.setList(data);
          })
        })

      this.router.navigate(['rutinasAsignadas']);
  }
}

}
