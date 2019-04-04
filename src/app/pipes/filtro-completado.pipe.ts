import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/list.model';

//Creamos un pipe con nombre filtroCompletado, este pipe es el que va a verificar cuando una zona de parqueo
//Está totalmente ocupada, verificando con la variable completada, esta variable se está obteniendo de Lista
//Además se utiliza pure para que cuando se va a modificar una lista, el botón cuando se modifique desaparezca
@Pipe({
  name: 'filtroCompletado',
  pure: false
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform(listas: Lista[], completada: boolean = true): Lista[] {

    return listas.filter(lista=> lista.terminada === completada);
    
  }

}
