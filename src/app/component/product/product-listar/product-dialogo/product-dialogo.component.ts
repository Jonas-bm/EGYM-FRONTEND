import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-product-dialogo',
  templateUrl: './product-dialogo.component.html',
  styleUrls: ['./product-dialogo.component.css']
})
export class ProductDialogoComponent implements OnInit {

  constructor(private pS: ProductService,
    private dialogRef: MatDialogRef<ProductDialogoComponent>) { }
  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.pS.setConfirmDelete(estado);
      this.dialogRef.close();
    }

}
