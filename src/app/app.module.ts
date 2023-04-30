import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AlumnoComponent } from './component/alumno/alumno.component';
import { AlumnoListarComponent } from './component/alumno/alumno-listar/alumno-listar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { CalificacionComponent } from './component/calificacion/calificacion.component';
import { CalificacionListarComponent } from './component/calificacion/calificacion-listar/calificacion-listar.component';
import { CalificacionCreaeditaComponent } from './component/calificacion/calificacion-creaedita/calificacion-creaedita.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{MatInputModule} from '@angular/material/input';
import { CalificacionDialogoComponent } from './component/calificacion/calificacion-dialogo/calificacion-dialogo.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog'
import { MatSelectModule } from '@angular/material/select';






@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    AlumnoListarComponent,
    CalificacionComponent,
    CalificacionListarComponent,
    CalificacionCreaeditaComponent,
    CalificacionDialogoComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
