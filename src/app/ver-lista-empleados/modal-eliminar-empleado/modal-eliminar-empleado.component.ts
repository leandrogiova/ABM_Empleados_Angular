import { OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';
import { Error } from 'src/app/models/Error';
import { EmpleadoService } from 'src/app/services/empleado.service';


@Component({
  selector: 'app-modal-eliminar-empleado',
  templateUrl: './modal-eliminar-empleado.component.html',
  styleUrls: ['./modal-eliminar-empleado.component.css']
})
export class ModalEliminarEmpleadoComponent  implements OnInit {

  @Input() empleadoModal: Empleado;
  showModalEliminarEmpleado: boolean = true;
  error: Error;
  showModalError: boolean = false;
  listaEmpleados: Array<Empleado> = [];


  constructor(private empleadoService: EmpleadoService){
    this.empleadoModal = new Empleado();
    this.error = new Error();
  }
  /*
   * Mantiene la varible "showModalEliminarEmpleado" actualizara para mostrar/ocultar el modal
   */
  ngOnInit(): void {
    this.empleadoService.$modalShowEliminarEmpleado.subscribe( (result) => { this.showModalEliminarEmpleado = result } );

  }

  /*
   * Funcion confirmacionEliminarProducto
   * Elimina un empleado
   * Setea a la variable "empleadoModal" para borrar al empleado de la base de datos, la setea con los datos del formulario
   * Hace la actualización atraves de http y la URL, llamando al EmpleadoService
   * Si el backEnd responde todo bien no muestra nada
   * Si el backEnd responde con un error lanza un modal con dicho error
   * Utiliza la variable Observable $modalShowEliminarEmpleado para mostrar/ocultar el modal
   * No recibe parametros
   * No tiene retorno 
   */
  confirmacionEliminarProducto(){
    this.empleadoService.eliminarEmpleado(this.empleadoModal).subscribe({
      // next: (result) => {

      //   
        
      //   console.log("this.empleados: " + this.listaEmpleados)
        
      //   console.log("listaEMpelados Desde el modal Eliminar: " + this.listaEmpleados);

      //   this.showModalEliminarEmpleado = false;
      //   this.empleadoService.$modalShowEliminarEmpleado.emit(this.showModalEliminarEmpleado);

      // },

      error: (e) => {
        this.error = new Error();
        this.error.statusCode = e.status;
        this.error.statusMessage = e.error.message;

        this.showModalError = true;
        this.empleadoService.$modalShowErrorCrearEmpleado.emit(this.showModalError);
      }
    });

    // if(this.listaEmpleados.length != 0){
    //   console.log("\n\n\n\n\nSE ESTA EJECUTANDO..");
    //   this.listaEmpleados.filter(empleado => empleado.id !== this.empleadoModal.id);
    //   this.empleadoService.listaEmpleadosActualizada.next(this.listaEmpleados);
    // }

    this.showModalEliminarEmpleado = false;
    this.empleadoService.$modalShowEliminarEmpleado.emit(this.showModalEliminarEmpleado);

  }



  /*
   * Funcion cerrarModal
   * Pone en false la varible showModalEliminarEmpleado para ocultar el formulario
   * Hace un emit con el observable modalShowEliminarEmpleado para mantener a la variable actualizada
  */
  cerrarModal(){
    this.showModalEliminarEmpleado = false;
    this.empleadoService.$modalShowEliminarEmpleado.emit(this.showModalEliminarEmpleado);
  }


}
