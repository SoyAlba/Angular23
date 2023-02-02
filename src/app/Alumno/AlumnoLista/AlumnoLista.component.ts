import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-AlumnoLista',
  templateUrl: './AlumnoLista.component.html',
  styleUrls: ['./AlumnoLista.component.css']
})
export class AlumnoListaComponent implements OnInit {
  selecion:string =;
alumnos: any[]=[
  {nombre:'perico',apellidos:'delgado',direrccion:'segobia city',fnac:'12/2/2000',sexo:'hombre'},
  {nombre:'antonio',apellidos:'perez',direrccion:'murcia city',fnac:'2/7/2007',sexo:'hombre'},
  {nombre:'pedro',apellidos:'de lafuente',direrccion:'valencia city',fnac:'6/12/1973',sexo:'hombre'},
  {nombre:'maria',apellidos:'sanchez',direrccion:'zaragoza city',fnac:'7/2/2010',sexo:'mujer'}
]
cabiarSelecion(opcionElegida:string):void{
  this.selecion=opcionElegida;
}
  constructor() { }

  ngOnInit() {
  }
  getTodos():number{
    return this.alumnos.length;
  }
  getHombres():number{
    return this.alumnos.filter(a=> a.sexo=="hombre").length
  }
  getMujeres():number{
    return this.alumnos.filter(a=> a.sexo=="mujer").length
  }
}
