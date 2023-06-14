import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CitaEntrenador } from 'src/app/model/citaEntrenador';
import { CitaEntrenadorService } from 'src/app/service/cita-entrenador.service';

@Component({
  selector: 'app-centrenador-listar',
  templateUrl: './centrenador-listar.component.html',
  styleUrls: ['./centrenador-listar.component.css']
})
export class CentrenadorListarComponent implements OnInit{
  totalItems:number=0
  lista:CitaEntrenador[]=[];
  dataSource:MatTableDataSource<CitaEntrenador>=new MatTableDataSource();
  displayedColumns:string[]=['codigo','fecha','descripcion','entrenador','alumno']

  constructor(private ceS:CitaEntrenadorService){}

  ngOnInit(): void {
    this.ceS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.ceS.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
}