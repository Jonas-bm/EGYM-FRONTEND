import { Component,OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Suscripcion } from 'src/app/model/suscripcion';
import {SuscripcionService} from 'src/app/service/suscripcion.service';
@Component({
  selector: 'app-suscripcion-listar',
  templateUrl: './suscripcion-listar.component.html',
  styleUrls: ['./suscripcion-listar.component.css']
})
export class SuscripcionListarComponent implements OnInit {
  totalItems: number = 0;
  lista:Suscripcion[] = [];
  dataSource:MatTableDataSource<Suscripcion>=new MatTableDataSource();
  displayedColumns:string[]=['codigo','alumno','pago','tiposuscripcion','precio','fesu','feex']

  constructor(private sS:SuscripcionService){}

  ngOnInit(): void {
    this.sS.list().subscribe(data => {
      this.dataSource=new MatTableDataSource(data);
    })
    this.sS.getLista().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }
}
