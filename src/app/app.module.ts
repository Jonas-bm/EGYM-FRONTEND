import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AlumnoComponent } from './component/alumno/alumno.component';
import { AlumnoListarComponent } from './component/alumno/alumno-listar/alumno-listar.component';
import { EntrenadorListarComponent } from './component/entrenador/entrenador-listar/entrenador-listar.component';
import { EntrenadorComponent } from './component/entrenador/entrenador.component';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { AlumnoCreaeditaComponent } from './component/alumno/alumno-creaedita/alumno-creaedita.component';
import{MatToolbarModule} from '@angular/material/toolbar';
import { NutricionistaComponent } from './component/nutricionista/nutricionista.component';
import { NutricionistaListarComponent } from './component/nutricionista/nutricionista-listar/nutricionista-listar.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {MatInputModule,} from '@angular/material/input';
import{MatDatepickerModule} from '@angular/material/datepicker';
import{MatNativeDateModule}from '@angular/material/core';
import{MatButtonModule} from '@angular/material/button';
import { NutricionistaCreaeditaComponent } from './component/nutricionista/nutricionista-creaedita/nutricionista-creaedita.component';
import { AlumnoDialogoComponent } from './component/alumno/alumno-listar/alumno-dialogo/alumno-dialogo.component';
//login
import {MatSnackBarModule} from '@angular/material/snack-bar';
//cargando
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

//para delete
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './component/login/login.component';

import { EntrenadorCreaeditaComponent } from './component/entrenador/entrenador-creaedita/entrenador-creaedita.component';
import { EntrenadorDialogoComponent } from './component/entrenador/entrenador-listar/entrenador-dialogo/entrenador-dialogo.component'
import { ProductComponent } from './component/product/product.component';
import { ProductListarComponent } from './component/product/product-listar/product-listar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import{ProductCreaeditaComponent} from './component/product/product-creaedita/product-creaedita.component'
import { NutricionistaDialogoComponent } from './component/nutricionista/nutricionista-listar/nutricionista-dialogo/nutricionista-dialogo.component';
import { ProductDialogoComponent } from './component/product/product-listar/product-dialogo/product-dialogo.component';
import { HomeComponent } from './component/home/home.component'
import { MatSelectModule } from '@angular/material/select';

import { CalificacionComponent } from './component/calificacion/calificacion.component';
import { CalificacionListarComponent } from './component/calificacion/calificacion-listar/calificacion-listar.component';
import { CalificacionCreaeditaComponent } from './component/calificacion/calificacion-creaedita/calificacion-creaedita.component';
import { CalificacionDialogoComponent } from './component/calificacion/calificacion-listar/calificacion-dialogo/calificacion-dialogo.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';

import { MatDividerModule } from '@angular/material/divider';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CentrenadorComponent } from './component/centrenador/centrenador.component';
import { CentrenadorCreaeditaComponent } from './component/centrenador/centrenador-creaedita/centrenador-creaedita.component';
import { CentrenadorListarComponent } from './component/centrenador/centrenador-listar/centrenador-listar.component';
import { CnutricionistaComponent } from './component/cnutricionista/cnutricionista.component';
import { CnutricionistaListarComponent } from './component/cnutricionista/cnutricionista-listar/cnutricionista-listar.component';
import { CnutricionistaCreaeditaComponent } from './component/cnutricionista/cnutricionista-creaedita/cnutricionista-creaedita.component';
import { ResetaasignadaComponent } from './component/resetaasignada/resetaasignada.component';
import { ResetaasignadaListarComponent } from './component/resetaasignada/resetaasignada-listar/resetaasignada-listar.component';
import { ResetaasignadaCreaeditaComponent } from './component/resetaasignada/resetaasignada-creaedita/resetaasignada-creaedita.component';
import { DocumentoventaComponent } from './component/documentoventa/documentoventa.component';
import { DocumentoventaListarComponent } from './component/documentoventa/documentoventa-listar/documentoventa-listar.component';
import { DocumentoventaCreaeditaComponent } from './component/documentoventa/documentoventa-creaedita/documentoventa-creaedita.component';
import { RutinaasignadaComponent } from './component/rutinaasignada/rutinaasignada.component';
import { RutinaasignadaListarComponent } from './component/rutinaasignada/rutinaasignada-listar/rutinaasignada-listar.component';
import { RutinaasignadaCreaeditaComponent } from './component/rutinaasignada/rutinaasignada-creaedita/rutinaasignada-creaedita.component';

import { VideorutinarioComponent } from './component/videorutinario/videorutinario.component';
import { VideorutinarioListarComponent } from './component/videorutinario/videorutinario-listar/videorutinario-listar.component';
import { VideorutinarioCreaeditaComponent } from './component/videorutinario/videorutinario-creaedita/videorutinario-creaedita.component';
import { DetalleventaComponent } from './component/detalleventa/detalleventa.component';
import { DetalleventaListarComponent } from './component/detalleventa/detalleventa-listar/detalleventa-listar.component';
import { DetalleventaCreaeditaComponent } from './component/detalleventa/detalleventa-creaedita/detalleventa-creaedita.component';

import { SuscripcionComponent } from './component/suscripcion/suscripcion.component';
import { SuscripcionListarComponent } from './component/suscripcion/suscripcion-listar/suscripcion-listar.component';
import { SuscripcionCreaeditaComponent } from './component/suscripcion/suscripcion-creaedita/suscripcion-creaedita.component';
import { MatCardModule } from '@angular/material/card';
import { ReportesComponent } from './component/reportes/reportes.component';
import { Reporte01Component } from './component/reportes/reporte01/reporte01.component';

import { UsuarioComponent } from './component/usuario/usuario.component';
import { RolComponent } from './component/rol/rol.component';
import { RolListarComponent } from './component/rol/rol-listar/rol-listar.component';
import { RolCreaeditaComponent } from './component/rol/rol-creaedita/rol-creaedita.component';
import { ChatGPTComponent } from './component/chat-gpt/chat-gpt.component';
import { UsuarioListarComponent } from './component/usuario/usuario-listar/usuario-listar.component';
import { UsuarioCreaeditaComponent } from './component/usuario/usuario-creaedita/usuario-creaedita.component';
import { ProductoalumnoComponent } from './component/productoalumno/productoalumno.component';
import { ProductocompradoporalumnoComponent } from './component/productoalumno/productocompradoporalumno/productocompradoporalumno.component';
import { RdocumentoComponent } from './component/rdocumento/rdocumento.component';
import { DocumentodetalleComponent } from './component/rdocumento/documentodetalle/documentodetalle.component';
import { RdisponibleComponent } from './component/rdisponible/rdisponible.component';
import { EntrenadordisponibleComponent } from './component/rdisponible/entrenadordisponible/entrenadordisponible.component';

import { ReportebaComponent } from './component/reportes/reporteba/reporteba.component';
import { Reporteba2Component } from './component/reportes/reporteba2/reporteba2.component';




@NgModule({
  declarations: [
    ProductCreaeditaComponent,
    EntrenadorCreaeditaComponent,
    AppComponent,
    AlumnoComponent,
    AlumnoListarComponent,
    EntrenadorListarComponent,
    EntrenadorComponent,
    AlumnoCreaeditaComponent,
    NutricionistaComponent,
    NutricionistaListarComponent,
    NutricionistaCreaeditaComponent,
    AlumnoDialogoComponent,
    LoginComponent,
    EntrenadorDialogoComponent,
    ProductComponent,
    ProductCreaeditaComponent,
    ProductListarComponent,
    NutricionistaDialogoComponent,
    ProductDialogoComponent,
    HomeComponent,
    CalificacionComponent,
    CalificacionListarComponent,
    CalificacionCreaeditaComponent,
    CalificacionDialogoComponent,
    SidenavComponent,
    CentrenadorComponent,
    CentrenadorCreaeditaComponent,
    CentrenadorListarComponent,
    CnutricionistaComponent,
    CnutricionistaListarComponent,
    CnutricionistaCreaeditaComponent,
    ResetaasignadaComponent,
    ResetaasignadaCreaeditaComponent,
    ResetaasignadaListarComponent,
    DocumentoventaComponent,
    DocumentoventaListarComponent,
    DocumentoventaCreaeditaComponent,
    RutinaasignadaComponent,
    RutinaasignadaListarComponent,
    RutinaasignadaCreaeditaComponent,
    VideorutinarioComponent,
    VideorutinarioListarComponent,
    VideorutinarioCreaeditaComponent,
    DetalleventaComponent,
    DetalleventaListarComponent,
    DetalleventaCreaeditaComponent,


    SuscripcionComponent,
    SuscripcionListarComponent,
    SuscripcionCreaeditaComponent,
    ReportesComponent,
    Reporte01Component,
    UsuarioComponent,
    RolComponent,
    RolListarComponent,
    RolCreaeditaComponent,
    ChatGPTComponent,
    UsuarioListarComponent,
    UsuarioCreaeditaComponent,
    ProductoalumnoComponent,
    ProductocompradoporalumnoComponent,
    RdocumentoComponent,
    DocumentodetalleComponent,
    RdisponibleComponent,
    EntrenadordisponibleComponent,
    ReportebaComponent,
    Reporteba2Component,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    //login
    MatSnackBarModule,
    //para delete
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatDividerModule,
    MatPaginatorModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
