import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { productoMasIngresosDTO } from 'src/app/model/productoMasIngresosDTO';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-reporte05',
  templateUrl: './reporte05.component.html',
  styleUrls: ['./reporte05.component.css']
})
export class Reporte05Component implements OnInit {

  productoMasIngresos: productoMasIngresosDTO[] = [];
  dataSource: MatTableDataSource<productoMasIngresosDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['producto','monto']

  constructor(private bS: ProductService) { }

  ngOnInit(): void {
    this.bS.getProductoMasIngresos().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getProductoMasIngresos(): void {
    this.bS.getProductoMasIngresos()
      .subscribe((data: productoMasIngresosDTO[]) => {
        this.productoMasIngresos = data;
      });
  }


}
