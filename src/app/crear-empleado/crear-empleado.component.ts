import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { fechaNoPosterior } from './validators/empleadoValidators';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent {

  agregarEmpleado: FormGroup;

  constructor(private fb: FormBuilder){
    this.agregarEmpleado = this.fb.group({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      nroDocumento: new FormControl('', [Validators.required]),

      email: new FormControl('', [Validators.required, Validators.email]),

      fechaNacimiento: new FormControl('', [Validators.required, fechaNoPosterior]),
      fechaIngreso: new FormControl('', [Validators.required]),

    });
  }



  public agregarEmpleadoNuevo(){
    console.log("agregarEmpleadoNuevo: ", this.agregarEmpleado);
  }






}
