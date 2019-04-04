import { Injectable } from '@angular/core';
import { Lista } from '../models/list.model'

@Injectable({
  providedIn: 'root'
})
export class ZonasService {
  //Creamos una variable lista de tipo Lista, esta la importamos de Lista de list.model
  listas : Lista[] = []


  constructor() {

    this.cargarStorage()
    
   }
   //Para crear la lista se crea el metodo crearLista, el cual recibe un titulo de tipo string, a continuación
   // creamos una constante llamada nuevaLista, a esta le agregamos el titutlo y
   //usamos el metodo push para agregar esta nuevaLista a las listas, después llamamos al método
   //guardarStorage() para guardar la información de la lista que estamos creando y por último retornamos
   //el id de la nueva lista
   crearLista(titulo:string){
    const nuevaLista = new Lista(titulo)
    this.listas.push(nuevaLista)
    this.guardarStorage();
    return nuevaLista.id;
   }
  //Para borrar una lista se crea el método borrarLista el cual recibe una lista de tipo Lista, este después
  //Busca la información que tiene la lista con el método filter y por último la elimina. Se utiliza el
  //método guardarStorage() para guardar la información
   borrarLista(lista: Lista){
    this.listas = this.listas.filter(listaData =>  listaData.id !== lista.id);
    this.guardarStorage();
   }
  
   //Para encontrar una lista usamos el método obtenerLista, el cual recibe un id de tipo string o number
   //y con el método find, usamos el listaData para encontrar el id que estamos buscando y así modificar
   //esta lista
   obtenerLista(id:string | number){
    id = Number(id);
    return this.listas.find(listaData =>  listaData.id === id);
    
   }
   //El método guardarStorage() es el que se usa para guardar toda la información del sistema actualizada
   guardarStorage(){
      localStorage.setItem('data', JSON.stringify(this.listas))
   }
   //El método cargarStorage() permite cargar la información que se está guardando con el método guardarStorage()
   cargarStorage(){
     if (localStorage.getItem('data')){
    this.listas = JSON.parse(localStorage.getItem('data'));
  } else{
    this.listas= []
  }
   }
}
