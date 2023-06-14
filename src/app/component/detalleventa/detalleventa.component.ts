import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalleventa',
  templateUrl: './detalleventa.component.html',
  styleUrls: ['./detalleventa.component.css']
})
export class DetalleventaComponent implements OnInit {

  constructor(public route:ActivatedRoute){};

  ngOnInit(): void {

  }

}
