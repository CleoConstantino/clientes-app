import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from '../layout/layout.component';
import {ClientesFormComponent} from './clientes-form/clientes-form.component';
import {ClientesListaComponent} from './clientes-lista/clientes-lista.component';

const routes: Routes = [
  {
    path: 'clientes', component: LayoutComponent, children: [
      {path: 'criar', component: ClientesFormComponent},
      {path: 'editar/:id', component: ClientesFormComponent},
      {path: 'listar', component: ClientesListaComponent},
      {path: '', redirectTo: '/clientes/listar', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule {
}
