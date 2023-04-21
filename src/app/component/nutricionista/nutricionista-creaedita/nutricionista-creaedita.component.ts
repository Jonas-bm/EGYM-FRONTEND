import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ClassNutricionista } from 'src/app/model/nutricionista';
import *as moment from 'moment';
import { NutricionistaService } from 'src/app/service/nutricionista.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nutricionista-creaedita',
  templateUrl: './nutricionista-creaedita.component.html',
  styleUrls: ['./nutricionista-creaedita.component.css']
})
export class NutricionistaCreaeditaComponent implements OnInit {
  form:FormGroup=new FormGroup({});
  nutri:ClassNutricionista=new ClassNutricionista();
  mensaje:string='';
  maxFecha:Date=moment().add(1,'days').toDate();

  ngOnInit(): void {
    this.form=new FormGroup({
      idNutricionista: new FormControl(),
      nombreNutricionista: new FormControl(),
      apellidosNutricionista: new FormControl(),
      dni: new FormControl(),
      telefono: new FormControl(),
      sexo: new FormControl(),
      Descripcion: new FormControl(),
      Estado: new FormControl(),
    })
  }
  constructor(private nS:NutricionistaService, private router:Router){ }

  aceptar():void{
    this.nutri.id=this.form.value['id'];
    this.nutri.nombreNutricionista=this.form.value['nombreNutricionista'];
    this.nutri.apellidosNutricionista=this.form.value['apellidosNutricionista'];
    this.nutri.dni=this.form.value['dni'];
    this.nutri.telefono=this.form.value['telefono'];
    this.nutri.sexo=this.form.value['sexo'];
    this.nutri.Descripcion=this.form.value['Descripcion'];
    this.nutri.Estado=this.form.value['Estado'];
    if(this.form.value['nombreNutricionista'].length>0 &&
    this.form.value['apellidosNutricionista'].length>0 &&
    this.form.value['dni'].length>0 &&
    this.form.value['telefono'].length>0 &&
    this.form.value['sexo'].length>0 &&
    this.form.value['Descripcion'].length>0 &&
    this.form.value['Estado'].length>0){

      this.nS.insert(this.nutri).subscribe(data=>{
        this.nS.list().subscribe(data=>{
          this.nS.setList(data)
        })
      })
      this.router.navigate(['nutricionista'])
    }else{
      this.mensaje="Ingrese los datos del nutricionista!!";

    }
  }
}
