import { AbstractControl } from '@angular/forms';

export function fechaNoPosterior(control: AbstractControl): { [key: string]: boolean } | null {
  const fechaNacimiento = new Date(control.value);
  const fechaActual = new Date();

  if (fechaNacimiento > fechaActual) {
    return { 'fechaNoPosterior': true };
  }

  
  return null;
}
