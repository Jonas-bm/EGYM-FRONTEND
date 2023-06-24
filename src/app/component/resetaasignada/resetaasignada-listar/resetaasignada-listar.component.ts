import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RecetaAsignada } from 'src/app/model/resetaasignada';
import { LoginService } from 'src/app/service/login.service';
import { ResetaasignadaService } from 'src/app/service/resetaasignada.service';
import {MatPaginator} from '@angular/material/paginator'

@Component({
  selector: 'app-resetaasignada-listar',
  templateUrl: './resetaasignada-listar.component.html',
  styleUrls: ['./resetaasignada-listar.component.css']
})
export class ResetaasignadaListarComponent implements OnInit {
  role:string="";//
  shouldRun = false; /////////NAV/////////
  opened = false;
  events = ['close', 'open'];
  totalItems:number=0
  lista:RecetaAsignada[]=[];
  dataSource:MatTableDataSource<RecetaAsignada>=new MatTableDataSource();
  displayedColumns:string[]=['codigo','citaNutricionista','receta','descripcion']

  constructor(private raS:ResetaasignadaService,private ls:LoginService){}
  @ViewChild(MatPaginator) paginator!:MatPaginator;

  ngOnInit(): void {
    this.role=this.ls.showRole();//
    this.raS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    })
    this.raS.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    });
  }

}
