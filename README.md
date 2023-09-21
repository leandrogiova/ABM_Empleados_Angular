# ABMEmpleados

Se va ha creado 2 componentes principales:
 1- Para agregar un nuevo empleado
 2 - Para ver a todos los empleados y para buscar un empleado

Dentro de estos componenetes se han creado otros componenetes modales para utilizar como ventanas emergentes para un mejor manejo de la aplicación y que así sea mas
facil para el usuario.

Para modificar algun dato del empleado se debe visitar al componente con la lista de todos los empleados y luego modificar emppleado. Allí se desplegara una ventana
emegente con un formulario para actualizar los datos del empleado, cumpliendo con todas las validaciones.

 No se ha creado ningun modulo ya que, para este proyecto en especificado se considero no crear un modulo en espefifico.


Al ingresar en el componente "ver-lista-empleado", este commponente se abrira en una nueva pestaña del navegador web para mayor comodidad del usuario.

Se ha creado una clase particular "empleadoValidators" para validar que no se ingrese una fecha posterior al dia actual. Y que no se pueda ingredar nombre con otros caracteres que no sean letras.

Además se ha creado un Pipe "buscar-empleado.pipe.ts" dentro del componente "ver-lista-empleados" para buscar un empleado por su nombre, apellido, mail o nro de Documento.
Con este pipe se resolvio la problematica de filtrar la lista de empleados de una manera mas sencilla y rapida.


Se ha creado una clase error dentro de models para manejar la respuesta del BackEnd cuando arroja un error.
Asi se captura el status y el mensaje del error que responde el BackEnd




















# ABMEmpleados

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
