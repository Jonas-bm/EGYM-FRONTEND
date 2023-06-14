import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoCrud';
  ruta="";
  constructor(public route:ActivatedRoute){}

  ngOnInit() {
    const segments = this.route.snapshot.url;
     //this.ruta = segments[segments.length - 1];
     console.log(segments);
  }
}
