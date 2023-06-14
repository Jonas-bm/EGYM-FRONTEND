import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-videorutinario',
  templateUrl: './videorutinario.component.html',
  styleUrls: ['./videorutinario.component.css']
})
export class VideorutinarioComponent implements OnInit {
  constructor(public route:ActivatedRoute){}

  ngOnInit(): void {

  }

}
