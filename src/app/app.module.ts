import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';
import { VerListaEmpleadosComponent } from './ver-lista-empleados/ver-lista-empleados.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalErrorComponent } from './modal-error/modal-error.component';
import { ModalEmpleadoEnviadoComponent } from './crear-empleado/modal-empleado-enviado/modal-empleado-enviado.component';
import { ModalEliminarEmpleadoComponent } from './ver-lista-empleados/modal-eliminar-empleado/modal-eliminar-empleado.component';
import { ModalActualizarEmpleadoComponent } from './ver-lista-empleados/modal-actualizar-empleado/modal-actualizar-empleado.component';



@NgModule({
  declarations: [
    AppComponent,
    CrearEmpleadoComponent,
    VerListaEmpleadosComponent,
    ModalErrorComponent,
    ModalEmpleadoEnviadoComponent,
    ModalEliminarEmpleadoComponent,
    ModalActualizarEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
