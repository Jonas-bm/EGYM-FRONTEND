import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CitaEntrenador } from 'src/app/model/citaEntrenador';
import { CitaEntrenadorService } from 'src/app/service/cita-entrenador.service';
import { LoginService } from 'src/app/service/login.service';
import {MatPaginator} from '@angular/material/paginator'

@Component({
  selector: 'app-centrenador-listar',
  templateUrl: './centrenador-listar.component.html',
  styleUrls: ['./centrenador-listar.component.css']
})
export class CentrenadorListarComponent implements OnInit{
  role:string="";//
  shouldRun = false; /////////NAV/////////
  opened = false;
  events = ['close', 'open'];
  totalItems:number=0
  lista:CitaEntrenador[]=[];
  dataSource:MatTableDataSource<CitaEntrenador>=new MatTableDataSource();
  displayedColumns:string[]=['codigo','fecha','descripcion','entrenador','alumno']

  constructor(private ceS:CitaEntrenadorService,private ls:LoginService){}
  @ViewChild(MatPaginator) paginator!:MatPaginator;

  ngOnInit(): void {
    this.role=this.ls.showRole();//
    this.ceS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    })
    this.ceS.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    });
  }
}
