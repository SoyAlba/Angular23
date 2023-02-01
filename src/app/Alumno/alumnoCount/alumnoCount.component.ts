import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnoCount',
  templateUrl: './alumnoCount.component.html',
  styleUrls: ['./alumnoCount.component.css']
})
export class AlumnoCountComponent implements OnInit {
  todos:number=0;
  hombres:number=0;
  mujeres:number=0;

  constructor() { }

  ngOnInit() {
  }

}
