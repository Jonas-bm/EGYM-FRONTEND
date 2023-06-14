import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resetaasignada',
  templateUrl: './resetaasignada.component.html',
  styleUrls: ['./resetaasignada.component.css']
})
export class ResetaasignadaComponent implements OnInit{

  constructor(public route:ActivatedRoute){}
  ngOnInit(): void {

  }
}
