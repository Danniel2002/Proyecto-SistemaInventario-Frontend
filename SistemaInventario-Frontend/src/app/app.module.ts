import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CompraComponent } from './inventario/compra/compra.component';
import { VentaComponent } from './inventario/venta/venta.component'; 
import { LoginComponent } from './inventario/login/login.component';
import { RegistroComponent } from './inventario/registro/registro.component';
import { RegistroPComponent } from './inventario/registro-p/registro-p.component';
import { RegistroCComponent  } from './inventario/registro-c/registro-c.component';
import { ConsultaPComponent  } from './inventario/consulta-p/consulta-p.component';
import { EliminarPComponent  } from './inventario/eliminar-p/eliminar-p.component';
import { ManejoUsuarioComponent  } from './inventario/manejo-usuario/manejo-usuario.component';
import { CambioConComponent  } from './inventario/cambio-con/cambio-con.component';
import { ReporteComponent  } from './inventario/reporte/reporte.component';
import { IndexComponent } from './inventario/index/index.component';
import { MenuComponent } from './inventario/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from './Service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  declarations: [
    AppComponent,
    CompraComponent,
    VentaComponent,
    LoginComponent,
    RegistroComponent,
    RegistroPComponent,
    RegistroCComponent,
    ConsultaPComponent,
    EliminarPComponent,
    ManejoUsuarioComponent,
    CambioConComponent,
    ReporteComponent,
    MenuComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RecaptchaModule,
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})


export class AppModule { }
