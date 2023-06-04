import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Entrenador } from 'src/app/model/entrenador';
import * as moment from 'moment';
import { EntrenadorService } from 'src/app/service/entrenador.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-entrenador-creaedita',
  templateUrl: './entrenador-creaedita.component.html',
  styleUrls: ['./entrenador-creaedita.component.css'],
})
export class EntrenadorCreaeditaComponent implements OnInit {
  id: number = 0;
  edicion: boolean = false;

  form: FormGroup = new FormGroup({});
  entrenador: Entrenador = new Entrenador();
  mensaje: string = '';
  //maxFecha: Date = moment().add(1,'days').toDate();  //calendario

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = new FormGroup({
      id: new FormControl(),
      nombre: new FormControl(),
      apellidoPaterno: new FormControl(),
      apellidoMaterno: new FormControl(),
      dni: new FormControl(),
      telefono: new FormControl(),
      correo: new FormControl(),
      habilidades: new FormControl(),
      experiencia: new FormControl(),
      educacion: new FormControl(),
      estado: new FormControl(),
    });
  }
  constructor(
    private aS: EntrenadorService,
    private router: Router,
    private route: ActivatedRoute, private _snackvar:MatSnackBar
  ) {}
  aceptar(): void {
    this.entrenador.id = this.form.value['id'];
    this.entrenador.nombre = this.form.value['nombre'];
    this.entrenador.apellidoPaterno = this.form.value['apellidoPaterno'];
    this.entrenador.apellidoMaterno = this.form.value['apellidoMaterno'];
    this.entrenador.dni = this.form.value['dni'];
    this.entrenador.telefono = this.form.value['telefono'];
    this.entrenador.correo = this.form.value['correo'];
    this.entrenador.habilidades = this.form.value['habilidades'];
    this.entrenador.experiencia = this.form.value['experiencia'];
    this.entrenador.educacion = this.form.value['educacion'];
    this.entrenador.estado = this.form.value['estado'];

    if (
      this.form.value['nombre']!=null &&
      this.form.value['correo']!=null && this.form.value['apellidoPaterno']!=null &&
      this.form.value['apellidoMaterno']!=null && this.form.value['dni']!=null && this.form.value['telefono']!=null &&
      this.form.value['habilidades']!=null && this.form.value['experiencia']!=null &&
      this.form.value['educacion']!=null && this.form.value['estado']!=null
    ) {
      if (this.edicion) {
        //actualize
        this.aS.update(this.entrenador).subscribe(() => {
          this.aS.list().subscribe((data) => {
            this.aS.setList(data);
          });
        });
      } else {
        this.aS.insert(this.entrenador).subscribe((data) => {
          this.aS.list().subscribe((data) => {
            this.aS.setList(data);
          });
        });
      }

      this.router.navigate(['entrenadores']);
    } else {
      this.ingresarTodosDatos();
    }
  }

  init() {
    if (this.edicion) {
      this.aS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          nombre: new FormControl(data.nombre),
          apellidoPaterno: new FormControl(data.apellidoPaterno),
          apellidoMaterno: new FormControl(data.apellidoMaterno),
          dni: new FormControl(data.dni),
          telefono: new FormControl(data.telefono),
          correo: new FormControl(data.correo),
          habilidades: new FormControl(data.habilidades),
          experiencia: new FormControl(data.experiencia),
          educacion: new FormControl(data.educacion),
          estado: new FormControl(data.estado),
        });
      });
    }
  }
  ingresarTodosDatos():void{
    this._snackvar.open("Debe ingresar todos los campos para agregar un nuevo entrenador",'',{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }
}
