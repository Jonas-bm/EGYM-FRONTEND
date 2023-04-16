import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NutricionistaComponent } from './componentN/nutricionista/nutricionista.component';
import { ListarNutricionistaComponent } from './componentN/nutricionista/listar-nutricionista/listar-nutricionista.component';

const routes: Routes = [
  {
    path:'nutricionista',component:NutricionistaComponent,children:[
      {
        path: 'nuevo',component:ListarNutricionistaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
