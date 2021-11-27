import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelo/Producto';
import { ServiceService } from 'src/app/Service/service.service';


@Component({
  selector: 'app-registro-p',
  templateUrl: './registro-p.component.html',
  styleUrls: ['./registro-p.component.css']
})
export class RegistroPComponent implements OnInit {

  productos:Producto[] = [];
  producto:Producto = new Producto();
  nombre: string  = '0';
  existe: boolean =false;

  constructor(private service:ServiceService, private router:Router) { }
    
    

  ngOnInit(): void {
    this.service.getProductos()
    .subscribe(data=>{
      this.productos=data;
    })
  }


  crear(){

    
    
    
    
      if(this.producto.nombre==null || this.producto.nombre=="" || this.producto.precioCompra==null || this.producto.stock==null || this.producto.precioVenta==null){
        alert("Ingrese todos los datos")
        


      }else if(this.producto.precioCompra < 0 || this.producto.precioVenta < 0 || this.producto.stock < 0){
        
      alert("Ingrese datos númericos validos")

      }else{

        for (let index = 0; index < this.productos.length; index++) {
          if (this.productos[index].nombre==this.producto.nombre) {
            this.existe = true
          } 
          
        }
        if (this.existe) {
          alert("El producto ya existe")
          this.existe=false
          window.location.reload();

        } else {
          this.service.createProducto(this.producto)
          .subscribe(data=>{
            alert("Se registró con éxito");
            window.location.reload();
          
          })
        }
       

      }
      
    }
  



}
