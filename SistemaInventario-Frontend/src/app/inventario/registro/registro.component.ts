import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { Persona } from 'src/app/modelo/Persona';
import { AuthenticationService } from 'src/app/Service/authentication.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  personas:Persona[] = [];
  persona:Persona = new Persona();
  constructor(private service:AuthenticationService, private router:Router) { }


  ngOnInit(){


  }

  registrar(form: NgForm) {

    if (form.valid) {
      this.persona.estado = "Nuevo"
      this.service.createPersona(this.persona).pipe(catchError(this.service.usuarioInvalido)).subscribe(data =>{
        console.log(data)
        window.location.reload();
        alert("¡Usuario registrado con exito!")
      })
    }else{
      alert("Datos Incompletos")
    }
  }

  login() {
    this.router.navigate(["login"])
  }

}
