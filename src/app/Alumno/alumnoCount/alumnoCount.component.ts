import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alumnoCount',
  templateUrl: './alumnoCount.component.html',
  styleUrls: ['./alumnoCount.component.css']
})
export class AlumnoCountComponent  {

  @Input()
  todos:number=0;
  @Input()
  hombres:number=0;
  @Input()
  mujeres:number=0;

  constructor() { }

}
