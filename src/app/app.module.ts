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
import { MatSelectModule } from '@angular/material/select';
import { AlumnoDialogoComponent } from './component/alumno/alumno-listar/alumno-dialogo/alumno-dialogo.component';
//login
import {MatSnackBarModule} from '@angular/material/snack-bar';
//cargando
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

//para delete
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';

import { EntrenadorCreaeditaComponent } from './component/entrenador/entrenador-creaedita/entrenador-creaedita.component';
import { EntrenadorDialogoComponent } from './component/entrenador/entrenador-listar/entrenador-dialogo/entrenador-dialogo.component'

@NgModule({
  declarations: [
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
    NavbarComponent,
    EntrenadorCreaeditaComponent,
    EntrenadorDialogoComponent,

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
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
