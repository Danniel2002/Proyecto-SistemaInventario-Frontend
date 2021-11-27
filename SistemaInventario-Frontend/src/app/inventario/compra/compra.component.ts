import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelo/Producto';
import { ServiceService } from 'src/app/Service/service.service';


@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(){  }

  Actualizar(){
    this.router.navigate(["registro-c"])
  }

  Nuevo(){
    this.router.navigate(["registro-p"])
  }
}