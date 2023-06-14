import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cnutricionista',
  templateUrl: './cnutricionista.component.html',
  styleUrls: ['./cnutricionista.component.css']
})
export class CnutricionistaComponent implements OnInit {

  constructor(public route:ActivatedRoute)
  {

  }
  
  ngOnInit(): void {

  }

}
