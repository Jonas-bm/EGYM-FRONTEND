import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productoalumno',
  templateUrl: './productoalumno.component.html',
  styleUrls: ['./productoalumno.component.css']
})
export class ProductoalumnoComponent implements OnInit{
  constructor(public route:ActivatedRoute){};
  ngOnInit(): void {

  }

}
