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
import { Calificacion } from './model/calificacion';
import { CalificacionComponent } from './component/calificacion/calificacion.component';
import { CalificacionCreaeditaComponent } from './component/calificacion/calificacion-creaedita/calificacion-creaedita.component';
import { CentrenadorComponent } from './component/centrenador/centrenador.component';
import { CentrenadorCreaeditaComponent } from './component/centrenador/centrenador-creaedita/centrenador-creaedita.component';
import { CnutricionistaComponent } from './component/cnutricionista/cnutricionista.component';
import { CnutricionistaCreaeditaComponent } from './component/cnutricionista/cnutricionista-creaedita/cnutricionista-creaedita.component';
import { ResetaasignadaComponent } from './component/resetaasignada/resetaasignada.component';
import { ResetaasignadaCreaeditaComponent } from './component/resetaasignada/resetaasignada-creaedita/resetaasignada-creaedita.component';
import { DocumentoventaComponent } from './component/documentoventa/documentoventa.component';
import { DocumentoventaCreaeditaComponent } from './component/documentoventa/documentoventa-creaedita/documentoventa-creaedita.component';
import { RutinaasignadaComponent } from './component/rutinaasignada/rutinaasignada.component';
import { RutinaasignadaCreaeditaComponent } from './component/rutinaasignada/rutinaasignada-creaedita/rutinaasignada-creaedita.component';
import { VisualizacionesComponent } from './component/visualizaciones/visualizaciones.component';
import { VisualizacionesCreaeditaComponent } from './component/visualizaciones/visualizaciones-creaedita/visualizaciones-creaedita.component';


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
{
  path:'login',component:LoginComponent,
},
 {
  path: 'calificaciones',component: CalificacionComponent,children: [
     {
      path: 'new', component: CalificacionCreaeditaComponent,
     },
     {
      path: 'edicion/:id', component: CalificacionCreaeditaComponent,
    },
      ]
    },
    {path: 'citaEntrenadores', component: CentrenadorComponent, children: [
      { path: 'nuevo', component: CentrenadorCreaeditaComponent},
    ]
    },
    {path: 'citaNutricionistas', component: CnutricionistaComponent, children: [
      { path: 'nuevo', component: CnutricionistaCreaeditaComponent},
    ]
    },
    {path: 'recetasAsignadas', component: ResetaasignadaComponent, children: [
      { path: 'nuevo', component: ResetaasignadaCreaeditaComponent},
    ]
    },
    {path: 'documentoVentas', component: DocumentoventaComponent, children: [
      { path: 'nuevo', component: DocumentoventaCreaeditaComponent},
    ]
    },
    {path: 'rutinasAsignadas', component: RutinaasignadaComponent, children: [
      { path: 'nuevo', component: RutinaasignadaCreaeditaComponent},
    ]
    },
    {path: 'visualizaciones', component: VisualizacionesComponent, children: [
      { path: 'nuevo', component: VisualizacionesCreaeditaComponent},
    ]
    },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
