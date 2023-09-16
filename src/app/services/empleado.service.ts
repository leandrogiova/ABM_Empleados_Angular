import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../models/Empleado';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  endpoint: string = 'empleado';

  constructor(private http: HttpClient) {

   }


   //TODO VER ESTE METODO
  public crearEmpleado(empleado: Empleado): Observable<any>{
    let url = environment.apiEmpleado + this.endpoint;
    return this.http.post(url, empleado);
  }



  public obtenerTodosLosEmpleados(): Observable<any>{
    let url = environment.apiEmpleado + this.endpoint;
    return this.http.get(url);
  }

}
