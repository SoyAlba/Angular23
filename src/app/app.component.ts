import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
            <div>
              <img src='{{imagen}}' width="150px">
              <h1>{{encabezado}}</h1>
              <app-Alumno></app-Alumno>
            </div>` ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular23';
  encabezado='Datos Alumno';
  nombre= 'Preico';
  apellido='Delgado'
  imagen ='https://salesianosrioja.com/wp-content/uploads/2016/03/Logo-Salesianos_vertical.png'

  getNombreCompleto():string{
    return this.nombre +' '+ this.apellido;
  }
}
