
import { Component } from '@angular/core';
import { EmpleadoService } from '../services/empleado.service';
import { OnInit } from '@angular/core';

import { Error } from 'src/app/models/Error';
import { Input } from '@angular/core';

@Component({
  selector: 'app-modal-error',
  templateUrl: './modal-error.component.html',
  styleUrls: ['./modal-error.component.css']
})
export class ModalErrorComponent implements OnInit{
  
  showmodalError: boolean = true;
  @Input() errorInModal: Error;



  constructor(private empleadoService: EmpleadoService){
    this.errorInModal = new Error();
   }

  
  ngOnInit(): void {
    this.empleadoService.$modalShowErrorCrearEmpleado.subscribe( (valor) => { this.showmodalError = valor }  );


  }

  
  cerrarModal() {
    this.showmodalError = false;
    this.empleadoService.$modalShowErrorCrearEmpleado.emit(this.showmodalError);
    this.errorInModal = new Error();
  }


}
