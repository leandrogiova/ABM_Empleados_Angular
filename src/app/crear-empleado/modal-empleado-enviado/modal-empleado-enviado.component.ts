import { Input, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-modal-empleado-enviado',
  templateUrl: './modal-empleado-enviado.component.html',
  styleUrls: ['./modal-empleado-enviado.component.css']
})
export class ModalEmpleadoEnviadoComponent implements OnInit {

    showmodalEmpleandoEnv: boolean = true;
    @Input() empleadoModal: Empleado;



  constructor(private empleadoService: EmpleadoService){
    this.empleadoModal = new Empleado();

  }

  /*
   * Actuazliza el valor de la variable "showmodalEmpleandoEnv"
   */
  ngOnInit(): void {
    this.empleadoService.$modalShowEmpleadoEnviado.subscribe( (valor) => { this.showmodalEmpleandoEnv = valor} );
  }


  
  
  /*
   * Funcion cerrarModal
   * Setea las variable "showmodalEmpleandoEnv" en false para ocultar el modal con los datos del empleado que se acaba de crear
   * Emite a través del observable el valor para mantener la variable actualizada
   */
  public cerrarModal(): void{
    this.showmodalEmpleandoEnv = false;
    this.empleadoService.$modalShowEmpleadoEnviado.emit(this.showmodalEmpleandoEnv);
  }
}


