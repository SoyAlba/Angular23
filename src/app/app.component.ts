import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
            <div>
              <app-Alumno></app-Alumno>
              <app-AlumnoLista></app-AlumnoLista>
            </div>` ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
