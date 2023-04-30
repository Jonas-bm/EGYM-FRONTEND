import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoComponent } from './component/alumno/alumno.component';
import { AlumnoCreaeditaComponent } from './component/alumno/alumno-creaedita/alumno-creaedita.component';
import { NutricionistaComponent } from './component/nutricionista/nutricionista.component';
import { NutricionistaCreaeditaComponent } from './component/nutricionista/nutricionista-creaedita/nutricionista-creaedita.component';
import { LoginComponent } from './component/login/login.component';
import { EntrenadorComponent } from './component/entrenador/entrenador.component';
import { EntrenadorCreaeditaComponent } from './component/entrenador/entrenador-creaedita/entrenador-creaedita.component';
import { ProductComponent } from './component/product/product.component';
import { ProductCreaeditaComponent } from './component/product/product-creaedita/product-creaedita.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {
    path:'alumnos',component:AlumnoComponent,children:[
      {
        path:'new',component:AlumnoCreaeditaComponent
      },
      {
        path:'edicion/:id',component:AlumnoCreaeditaComponent
      }
    ]},
  {
    path:'nutricionista', component:NutricionistaComponent,children:[
      {
        path:'new',component:NutricionistaCreaeditaComponent
      },
      {
        path:'edicion/:id',component:NutricionistaCreaeditaComponent
      }
    ]
  },
  {
    path: 'entrenadores',component: EntrenadorComponent, children:[
      {
        path:'new', component: EntrenadorCreaeditaComponent
      },
      {
      path:'edicion/:id', component: EntrenadorCreaeditaComponent
      }
    ]
  },
  {
    path:'products', component: ProductComponent, children: [
      {
        path: 'new', component: ProductCreaeditaComponent
      },
      {
        path: 'edicion/:id', component: ProductCreaeditaComponent
      }
    ]
  },
  {
    path:'home',component:HomeComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
