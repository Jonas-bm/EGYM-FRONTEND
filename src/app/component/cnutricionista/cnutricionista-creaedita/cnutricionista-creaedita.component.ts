import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { Alumno } from 'src/app/model/alumno';
import { CitaNutricionista } from 'src/app/model/citaNutricionista';
import { ClassNutricionista } from 'src/app/model/nutricionista';
import { AlumnoService } from 'src/app/service/alumno.service';
import { CitaNutricionistaService } from 'src/app/service/cita-nutricionista.service';
import { NutricionistaService } from 'src/app/service/nutricionista.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cnutricionista-creaedita',
  templateUrl: './cnutricionista-creaedita.component.html',
  styleUrls: ['./cnutricionista-creaedita.component.css']
})
export class CnutricionistaCreaeditaComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  cita: CitaNutricionista=new CitaNutricionista();
  mensaje: string = ""
  maxFecha: Date = moment().add(-1, 'days').toDate();
  listaN: ClassNutricionista[] = [];
  listaA: Alumno[] = [];
  idAlumnoSeleccionado: number = 0;
  idNutricionistaSeleccionado: number = 0;

  id:number=0;
  edicion:boolean=false;

  constructor(private cnS: CitaNutricionistaService,
    private router: Router,
    private route: ActivatedRoute, private nS:NutricionistaService,private aS:AlumnoService,private _snackvar:MatSnackBar) {
  }

  ngOnInit(): void {
    this.nS.list().subscribe(data => { this.listaN = data });
    this.aS.list().subscribe(data => { this.listaA = data });

    this.route.params.subscribe((data:Params)=>{
      this.id=data['id'];
      this.edicion=data['id']!=null;
      this.init();
    })

    this.form = new FormGroup({
      idCitaNutricionista: new FormControl(),
      fecha: new FormControl(),
      descripcion: new FormControl(),
      nutricionista: new FormControl(),
      alumno:new FormControl(),
    });
  }
  aceptar(): void {
    this.cita.idCitaNutricionista = this.form.value['idCitaNutricionista'];
    this.cita.fecha = this.form.value['fecha'];
    this.cita.descripcion = this.form.value['descripcion'];
    this.cita.nutricionista.nombreNutricionista= this.form.value['nutricionista.nombreNutricionista'];
    this.cita.alumno.nombre=this.form.value['alumno.nombre'];
    if (this.idNutricionistaSeleccionado>0 && this.idAlumnoSeleccionado>0) {
      if(this.edicion){
        let a = new Alumno();
        let n = new ClassNutricionista();
        a.id = this.idAlumnoSeleccionado;
        n.id=this.idNutricionistaSeleccionado;
        this.cita.alumno=a;
        this.cita.nutricionista=n;
        this.cnS.update(this.cita).subscribe(()=>{
          this.cnS.list().subscribe(data=>{
            this.cnS.setList(data)
          })
        })
      }else{
        let a = new Alumno();
        let n = new ClassNutricionista();
        a.id = this.idAlumnoSeleccionado;
        n.id=this.idNutricionistaSeleccionado;
        this.cita.alumno=a;
        this.cita.nutricionista=n;
        this.cnS.insert(this.cita).subscribe(() => {
        this.cnS.list().subscribe(data => {
            this.cnS.setList(data);
          })
        })
      }
      this.router.navigate(['citaNutricionistas']);
  }
  else{
    this.ingresarTodosDatos();
  }
}
  init(){
    if(this.edicion){
      this.cnS.listId(this.id).subscribe(data=>{
        this.form=new FormGroup({
          idCitaNutricionista:new FormControl(data.idCitaNutricionista),
          fecha:new FormControl(data.fecha),
          descripcion:new FormControl(data.descripcion),
          nutricionista:new FormControl(data.nutricionista.nombreNutricionista),
          alumno:new FormControl(data.alumno.nombre)
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
