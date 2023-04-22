import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NutricionistaComponent } from './component/nutricionista/nutricionista.component';
import { NutricionistaCreaeditaComponent } from './component/nutricionista/nutricionista-creaedita/nutricionista-creaedita.component';
const routes: Routes = [
  {
    path:'nutricionista', component:NutricionistaComponent,children:[
      {
        path:'new',component:NutricionistaCreaeditaComponent
      },
      {
        path:'edicion/:id',component:NutricionistaCreaeditaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
