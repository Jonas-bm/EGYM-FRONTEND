import { Component, OnInit } from '@angular/core';
import { CitaNutricionistaService } from 'src/app/service/cita-nutricionista.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cnutricionista-dialogo',
  templateUrl: './cnutricionista-dialogo.component.html',
  styleUrls: ['./cnutricionista-dialogo.component.css']
})
export class CnutricionistaDialogoComponent implements OnInit {
  constructor(private cns:CitaNutricionistaService, private dialRef:MatDialogRef<CnutricionistaDialogoComponent>){}
  ngOnInit(): void {

  }
  confirmar(estado:boolean){
   this.cns.setConfirmDelete(estado);
   this.dialRef.close();
  }

}
