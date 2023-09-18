import { Validators, AbstractControl } from '@angular/forms';
import {FormGroup, ValidationErrors } from '@angular/forms';

export function fechaNoPosterior(control: AbstractControl): { [key: string]: boolean } | null {
  const fechaNacimiento = new Date(control.value);
  const fechaActual = new Date();

  if (fechaNacimiento > fechaActual) {
    return { 'fechaNoPosterior': true };
  }

  
  return null;
}





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