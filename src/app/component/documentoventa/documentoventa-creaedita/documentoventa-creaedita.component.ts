import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Alumno } from 'src/app/model/alumno';
import { DocumentoVenta } from 'src/app/model/documentoVenta';
import { AlumnoService } from 'src/app/service/alumno.service';
import { DocumentoventaService } from 'src/app/service/documentoventa.service';

@Component({
  selector: 'app-documentoventa-creaedita',
  templateUrl: './documentoventa-creaedita.component.html',
  styleUrls: ['./documentoventa-creaedita.component.css']
})
export class DocumentoventaCreaeditaComponent implements OnInit{
  form: FormGroup= new FormGroup({});
  docu: DocumentoVenta=new DocumentoVenta();
  mensaje: string = ""
  maxFecha: Date = moment().add(-1, 'days').toDate();
  listaA: Alumno[] = [];
  idAlumnoSeleccionado: number = 0;

  constructor(private dvS: DocumentoventaService,
    private router: Router,
    private route: ActivatedRoute, private aS:AlumnoService) {
  }

  ngOnInit(): void {
    this.aS.list().subscribe(data => { this.listaA = data });

    this.form = new FormGroup({
      idDocumentoventa: new FormControl(),
      montoTotal: new FormControl(),
      fecha: new FormControl(),
      alumno:new FormControl(),
    });
  }
  aceptar(): void {
    this.docu.idDocumentoventa = this.form.value['idDocumentoventa'];
    this.docu.montoTotal=this.form.value['montoTotal']
    this.docu.fecha = this.form.value['fecha'];
    this.docu.alumno.nombre=this.form.value['alumno.nombre'];
    if (this.idAlumnoSeleccionado>0) {
      let a = new Alumno();
      a.id = this.idAlumnoSeleccionado;
      this.docu.alumno=a;
      this.dvS.insert(this.docu).subscribe(() => {
      this.dvS.list().subscribe(data => {
            this.dvS.setList(data);
          })
        })

      this.router.navigate(['documentoVentas']);
  }
}

}
