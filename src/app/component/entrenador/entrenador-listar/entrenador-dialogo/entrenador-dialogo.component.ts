import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EntrenadorService } from 'src/app/service/entrenador.service';

@Component({
  selector: 'app-entrenador-dialogo',
  templateUrl: './entrenador-dialogo.component.html',
  styleUrls: ['./entrenador-dialogo.component.css']
})
export class EntrenadorDialogoComponent implements OnInit{
  constructor(private aS: EntrenadorService,private dialogRef: MatDialogRef<EntrenadorDialogoComponent>){}
  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.aS.setConfirmDelete(estado);
      this.dialogRef.close();
    
  }
}
