import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  title:string="";
  role:string="";
  showAlumnos = false; // Variable para controlar la visualización de la lista de alumnos
  opened=false
  constructor(private observer: BreakpointObserver, private router: Router,private loginService: LoginService) {}

  ngOnInit(): void {

  }
  cerrar() {
    sessionStorage.clear();
  }
  mostrarAlumnos(): void {
    this.showAlumnos = true;
    this.router.navigate(['alumnos']); // Navegar a la ruta '/alumnos'
  }
  cerrarSidenav(): void {
    this.opened = false;
  }
  verificar() {
    this.role=this.loginService.showRole();
    return this.loginService.verificar();
  }
  validarRol(){
    if(this.role=='ADMIN' || this.role=='ALUMNO'|| this.role=='NUTRICIONISTA'|| this.role=='ENTRENADOR'){
      return true;
    }else{
      return false;
    }
  }
}
