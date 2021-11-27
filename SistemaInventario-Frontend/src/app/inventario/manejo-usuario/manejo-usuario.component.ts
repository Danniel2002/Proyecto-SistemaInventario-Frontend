import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelo/Persona';
import { AuthenticationService } from 'src/app/Service/authentication.service';

@Component({
  selector: 'app-manejo-usuario',
  templateUrl: './manejo-usuario.component.html',
  styleUrls: ['./manejo-usuario.component.css']
})
export class ManejoUsuarioComponent implements OnInit {
  personas:Persona[] = [];
  persona:Persona = new Persona();

  constructor(private service:AuthenticationService, private router:Router) { }

  ngOnInit(){
    this.service.getPersonas()
    .subscribe(data=>{
      this.personas=data;
    })
  }

  Editar(id:number){
    this.persona.estado="Activo"
    this.service.updatePersona(id,this.persona).subscribe(data=>{
      

    })
    alert("Se desbloqueo el usuario")
    window.location.reload();
  }

  Eliminar(id:number){

    this.service.eliminarPersona(id).subscribe(data=>{
      
    })
    alert("Se elimino el usuario")
    window.location.reload();
  }

}