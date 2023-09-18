import { Component } from '@angular/core';
import { EmpleadoService } from '../services/empleado.service';
import { Empleado } from '../models/Empleado';

@Component({
  selector: 'app-ver-lista-empleados',
  templateUrl: './ver-lista-empleados.component.html',
  styleUrls: ['./ver-lista-empleados.component.css']
})
export class VerListaEmpleadosComponent {


  listaEmpleados: Array<Empleado> = [];

  constructor(private empleadoService: EmpleadoService){

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

}
