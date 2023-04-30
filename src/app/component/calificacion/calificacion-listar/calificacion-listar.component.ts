import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Calificacion } from 'src/app/model/calificacion';
import { CalificacionService } from 'src/app/service/calificacion.service';
import { CalificacionDialogoComponent } from '../calificacion-dialogo/calificacion-dialogo.component';


@Component({
  selector: 'app-calificacion-listar',
  templateUrl: './calificacion-listar.component.html',
  styleUrls: ['./calificacion-listar.component.css']
})
export class CalificacionListarComponent implements OnInit{
  dataSource: MatTableDataSource<Calificacion> = new MatTableDataSource();
  idMayor: number= 0
  displayedColumns:String[]=['id','name','puntuacion','comentario','acciones1','acciones2']
  constructor(private as:CalificacionService, private dialog: MatDialog){ }


  ngOnInit():  void {
    this.as.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });

    this.as.get_list().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    });
    this.as.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })


  }
  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(CalificacionDialogoComponent);
  }
  eliminar(id: number) {
    this.as.delete(id).subscribe(() => {
      this.as.list().subscribe(data => {
        this.as.set_list(data);
      })
    })
  }
  filtrar(z:any){
    this.dataSource.filter=z.target.value.trim();
  }

}
