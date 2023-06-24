import { Component, OnInit } from '@angular/core';

import { entrenadorCitaEntrenadorDTO } from 'src/app/model/entrenadorCitaEntrenadorDTO';
import { CitaEntrenadorService } from 'src/app/service/cita-entrenador.service';

@Component({
  selector: 'app-reporte01',
  templateUrl: './reporte01.component.html',
  styleUrls: ['./reporte01.component.css']
})
export class Reporte01Component implements OnInit {
  citaEntrenadorCounts: entrenadorCitaEntrenadorDTO[] = [];
  dataSource: MatTableDataSource<entrenadorCitaEntrenadorDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['entrenador','cantidad']

  constructor(private ceS: CitaEntrenadorService) { }

  ngOnInit(): void {
    this.ceS.getDateTrainerCountByTrainer().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

}
