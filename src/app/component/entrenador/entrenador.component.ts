import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entrenador',
  templateUrl: './entrenador.component.html',
  styleUrls: ['./entrenador.component.css']
})
export class EntrenadorComponent implements OnInit{
  constructor(public route: ActivatedRoute) {}
  ngOnInit(): void {

  }

}
