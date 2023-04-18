import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AlumnoComponent } from './component/alumno/alumno.component';
import { AlumnoListarComponent } from './component/alumno/alumno-listar/alumno-listar.component';
import { EntrenadorListarComponent } from './component/entrenador/entrenador-listar/entrenador-listar.component';
import { EntrenadorComponent } from './component/entrenador/entrenador.component'
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    AlumnoListarComponent,
    EntrenadorListarComponent,
    EntrenadorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
