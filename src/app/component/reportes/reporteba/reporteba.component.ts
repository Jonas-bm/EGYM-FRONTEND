import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NutricionistaCitaNutricionistaDTO } from 'src/app/model/NutricionistaCitaNutricionistaDTO';
import { CitaNutricionistaService } from 'src/app/service/cita-nutricionista.service';

@Component({
  selector: 'app-reporteba',
  templateUrl: './reporteba.component.html',
  styleUrls: ['./reporteba.component.css']
})
export class ReportebaComponent implements OnInit {

  citasCounts:NutricionistaCitaNutricionistaDTO[]=[];
  dataSource:MatTableDataSource<NutricionistaCitaNutricionistaDTO>=new MatTableDataSource();

  displayedColumns:string[]=['Nutricionista','telefono','nro_citas']
  constructor(private ncn:CitaNutricionistaService){}
  ngOnInit(): void {
      this.ncn.getContarCitasxNutricionista().subscribe(data=>{
        this.dataSource=new MatTableDataSource(data);
      })
  }
  getContarCitasxNutricionista():void{
    this.ncn.getContarCitasxNutricionista()
    .subscribe((data:NutricionistaCitaNutricionistaDTO[])=>{
      this.citasCounts=data;
    })
  }


}
