import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrenadorComponent } from './component/entrenador/entrenador.component';
import { EntrenadorCreaeditaComponent } from './component/entrenador/entrenador-creaedita/entrenador-creaedita.component';

const routes: Routes = [
{
  path: 'entrenadores',component:EntrenadorComponent, children:[
    {
      path:'new', component:EntrenadorCreaeditaComponent
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
