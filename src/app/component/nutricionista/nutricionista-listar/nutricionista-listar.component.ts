import { Component,OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ClassNutricionista } from 'src/app/model/nutricionista';
import { NutricionistaService } from 'src/app/service/nutricionista.service';

@Component({
  selector: 'app-nutricionista-listar',
  templateUrl: './nutricionista-listar.component.html',
  styleUrls: ['./nutricionista-listar.component.css']
})
export class NutricionistaListarComponent implements OnInit {

  dataSource:MatTableDataSource<ClassNutricionista>=new MatTableDataSource();
  displayedColumns:string[] = ["id","Nombre","Apellidos","DNI","Telefono","Sexo","Descripcion","Disponibilidad"];

  constructor(private aS:NutricionistaService){

  }
  ngOnInit(): void {
    this.aS.list().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data);
    });
}

}
