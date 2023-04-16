import { Component,OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ClassNutricionista } from 'src/app/model/nutricionista';
import { AlumnoService } from 'src/app/service/alumno.service';

@Component({
  selector: 'app-listar-nutricionista',
  templateUrl: './listar-nutricionista.component.html',
  styleUrls: ['./listar-nutricionista.component.css']
})
export class ListarNutricionistaComponent implements OnInit {
  dataSource:MatTableDataSource<ClassNutricionista> = new MatTableDataSource();
  displayedColumns:String[] = ["id","Nombre","Apellidos","DNI","Telefono","Sexo","Descripcion","Disponibilidad"];
  constructor(private aS:AlumnoService){}
  ngOnInit(): void {
      this.aS.listarNutricionistas().subscribe((data)=>{
        this.dataSource=new MatTableDataSource(data);
      });
  }
}
