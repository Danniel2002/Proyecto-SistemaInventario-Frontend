import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http'
import { Reporte } from '../modelo/Reporte';

@Injectable({
    providedIn: 'root'
  })
  export class ReporteService {

    constructor(private http:HttpClient) { }
  
    UrlReporte='http://localhost:8080/reporte';
  
    getReportes(){
      return this.http.get<Reporte[]>(this.UrlReporte);
    }
  
    createReporte(reporte:Reporte){
        return this.http.post<Reporte>(this.UrlReporte+'/nuevo',reporte);
      }
   
  }