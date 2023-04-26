import { Component,OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/service/alumno.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alumno-dialogo',
  templateUrl: './alumno-dialogo.component.html',
  styleUrls: ['./alumno-dialogo.component.css']
})
export class AlumnoDialogoComponent implements OnInit{
  constructor(private as:AlumnoService, private dialogRef: MatDialogRef<AlumnoDialogoComponent>){}
  ngOnInit(): void {}
    confirmar(estado:boolean){
      this.as.setConfirmDelete(estado);
      this.dialogRef.close();
    }
  }


