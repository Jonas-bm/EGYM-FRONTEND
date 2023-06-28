import { Component,OnInit } from '@angular/core';
import { CitaxFechaDTO } from 'src/app/model/CitaxFechaDTO';
import { CitaNutricionistaService } from 'src/app/service/cita-nutricionista.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-reporteba2',
  templateUrl: './reporteba2.component.html',
  styleUrls: ['./reporteba2.component.css']
})
export class Reporteba2Component implements OnInit {
  citaCounts:CitaxFechaDTO[] = [];
  dataSource:MatTableDataSource<CitaxFechaDTO>=new MatTableDataSource();
  displayedColumns:string[] = ['Nutricionista','Nro_citas_hoy']
  constructor(private ncn:CitaNutricionistaService){}
  ngOnInit(): void {
      this.ncn.getCitasxfecha().subscribe(data=>{
        this.dataSource=new MatTableDataSource(data);
      })
  }
  getCitasxfecha(): void{
    this.ncn.getCitasxfecha()
    .subscribe((data:CitaxFechaDTO[])=>{
      this.citaCounts=data;
    })
  }

}
