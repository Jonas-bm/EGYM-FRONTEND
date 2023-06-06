import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nutricionista',
  templateUrl: './nutricionista.component.html',
  styleUrls: ['./nutricionista.component.css']
})
export class NutricionistaComponent implements OnInit {
  constructor(public route: ActivatedRoute){}
  ngOnInit(): void {

  }

}
