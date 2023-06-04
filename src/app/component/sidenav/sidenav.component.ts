import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  showAlumnos = false; // Variable para controlar la visualización de la lista de alumnos
  opened=false
  constructor(private observer: BreakpointObserver, private router: Router) {}

  ngOnInit(): void {

  }
  mostrarAlumnos(): void {
    this.showAlumnos = true;
    this.router.navigate(['alumnos']); // Navegar a la ruta '/alumnos'
  }
  cerrarSidenav(): void {
    this.opened = false;
  }
}
