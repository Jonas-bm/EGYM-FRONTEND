import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CitaNutricionista } from 'src/app/model/citaNutricionista';
import { CitaNutricionistaService } from 'src/app/service/cita-nutricionista.service';
import { LoginService } from 'src/app/service/login.service';
import {MatPaginator} from '@angular/material/paginator'

@Component({
  selector: 'app-cnutricionista-listar',
  templateUrl: './cnutricionista-listar.component.html',
  styleUrls: ['./cnutricionista-listar.component.css']
})
export class CnutricionistaListarComponent implements OnInit{
  role:string="";//
  shouldRun = false; /////////NAV/////////
  opened = false;
  events = ['close', 'open'];
  totalItems:number=0
  lista:CitaNutricionista[]=[];
  dataSource:MatTableDataSource<CitaNutricionista>=new MatTableDataSource();
  displayedColumns:string[]=['codigo','alumno','nutricionista','fecha']

  constructor(private cnS:CitaNutricionistaService,private ls:LoginService){}
  @ViewChild(MatPaginator) paginator!:MatPaginator;

  ngOnInit(): void {
    this.role=this.ls.showRole();//
    this.cnS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    })
    this.cnS.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    });
  }
}
