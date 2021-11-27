import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelo/Producto';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-eliminar-p',
  templateUrl: './eliminar-p.component.html',
  styleUrls: ['./eliminar-p.component.css']
})
export class EliminarPComponent implements OnInit {

  productos:Producto[] = [];
  producto:Producto = new Producto();
  elegido: string  = '0';
  numero:number = 0;

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getProductos()
    .subscribe(data=>{
      this.productos=data;
    })
  }

  eliminar(){
    this.numero=Number(this.elegido);
    
  
    if(this.numero==0  ){
      alert("Seleccione los datos")
      
    }else{
     
      this.service.deleteProducto(this.numero).subscribe(data=>{
        alert("Se elimino con éxito");
        window.location.reload();
      
      })
      

     
      }
  
  }

}
