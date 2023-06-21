import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DetalleVenta } from 'src/app/model/detalleventa';
import { DetalleventaService } from 'src/app/service/detalleventa.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-detalleventa-listar',
  templateUrl: './detalleventa-listar.component.html',
  styleUrls: ['./detalleventa-listar.component.css']
})
export class DetalleventaListarComponent implements OnInit{
  role:string="";//
  shouldRun = false; /////////NAV/////////
  opened = false;
  events = ['close', 'open'];
  totalItems:number=0
  lista:DetalleVenta[]=[];
  dataSource:MatTableDataSource<DetalleVenta>=new MatTableDataSource();
  displayedColumns:string[]=['codigo','producto','monto','documentoVenta']

  constructor(private dvS:DetalleventaService,private ls:LoginService){}

  ngOnInit(): void {
    this.role=this.ls.showRole();//
    this.dvS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.dvS.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

}
