import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rdocumento',
  templateUrl: './rdocumento.component.html',
  styleUrls: ['./rdocumento.component.css']
})
export class RdocumentoComponent implements OnInit{
  constructor(public route:ActivatedRoute){};
  ngOnInit(): void {

  }

}
