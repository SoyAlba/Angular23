import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
            <div>
              <button class={{aplicarClases}}>boton 1</button>
              <button [class]='aplicarClases'>boton 1</button>
              <br>
              <br>
              <button class='color italica negrita' [class.negrita]='false'>boton 2</button>
              <br>
              <br>
              <button [ngClass]='addClases()'>boton 3</button>
            </div>` ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  aplicarClases:string="italica negrita"
  title = 'Angular23';
  encabezado='Datos Alumno';
  nombre= 'Preico';
  apellido='Delgado'
  imagen ='https://salesianosrioja.com/wp-content/uploads/2016/03/Logo-Salesianos_vertical.png'
  aplicarNegrita: boolean=true
  aplicarColor:boolean=true

  addClases(){
    let clases={
      negrita:this.aplicarNegrita,
      color:this.aplicarColor
    }
    return clases;
  }
  getNombreCompleto():string{
    return this.nombre +' '+ this.apellido;
  }
}
