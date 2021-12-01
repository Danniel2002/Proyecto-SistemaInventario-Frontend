import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reporte } from 'src/app/modelo/Reporte';
import { ReporteService } from 'src/app/Service/reportes.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfMake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

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

  generarPDF(){

    
    var pdfDefinition ={
      content: [
       {
         table: {
           widths: [30, 70, 100, 60, 70, 60, 60],
           alignment: "center",
           body: [
             [
              'ID',
              'FECHA',
              'PRODUCTO',
              'TIPO',
              'CANTIDAD',
              'PRECIO',
              'TOTAL'
             ],
             [
              this.reportes.map(row => [row.idReporte]),
              this.reportes.map(row => [row.fecha]),
              this.reportes.map(row => [row.nombre]),
              this.reportes.map(row => [row.tipo]),
              this.reportes.map(row => [row.cantidad]),
              this.reportes.map(row => [row.precio]),
              this.reportes.map(row => [row.total])
             ]
           ]
         }
       }
      ]
    }
    pdfMake.createPdf(pdfDefinition).open();
  }
}
