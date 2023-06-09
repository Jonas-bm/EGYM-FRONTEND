import { Component, OnInit, ViewChild } from '@angular/core';
import { Alumno } from 'src/app/model/alumno';
import { AlumnoService } from 'src/app/service/alumno.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog'
import { AlumnoDialogoComponent } from './alumno-dialogo/alumno-dialogo.component';
import {MatPaginator} from '@angular/material/paginator'
import { LoginService } from 'src/app/service/login.service';
@Component({
  selector: 'app-alumno-listar',
  templateUrl: './alumno-listar.component.html',
  styleUrls: ['./alumno-listar.component.css'],
})
export class AlumnoListarComponent implements OnInit {
  role:string="";//
  dataSource: MatTableDataSource<Alumno> = new MatTableDataSource();
  idMayor: number = 0
  totalItems: number = 0;
  displayedColumns:String[]=['codigo','nombre','apellidos','dni','direccion','celular','fechaNacimiento','peso','talla','acciones1','acciones2'] //agregamos el componente (mediante consola)
  constructor(private as: AlumnoService, private dialog:MatDialog,private ls:LoginService) {}
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  ngOnInit(): void {
    this.role=this.ls.showRole();//
    this.as.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    });

    this.as.getList().subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    });
    this.as.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })
  }
  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(AlumnoDialogoComponent);
  }
  eliminar(id: number) {
    this.as.delete(id).subscribe(() => {
      this.as.list().subscribe(data => {
        this.as.setList(data);
      })
    })
  }
  filtrar(z:any){
    this.dataSource.filter=z.target.value.trim();
  }

  //eliminar


}
