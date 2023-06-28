import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { productoAlumnoDTO } from 'src/app/model/productoAlumnoDTO';
import { DocumentoventaService } from 'src/app/service/documentoventa.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-productocompradoporalumno',
  templateUrl: './productocompradoporalumno.component.html',
  styleUrls: ['./productocompradoporalumno.component.css']
})
export class ProductocompradoporalumnoComponent implements OnInit {
  role:string="";//
  shouldRun = false; /////////NAV/////////
  opened = false;
  events = ['close', 'open'];
  totalItems:number=0
  dataSource: MatTableDataSource<productoAlumnoDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['alumno','apellidoP','apellidoM','cantidad']

  constructor(private dvS: DocumentoventaService) { }

  ngOnInit(): void {
    this.dvS.getProductCountByAlumn().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

}
