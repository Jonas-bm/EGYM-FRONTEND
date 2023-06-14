import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RecetaAsignada } from 'src/app/model/resetaasignada';
import { ResetaasignadaService } from 'src/app/service/resetaasignada.service';

@Component({
  selector: 'app-resetaasignada-listar',
  templateUrl: './resetaasignada-listar.component.html',
  styleUrls: ['./resetaasignada-listar.component.css']
})
export class ResetaasignadaListarComponent implements OnInit {
  totalItems:number=0
  lista:RecetaAsignada[]=[];
  dataSource:MatTableDataSource<RecetaAsignada>=new MatTableDataSource();
  displayedColumns:string[]=['codigo','citaNutricionista','receta','descripcion']

  constructor(private raS:ResetaasignadaService){}

  ngOnInit(): void {
    this.raS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.raS.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

}
