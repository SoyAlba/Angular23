import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoComponent } from './Alumno/Alumno.component';
import { AlumnoListaComponent } from './Alumno/AlumnoLista/AlumnoLista.component';
import { AlumnoTituloPipe } from './Alumno/AlumnoLista/alumnoTitulo.pipe';
import { AlumnoCountComponent } from './Alumno/alumnoCount/alumnoCount.component';
@NgModule({
  declarations: [
    AppComponent,
      AlumnoComponent,
      AlumnoListaComponent,
      AlumnoTituloPipe,
      AlumnoCountComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
