import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Calificacion } from './model/calificacion';
import { CalificacionComponent } from './component/calificacion/calificacion.component';
import { CalificacionCreaeditaComponent } from './component/calificacion/calificacion-creaedita/calificacion-creaedita.component';

const routes: Routes = [
  {
    path: 'calificaciones',
    component: CalificacionComponent,
    children: [
      {
        path: 'new',
        component: CalificacionCreaeditaComponent,
      },
      {
        path: 'edicion/:id',
        component: CalificacionCreaeditaComponent,
      },
      

    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
