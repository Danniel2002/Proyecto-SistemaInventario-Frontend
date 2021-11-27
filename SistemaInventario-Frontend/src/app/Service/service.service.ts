import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http'
import { Producto } from '../modelo/Producto';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  UrlProducto='http://localhost:8080/producto';

  getProductos(){
    return this.http.get<Producto[]>(this.UrlProducto);
  }

  getProducto(id:number){
    return this.http.get<Producto>(this.UrlProducto+'/'+id);
  }

  createProducto(producto:Producto){
    return this.http.post<Producto>(this.UrlProducto+'/nuevo',producto);
  }
  updateProducto(producto:Producto,id:number){
    return this.http.patch<Producto>(this.UrlProducto+"/editar/"+id, producto);
  }

  deleteProducto(id:number){
    return this.http.delete<Producto>(this.UrlProducto+"/eliminar/"+id);
  }
 
}
