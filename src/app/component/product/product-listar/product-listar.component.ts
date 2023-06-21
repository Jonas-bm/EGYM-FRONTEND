import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog'
import { ProductDialogoComponent } from './product-dialogo/product-dialogo.component';
import {MatPaginator} from '@angular/material/paginator'
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-product-listar',
  templateUrl: './product-listar.component.html',
  styleUrls: ['./product-listar.component.css']
})
export class ProductListarComponent implements OnInit {
  role:string="";//
  shouldRun = false; /////////NAV/////////
  opened = false;
  events = ['close', 'open'];
  totalItems: number = 0;
  lista: Product[] = []
  dataSource: MatTableDataSource<Product> = new MatTableDataSource();
  idMayor: number = 0
  displayedColumns: string[] = ['codigo', 'nombre', 'descripcion', 'precio', 'acciones', 'acciones2'];

  constructor (private pS: ProductService, private dialog: MatDialog,private ls:LoginService) {

  }  @ViewChild(MatPaginator) paginator!:MatPaginator;


  ngOnInit(): void {

    this.role=this.ls.showRole();// 
    this.pS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    })

    this.pS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
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
