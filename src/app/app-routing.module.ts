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
import { SuscripcionComponent } from './component/suscripcion/suscripcion.component';
import { SuscripcionCreaeditaComponent } from './component/suscripcion/suscripcion-creaedita/suscripcion-creaedita.component';

import { VideorutinarioComponent } from './component/videorutinario/videorutinario.component';
import { VideorutinarioCreaeditaComponent } from './component/videorutinario/videorutinario-creaedita/videorutinario-creaedita.component';

import { DetalleventaComponent } from './component/detalleventa/detalleventa.component';
import { DetalleventaCreaeditaComponent } from './component/detalleventa/detalleventa-creaedita/detalleventa-creaedita.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { ReportesComponent } from './component/reportes/reportes.component';
import { Reporte01Component } from './component/reportes/reporte01/reporte01.component';

import { ChatGPTComponent } from './component/chat-gpt/chat-gpt.component';
import { RolComponent } from './component/rol/rol.component';
import { RolCreaeditaComponent } from './component/rol/rol-creaedita/rol-creaedita.component';
import { ProductoalumnoComponent } from './component/productoalumno/productoalumno.component';
import { ProductocompradoporalumnoComponent } from './component/productoalumno/productocompradoporalumno/productocompradoporalumno.component';
import { RdocumentoComponent } from './component/rdocumento/rdocumento.component';
import { DocumentodetalleComponent } from './component/rdocumento/documentodetalle/documentodetalle.component';
import { RdisponibleComponent } from './component/rdisponible/rdisponible.component';
import { EntrenadordisponibleComponent } from './component/rdisponible/entrenadordisponible/entrenadordisponible.component';


import { ReportebaComponent } from './component/reportes/reporteba/reporteba.component';




const routes: Routes = [
  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
  {
    path:'home',component:HomeComponent,
  },
{
  path:'login',component:LoginComponent,
},

    {
      path:'egym', component:SidenavComponent,children:[
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

              {path: 'videosRutinarios', component: VideorutinarioComponent, children: [
                { path: 'nuevo', component: VideorutinarioCreaeditaComponent},
              ]
            },

              {path: 'detalleVentas', component: DetalleventaComponent, children: [
                { path: 'nuevo', component: DetalleventaCreaeditaComponent},
              ]
              },

              {
                path:'suscripcion', component:SuscripcionComponent,children:[
                  {path:'nuevo',component:SuscripcionCreaeditaComponent},
                ]
              },
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
                path:'reportes',component:ReportesComponent,children:[

                { path: 'cita-count-entrenador', component: Reporte01Component },
                { path: 'cita-count-nutricionista',component:ReportebaComponent}
              ]
              },
              {
                path:'chat',component:ChatGPTComponent
              },
              {
                path: 'roles',component: RolComponent,children: [
                   {
                    path: 'new', component: RolCreaeditaComponent,
                   },
                   {
                    path: 'edicion/:id', component: RolCreaeditaComponent,
                  },
                    ]
                  },
                  {
                    path:'productosporalumno',component:ProductoalumnoComponent,children:[

                    { path: 'product-count-alumn', component: ProductocompradoporalumnoComponent },
                  ]
                  },
                  {
                    path:'documentodetalleventa',component:RdocumentoComponent,children:[

                    { path: 'detalle-documento-venta', component: DocumentodetalleComponent },
                  ]
                  },
                  {
                    path:'entrenadoresdisponibles',component:RdisponibleComponent,children:[

                    { path: 'disponibles', component: EntrenadordisponibleComponent },
                  ]
                  },
      ]
    }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
