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

  ngOnInit(): void {
    console.log("En el modal Empleado enviado: empleado:" , this.empleadoModal);
    this.empleadoService.$modalShowEmpleadoEnviado.subscribe( (valor) => { this.showmodalEmpleandoEnv = valor} );
    console.log("viendo showmodalEmpleadoEnviado: " , this.showmodalEmpleandoEnv);
  }

  

  public cerrarModal(): void{
    this.showmodalEmpleandoEnv = false;
    this.empleadoService.$modalShowEmpleadoEnviado.emit(this.showmodalEmpleandoEnv);
  }
}


