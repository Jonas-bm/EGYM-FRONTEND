import { Component,OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Entrenador } from 'src/app/model/entrenador';
import { EntrenadorService } from 'src/app/service/entrenador.service';

@Component({
  selector: 'app-entrenador-listar',
  templateUrl: './entrenador-listar.component.html',
  styleUrls: ['./entrenador-listar.component.css']
})
export class EntrenadorListarComponent implements OnInit{

  dataSource: MatTableDataSource<Entrenador>= new MatTableDataSource();
  displayedColumns: string [] = ['id','nombre','apellidoPaterno','apellidoMaterno','dni','telefono','correo','habilidades','experiencia','educacion','estado']

constructor (private aS:EntrenadorService){

}
ngOnInit(): void {
this.aS.list().subscribe(data=>{
  this.dataSource = new MatTableDataSource(data);
});
//despues
this.aS.getList().subscribe(data=>{
  this.dataSource=new MatTableDataSource(data);
})
}
}
