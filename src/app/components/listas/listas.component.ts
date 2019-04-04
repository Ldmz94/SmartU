import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ZonasService } from 'src/app/services/zonas.service';
import { Router } from '@angular/router';
import { Lista } from 'src/app/models/list.model';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @ViewChild( IonList) lista: IonList;
  @Input() terminada = true;

  constructor(public zonasServices: ZonasService,
              private router: Router,
              private alertController: AlertController) { }

  ngOnInit() {}

  listaSeleccionada(lista:Lista){
    console.log(lista);
    if(this.terminada){
    this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
  }else{
    this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
  }
}

  async editarLista(lista:Lista){
    const alert = await this.alertController.create({
      header: 'Editar lista',
      inputs: [{
        name: 'titulo',
        type: 'text',
        value: lista.titulo,
        placeholder: 'Nombre de la lista'
      }],
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler: ()=>{
          console.log('cancelar')
          this.lista.closeSlidingItems();
        }
      },
    {
      text: 'Actualizar',
      handler: (data)=>{
        console.log(data);
        if (data.titulo.length === 0){
          return;
        }
        lista.titulo = data.titulo;
        this.zonasServices.guardarStorage();
        this.lista.closeSlidingItems();
      }
    }]
    });
  
    alert.present();
  }

  borrarLista(lista:Lista){
    this.zonasServices.borrarLista(lista)
  }
}
