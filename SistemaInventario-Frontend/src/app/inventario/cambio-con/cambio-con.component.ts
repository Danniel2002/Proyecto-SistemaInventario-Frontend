import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelo/Persona';
import { AuthenticationService } from 'src/app/Service/authentication.service';

@Component({
  selector: 'app-cambio-con',
  templateUrl: './cambio-con.component.html',
  styleUrls: ['./cambio-con.component.css']
})
export class CambioConComponent implements OnInit {

  persona:Persona = new Persona();
  persona1:Persona = new Persona();
  personas:Persona []=[];
  existe:boolean=false;

  constructor(private service:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
    this.service.getPersonas()
    .subscribe(data=>{
      this.personas=data;
    })
  }

  login(){

    for (let index = 0; index < this.personas.length; index++) {
      
        if(this.personas[index].usuario==this.persona.usuario){
          this.existe=true
        }
      
    }

    this.service.verificarPersonaByName(this.persona.usuario).subscribe(data =>{
      this.persona1=data
   
      if (this.existe && this.persona1.estado=="Nuevo") {
        this.persona.estado="Activo"
        this.service.updatePersona(this.persona1.idUsuario,this.persona)
       .subscribe(data=>{ 
      })
      alert("Usuario Actualizado")
      this.router.navigate(["login"])
      } else {
        alert("No existe el usuario")
      }

    })
    
    
    
  }

}
