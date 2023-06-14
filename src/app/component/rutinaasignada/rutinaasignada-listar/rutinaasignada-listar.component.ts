import { Component,OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RutinaAsignada } from 'src/app/model/rutinaasignada';
import { RutinaasignadaService } from 'src/app/service/rutinaasignada.service';

@Component({
  selector: 'app-rutinaasignada-listar',
  templateUrl: './rutinaasignada-listar.component.html',
  styleUrls: ['./rutinaasignada-listar.component.css']
})
export class RutinaasignadaListarComponent implements OnInit {
  totalItems:number=0
  lista:RutinaAsignada[]=[];
  dataSource:MatTableDataSource<RutinaAsignada>=new MatTableDataSource();
  displayedColumns:string[]=['codigo','nombre','descripcion','repeticiones','tiempo','citaEntrenador']

  constructor(private raS:RutinaasignadaService){}

  ngOnInit(): void {
    this.raS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.raS.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

}
