import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Entrenador } from 'src/app/model/entrenador';
import { entrenadorDisponibleDTO } from 'src/app/model/entrenadorDisponibleDTO';
import { EntrenadorService } from 'src/app/service/entrenador.service';

@Component({
  selector: 'app-entrenadordisponible',
  templateUrl: './entrenadordisponible.component.html',
  styleUrls: ['./entrenadordisponible.component.css']
})
export class EntrenadordisponibleComponent implements OnInit{
  role:string="";//
  shouldRun = false; /////////NAV/////////
  opened = false;
  events = ['close', 'open'];
  totalItems:number=0
  entrenadorDisponible: entrenadorDisponibleDTO[] = [];
  dataSource: MatTableDataSource<entrenadorDisponibleDTO> = new MatTableDataSource();
  entrenador:Entrenador=new Entrenador();
  lista:Entrenador[]=[];
  displayedColumns: string[] = ['entrenador','apellidoP','apellidoM','estate','exp']

  constructor(private eS: EntrenadorService) { }

  ngOnInit(): void {
    this.eS.getEntrenadorDisponible().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

}
