import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visualizaciones',
  templateUrl: './visualizaciones.component.html',
  styleUrls: ['./visualizaciones.component.css']
})
export class VisualizacionesComponent implements OnInit {
  constructor (public route: ActivatedRoute) {}

  ngOnInit(): void {

  }
}
