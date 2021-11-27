import { Injectable } from '@angular/core';
import{ HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Persona } from '../modelo/Persona';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  [x: string]: any;

  Url="http://localhost:8080/usuario"

  constructor(private http:HttpClient) { }

  login(persona:Persona){
    return this.http.post(this.Url+'/login',persona);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('usuario')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('usuario')
  }

  credencialesInvalidas(error:HttpErrorResponse){
    alert("Datos incorrectos")
    return throwError(() => error)
  }

  usuarioInvalido(error:HttpErrorResponse){
    alert("Usuario ya en uso")
    return throwError(() => error)
  }


  getPersonas(){
    return this.http.get<Persona[]>(this.Url);
  }

  verificarPersonaByName(usuario:String){
    return this.http.get<Persona>(this.Url+"/"+usuario)
  }

  createPersona(persona:Persona){
    return this.http.post<Persona>(this.Url+"/nuevo",persona);
  }
  updatePersona(id:number,persona:Persona) {
    return this.http.patch<Persona>(this.Url+"/editar/"+id, persona);
  }
  
  eliminarPersona(id:number){
    return this.http.delete<Persona>(this.Url+"/eliminar/"+id);

  }


}