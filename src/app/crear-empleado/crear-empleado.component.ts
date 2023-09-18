import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { edadMayorA18, fechaNoPosterior, nombreValido } from './validators/empleadoValidators';
import { EmpleadoService } from '../services/empleado.service';
import { Empleado } from '../models/Empleado';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent {
  
  
  empleados: Empleado[];
  
  agregarEmpleado: FormGroup;

  constructor(private fb: FormBuilder, private empleadoService: EmpleadoService){

    this.empleados = [];

    this.agregarEmpleado = this.fb.group({
      nombre: new FormControl('', [Validators.required, nombreValido]),
      apellido: new FormControl('', [Validators.required, nombreValido]),
      nroDocumento: new FormControl('', [Validators.required]),

      email: new FormControl('', [Validators.required, Validators.email]),

      fechaNacimiento: new FormControl('', [Validators.required, fechaNoPosterior, edadMayorA18]),
      fechaIngreso: new FormControl('', [Validators.required, fechaNoPosterior]),

    });
  }


  
  public agregarEmpleadoNuevo(){
    var empleado = new Empleado();
    
    empleado.nroDocumento = this.agregarEmpleado.get('nroDocumento')?.value;
    empleado.nombre = this.agregarEmpleado.get('nombre')?.value;
    empleado.apellido = this.agregarEmpleado.get('apellido')?.value;
    empleado.email = this.agregarEmpleado.get('email')?.value;
    empleado.fechaNacimiento = this.agregarEmpleado.get('fechaNacimiento')?.value;
    empleado.fechaIngreso = this.agregarEmpleado.get('fechaIngreso')?.value;

    this.empleadoService.crearEmpleado(empleado).subscribe( res => {
      this.agregarEmpleado.reset();

      console.log("Empleado enviado: " , empleado);
      console.log('\n\nSe guardo el producto\n\n');
    });
   
  }






}
