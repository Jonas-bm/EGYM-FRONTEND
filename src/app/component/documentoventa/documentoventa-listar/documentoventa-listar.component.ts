import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DocumentoVenta } from 'src/app/model/documentoVenta';
import { DocumentoventaService } from 'src/app/service/documentoventa.service';
import { LoginService } from 'src/app/service/login.service';
import {MatPaginator} from '@angular/material/paginator'

@Component({
  selector: 'app-documentoventa-listar',
  templateUrl: './documentoventa-listar.component.html',
  styleUrls: ['./documentoventa-listar.component.css']
})
export class DocumentoventaListarComponent implements OnInit {
  role:string="";//
  shouldRun = false; /////////NAV/////////
  opened = false;
  events = ['close', 'open'];
  totalItems:number=0
  lista:DocumentoVenta[]=[];
  dataSource:MatTableDataSource<DocumentoVenta>=new MatTableDataSource();
  displayedColumns:string[]=['codigo','fecha','alumno']

  constructor(private dvS:DocumentoventaService,private ls:LoginService){}
  @ViewChild(MatPaginator) paginator!:MatPaginator;

  ngOnInit(): void {
    this.role=this.ls.showRole();//
    this.dvS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    })
    this.dvS.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    });
  }
}
