import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Service/authentication.service';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLogged = false;

  constructor(private router:Router, private service:ServiceService, private auth:AuthenticationService) { }

  ngOnInit() { 
    if(this.auth.isUserLoggedIn()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
   }

  CerrarSesion(){
    this.router.navigate(["logout"])
  }
  ManejoUsuario(){
    this.router.navigate(["manejo-usuario"])
  }

  onLogOut(): void {
    window.location.reload();
  }

}
