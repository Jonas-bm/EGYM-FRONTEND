import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Calificacion } from 'src/app/model/calificacion';
import { CalificacionService } from 'src/app/service/calificacion.service';
@Component({
  selector: 'app-calificacion-creaedita',
  templateUrl: './calificacion-creaedita.component.html',
  styleUrls: ['./calificacion-creaedita.component.css']
})
export class CalificacionCreaeditaComponent implements OnInit {
  id: number = 0
  edicion: boolean = false
  form: FormGroup = new FormGroup({});
  calificacion: Calificacion = new Calificacion();
  name: string = '';
  puntuacion: number = 0;
  comentario: string = "";
  mensaje: string = "";
  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      puntuacion: new FormControl(),
      comentario: new FormControl(),
    });
  }
  constructor(private as:CalificacionService, private router:Router){ }
  aceptar(): void {
    this.calificacion.id = this.form.value['id'];
    this.calificacion.name = this.form.value['name'];
    this.calificacion.puntuacion = this.form.value['puntuacion'];
    this.calificacion.comentario = this.form.value['comentario'];
    if(this.form.value['name'].length > 0 &&
    this.form.value['puntuacion'].length > 0 &&
    this.form.value['comentario'].length > 0
  ){
    this.as.insert(this.calificacion).subscribe(data  => {
      this.as.list().subscribe(data  =>{
        this.as.set_list(data)
      })
    })
    this.router.navigate(['calificaciones']);
  }else {
    this.mensaje = "Ingrese los datos de la calificacion";
  }
  }
  init(){
    if(this.edicion){
      this.as.listId(this.id).subscribe(data => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          name: new FormControl(data.name),
          puntuacion: new FormControl(data.puntuacion),
          comentario: new FormControl(data.comentario)
      })
    })
  }
  }
}
