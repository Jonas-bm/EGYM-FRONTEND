import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Suscripcion } from 'src/app/model/suscripcion';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Alumno } from 'src/app/model/alumno';
import {SuscripcionService} from 'src/app/service/suscripcion.service';
import { AlumnoService } from 'src/app/service/alumno.service';



@Component({
  selector: 'app-suscripcion-creaedita',
  templateUrl: './suscripcion-creaedita.component.html',
  styleUrls: ['./suscripcion-creaedita.component.css']
})
export class SuscripcionCreaeditaComponent implements OnInit {

  form:FormGroup=new FormGroup({});
  suscripcion:Suscripcion=new Suscripcion();
  mensaje:string=""
  maxFecha: Date = moment().add(+1, 'days').toDate();
  listaA:Alumno[]=[]
  idAlumnoSeleccionado:number=0;



  constructor(private sS:SuscripcionService,
    private router:Router,
    private route:ActivatedRoute,private aS:AlumnoService){
  }

  ngOnInit(): void{
    this.aS.list().subscribe(data=>{this.listaA=data})


    this.form=new FormGroup({
      idSusripcion:new FormControl(),
      alumno:new FormControl(),
      Pago:new FormControl(),
      tipoSuscripcion:new FormControl(),
      precio:new FormControl(),
      fechaSuscripcion:new FormControl(),
      fechaExpiracion:new FormControl(),
    });
  }
  aceptar():void{
    this.suscripcion.idSusripcion=this.form.value['idSusripcion'];
    this.suscripcion.alumno.nombre=this.form.value['alumno.nombre'];
    this.suscripcion.pago=this.form.value['Pago'];
    this.suscripcion.tipoSuscripcion=this.form.value['tipoSuscripcion'];
    this.suscripcion.precio=this.form.value['precio'];
    this.suscripcion.fechaSuscripcion=this.form.value['fechaSuscripcion'];
    this.suscripcion.fechaExpiracion=this.form.value['fechaExpiracion'];
    if(this.idAlumnoSeleccionado>0){
      let a=new Alumno();
      a.id=this.idAlumnoSeleccionado;
      this.suscripcion.alumno=a;
      this.sS.insert(this.suscripcion).subscribe(()=>{
        this.sS.list().subscribe(data=>{
          this.sS.setList(data);
        })
      })
      this.router.navigate(['suscripcion']);
    }
  }

}
