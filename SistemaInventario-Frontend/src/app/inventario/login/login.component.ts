import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { Persona } from 'src/app/modelo/Persona';
import { AuthenticationService } from 'src/app/Service/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  persona: Persona = new Persona();
  persona1: Persona = new Persona();
  usuario = ''
  contrasena = ''
  invalidLogin = false

  constructor(private router:Router, private service:AuthenticationService) {   }

   ngOnInit(): void {

   }
   ingresar(form: NgForm){
    if(form.valid) {
     this.service.login(this.persona).pipe(catchError(this.service.credencialesInvalidas)).subscribe(data =>{
       console.log(data)
   
      this.service.verificarPersonaByName(this.persona.usuario).subscribe(data =>{
        this.persona1=data

        if(this.persona1.estado=="Nuevo"){
          alert("Por favor cambie su contraseña")
          this.router.navigate(["cambio-con"])
         }else{
          sessionStorage.setItem('usuario', this.persona.usuario)
          this.router.navigate([""])
         }
      })
      
       
     })
    } else {
      alert("ERROR");
    }
  }


   Registro(){
    this.router.navigate(["registro"])
  }

}