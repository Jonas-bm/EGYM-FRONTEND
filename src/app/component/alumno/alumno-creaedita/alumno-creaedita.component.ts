import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Alumno } from 'src/app/model/alumno';
import * as moment from 'moment'
import { AlumnoService } from 'src/app/service/alumno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumno-creaedita',
  templateUrl: './alumno-creaedita.component.html',
  styleUrls: ['./alumno-creaedita.component.css'],
})
export class AlumnoCreaeditaComponent implements OnInit {
  form:FormGroup=new FormGroup({});
  alumno:Alumno=new Alumno();
  mensaje:string="";
  maxFecha:Date=moment().add(1,'days').toDate();
  ngOnInit(): void {
    this.form=new FormGroup({
      id: new FormControl(),
      nombre:new FormControl(),
      apellidos:new FormControl(),
      dni:new FormControl(),
      direccion:new FormControl(),
      celular:new FormControl(),
      fechaNacimiento:new FormControl(),
      peso:new FormControl(),
      talla:new FormControl()
    })
  }
    constructor(private as:AlumnoService, private router:Router){}
    aceptar():void{
      this.alumno.id=this.form.value['id'];
      this.alumno.nombre=this.form.value['nombre'];
      this.alumno.apellidos=this.form.value['apellidos'];
      this.alumno.dni=this.form.value['dni'];
      this.alumno.direccion=this.form.value['direccion'];
      this.alumno.celular=this.form.value['celular'];
      this.alumno.fechaNacimiento=this.form.value['fechaNacimiento'];
      this.alumno.peso=this.form.value['peso'];
      this.alumno.talla=this.form.value['talla'];

      if(this.form.value['nombre'].length>0  && this.form.value['apellidos'].length>0&& this.form.value['dni'].length>0 && this.form.value['direccion'].length>0&& this.form.value['celular'].length>0&& this.form.value['fechaNacimiento']!= null && this.form.value['peso'].length>0&& this.form.value['talla'].length>0)
      {
        this.as.insert(this.alumno).subscribe(data=>{
          this.as.list().subscribe(data=>{
            this.as.setList(data)
          })
        })
        this.router.navigate(['alumnos']);
      }
      else
      {
        this.mensaje="Ingrese los datos del alumno!!";
      }
    }
  }

