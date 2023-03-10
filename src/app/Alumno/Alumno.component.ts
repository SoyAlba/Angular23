import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Alumno',
  templateUrl: './Alumno.component.html',
  styleUrls: ['./Alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  columnas:number=2;
  nombre: string='Perico';
  apellido:string='De Los Palotes';
  direccion:string='Calle Maria Auxiliadora, 50, Zaragoza';
  edad:number=23;
  visible:boolean=false;
  alumnos:Array<AlumnoComponent>=[

  ]

  alternarVisibles(){
    this.visible=!this.visible;
  }
  constructor() { }

  ngOnInit() {
  }

}
