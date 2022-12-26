export class ExpCard{
    public name:string;
    public fecha_inicio:string;
    public fecha_fin:string;
    public description:string;

    constructor(name : string, fecha_inicio : string, fecha_fin : string, description : string){
        this.name = name;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
        this.description = description;
    }
}