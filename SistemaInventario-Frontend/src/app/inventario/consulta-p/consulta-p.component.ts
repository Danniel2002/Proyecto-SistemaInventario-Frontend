import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelo/Producto';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-consulta-p',
  templateUrl: './consulta-p.component.html',
  styleUrls: ['./consulta-p.component.css']
})
export class ConsultaPComponent implements OnInit {

  productos:Producto[] = [];
  productos1:Producto[] = [];
  producto:Producto = new Producto();
  producto1:Producto = new Producto();
  elegido: string  = '0';
  numero:number = 0;

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getProductos()
    .subscribe(data=>{
      this.productos=data;
    })
  }



buscar(){
  this.numero=Number(this.elegido);
  

  if(this.numero==0  ){
    alert("Seleccione los datos")
    
  }else{
    this.service.getProducto(this.numero).subscribe(data=>{
      this.producto1=data;
      this.productos1.push(this.producto1)
    })
    
    
    }

}
}
