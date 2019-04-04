//Hacemos el constructor de slots indiicandole la descripción de estos y un booleano donde se puedan marcar como
//ocupados
export class slotsItem{
    desc: string;
    //parqueaderos: number;
    completado: boolean

    constructor(desc:string){
        this.desc = desc;
        //this.parqueaderos = 20
        this.completado = false
    }
} 