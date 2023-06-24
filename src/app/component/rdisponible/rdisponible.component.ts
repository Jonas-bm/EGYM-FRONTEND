import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rdisponible',
  templateUrl: './rdisponible.component.html',
  styleUrls: ['./rdisponible.component.css']
})
export class RdisponibleComponent implements OnInit{

  constructor(public route:ActivatedRoute){};
ngOnInit(): void {

}

}
