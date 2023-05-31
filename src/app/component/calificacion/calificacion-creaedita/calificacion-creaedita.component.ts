import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Calificacion } from 'src/app/model/calificacion';
import { CalificacionService } from 'src/app/service/calificacion.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  mensaje: string = "";
  ngOnInit(): void {

     this.route.params.subscribe((data:Params)=>{
      this.id=data['id'];
      this.edicion=data['id']!=null;
      this.init();
    })
    this.form=new FormGroup({
      id: new FormControl(),
      name:new FormControl(),
      puntuacion:new FormControl(),
      comentario:new FormControl(),
    });
  }
  constructor(private as:CalificacionService, private router:Router, private route:ActivatedRoute, private _snackvar:MatSnackBar){ }

  aceptar(): void {
    this.calificacion.id = this.form.value['id'];
    this.calificacion.name = this.form.value['name'];
    this.calificacion.puntuacion = this.form.value['puntuacion'];
    this.calificacion.comentario = this.form.value['comentario'];
    if(this.form.value['name'].length!=null && this.form.value['puntuacion'].length!=null && this.form.value['comentario'].length!=null)
    {
      if(this.edicion==true)
      {
        this.as.update(this.calificacion).subscribe(()=>{
          this.as.list().subscribe(data=>{
            this.as.set_list(data)
          })
        })
      }
      else{
        this.as.insert(this.calificacion).subscribe(data  => {
          this.as.list().subscribe(data  =>{
            this.as.set_list(data)
          })
        })
      }
    this.router.navigate(['calificaciones']);
  }
  else {
    this.ingresarTodosDatos();
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
  ingresarTodosDatos():void{
    this._snackvar.open("Ingrese todos los campos para agregar una nueva calificacion",'',{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }
}
