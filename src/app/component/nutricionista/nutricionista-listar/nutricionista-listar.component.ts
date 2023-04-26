import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ClassNutricionista } from 'src/app/model/nutricionista';
import { NutricionistaService } from 'src/app/service/nutricionista.service';
import {MatDialog} from '@angular/material/dialog'
import { NutricionistaDialogoComponent } from './nutricionista-dialogo/nutricionista-dialogo.component';

@Component({
  selector: 'app-nutricionista-listar',
  templateUrl: './nutricionista-listar.component.html',
  styleUrls: ['./nutricionista-listar.component.css']
})
export class NutricionistaListarComponent implements OnInit {

  //para eliminar
  listN:ClassNutricionista[]=[]
  idSelec:number=0
  //listar
  dataSource: MatTableDataSource<ClassNutricionista> = new MatTableDataSource();
  displayedColumns: string[] = ["id", "Nombre", "Apellidos", "DNI", "Telefono", "Sexo", "Descripcion", "Disponibilidad", "Accion01","Accion02"];

  constructor(private aS: NutricionistaService, private dialoN:MatDialog) {

  }
  ngOnInit(): void {
    this.aS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    })

    this.aS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })

    //para confirmar
    this.aS.getConfirmDelete().subscribe(data=>{
      data==true ? this.eliminar(this.idSelec):false;
    })

  }
  //del filtro
  filtrar(z:any){
    this.dataSource.filter=z.target.value.trim();
  }
  //eliminar
  confirm(id:number){
    this.idSelec=id;
    this.dialoN.open(NutricionistaDialogoComponent)
  }

  eliminar(id:number){
    this.aS.delete(id).subscribe(()=>{
      this.aS.list().subscribe(data=>{
        this.aS.setList(data);
      })
    })
  }

}
