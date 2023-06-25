import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { docVentaDetVentaDTO } from 'src/app/model/docVentaDetVentaDTO';
import { Alumno } from 'src/app/model/alumno';
import { Product } from 'src/app/model/product';
import { DetalleventaService } from 'src/app/service/detalleventa.service';

@Component({
  selector: 'app-documentodetalle',
  templateUrl: './documentodetalle.component.html',
  styleUrls: ['./documentodetalle.component.css']
})
export class DocumentodetalleComponent implements OnInit {
  role:string="";//
  shouldRun = false; /////////NAV/////////
  opened = false;
  events = ['close', 'open'];
  totalItems:number=0
  citaEntrenadorCounts: docVentaDetVentaDTO[] = [];
  dataSource: MatTableDataSource<docVentaDetVentaDTO> = new MatTableDataSource();
  alumno:Alumno=new Alumno();
  producto:Product=new Product();
  displayedColumns: string[] = ['alumno','producto','monto','fecha']

  constructor(private dS: DetalleventaService) { }

  ngOnInit(): void {
    this.dS.getDocuVentaDetalleVenta().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }


}
