import { Component, OnInit } from '@angular/core';
import { ZonasService } from 'src/app/services/zonas.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from 'src/app/models/list.model';
import { slotsItem } from 'src/app/models/slots-list.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
//Creamos una lista de tipo Lista, y un nombreItem de tipo string, en el constructor creamos un zonaService
//de tipo ZonasService, y un route de tipo ActivatedRoute. Creamos una constante llamada listaId, que va a
//recibir el id de la lista. Y la variable lista va a obtener el id por medio del método obtener lista
export class AgregarPage implements OnInit {
  lista: Lista
  nombreItem: '';
  constructor(private zonaService: ZonasService,
              private route: ActivatedRoute) {
      const listaId = this.route.snapshot.paramMap.get('listaId')
      //console.log(listaId)
      this.lista = this.zonaService.obtenerLista(listaId)
      console.log(this.lista)
   }

  ngOnInit() {
  }
  //El método agregarItems permitirá agregar items al parqueadero, lo que se agregue quedara guardado en 
  //guardarStorage()
  agregarItems(){
    if (this.nombreItem.length === 0){
      return;
    }

    const nuevoItem = new slotsItem(this.nombreItem);
    this.lista.items.push(nuevoItem);

    this.nombreItem = ''

    this.zonaService.guardarStorage();
  }
  
  //Este es el método que va a verificar si un parqueadero ya está lleno o si por el contrario aún tiene
  //slots libres, los cambios hechos se guardaran ya que llamamos al método guardarStorage
  cambioCheck(item: slotsItem){
    
    const pendientes = this.lista.items.filter(itemData => !itemData.completado).length;

    console.log({pendientes})

    if (pendientes === 0){
      this.lista.terminadaEn = new Date();
      this.lista.terminada = true;
    }else{
      this.lista.terminadaEn = null;
      this.lista.terminada = false;
    }

    this.zonaService.guardarStorage()
  }
  //Por ultimo el método borrar  nos permite borrar una posición, esta quedará borrada definitivamente
  //gracias al método guardarStorage

  borrar(i:number){
    this.lista.items.splice(i,1);
    this.zonaService.guardarStorage()
  }

}
