import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/model/alumno';
import { AlumnoService } from 'src/app/service/alumno.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-alumno-listar',
  templateUrl: './alumno-listar.component.html',
  styleUrls: ['./alumno-listar.component.css'],
})
export class AlumnoListarComponent implements OnInit {
  dataSource: MatTableDataSource<Alumno> = new MatTableDataSource();
  displayedColumns:String[]=['codigo','nombre','apellidoPaterno','apellidoMaterno','dni','direccion','celular','fechaNacimiento','peso','talla'] //agregamos el componente (mediante consola)
  constructor(private as: AlumnoService) {}
  ngOnInit(): void {
    this.as.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
}
