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
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AlumnoCreaeditaComponent } from './component/alumno/alumno-creaedita/alumno-creaedita.component';
import{MatInputModule} from '@angular/material/input'
import{MatDatepickerModule} from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { DateFilterFn } from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    AlumnoListarComponent,
    EntrenadorListarComponent,
    EntrenadorComponent,
    AlumnoCreaeditaComponent,

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
