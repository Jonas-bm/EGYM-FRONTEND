import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CitaNutricionista } from 'src/app/model/citaNutricionista';
import { CitaNutricionistaService } from 'src/app/service/cita-nutricionista.service';

@Component({
  selector: 'app-cnutricionista-listar',
  templateUrl: './cnutricionista-listar.component.html',
  styleUrls: ['./cnutricionista-listar.component.css']
})
export class CnutricionistaListarComponent implements OnInit{
  totalItems:number=0
  lista:CitaNutricionista[]=[];
  dataSource:MatTableDataSource<CitaNutricionista>=new MatTableDataSource();
  displayedColumns:string[]=['codigo','alumno','nutricionista','fecha','descripcion']

  constructor(private cnS:CitaNutricionistaService){}

  ngOnInit(): void {
    this.cnS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.cnS.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
}
