import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';
import { VerListaEmpleadosComponent } from './ver-lista-empleados/ver-lista-empleados.component';

const routes: Routes = [
  {path: 'inicio', component: CrearEmpleadoComponent},
  {path: 'verlistaempleados', component: VerListaEmpleadosComponent},

  {path: '', redirectTo: 'inicio', pathMatch: 'full'},  // cuando no se le especifica nada entra en home
  {path: '**', component: Error}  // cuando no matchea con nada entra en error 404 - no encontrado
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
