import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecupdatoComponent } from '../components/recupdato/recupdato.component';
import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
