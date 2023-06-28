import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Visualizaciones } from 'src/app/model/visualizaciones';
import { VisualizacionesService } from 'src/app/service/visualizaciones.service';

@Component({
  selector: 'app-visualizaciones-listar',
  templateUrl: './visualizaciones-listar.component.html',
  styleUrls: ['./visualizaciones-listar.component.css']
})
export class VisualizacionesListarComponent implements OnInit {
  totalItems:number=0
  lista:Visualizaciones[]=[];
  dataSource:MatTableDataSource<Visualizaciones>=new MatTableDataSource();
  displayedColumns:string[]=['idVisualizaciones','alumno','videosRutinario','comentario']

  constructor(private dvS:VisualizacionesService){
  }

  ngOnInit(): void {
    this.dvS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.dvS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

}
