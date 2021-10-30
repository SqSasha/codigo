import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EscanerqrComponent } from '../components/escanerqr/escanerqr.component';//importacion de componentes

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'escanerqr',
        component: EscanerqrComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
