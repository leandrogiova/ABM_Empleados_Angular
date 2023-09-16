import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';
import { VerListaEmpleadosComponent } from './ver-lista-empleados/ver-lista-empleados.component';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';

const routes: Routes = [
  {path: 'inicio', component: CrearEmpleadoComponent},
  {path: 'verlistaempleados', component: VerListaEmpleadosComponent},
  {path: 'actualizarempleado', component: ActualizarEmpleadoComponent},

  {path: '', redirectTo: 'inicio', pathMatch: 'full'},  // cuando no se le especifica nada entra en home
  {path: '**', component: Error}  // cuando no matchea con nada entra en error 404 - no encontrado




  // {path: 'menu', component: MenuComponent, canActivate: [AuthGuard]},
  // {path: 'login', component: LoginComponent},
  // {path: 'home', component: MesasPrincipalComponent, canActivate: [AuthGuard]},
  // {path: 'productos', component: ProductosPrincipalComponent, canActivate: [AuthGuard]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
