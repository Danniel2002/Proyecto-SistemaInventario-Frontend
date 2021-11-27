export class Producto{
    idProducto!:number;
    nombre!:String;
    stock!:number;
    precioCompra!:number;
    precioVenta!:number;

    constructor(){}
    

    public get cantidad() {
        return this.stock;
    }
}