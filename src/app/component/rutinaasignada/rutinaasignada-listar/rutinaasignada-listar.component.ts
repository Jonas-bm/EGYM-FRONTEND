import { Component,OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RutinaAsignada } from 'src/app/model/rutinaasignada';
import { LoginService } from 'src/app/service/login.service';
import { RutinaasignadaService } from 'src/app/service/rutinaasignada.service';

@Component({
  selector: 'app-rutinaasignada-listar',
  templateUrl: './rutinaasignada-listar.component.html',
  styleUrls: ['./rutinaasignada-listar.component.css']
})
export class RutinaasignadaListarComponent implements OnInit {
  role:string="";//
  shouldRun = false; /////////NAV/////////
  opened = false;
  events = ['close', 'open'];
  totalItems:number=0
  lista:RutinaAsignada[]=[];
  dataSource:MatTableDataSource<RutinaAsignada>=new MatTableDataSource();
  displayedColumns:string[]=['codigo','nombre','descripcion','repeticiones','tiempo','citaEntrenador']

  constructor(private raS:RutinaasignadaService,private ls:LoginService){}

  ngOnInit(): void {
    this.role=this.ls.showRole();//
    this.raS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.raS.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

}
