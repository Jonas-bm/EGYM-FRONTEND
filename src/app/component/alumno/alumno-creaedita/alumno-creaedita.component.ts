import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Alumno } from 'src/app/model/alumno';
import * as moment from 'moment'
import { AlumnoService } from 'src/app/service/alumno.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-alumno-creaedita',
  templateUrl: './alumno-creaedita.component.html',
  styleUrls: ['./alumno-creaedita.component.css'],
})
export class AlumnoCreaeditaComponent implements OnInit {
  id:number=0
  edicion:boolean=false


  form:FormGroup=new FormGroup({});
  alumno:Alumno=new Alumno();
  mensaje:string="";
  maxFecha:Date=moment().add(1,'days').toDate();
  ngOnInit(): void {

    this.route.params.subscribe((data:Params)=>{
      this.id=data['id'];
      this.edicion=data['id']!=null;
      this.init();
    })

    this.form=new FormGroup({
      id: new FormControl(),
      nombre:new FormControl(),
      apellidoPaterno:new FormControl(),
      apellidoMaterno:new FormControl(),
      dni:new FormControl(),
      direccion:new FormControl(),
      celular:new FormControl(),
      fechaNacimiento:new FormControl(),
      peso:new FormControl(),
      talla:new FormControl()
    })
  }
    constructor(private as:AlumnoService, private router:Router,private route:ActivatedRoute ){}
    aceptar():void{
      this.alumno.id=this.form.value['id'];
      this.alumno.nombre=this.form.value['nombre'];
      this.alumno.apellidoPaterno=this.form.value['apellidoPaterno'];
      this.alumno.apellidoMaterno=this.form.value['apellidoMaterno'];
      this.alumno.dni=this.form.value['dni'];
      this.alumno.direccion=this.form.value['direccion'];
      this.alumno.celular=this.form.value['celular'];
      this.alumno.fechaNacimiento=this.form.value['fechaNacimiento'];
      this.alumno.peso=this.form.value['peso'];
      this.alumno.talla=this.form.value['talla'];

      if(this.form.value['nombre']!=null  && this.form.value['apellidoPaterno']!=null && this.form.value['apellidoMaterno']!=null && this.form.value['dni']!=null && this.form.value['fechaNacimiento']!= null && this.form.value['talla']!=null)
      {
        if(this.edicion==true)
        {
          //actualize (traigo del alumno.service.ts)
          this.as.update(this.alumno).subscribe(()=>{
            this.as.list().subscribe(data=>{
              this.as.setList(data)
            })
          })
        }
        else
        {
          this.as.insert(this.alumno).subscribe(data=>{
            this.as.list().subscribe(data=>{
              this.as.setList(data)
            })
          })
        }
        this.router.navigate(['alumnos']);
      }
      else
      {
        this.mensaje="Ingrese los datos del alumno!!";
      }
    }
    init()
    {
      if(this.edicion)
      {
      this.as.listId(this.id).subscribe(data=>{
        this.form=new FormGroup({
          id: new FormControl(data.id),
          nombre:new FormControl(data.nombre),
          apellidoPaterno:new FormControl(data.apellidoPaterno),
          apellidoMaterno:new FormControl(data.apellidoMaterno),
          dni:new FormControl(data.dni),
          direccion: new FormControl(data.direccion),
          celular:new FormControl(data.celular),
          fechaNacimiento:new FormControl(data.fechaNacimiento),
          peso:new FormControl(data.peso),
          talla:new FormControl(data.talla)
        })
      })
    }
  }
}
