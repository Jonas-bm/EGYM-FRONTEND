import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product-creaedita',
  templateUrl: './product-creaedita.component.html',
  styleUrls: ['./product-creaedita.component.css']
})
export class ProductCreaeditaComponent implements OnInit {
  opened = false;

  id: number = 0
  edicion: boolean = false

  form: FormGroup = new FormGroup({})
  product: Product = new Product()
  mensaje: string = ""

  ngOnInit(): void {

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    })

    this.form = new FormGroup({
      id: new FormControl(),
      precio: new FormControl(),
      nombre: new FormControl(),
      descripcion: new FormControl(),
    })
    }

    constructor (private aS: ProductService, private router:Router, private route: ActivatedRoute) {}

    aceptar(): void {
      this.product.id = this.form.value['id'];
      this.product.nombre = this.form.value['nombre'];
      this.product.precio = this.form.value['precio'];
      this.product.descripcion = this.form.value['descripcion'];
      if (this.form.value['nombre'].length > 0 && this.form.value['descripcion'].length > 0 &&
          this.form.value['precio'].length > 0) {

            if (this.edicion) {
              this.aS.update(this.product).subscribe(() => {

                this.aS.list().subscribe(data => {
                  this.aS.setList(data)
                  })

              })
            }
            else {

              this.aS.insert(this.product).subscribe(data => {
                this.aS.list().subscribe(data => {
                  this.aS.setList(data)
                })
              })

            }

        this.router.navigate(['products'])
      }
      else {

        this.mensaje = "Ingrese los datos del producto!!";

      }
   }

   init() {

    if (this.edicion) {

      this.aS.listId(this.id).subscribe(data => {

        this.form = new FormGroup ({
          id: new FormControl(data.id),
          nombre: new FormControl(data.nombre),
          precio: new FormControl(data.precio),
          descripcion: new FormControl(data.descripcion)
        })

      })

    }


   }

  }
