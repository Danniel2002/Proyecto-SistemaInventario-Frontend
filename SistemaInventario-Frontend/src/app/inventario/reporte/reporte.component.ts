import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reporte } from 'src/app/modelo/Reporte';
import { ReporteService } from 'src/app/Service/reportes.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  reportes:Reporte[] = [];
  reporte:Reporte= new Reporte();

  constructor(private service:ReporteService, private router:Router) { }

  ngOnInit(): void {
    this.service.getReportes().subscribe(data=>{
      this.reportes=data;
    })
  }

  buscar(){

  }

}
