import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-product-listar',
  templateUrl: './product-listar.component.html',
  styleUrls: ['./product-listar.component.css']
})
export class ProductListarComponent implements OnInit {
  shouldRun = false; /////////NAV/////////
  opened = false;
  events = ['close', 'open'];

  dataSource: MatTableDataSource<Product> = new MatTableDataSource();
  displayedColumns: string[] = ['codigo', 'precio', 'nombre', 'descripcion', 'acciones'];

  constructor (private pS: ProductService ) {

  }

  ngOnInit(): void {

    this.pS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data)
    })

    this.pS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data)
    })

  }

  filtrar(z: any){
    this.dataSource.filter = z.target.value.trim();
  }

}
