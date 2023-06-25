import { Component,OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Role } from 'src/app/model/role';
import { LoginService } from 'src/app/service/login.service';
import { RolService } from 'src/app/service/rol.service';


@Component({
  selector: 'app-rol-listar',
  templateUrl: './rol-listar.component.html',
  styleUrls: ['./rol-listar.component.css']
})
export class RolListarComponent implements OnInit {
  role:string="";//
  dataSource: MatTableDataSource<Role> = new MatTableDataSource();
  idMayor: number = 0
  totalItems: number = 0;
  displayedColumns:String[]=['codigo','rol','usuario'] //agregamos el componente (mediante consola)
  constructor(private rs: RolService, private dialog:MatDialog,private ls:LoginService) {}
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  ngOnInit(): void {
    this.role=this.ls.showRole();//
    this.rs.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    });

    this.rs.getList().subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    });
  }

}
