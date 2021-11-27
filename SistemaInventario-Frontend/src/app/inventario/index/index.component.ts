import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private router: Router){}

  Compra(){
    this.router.navigate(["compra"]);
  }
  Venta(){
    this.router.navigate(["venta"]);
  }
  ConsultaP(){
    this.router.navigate(["consulta-p"]);
  }

  EliminarP(){
    this.router.navigate(["eliminar-p"]);
  }

  ngOnInit(): void {
  }

}
