import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Entrenador } from 'src/app/model/entrenador';

import { entrenadorCitaEntrenadorDTO } from 'src/app/model/entrenadorCitaEntrenadorDTO';
import { CitaEntrenadorService } from 'src/app/service/cita-entrenador.service';

@Component({
  selector: 'app-reporte01',
  templateUrl: './reporte01.component.html',
  styleUrls: ['./reporte01.component.css']
})
export class Reporte01Component implements OnInit {
  role:string="";//
  shouldRun = false; /////////NAV/////////
  opened = false;
  events = ['close', 'open'];
  totalItems:number=0
  citaEntrenadorCounts: entrenadorCitaEntrenadorDTO[] = [];
  dataSource: MatTableDataSource<entrenadorCitaEntrenadorDTO> = new MatTableDataSource();
  entrenador:Entrenador=new Entrenador();
  lista:Entrenador[]=[];
  displayedColumns: string[] = ['entrenador','apellidoP','apellidoM','cantidad']

  constructor(private ceS: CitaEntrenadorService) { }

  ngOnInit(): void {
    this.ceS.getDateTrainerCountByTrainer().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

}
