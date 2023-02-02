import { Pipe, PipeTransform } from '@angular/core';
import { retry } from 'rxjs';

@Pipe({
  name: 'alumnoTitulo'
})
export class AlumnoTituloPipe implements PipeTransform {

  transform(value: any, sexo: string): string {
    if(sexo=='hombre')
      return 'Sr.'
    else
      return 'Sra.';
  }

}
