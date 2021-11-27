import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelo/Producto';
import { Reporte } from 'src/app/modelo/Reporte';
import { ServiceService } from 'src/app/Service/service.service';
import { ReporteService } from 'src/app/Service/reportes.service';

@Component({
  selector: 'app-registro-c',
  templateUrl: './registro-c.component.html',
  styleUrls: ['./registro-c.component.css']
})
export class RegistroCComponent implements OnInit {

 
  productos:Producto[] = [];
  producto:Producto = new Producto();
  producto1:Producto = new Producto();
  elegido: string  = '0';
  numero:number = 0;
  reporte:Reporte = new Reporte();
  fecha:Date = new Date();
  

  constructor(private service1:ReporteService,private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getProductos()
    .subscribe(data=>{
      this.productos=data;
    })
  }



editar(){
  this.numero=Number(this.elegido);
  
  


  if(this.numero==0 || this.producto.precioCompra==null || this.producto.stock==null || this.producto.precioVenta==null ){
    alert("Ingrese todos los datos")
    
  }else if(this.producto.precioCompra < 0 || this.producto.precioVenta < 0 || this.producto.stock < 0){
    
  alert("Ingrese datos númericos validos")

  }else{

    this.service.getProducto(this.numero).subscribe(data=>{
      this.producto1=data;

      this.reporte.cantidad=this.producto.stock
      this.producto.stock=this.producto1.stock+this.producto.stock
      this.service.updateProducto( this.producto,this.numero)
      .subscribe(data=>{
        alert("Se Actualizo con éxito");
        window.location.reload();
        this.reporte.fecha=this.fecha.getDate()+"/"+(this.fecha.getMonth()+1)+"/"+this.fecha.getFullYear() ;
        this.reporte.nombre=this.producto1.nombre
        this.reporte.tipo="Compra"
        this.reporte.precio=this.producto.precioCompra
        this.reporte.total=this.producto.precioCompra*this.reporte.cantidad
        this.service1.createReporte(this.reporte).subscribe()

      
      })
    
      
    })
 
  }
}

}
