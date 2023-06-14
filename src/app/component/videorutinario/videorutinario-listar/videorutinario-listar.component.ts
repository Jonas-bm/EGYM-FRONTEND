import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { VideoRutinario } from 'src/app/model/videorutinario';
import { VideorutinarioService } from 'src/app/service/videorutinario.service';

@Component({
  selector: 'app-videorutinario-listar',
  templateUrl: './videorutinario-listar.component.html',
  styleUrls: ['./videorutinario-listar.component.css']
})
export class VideorutinarioListarComponent implements OnInit{
  totalItems:number=0
  lista:VideoRutinario[]=[];
  dataSource:MatTableDataSource<VideoRutinario>=new MatTableDataSource();
  displayedColumns:string[]=['codigo','entrenador','tipo','descripcion','duracion']

  constructor(private vrS:VideorutinarioService){}

  ngOnInit(): void {
    this.vrS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.vrS.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

}
