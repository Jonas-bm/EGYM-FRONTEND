import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Alumno } from './model/alumno';
import { AlumnoComponent } from './component/alumno/alumno.component';
import { AlumnoCreaeditaComponent } from './component/alumno/alumno-creaedita/alumno-creaedita.component';

const routes: Routes = [
  {
    path:'alumnos',component:AlumnoComponent,children:[
      {
        path:'new',component:AlumnoCreaeditaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
