import { Component,OnInit } from '@angular/core';
import { NutricionistaService } from 'src/app/service/nutricionista.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-nutricionista-dialogo',
  templateUrl: './nutricionista-dialogo.component.html',
  styleUrls: ['./nutricionista-dialogo.component.css']
})
export class NutricionistaDialogoComponent implements OnInit {
  constructor(private nS:NutricionistaService, private dialRef:MatDialogRef<NutricionistaDialogoComponent>){ }

  ngOnInit(): void {}
  confirmar(estado:boolean){
    this.nS.setConfirmDelete(estado);
    this.dialRef.close();
  }
}
