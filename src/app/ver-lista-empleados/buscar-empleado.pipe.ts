import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarEmpleado'
})
export class BuscarEmpleadoPipe implements PipeTransform {



  /*
   * Funcion transform 
   * Se utiliza para filtrar la lista de empleados
   * Es decir, buscar un empleado a traves de su nombre, apellido, mail o numero de documento
   * Recibe una lista de los empleados "listaEmpleados" y el string para buscar filtrar esa lista " terminoBusqueda "
   * Retorna una lista con las filtraciones correspondientes o la lista entera sin filtrar ningun resultado
   */
  transform(listaEmpleados: any[], terminoBusqueda: string): any[] {
    if (!terminoBusqueda || terminoBusqueda === '') {
      return listaEmpleados;
    }

    terminoBusqueda = terminoBusqueda.toLowerCase();

    return listaEmpleados.filter(empleado => {
      const nroDocumento = empleado.nroDocumento.toString(); // Convertir a cadena
      return (
        empleado.nombre.toLowerCase().includes(terminoBusqueda) ||
        empleado.apellido.toLowerCase().includes(terminoBusqueda) ||
        empleado.email.toLowerCase().includes(terminoBusqueda) || 
        nroDocumento.toLowerCase().includes(terminoBusqueda)
      );
    });
  }
}
