import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CalificacionService } from 'src/app/service/calificacion.service';


@Component({
  selector: 'app-calificacion-dialogo',
  templateUrl: './calificacion-dialogo.component.html',
  styleUrls: ['./calificacion-dialogo.component.css']
})
export class CalificacionDialogoComponent implements OnInit {
 constructor(private as:CalificacionService, private dialogoRef: MatDialogRef<CalificacionDialogoComponent>){}
  ngOnInit(): void {}
  confirmar(estado:boolean){
    this.as.setConfirmDelete(estado);
    this.dialogoRef.close();
  }
}
