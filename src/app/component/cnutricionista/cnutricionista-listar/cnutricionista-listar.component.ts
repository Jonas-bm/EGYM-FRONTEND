import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CitaNutricionista } from 'src/app/model/citaNutricionista';
import { CitaNutricionistaService } from 'src/app/service/cita-nutricionista.service';
import {MatDialog} from '@angular/material/dialog'
import {MatPaginator} from '@angular/material/paginator'
import { CnutricionistaDialogoComponent } from './cnutricionista-dialogo/cnutricionista-dialogo.component';
@Component({
  selector: 'app-cnutricionista-listar',
  templateUrl: './cnutricionista-listar.component.html',
  styleUrls: ['./cnutricionista-listar.component.css']
})
export class CnutricionistaListarComponent implements OnInit{
  totalItems:number=0
  idSelec:number=0;
  lista:CitaNutricionista[]=[];
  dataSource:MatTableDataSource<CitaNutricionista>=new MatTableDataSource();
  displayedColumns:string[]=['codigo','alumno','nutricionista','fecha','descripcion',"accion01","accion02"]

  constructor(private cnS:CitaNutricionistaService, private dialoN:MatDialog){}
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  ngOnInit(): void {
    this.cnS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    })
    this.cnS.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    });
    this.cnS.getConfirmDelete().subscribe(data=>{
      data==true ? this.delete(this.idSelec) :false;
    })
  }
  confirm(id:number){
    this.idSelec=id;
    this.dialoN.open(CnutricionistaDialogoComponent)
  }
  delete(id:number){
    this.cnS.eliminar(id).subscribe(()=>{
      this.cnS.list().subscribe(data=>{
        this.cnS.setList(data)
      })
    })
  }
}
