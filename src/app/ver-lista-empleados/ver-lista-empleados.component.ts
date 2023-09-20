import { Component } from '@angular/core';
import { EmpleadoService } from '../services/empleado.service';
import { Empleado } from '../models/Empleado';
import { Error } from '../models/Error';
import { OnInit } from '@angular/core';
import { Output } from '@angular/core';



@Component({
  selector: 'app-ver-lista-empleados',
  templateUrl: './ver-lista-empleados.component.html',
  styleUrls: ['./ver-lista-empleados.component.css']

})

export class VerListaEmpleadosComponent implements OnInit {

  listaEmpleados: Array<Empleado> = [];

  activarBoton: boolean = false;
  error: Error;
  showModalError: boolean = false;
  showModalEliminarEmpleado: boolean = false;

  @Output() empleado: Empleado;
  showModalActualizar: boolean = false; //Se reutiliza el observable $modalShowEmpleadoEnviado para mostrar/ocultar el modal de actualizar empleado



  constructor(private empleadoService: EmpleadoService){
    this.empleado = new Empleado();
    this.error = new Error();

  }



  /*
   * Reutiliza el observable $modalShowEmpleado con la variable showModalActualizar 
   * para mostrar/ocultar el modal de actualizar el empleado
   * Tambien actualiza la variable showModalEliminarEmpleado que va a mostrar el modal para confirmar que se va a eliminar un empleado
   */
  ngOnInit(): void {


    // this.empleadoService.listaEmpleadosActualizada.subscribe((result) => { this.listaEmpleados = result });


    this.empleadoService.$modalShowEmpleadoEnviado.subscribe( (resp) => { this.showModalActualizar = resp } );
    this.empleadoService.$modalShowEliminarEmpleado.subscribe( (resp) => { this.showModalEliminarEmpleado = resp } );


    this.verEmpleados();


  }


/*
 * Funcion verEmpleados
 * Trae todos los empleados de la base de datos
 * Si no hay errores setea la variable listaEmpleadosque es un Array de Empleados
 * Si trae algun error muestra un modal con el error
 * No recibe paramtros
 * Retorna una lista de empleados " Array<Empleado> "
 */
//TODO probar error con el backEnd apagado
//TODO falta borrar un empleado
//TODO ver quitar el tipo de rotorno " Array<Empleado> "
public verEmpleados(){
    this.empleadoService.obtenerEmpleados().subscribe({
      next: (result) => {
        this.listaEmpleados = result;
        console.log("rsult: " + result);

      },
      error: (e) => {
        this.error = new Error();
        this.error.statusCode = e.status;
        this.error.statusMessage = e.error.message;
        this.showModalError = true;
        this.empleadoService.$modalShowErrorCrearEmpleado.emit(this.showModalError);
      }
    });

    console.log("lista de empleados: ", this.listaEmpleados);

  }



  
  /*
   * Funcion irActualizarEmpleado
   * Muestra el modal para actualizar un empleado en especifico
   * Setea a la variable "empleado" con el empleado especifico
   * Pone en true la variable "showModalActualizar" para mostrar el modal
   * IMPORTANTE
   * Reutiliza la variable "$modalShowEmpleadoEnviado" definida en EmpleadoService
   * para mantener actualizado el valor del booleano para mostrar o ocultar el modal
   * Recibe como parametro un Empleado
   * No tiene retorno
   */
  irActualizarEmpleado(empleado1: Empleado){
    this.empleado = empleado1;
    console.log("Empleado:::", this.empleado);
    this.showModalActualizar = true;
    this.empleadoService.$modalShowEmpleadoEnviado.emit(this.showModalActualizar);
  }



  /*
   * Funcion eliminarEmpleado
   * Muestra el modal para confirma la eliminacion de un empleado en especifico
   * Setea a la variable "empleado" con el empleado especifico
   * Pone en true la variable "showModalEliminarEmpleado" para mostrar el modal
   * A traves de la variable "  $modalShowEliminarEmpleado  " se va a mantener actualizadas las variables 
   * para mostrar / ocultar el modal
   * Recibe como parametro un Empleado
   * No tiene retorno
   */
  eliminarEmpleado(empleado1: Empleado){
    this.empleado = empleado1;
    console.log("EliminarEmpleado:::", this.empleado);
    this.showModalEliminarEmpleado = true;
    this.empleadoService.$modalShowEliminarEmpleado.emit(this.showModalEliminarEmpleado);
  }


 
}











  






  // public verEmpleados(): Array<Empleado>{

  //   this.empleadoService.obtenerTodosLosEmpleados().subscribe({
  //     next: (result) => {
  //       this.listaEmpleados.push(result); 
  //       console.log(result);
  //     },
  //     error: (e) => {
  //       console.log("\n\n\nMostrando el error: ");
  //       console.log(e);
  //       console.log("\n\n");

  //       console.log("\nStatus: ");
  //       console.log(e.status);
  //       console.log("\n\n");

  //       console.log("\Code status: ");
  //       console.log(e.statusCode);
  //       console.log("\n\n");
        
  //     }

  //   })




  //   console.log("Viendo empleados: \n", this.empleadoService.obtenerTodosLosEmpleados());
  //   return this.listaEmpleados;

  // }


