import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { edadMayorA18, fechaNoPosterior, nombreValido } from './validators/empleadoValidators';
import { EmpleadoService } from '../services/empleado.service';
import { Empleado } from '../models/Empleado';
import { Error } from '../models/Error';
import { OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {
  
  @Output() empleado: Empleado;
  @Output() error: Error;
  showModalError: boolean = false;
  modalEmpleadoEnviado: boolean = false;
  


  
  agregarEmpleado: FormGroup;

  constructor(private fb: FormBuilder, private empleadoService: EmpleadoService){


    this.empleado = new Empleado();
    this.error = new Error();
    
    this.agregarEmpleado = this.fb.group({
      nombre: new FormControl('', [Validators.required, nombreValido]),
      apellido: new FormControl('', [Validators.required, nombreValido]),
      nroDocumento: new FormControl('', [Validators.required]),

      email: new FormControl('', [Validators.required, Validators.email]),

      fechaNacimiento: new FormControl('', [Validators.required, fechaNoPosterior, edadMayorA18]),
      fechaIngreso: new FormControl('', [Validators.required, fechaNoPosterior]),

    });
  }

  ngOnInit(): void {

  }

  /*
   * Funcion agregarEmpleadoNuevo
   * Envia un empleado a la base de datos
   * Crea una variable empleado, setea los campos correspondientes con los datos del formulario
   * Envia el formulario a la base de datos, si sale todo OK resetea el formulario
   * No recibe paramtros
   * No retorna ningun tipo
   */  
  public agregarEmpleadoNuevo(){
    this.empleadoService.$modalShowEmpleadoEnviado.subscribe( (valor) => { this.modalEmpleadoEnviado = valor} );

    this.empleadoService.$modalShowErrorCrearEmpleado.subscribe( (valor) => { this.showModalError = valor} );

    this.empleado.nroDocumento = this.agregarEmpleado.get('nroDocumento')?.value;
    this.empleado.nombre = this.agregarEmpleado.get('nombre')?.value;
    this.empleado.apellido = this.agregarEmpleado.get('apellido')?.value;
    this.empleado.email = this.agregarEmpleado.get('email')?.value;
    this.empleado.fechaNacimiento = this.agregarEmpleado.get('fechaNacimiento')?.value;
    this.empleado.fechaIngreso = this.agregarEmpleado.get('fechaIngreso')?.value;

    
    this.empleadoService.crearEmpleado(this.empleado).subscribe({
      next: (result) => {
        this.agregarEmpleado.reset();


      this.modalEmpleadoEnviado = true;
      this.empleadoService.$modalShowEmpleadoEnviado.emit(this.modalEmpleadoEnviado);
      },

      error: (e) => {
              this.error = new Error();
              this.error.statusCode = e.status;
              this.error.statusMessage = e.error.message;

              this.showModalError = true;
              this.empleadoService.$modalShowErrorCrearEmpleado.emit(this.showModalError);

      }
    })
  }






}
