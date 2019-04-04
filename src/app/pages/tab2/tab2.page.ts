import { Component } from '@angular/core';
import { ZonasService } from 'src/app/services/zonas.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  //Inicializamos el servicio zonasServices de tipo ZonasService
  constructor(public zonasServices: ZonasService){
    
  }
}
