import { Component,OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ClassNutricionista } from 'src/app/model/nutricionista';
import { AlumnoService } from 'src/app/service/alumno.service';

@Component({
  selector: 'app-nutricionista-listar',
  templateUrl: './nutricionista-listar.component.html',
  styleUrls: ['./nutricionista-listar.component.css']
})
export class NutricionistaListarComponent implements OnInit {
  dataSource:MatTableDataSource<ClassNutricionista>=new MatTableDataSource();
  displayedColumns:string[] = ['id','nombre','apellido','dni','telefono','sexo',
  'Descripción','Estado'];
  constructor(private aS:AlumnoService){}
  ngOnInit(): void {
      this.aS.listarNutricionistas().subscribe(data=>{
        this.dataSource=new MatTableDataSource(data);
      })
  }

}
