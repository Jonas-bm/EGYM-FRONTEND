import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ClassNutricionista } from 'src/app/model/nutricionista';
import *as moment from 'moment';
import { NutricionistaService } from 'src/app/service/nutricionista.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-nutricionista-creaedita',
  templateUrl: './nutricionista-creaedita.component.html',
  styleUrls: ['./nutricionista-creaedita.component.css']
})
export class NutricionistaCreaeditaComponent implements OnInit {
  //edita
  id:number = 0;
  edicion:boolean =false;
  //crear
  form:FormGroup=new FormGroup({});
  nutri:ClassNutricionista=new ClassNutricionista();
  mensaje:string='';
  maxFecha:Date=moment().add(1,'days').toDate();

  ngOnInit(): void {
    //editar
    this.route.params.subscribe((data:Params)=>{
      this.id=data['id'];
      this.edicion=data['id']!=null;
      this.init();
    })
    //crear
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
  constructor(private nS:NutricionistaService, private router:Router,private route:ActivatedRoute, private _snackvar:MatSnackBar){ }

  aceptar():void{
    this.nutri.id=this.form.value['id'];
    this.nutri.nombreNutricionista=this.form.value['nombreNutricionista'];
    this.nutri.apellidosNutricionista=this.form.value['apellidosNutricionista'];
    this.nutri.dni=this.form.value['dni'];
    this.nutri.telefono=this.form.value['telefono'];
    this.nutri.sexo=this.form.value['sexo'];
    this.nutri.Descripcion=this.form.value['Descripcion'];
    this.nutri.Estado=this.form.value['Estado'];
    if(this.form.value['nombreNutricionista']!=null &&
    this.form.value['apellidosNutricionista']!=null &&
    this.form.value['dni']!=null &&
    this.form.value['telefono']!=null &&
    this.form.value['sexo']!=null &&
    this.form.value['Descripcion']!=null &&
    this.form.value['Estado']!=null){
      if(this.edicion){
        //editar
        this.nS.update(this.nutri).subscribe(()=>{
          this.nS.list().subscribe(data=>{
            this.nS.setList(data)
          })
        })
      }else{
        //insertar
        this.nS.insert(this.nutri).subscribe(data=>{
          this.nS.list().subscribe(data=>{
            this.nS.setList(data)
          })
        })
      }
      this.router.navigate(['nutricionista'])
    }else{
      this.ingresarTodosDatos();

    }
  }

  init(){
    if(this.edicion){
      this.nS.listID(this.id).subscribe(data =>{
        this.form=new FormGroup({
          id:new FormControl(data.id),
          nombreNutricionista:new FormControl(data.nombreNutricionista),
          apellidosNutricionista:new FormControl(data.apellidosNutricionista),
          dni:new FormControl(data.dni),
          telefono:new FormControl(data.telefono),
          sexo:new FormControl(data.sexo),
          Descripcion:new FormControl(data.Descripcion),
          Estado:new FormControl(data.Estado),
        })
      })
    }
  }
  ingresarTodosDatos():void{
    this._snackvar.open("Debe ingresar todos los campos para agregar un nuevo Nutricionista",'',{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }
}
