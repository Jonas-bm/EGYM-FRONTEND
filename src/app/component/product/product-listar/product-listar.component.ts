import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog'
import { ProductDialogoComponent } from './product-dialogo/product-dialogo.component';

@Component({
  selector: 'app-product-listar',
  templateUrl: './product-listar.component.html',
  styleUrls: ['./product-listar.component.css']
})
export class ProductListarComponent implements OnInit {
  shouldRun = false; /////////NAV/////////
  opened = false;
  events = ['close', 'open'];

  lista: Product[] = []
  dataSource: MatTableDataSource<Product> = new MatTableDataSource();
  idMayor: number = 0
  displayedColumns: string[] = ['codigo', 'precio', 'nombre', 'descripcion', 'acciones', 'acciones2'];

  constructor (private pS: ProductService, private dialog: MatDialog ) {

  }

  ngOnInit(): void {

    this.pS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })

    this.pS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })

    this.pS.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })

  }

  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(ProductDialogoComponent);
  }
  eliminar(id: number) {
    this.pS.delete(id).subscribe(() => {
      this.pS.list().subscribe(data => {
        this.pS.setList(data);
      })
    })
  }

  filtrar(z: any){
    this.dataSource.filter = z.target.value.trim();
  }

}
