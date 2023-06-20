import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { DetalleVenta } from 'src/app/model/detalleventa';
import { Product } from 'src/app/model/product';
import { DetalleventaService } from 'src/app/service/detalleventa.service';
import { ProductService } from 'src/app/service/product.service';
import { DocumentoventaService } from 'src/app/service/documentoventa.service';
import { DocumentoVenta } from 'src/app/model/documentoVenta';

@Component({
  selector: 'app-detalleventa-creaedita',
  templateUrl: './detalleventa-creaedita.component.html',
  styleUrls: ['./detalleventa-creaedita.component.css']
})
export class DetalleventaCreaeditaComponent implements OnInit{
  form: FormGroup= new FormGroup({});
  detalle: DetalleVenta=new DetalleVenta();
  mensaje: string = ""
  maxFecha: Date = moment().add(-1, 'days').toDate();
  listaP: Product[] = [];
  listaDVE: DocumentoVenta[]=[];
  idProductoSeleccionado: number = 0;
  idDocumentoVentaSeleccionado:number=0;

  constructor(private dvS: DetalleventaService,
    private router: Router,
    private route: ActivatedRoute, private pS:ProductService, private dveS: DocumentoventaService) {
  }

  ngOnInit(): void {
    this.pS.list().subscribe(data => { this.listaP = data });
    this.dveS.list().subscribe(data => { this.listaDVE = data });

    this.form = new FormGroup({
      idDetalleVenta: new FormControl(),
      montoTotal: new FormControl(),
      producto: new FormControl(),
      fechaVenta: new FormControl(),
      documentoVenta:new FormControl(),
    });
  }
  aceptar(): void {
    this.detalle.idDetalleVenta = this.form.value['idDetalleVenta'];
    this.detalle.montoTotal=this.form.value['montoTotal']
    this.detalle.fechaVenta = this.form.value['fechaVenta'];
    this.detalle.documentoVenta.idDocumentoventa=this.form.value['documentoVenta.idDocumentoventa'];
    if (this.idProductoSeleccionado > 0 && this.idDocumentoVentaSeleccionado > 0) {
      let p = new Product();
      let dv = new DocumentoVenta();
      p.id = this.idProductoSeleccionado;
      dv.idDocumentoventa = this.idDocumentoVentaSeleccionado;
      this.detalle.producto=p;
      this.detalle.documentoVenta=dv;
      this.dvS.insert(this.detalle).subscribe(() => {
      this.dvS.list().subscribe(data => {
            this.dvS.setList(data);
          })
        })

      this.router.navigate(['/egym/detalleVentas']);
  }
}
}
