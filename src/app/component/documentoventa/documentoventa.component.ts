import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-documentoventa',
  templateUrl: './documentoventa.component.html',
  styleUrls: ['./documentoventa.component.css']
})
export class DocumentoventaComponent implements OnInit{

  constructor(public route:ActivatedRoute ){}
  ngOnInit(): void {

  }

}
