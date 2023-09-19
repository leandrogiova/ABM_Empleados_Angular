import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../models/Empleado';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  endpoint: string = 'empleado';
  $modalShowEmpleadoEnviado = new EventEmitter<boolean>();      //Variable Observable para controlar la vista del modal cuando se envia un empleado al backEnd
  $modalShowErrorCrearEmpleado = new EventEmitter<boolean>();   //Variable Observable para controlar la vista del error que responde el BackEnd

  constructor(private http: HttpClient) {

   }

   /*
    * Funcion crearEmpleado
    * Envia un empleado al backEnd a la URL asignada en environment y con la variable endpoint
    * Primero la funcion setea una variable url con la direccion correcta y luego hace un POST del empleado
    * Recibe un Empleado
    * Retorna un Observable<any>
    */
   public crearEmpleado(empleado: Empleado): Observable<any> {
      let url = environment.apiEmpleados + this.endpoint;
      return this.http.post(url, empleado);

   }

   /*
    * Funcion obtenerEmpleados
    * Primero setea una variable URL con la dirección correcta
    * Va a buscar al backEnd una lista de todos los empleados
    * No recibe parametros
    * Retorna un tipo Observable de una lista de Empleados " Observable<Array<Empleado>> "
    */
   public obtenerEmpleados(): Observable<Array<Empleado>> {
    let url = environment.apiEmpleados + this.endpoint;
    return this.http.get<Array<Empleado>>(url);
   }

}
