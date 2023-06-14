import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rutinaasignada',
  templateUrl: './rutinaasignada.component.html',
  styleUrls: ['./rutinaasignada.component.css']
})
export class RutinaasignadaComponent implements OnInit{
  constructor(public route:ActivatedRoute){};
  ngOnInit(): void {

  }

}
