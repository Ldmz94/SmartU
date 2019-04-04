import { NgModule } from '@angular/core';
import { FiltroCompletadoPipe } from './filtro-completado.pipe';
//Importamos la clase FiltroCompletadoPipe en el modulo de los pipes y después la exportamos para poder usarla
//en el HTML
@NgModule({
  declarations: [FiltroCompletadoPipe],
  exports: [FiltroCompletadoPipe]
})
export class PipesModule { }
