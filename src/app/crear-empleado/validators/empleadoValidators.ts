import { Validators, AbstractControl } from '@angular/forms';
import {FormGroup, ValidationErrors } from '@angular/forms';


/*
 * Funcion fechaNoPosterior
 * Es un tipo de validador que se utiliza para las fechas
 * Donde NO va a permitir que se ingresen fechas posteriores a la actual
 * Se va a setear una fecha actual y una fecha ingresada por formulario
 * Si la fecha ingresada por formulario es mayor a la actual no se setea el campo y se retorna 'fechaNoPosterior': true. Es decir que
 * esta fecha no es valida.
 * Si la fecha es valida se retorna null
 * Recibe un AbstractControl
 * Retorna null si la fecha es anterior a la fecha actual
 */
export function fechaNoPosterior(control: AbstractControl): { [key: string]: boolean } | null {
  const fechaNacimiento = new Date(control.value);
  const fechaActual = new Date();

  if (fechaNacimiento > fechaActual) {
    return { 'fechaNoPosterior': true };
  }

  
  return null;
}




/*
 * Funcion edadMayorA18
 * Es un tipo de validador que se utiliza para las fecha de nacimiento del empleado
 * Va a permitir que se ingresen solamente una fecha donde la edad del empleado no supere una fecha que sea menor a 18años
 * Para esto se setea una variable con la fecha actual, una variable con la edad minima. Y la facha que se ingreso a traves del formulario
 * Se restan los dos años(el año ingresado por furmulario y el año actual) y si da menor a 18 se retorna 'edadNoValida': true.
 * Este es el caso donde no se debe guardar la fecha. Retorna null si la fecha es valida
 * Recibe un AbstractControl
 * Retorna null si la fecha es menor a la edad minima(edadMinima = 18)
 * 
*/
export function edadMayorA18(control: AbstractControl): { [key: string]: boolean } | null {
  const fechaNacimiento = new Date(control.value);
  const fechaActual = new Date();
  const edadMinima = 18;

  // Calcular la edad del empleado
  const edadEmpleado = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

  // Verificar si la fecha de nacimiento es posterior a la actual o si la edad es menor a 18 años
  if (fechaNacimiento > fechaActual || edadEmpleado < edadMinima) {
    return { 'edadNoValida': true };
  }

  return null;
}


  /*
   * Funcion nombreValido
   * Es un tipo de validador que se utiliza para el nombre y el apellido del empleado
   * Va a permitir que se ingresen solamente letras minusculas y mayusculas
   * Setea un pattern y va a verificar que no contenca otros caracteres que no sean letras
   * Si encuentra un caracter especial retorna "  'nombreNoValido': true  "
   * Esto indica que se ha producido un error de validación en el campo.
   * Recibe un AbstractControl
   * Retorna null si contiene solamente letras minusculas y mayusculas
   */
export function nombreValido(control: AbstractControl): ValidationErrors | null {
  const nombre = control.value;
  // Expresión regular para permitir solo letras (mayúsculas y minúsculas) y espacios
  const pattern = /^[A-Za-z\s]+$/;

  if (!pattern.test(nombre)) {
    return { 'nombreNoValido': true };
  }

  return null;
}