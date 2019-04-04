import { Component } from '@angular/core';
import { ZonasService } from 'src/app/services/zonas.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  //Inicializamos en el constructor zonasServices de tipo ZonasService, un router de tipo Router y un 
  //alertController de tipo AlertController
  constructor(public zonasServices: ZonasService,
              private router: Router,
              private alertController: AlertController){
    
  }
  //Creamos un método asíncrono llamado agregar lista. Este titulo permitirá la creación de un parqueadero, este
  //método se va a usar en services después. Nos mostrará el header, y los datos que se pueden ingresar, en
  //este caso, el nombre y que es de tipo text. Tiene un botón de Cancelar para no agregar ninguna lista
  //y por último el crear que va a manejar la data para la creación y navega a la ruta donde ya está agregada
  //el nuevo parqueadero
  async agregarLista(){

    const alert = await this.alertController.create({
      header: 'Nueva lista',
      inputs: [{
        name: 'titulo',
        type: 'text',
        placeholder: 'Nombre de la lista'
      }],
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler: ()=>{
          console.log('cancelar')
        }
      },
    {
      text: 'Crear',
      handler: (data)=>{
        console.log(data);
        if (data.titulo.length === 0){
          return;
        }
        const listaId = this.zonasServices.crearLista(data.titulo)
        this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
      }
    }]
    });
  
    alert.present();
  }

  
}
