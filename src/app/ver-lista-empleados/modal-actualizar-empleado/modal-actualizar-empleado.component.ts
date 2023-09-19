import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { edadMayorA18, fechaNoPosterior, nombreValido } from 'src/app/crear-empleado/validators/empleadoValidators';
import { Empleado } from 'src/app/models/Empleado';
import { Error } from 'src/app/models/Error';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-modal-actualizar-empleado',
  templateUrl: './modal-actualizar-empleado.component.html',
  styleUrls: ['./modal-actualizar-empleado.component.css']
})
export class ModalActualizarEmpleadoComponent implements OnInit {

  @Input() empleadoModal: Empleado;
  showModalActualizarEmpleado: boolean = true;
  error: Error;
  showModalError: boolean = false;
  actualizarEmpleado: FormGroup;


  constructor(private fb: FormBuilder, private empleadoService: EmpleadoService){
    this.empleadoModal = new Empleado();
    this.error = new Error();

    this.actualizarEmpleado = this.fb.group({
      nombre: new FormControl('', [Validators.required, nombreValido]),
      apellido: new FormControl('', [Validators.required, nombreValido]),
      nroDocumento: new FormControl('', [Validators.required]),

      email: new FormControl('', [Validators.required, Validators.email]),

      fechaNacimiento: new FormControl('', [Validators.required, fechaNoPosterior, edadMayorA18]),
      fechaIngreso: new FormControl('', [Validators.required, fechaNoPosterior]),

    });
  }


  /*
   * Actualiza la variable "showModalActualizarEmpleado" para mostrar o ocultar el modal
   * Setea el formulario "actualizarEmpleado" para que los input del html muestren su valor
   */
  ngOnInit(): void {
    this.empleadoService.$modalShowEmpleadoEnviado.subscribe( (result) => { this.showModalActualizarEmpleado = result } );
    
    this.actualizarEmpleado.get('nombre')?.setValue( this.empleadoModal.nombre);
    this.actualizarEmpleado.get('apellido')?.setValue( this.empleadoModal.apellido);
    this.actualizarEmpleado.get('nroDocumento')?.setValue( this.empleadoModal.nroDocumento);
    this.actualizarEmpleado.get('email')?.setValue( this.empleadoModal.email);
    this.actualizarEmpleado.get('fechaNacimiento')?.setValue( this.empleadoModal.fechaNacimiento);
    this.actualizarEmpleado.get('fechaIngreso')?.setValue( this.empleadoModal.fechaIngreso);
  }


  /*
   * Funcion cerrarModal
   * Actualiza un empleado
   * Setea a la variable "empleadoModal" para enviar a la base de datos, la setea con los datos del formulario
   * Hace la actualización atraves de http y la URL, llamando al EmpleadoService
   * Si el backEnd responde todo bien no muestra nada
   * Si el backEnd responde con un error lanza un modal con dicho error
   * Importante: 
   * Reutiliza el observable "$modalShowErrorCrearEmpleado" para mostrar el modal del errror
   * Y reutiliza el observable "$modalShowEmpleadoEnviado" para mostrar/ocultar este modal
   * No recibe parametros
   * No tiene retorno 
   */
  cerrarModal(){
    this.empleadoModal.nroDocumento = this.actualizarEmpleado.get('nroDocumento')?.value;
    this.empleadoModal.nombre = this.actualizarEmpleado.get('nombre')?.value;
    this.empleadoModal.apellido = this.actualizarEmpleado.get('apellido')?.value;
    this.empleadoModal.email = this.actualizarEmpleado.get('email')?.value;
    this.empleadoModal.fechaNacimiento = this.actualizarEmpleado.get('fechaNacimiento')?.value;
    this.empleadoModal.fechaIngreso = this.actualizarEmpleado.get('fechaIngreso')?.value;

    this.empleadoService.actualizarEmpleado(this.empleadoModal).subscribe({
      next: (result) => {
        this.actualizarEmpleado.reset();

        this.showModalActualizarEmpleado = false;
        this.empleadoService.$modalShowEmpleadoEnviado.emit(this.showModalActualizarEmpleado);
      },

      error: (e) => {
        this.error = new Error();
        this.error.statusCode = e.status;
        this.error.statusMessage = e.error.message;

        this.showModalError = true;
        this.empleadoService.$modalShowErrorCrearEmpleado.emit(this.showModalError);
      }
    });


     
  }


}
