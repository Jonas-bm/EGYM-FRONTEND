import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-centrenador',
  templateUrl: './centrenador.component.html',
  styleUrls: ['./centrenador.component.css']
})
export class CentrenadorComponent implements OnInit{

  constructor(public route:ActivatedRoute)
  {

  }
  ngOnInit(): void {
    
  }

}
