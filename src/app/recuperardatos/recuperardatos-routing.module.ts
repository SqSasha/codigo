import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecupdatoComponent } from '../components/recupdato/recupdato.component';
import { RecuperardatosPage } from './recuperardatos.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperardatosPage,
    children:[
      {
        path:'recupdato',
        component: RecupdatoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperardatosPageRoutingModule {}
