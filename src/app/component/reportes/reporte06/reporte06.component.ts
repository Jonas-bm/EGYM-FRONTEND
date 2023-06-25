import { Component, OnInit } from '@angular/core';
import { entrenadorMasRutinasDTO } from 'src/app/model/entrenadorMasRutinasDTO';
import { MatTableDataSource } from '@angular/material/table';
import { RutinaasignadaService } from 'src/app/service/rutinaasignada.service';

@Component({
  selector: 'app-reporte06',
  templateUrl: './reporte06.component.html',
  styleUrls: ['./reporte06.component.css']
})
export class Reporte06Component implements OnInit {

  entrenadorRutinas: entrenadorMasRutinasDTO[] = [];
  dataSource: MatTableDataSource<entrenadorMasRutinasDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['nombre','idRutina']

  constructor(private bS: RutinaasignadaService) { }

  ngOnInit(): void {
    this.bS.getEntrenadoresRutinas().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getEntrenadoresRutinas(): void {
    this.bS.getEntrenadoresRutinas()
      .subscribe((data: entrenadorMasRutinasDTO[]) => {
        this.entrenadorRutinas = data;
      });
  }


}
