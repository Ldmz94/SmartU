import { slotsItem } from './slots-list.model';
//En esta clase creamos todos los elementos que tiene una lista aka parqueadero. Su id único, el nombre(titulo)
//cuando se hizo, si está terminada o no (ocupada) y los items(slots) que tiene
export class Lista{
    id: number;
    titulo: string;
    completado: boolean
    terminadaEn: Date;
    terminada:boolean;
    items: slotsItem[];

    constructor(titulo:string){
        this.titulo  = titulo;
        this.completado = false;
        this.terminada = false;
        this.items = []
        this.id = new Date().getTime()
    }
}