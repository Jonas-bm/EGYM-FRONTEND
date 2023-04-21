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
import { NutricionistaComponent } from './component/nutricionista/nutricionista.component';
import { NutricionistaListarComponent } from './component/nutricionista/nutricionista-listar/nutricionista-listar.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {MatInputModule,} from '@angular/material/input';
import{MatDatepickerModule} from '@angular/material/datepicker';
import{MatNativeDateModule}from '@angular/material/core';
import{MatButtonModule} from '@angular/material/button';
import { NutricionistaCreaeditaComponent } from './component/nutricionista/nutricionista-creaedita/nutricionista-creaedita.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    AlumnoListarComponent,
    EntrenadorListarComponent,
    EntrenadorComponent,
    NutricionistaComponent,
    NutricionistaListarComponent,
    NutricionistaCreaeditaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
