import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DocumentoVenta } from 'src/app/model/documentoVenta';
import { DocumentoventaService } from 'src/app/service/documentoventa.service';

@Component({
  selector: 'app-documentoventa-listar',
  templateUrl: './documentoventa-listar.component.html',
  styleUrls: ['./documentoventa-listar.component.css']
})
export class DocumentoventaListarComponent implements OnInit {
  totalItems:number=0
  lista:DocumentoVenta[]=[];
  dataSource:MatTableDataSource<DocumentoVenta>=new MatTableDataSource();
  displayedColumns:string[]=['codigo','monto','fecha','alumno']

  constructor(private dvS:DocumentoventaService){}

  ngOnInit(): void {
    this.dvS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.dvS.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
}
