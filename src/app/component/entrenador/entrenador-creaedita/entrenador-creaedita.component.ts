import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Entrenador } from 'src/app/model/entrenador';
import * as moment from 'moment'
import { EntrenadorService } from 'src/app/service/entrenador.service';
import { Router } from'@angular/router'

@Component({
  selector: 'app-entrenador-creaedita',
  templateUrl: './entrenador-creaedita.component.html',
  styleUrls: ['./entrenador-creaedita.component.css']
})
export class EntrenadorCreaeditaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  entrenador:Entrenador = new Entrenador ();
  mensaje: string = "";
  //maxFecha: Date = moment().add(1,'days').toDate();  //calendario

ngOnInit(): void {
this.form = new FormGroup({
  id: new FormControl(),
  nombre: new FormControl(),
  apellidoPaterno:new FormControl(),
  apellidoMaterno: new FormControl(),
  dni: new FormControl(),
  telefono: new FormControl(),
  correo: new FormControl(),
  habilidades: new FormControl(),
  experiencia: new FormControl(),
  educacion: new FormControl(),
  estado: new FormControl(),
})
  }
  constructor(private aS: EntrenadorService, private router:Router ) { }
  aceptar():void{
//this.entrenador.id = this.form.value['id'];*
this.entrenador.nombre = this.form.value['nombre'];
this.entrenador.apellidoPaterno = this.form.value['apellidoPaterno'];
this.entrenador.apellidoMaterno = this.form.value['apellidoMaterno'];
this.entrenador.dni = this.form.value['dni'];
this.entrenador.telefono = this.form.value['telefono'];
this.entrenador.correo = this.form.value['correo'];
this.entrenador.habilidades = this.form.value['habilidades'];
this.entrenador.experiencia =  this.form.value['experiencia'];
this.entrenador.educacion = this.form.value['educacion'];
this.entrenador.estado = this.form.value['estado'];

if(this.form.value['nombre'].length > 0 && this.form.value['correo'].length > 0)
{
  this.aS.insert(this.entrenador).subscribe(data=>{
     this.aS.list().subscribe(data =>{
       this.aS.setList(data)
     })
  })
this.router.navigate(['entrenadores']);
}else{
this.mensaje= "Ingrese los datos del Entrenador";
}
}
}
