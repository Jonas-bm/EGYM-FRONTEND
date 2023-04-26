import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Entrenador } from 'src/app/model/entrenador';
import { EntrenadorService } from 'src/app/service/entrenador.service';
import { EntrenadorDialogoComponent } from './entrenador-dialogo/entrenador-dialogo.component';

@Component({
  selector: 'app-entrenador-listar',
  templateUrl: './entrenador-listar.component.html',
  styleUrls: ['./entrenador-listar.component.css'],
})
export class EntrenadorListarComponent implements OnInit {
    lista:Entrenador[]=[]
  dataSource: MatTableDataSource<Entrenador> = new MatTableDataSource();
  idMayor: number = 0
  displayedColumns: string[] = ['id','nombre','apellidoPaterno','apellidoMaterno','dni','telefono',
    'correo','habilidades','experiencia','educacion','estado','accion01','accion02'];

  constructor(private aS: EntrenadorService, private dialog:MatDialog) {}
  ngOnInit(): void {
    this.aS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })

    this.aS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })

    this.aS.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })

    this.aS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    //despues
  /*  this.aS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });*/
  }
  confirm(id: number){
    this.idMayor = id;
    this.dialog.open(EntrenadorDialogoComponent);
  }

  eliminar(id: number){
  this.aS.delete(id).subscribe(() =>{
    this.aS.list().subscribe(data =>{
      this.aS.setList(data);
    })
  })
  }

  filtrar(z:any) {
    this.dataSource.filter=z.target.value.trim();
  }

}
