import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../models/Empleado';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  endpoint: string = 'empleado';

  constructor(private http: HttpClient) {

   }


   public crearEmpleado(empleado: Empleado): Observable<any> {
      let url = environment.apiEmpleados + this.endpoint;
      return this.http.post(url, empleado);

   }


   public obtenerProductos(): Observable<Array<Empleado>> {
    let url = environment.apiEmpleados + this.endpoint;
    return this.http.get<Array<Empleado>>(url);
   }

}
